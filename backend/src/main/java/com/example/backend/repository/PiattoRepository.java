package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.models.Piatto;

public interface PiattoRepository extends JpaRepository<Piatto, Long> {
    
}
