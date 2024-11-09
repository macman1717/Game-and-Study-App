package com.example.mdbspringboot.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;

@Document("Users")
public class User{


    @Id
    private String userName;
    private String passWord;
    private ArrayList<String> sets;


    public User(String userName, String passWord, ArrayList<String> sets) {
        this.userName = userName;
        this.passWord = passWord;
        this.sets = sets;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public ArrayList<String> getSets() {
        return sets;
    }

    public void setSets(ArrayList<String> sets) {
        this.sets = sets;
    }
}
