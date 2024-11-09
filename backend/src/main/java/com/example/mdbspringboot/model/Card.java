package com.example.mdbspringboot.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("cards")
public class Card {
    @Id
    private String id;
    private String term;
    private String definition;
    private String parentSet;
    private String owner;

    public Card(String term, String definition, String parentSet, String owner) {
        this.term = term;
        this.definition = definition;
        this.parentSet = parentSet;
        this.owner = owner;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public String getParentSet() {
        return parentSet;
    }

    public void setParentSet(String parentSet) {
        this.parentSet = parentSet;
    }
}
