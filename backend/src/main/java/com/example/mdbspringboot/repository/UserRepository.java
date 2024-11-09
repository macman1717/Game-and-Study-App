package com.example.mdbspringboot.repository;
import com.example.mdbspringboot.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {

    @Query("{userName:'?0'}")
    User findUserByUsername(String userName);

    @Query(value="{}")
    List<User> findAll(String category);



    public long count();

}
