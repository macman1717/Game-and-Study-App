package com.example.mdbspringboot.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("Sets")
public class SetOfCards {
    @Id
    private String _id;
    private String name;
    private String owner;
    private List<Card> cardList;

    @PersistenceConstructor
    public SetOfCards(String _id, String owner, String name, List<Card> cardList) {
        this._id = _id;
        this.owner = owner;
        this.name = name;
        this.cardList = cardList;
    }

    public SetOfCards() {
        this.owner = owner;
        this.name = name;
        this.cardList = cardList;
    }

    public String getId() {
        return _id;
    }

    public void setId(String id) {
        this._id = id;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public List<Card> getCardList() {
        return cardList;
    }

    public void setCardList(List<Card> cardList) {
        this.cardList = cardList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
