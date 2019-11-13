package com.example.taskr.collections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
@Document
public class ListCollection {
    @Id
    private int id;
    private String name;
    private List<CardCollection> cards=new ArrayList<>();

    public ListCollection(int id ,String name) {
        this.name=name;
        this.id=id;
    }

    public ListCollection() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CardCollection> getCards() {
        return cards;
    }

    public void setCards(List<CardCollection> cards) {
        this.cards = cards;
    }
}
