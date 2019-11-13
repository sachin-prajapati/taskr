package com.example.taskr.model.response;

import com.example.taskr.collections.ActivityCollection;
import com.example.taskr.collections.ListCollection;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class BoardResponse {
    private String id;
    private String bName;
    private String description;
    private String madeBy;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private boolean archive;
    private boolean bookmark;
    private List<String> boardMembers=new ArrayList<>();
    private List<ListCollection> lists=new ArrayList<>();
    private List<ActivityCollection> activities=new ArrayList<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

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

    public String getMadeBy() {
        return madeBy;
    }

    public void setMadeBy(String madeBy) {
        this.madeBy = madeBy;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public List<String> getBoardMembers() {
        return boardMembers;
    }

    public void setBoardMembers(List<String> boardMembers) {
        this.boardMembers = boardMembers;
    }

    public List<ListCollection> getLists() {
        return lists;
    }

    public void setLists(List<ListCollection> lists) {
        this.lists = lists;
    }

    public List<ActivityCollection> getActivities() {
        return activities;
    }

    public void setActivities(List<ActivityCollection> activities) {
        this.activities = activities;
    }

    public boolean isArchive() {
        return archive;
    }

    public void setArchive(boolean archive) {
        this.archive = archive;
    }

    public boolean isBookmark() {
        return bookmark;
    }

    public void setBookmark(boolean bookmark) {
        this.bookmark = bookmark;
    }
}

