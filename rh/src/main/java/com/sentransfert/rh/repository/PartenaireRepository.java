package com.sentransfert.rh.repository;



import com.sentransfert.rh.model.Partenaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository //permet de crere un objet
public interface PartenaireRepository extends JpaRepository<Partenaire, Long> {

}
