package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/joho/godotenv"
)

var (
	GitHubAPIURL string
	GitHubToken  string
)

func init() {
	// Load the .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Access the environment variables
	GitHubAPIURL = os.Getenv("GITHUB_API_URL")
	GitHubToken = os.Getenv("GITHUB_TOKEN")
}

type Label struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Color string `json:"color"`
}

type Category struct {
	ID          int       `json:"id"`
	NodeID      string    `json:"node_id"`
	RepositoryID int      `json:"repository_id"`
	Emoji       string    `json:"emoji"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
	Slug        string    `json:"slug"`
	IsAnswerable bool     `json:"is_answerable"`
}

type Discussion struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Body      string    `json:"body"`
	User      User      `json:"user"`
	NodeID    string    `json:"node_id"`
	CreatedAt time.Time `json:"created_at"`
	Category  Category  `json:"category"` // Add this line
	Labels    []Label   `json:"labels"`
}

type User struct {
	Login     string `json:"login"`
	ID        int    `json:"id"`
	NodeID    string `json:"node_id"`
	AvatarURL string `json:"avatar_url"`
	// Add other fields as required
}

func getDiscussions(c *gin.Context) {
	client := &http.Client{}
	req, err := http.NewRequest("GET", GitHubAPIURL, nil)
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	// Add the authorization and accept headers
	req.Header.Add("Authorization", fmt.Sprintf("token %s", GitHubToken))
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

	var discussions []Discussion
	err = json.Unmarshal(body, &discussions)
	if err != nil {
		log.Fatalf("Error unmarshalling response body: %v", err)
	}

	c.JSON(http.StatusOK, discussions)
}

func getDiscussionByID(c *gin.Context) {
	discussionID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid discussion ID"})
		return
	}

	client := &http.Client{}
	req, err := http.NewRequest("GET", GitHubAPIURL, nil)
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	// Add the authorization and accept headers
	req.Header.Add("Authorization", fmt.Sprintf("token %s", GitHubToken))
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

	var discussions []Discussion
	err = json.Unmarshal(body, &discussions)
	if err != nil {
		log.Fatalf("Error unmarshalling response body: %v", err)
	}

	var discussion *Discussion
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

func main() {
	r := gin.Default()

	// CORS configuration
	corsConfig := cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // No trailing slash
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:          12 * time.Hour,
	}

	// Use the CORS middleware
	r.Use(cors.New(corsConfig))

	r.GET("/discussions", getDiscussions)
	r.GET("/discussions/:id", getDiscussionByID)
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello, this is go-react-github-cms")
	})

	r.Run(":8080") // Start the server on port 8080
}