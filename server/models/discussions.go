package models

import "time"

type Label struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Color string `json:"color"`
}

type Category struct {
	ID           int       `json:"id"`
	NodeID       string    `json:"node_id"`
	RepositoryID int       `json:"repository_id"`
	Emoji        string    `json:"emoji"`
	Name         string    `json:"name"`
	Description  string    `json:"description"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
	Slug         string    `json:"slug"`
	IsAnswerable bool      `json:"is_answerable"`
}

type Discussion struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Body      string    `json:"body"`
	User      User      `json:"user"`
	NodeID    string    `json:"node_id"`
	CreatedAt time.Time `json:"created_at"`
	Category  Category  `json:"category"`
	Labels    []Label   `json:"labels"`
}