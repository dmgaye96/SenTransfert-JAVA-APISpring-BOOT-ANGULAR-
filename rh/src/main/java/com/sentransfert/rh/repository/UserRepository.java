package com.sentransfert.rh.repository;


import com.sentransfert.rh.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository //permet de crere un objet
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    // ces requet JQR
   // @Query("SELECT u FROM User u where u.login IS NULL ")
  //  public List<User> users();
}