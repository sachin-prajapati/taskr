package com.example.taskr.model.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserDetailRequestModel {
    @NotBlank(message = "userName name can't be empty.")
    private String userName;
    @NotBlank(message = "fullname name can't be empty.")
    private String fullName;
    @Email(message = "Enter valid email address.")
    private String email;
    @Size(min = 7)
    private String password;
    @Size(min = 7)
    private String confirmPassword;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
}
