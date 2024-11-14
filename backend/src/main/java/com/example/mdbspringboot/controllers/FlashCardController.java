package com.example.mdbspringboot.controllers;

import com.example.mdbspringboot.model.Card;
import com.example.mdbspringboot.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/flashcards")
public class FlashCardController {

    @Autowired
    CardRepository cardRepo;

    @PostMapping("/addCard")
    public void postFlashCard(@RequestBody Card card){
        cardRepo.save(card);
    }

    @PutMapping("/addCardsFromList")
    public void postFlashCardsFromList(@RequestBody List<Card> cards){
        cardRepo.saveAll(cards);
    }

    @DeleteMapping("/deleteCard/{id}")
    public void deleteFlashCard(@PathVariable("id") String id){
        cardRepo.deleteById(id);
    }

    @PutMapping("/updateCard")
    public void updateCard(@RequestBody Card card){
        cardRepo.save(card);
    }

    @GetMapping("/findSetOfCards/{parentSet}")
    public List<Card> findSetOfCards(@PathVariable("parentSet") String parentSet){
        System.out.println("HERE");
        System.out.println(cardRepo.findAll(parentSet));
        return cardRepo.findAll(parentSet);
    }
}
