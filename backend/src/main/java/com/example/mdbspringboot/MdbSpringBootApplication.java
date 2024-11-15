package com.example.mdbspringboot;


import java.util.ArrayList;

import com.example.mdbspringboot.model.Card;
import com.example.mdbspringboot.model.User;
import com.example.mdbspringboot.repository.CardRepository;
import com.example.mdbspringboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@EnableMongoRepositories
@RestController
public class MdbSpringBootApplication implements CommandLineRunner{

	@Autowired
	UserRepository userRepo;
	@Autowired
	CardRepository cardRepo;
	


	public static void main(String[] args) {
		SpringApplication.run(MdbSpringBootApplication.class, args);
	}


	public void run(String... args) {

	}
	
	@GetMapping("/getUser/{username}")
	public User getUserByUsername(@PathVariable("username") String username){
		System.out.println(username);
		return userRepo.findUserByUsername(username);
	}

//	@PostMapping("/addCard")
//	public void postFlashCard(@RequestBody Card card){
//		cardRepo.save(card);
//	}
}

