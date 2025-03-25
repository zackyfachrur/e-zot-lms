package controllers

import (
	"database/sql"
	"fmt"
	"lms-be/src/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type UserController struct {
	DB *sql.DB
}

func (uc *UserController) Register(c *gin.Context) error {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		return err
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	user.Password = string(hashedPassword)
	query := `INSERT INTO baxaric_user_account (user_username, user_fullname,  user_email, user_password, isdeleted) VALUES (?, ?, ?, ?, ?)`

	_, err = uc.DB.Exec(query, user.Username, user.FirstName+"-"+user.LastName, user.Email, user.Password, false)

	if err != nil {
		return err
	}

	fmt.Println("User Berhasil di tambahkan")
	return nil
}

func (uc *UserController) Login(c *gin.Context) {
	var userLogin models.ValidateUser

	// Validasi input JSON
	if err := c.ShouldBindJSON(&userLogin); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Format data tidak valid"})
		return
	}

	// Ambil user dari database
	var hashedPassword string
	err := uc.DB.QueryRow("SELECT user_password FROM baxaric_user_account WHERE user_email = ?", userLogin.Email).Scan(&hashedPassword)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Email tidak ditemukan"})
		return
	}

	// Verifikasi password
	if err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(userLogin.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Password salah"})
		return
	}

	// Berhasil login
	c.JSON(http.StatusOK, gin.H{"message": "Login berhasil"})
}
