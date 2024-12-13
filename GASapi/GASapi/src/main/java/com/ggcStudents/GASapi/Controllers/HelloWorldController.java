package com.ggcStudents.GASapi.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping("hello")
    public String helloWorld(){
        return "Hello World";
    }
    @GetMapping("home")
    public String getHome(){
        return "You are home!";
    }
}
