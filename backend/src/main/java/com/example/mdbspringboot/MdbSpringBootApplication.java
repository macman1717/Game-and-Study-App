package com.example.mdbspringboot;


import java.util.ArrayList;

import com.example.mdbspringboot.model.Card;
import com.example.mdbspringboot.model.User;
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
	


	public static void main(String[] args) {
		SpringApplication.run(MdbSpringBootApplication.class, args);
	}


	public void run(String... args) {
		userRepo.save(new User("snolan3","ExactApp",new ArrayList<>()));

		User sean = userRepo.findUserByUsername("snolan3");
		ArrayList<String> sets = new ArrayList<>();
		sets.add("Test 3");
		sets.add("Test 4");
		sean.setSets(sets);

		userRepo.save(sean);
						
	}
	
	@GetMapping("/getUser")
	public User getUserByUsername(@RequestParam String username){
		System.out.println(username);
		return userRepo.findUserByUsername(username);
	}

	@PostMapping("/addCard")
	public void postFlashCard(@RequestBody Card card){
		System.out.println(card);

	}
}
