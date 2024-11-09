package com.example.mdbspringboot.repository;

import com.example.mdbspringboot.model.Card;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CardRepository extends MongoRepository<Card, String> {

    @Query("{setName: '?0'}")
    List<Card> findAll(String parentSet);

}
