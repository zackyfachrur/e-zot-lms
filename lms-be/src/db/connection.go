package db

import (
	"database/sql"
	"os"

	_ "github.com/go-sql-driver/mysql"
	""
)

func ConnectDB() (*sql.DB, error) {
	godotnev.load("../../.env.local")

	DBUser := os.Getenv("DB_USER")

}
