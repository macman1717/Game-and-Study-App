package com.example.mdbspringboot.controllers;

import com.example.mdbspringboot.model.Card;
import com.example.mdbspringboot.repository.CardRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flashcards")
public class FlashCardController {


    private final CardRepository cardRepo;

    public FlashCardController(CardRepository cardRepo) {
        this.cardRepo = cardRepo;
    }

    @PostMapping("/addCard")
    public Card postFlashCard(@RequestBody Card card){
        return cardRepo.save(card);
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
