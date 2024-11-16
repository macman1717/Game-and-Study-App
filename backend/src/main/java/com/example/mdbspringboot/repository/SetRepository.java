package com.example.mdbspringboot.repository;

import com.example.mdbspringboot.model.Card;
import com.example.mdbspringboot.model.SetOfCards;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface SetRepository extends MongoRepository<SetOfCards, String> {
    @Query("{owner: '?0'}")
    List<SetOfCards> findAll(String owner);

    @Query("{owner: '?0'," +
            "name: '?1'}")
    SetOfCards findByOwnerAndName(String owner, String name);
}
