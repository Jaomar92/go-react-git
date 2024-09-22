package handlers

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/jaomar92/go-react-github-cms/config"
	"github.com/jaomar92/go-react-github-cms/models"
)

func GetDiscussions(c *gin.Context) {
	client := &http.Client{}
	req, err := http.NewRequest("GET", config.GitHubAPIURL, nil)
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	// Add the authorization and accept headers
	req.Header.Add("Authorization", fmt.Sprintf("token %s", config.GitHubToken))
	req.Header.Add("Accept", "application/vnd.github.v3+json")

	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error making request: %v", err)
	}
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

	var discussions []models.Discussion
	err = json.Unmarshal(body, &discussions)
	if err != nil {
		log.Fatalf("Error unmarshalling response body: %v", err)
	}

	c.JSON(http.StatusOK, discussions)
}

func GetDiscussionByID(c *gin.Context) {
	discussionID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid discussion ID"})
		return
	}

	client := &http.Client{}
	req, err := http.NewRequest("GET", config.GitHubAPIURL, nil)
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	// Add the authorization and accept headers
	req.Header.Add("Authorization", fmt.Sprintf("token %s", config.GitHubToken))
	req.Header.Add("Accept", "application/vnd.github.v3+json")

	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error making request: %v", err)
	}
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

	var discussions []models.Discussion
	err = json.Unmarshal(body, &discussions)
	if err != nil {
		log.Fatalf("Error unmarshalling response body: %v", err)
	}

	var discussion *models.Discussion
	for _, d := range discussions {
		if d.ID == discussionID {
			discussion = &d
			break
		}
	}

	if discussion == nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Discussion not found"})
		return
	}

	c.JSON(http.StatusOK, discussion)
}
