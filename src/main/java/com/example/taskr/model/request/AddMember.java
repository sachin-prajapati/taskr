package com.example.taskr.model.request;

import javax.validation.constraints.NotBlank;

public class AddMember {
    @NotBlank(message = "username can't be empty")
    private String memberUsername;

    public String getMemberUsername() {
        return memberUsername;
    }

    public void setMemberUsername(String memberUsername) {
        this.memberUsername = memberUsername;
    }
}
