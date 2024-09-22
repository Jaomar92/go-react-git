package utils

import (
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jaomar92/go-react-github-cms/config"
)

func CreateGitHubRequest(method, url string) (*http.Request, error) {
	req, err := http.NewRequest(method, url, nil)
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
		return nil, err
	}

	// Add the authorization and accept headers
	req.Header.Add("Authorization", fmt.Sprintf("token %s", config.GitHubToken))
	req.Header.Add("Accept", "application/vnd.github.v3+json")

	return req, nil
}

func HandleGitHubAPIResponse(resp *http.Response, c *gin.Context) {
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		log.Printf("GitHub API returned status code %d: %s", resp.StatusCode, string(body))
		c.JSON(resp.StatusCode, gin.H{
			"error": fmt.Sprintf("GitHub API returned status code %d", resp.StatusCode),
			"body":  string(body),
		})
		return
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response body: %v", err)
	}

	c.JSON(http.StatusOK, string(body))
}
