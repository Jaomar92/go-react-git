package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var (
	GitHubAPIURL string
	GitHubToken  string
)

func LoadConfig() {
	err := godotenv.Load()
	if err !=nil{
		log.Fatal("Error loading .env file")
	}

	GitHubAPIURL = os.Getenv("GITHUB_API_URL")
	GitHubToken = os.Getenv("GITHUB_TOKEN")
}