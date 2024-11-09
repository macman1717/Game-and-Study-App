package com.example.mdbspringboot.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("cards")
public class Card {
    private String term;
    private String definition;
    private String parentSet;

    public Card(String term, String definition, String parentSet) {
        this.term = term;
        this.definition = definition;
        this.parentSet = parentSet;
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
