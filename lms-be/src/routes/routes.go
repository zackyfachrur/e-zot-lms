package routes

import (
	"database/sql"
	"lms-be/src/controllers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine, db *sql.DB) {
	userController := controllers.UserController{DB: db}

	router.GET("/albums", controllers.GetAlbums)
	router.GET("/albums/:id", controllers.GetAlbumByID)
	router.POST("/albums", controllers.CreateAlbum)
	router.PUT("/albums/:id", controllers.UpdateAlbum)
	router.DELETE("/albums/:id", controllers.DeleteAlbum)
	// Route Register
	router.POST("/auth/register", func(c *gin.Context) {
		err := userController.Register(c)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "User berhasil ditambahkan"})
	})

	// Route Login
	router.POST("/auth/login", userController.Login)

}
