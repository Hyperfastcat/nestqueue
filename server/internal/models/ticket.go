package models

import (
	"bytes"
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

// Ticket represents an IT ticket with associated metadata
type Ticket struct {
	ID          string    `json:"id" bson:"_id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Site        string    `json:"site"`
	Category    string    `json:"category"`
	AssignedTo  string    `json:"assignedTo"`
	CreatedBy   string    `json:"createdBy"`
	Priority    int       `json:"priority"`
	Status      string    `json:"status"`
	CreatedOn   time.Time `json:"createdOn"`
	UpdatedAt   time.Time `json:"updatedAt"`
}

// UnmarshalBSON provides a custom unmarshal implementation for Ticket, enabling
// the decoder to implicitly decode ObjectIDs as Hex strings.
func (t *Ticket) UnmarshalBSON(data []byte) error {
	var (
		buffer bytes.Buffer
		result struct {
			ID          string    `json:"id" bson:"_id"`
			Title       string    `json:"title"`
			Description string    `json:"description"`
			Site        string    `json:"site"`
			Category    string    `json:"category"`
			AssignedTo  string    `json:"assignedTo"`
			CreatedBy   string    `json:"createdBy"`
			Priority    int       `json:"priority"`
			Status      string    `json:"status"`
			CreatedOn   time.Time `json:"createdOn"`
			UpdatedAt   time.Time `json:"updatedAt"`
		}
	)
	_, _ = buffer.Write(data)

	decoder := bson.NewDecoder(bson.NewDocumentReader(&buffer))
	decoder.ObjectIDAsHexString()

	if err := decoder.Decode(&result); err != nil {
		return err
	}

	*t = Ticket{
		ID:          result.ID,
		Title:       result.Title,
		Description: result.Description,
		Site:        result.Site,
		Category:    result.Category,
		AssignedTo:  result.AssignedTo,
		CreatedBy:   result.CreatedBy,
		Priority:    result.Priority,
		Status:      result.Status,
		CreatedOn:   result.CreatedOn,
		UpdatedAt:   result.UpdatedAt,
	}

	return nil
}
