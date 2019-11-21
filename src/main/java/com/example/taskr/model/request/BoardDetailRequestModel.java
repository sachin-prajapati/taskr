package com.example.taskr.model.request;

import javax.validation.constraints.NotBlank;

public class BoardDetailRequestModel {
    @NotBlank(message = "Board name can't be empty")
    private String bName;

    public String getbName() {
        return bName;
    }

    public void setbName(String bName) {
        this.bName = bName;
    }
}
