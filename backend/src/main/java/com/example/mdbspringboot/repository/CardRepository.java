package com.example.mdbspringboot.repository;

import com.example.mdbspringboot.model.Card;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CardRepository extends MongoRepository<Card, String> {

}
