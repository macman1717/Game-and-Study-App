package com.example.mdbspringboot.controllers;

import com.example.mdbspringboot.model.Card;
import com.example.mdbspringboot.model.SetOfCards;
import com.example.mdbspringboot.model.User;
import com.example.mdbspringboot.repository.SetRepository;
import com.example.mdbspringboot.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/sets")
public class FlashCardSetController {
    private final SetRepository setRepository;
    private final UserRepository userRepository;

    public FlashCardSetController(SetRepository setRepository, UserRepository userRepository) {
        this.setRepository = setRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/getSet/{owner}/{setName}")
    public List<Card> getSetOfCards(@PathVariable String owner, @PathVariable String setName){
        return setRepository.findByOwnerAndName(owner,setName).getCardList();
    }

    @PostMapping("/postSet")
    public void postSetTest(@RequestBody SetOfCards setOfCards){
        User user = userRepository.findUserByUsername(setOfCards.getOwner());
        user.getSets().add(setOfCards.getName());
        userRepository.save(user);
        setRepository.save(setOfCards);
    }

    @GetMapping("/getAllSetNames/{owner}")
    public List<String> getAllSetsForUser(@PathVariable String owner){
        List<SetOfCards> sets = setRepository.findAll(owner);
        ArrayList<String> setNames = new ArrayList<>();
        for(SetOfCards set : sets){
            setNames.add(set.getName());
        }
        return setNames;
    }
}
