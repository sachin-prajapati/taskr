package com.example.taskr.collections;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Document
public class UserCollection {
    @Id
    private String userName;
    @Length(max=25)
    @NotEmpty(message = "name can't be empty.")
    private String fullName;
    @Email(message = "Enter valid Email of format 'username@gmail.com'.")
    @UniqueElements
    private String email;
    private List<String> myBoards=new ArrayList<>();
    private List<String> starredBoard=new ArrayList<>();
    private OtpCollection otpCollection;
    private String encryptedPassword;
    private boolean verified;
    private boolean enabled;
    private List<NotificationCollection>notifications=new ArrayList<>();

    public OtpCollection getOtpCollection() {
        return otpCollection;
    }

    public void setOtpCollection(OtpCollection otpCollection) {
        this.otpCollection = otpCollection;
    }

    public void deleteOtpCollection() {
        this.otpCollection = null;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEncryptedPassword() {
        return encryptedPassword;
    }

    public void setEncryptedPassword(String encryptedPassword) {
        this.encryptedPassword = encryptedPassword;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public List<String> getMyBoards() {
        return myBoards;
    }

    public void setMyBoards(List<String> myBoards) {
        this.myBoards = myBoards;
    }

    public List<String> getStarredBoard() {
        return starredBoard;
    }

    public void setStarredBoard(List<String> starredBoard) {
        this.starredBoard = starredBoard;
    }

    public List<NotificationCollection> getNotifications() {
        return notifications;
    }

    public void setNotifications(List<NotificationCollection> notifications) {
        this.notifications = notifications;
    }
}
