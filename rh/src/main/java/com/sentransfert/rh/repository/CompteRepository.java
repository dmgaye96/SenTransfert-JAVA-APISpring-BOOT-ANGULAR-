package com.sentransfert.rh.repository;



import com.sentransfert.rh.model.Compte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository //permet de crere un objet
public interface CompteRepository extends JpaRepository<Compte, Long> {

}
