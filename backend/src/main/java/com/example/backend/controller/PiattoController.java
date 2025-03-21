package com.example.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.Piatto;
import com.example.backend.repository.PiattoRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;



@RestController()
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:4200")
public class PiattoController {
    
    private final PiattoRepository piattoRepository;

    public PiattoController(PiattoRepository piattoRepository){
        this.piattoRepository = piattoRepository;
    }

    @GetMapping()
    public List<Piatto> getAllPiatto() {
        return piattoRepository.findAll();
    }

    @PostMapping()
    public ResponseEntity<Piatto> createPiatto(@RequestBody Piatto piatto) {
        Piatto entity = piattoRepository.save(piatto);
        return ResponseEntity.ok(entity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePiatto(@PathVariable Long id) {
        piattoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    
    
}
