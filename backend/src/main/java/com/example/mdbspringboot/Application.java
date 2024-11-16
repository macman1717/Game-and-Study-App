package com.example.mdbspringboot;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@EnableMongoRepositories
@RestController
public class Application implements CommandLineRunner{
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}


	public void run(String... args) {

	}
}

