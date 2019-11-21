package com.example.taskr.model.request;

import javax.validation.constraints.NotBlank;

public class UpdateBoard {
    @NotBlank(message = "board name can't be empty")
    private String bName;
    private String description;

    public String getbName() {
        return bName;
    }

    public void setbName(String bName) {
        this.bName = bName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
