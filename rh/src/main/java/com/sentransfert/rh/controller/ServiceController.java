package com.sentransfert.rh.controller;


import com.sentransfert.rh.model.*;
import com.sentransfert.rh.repository.*;
import com.sentransfert.rh.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins ="*")
@RequestMapping(value = "/service")

public class ServiceController {

    @Autowired
    UserDetailsServiceImpl userDetailsService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PartenaireRepository partenaireRepository;


    @GetMapping(value = "/statut/{id}")
    public ResponseEntity<String> blockUser (@PathVariable("id")int id) throws Exception {
        User etat= userRepository.findById((long) id).orElseThrow(()->new Exception ("Ce user n'existe pas"));

        if(etat.getUsername().equals("dmg")){
            return new ResponseEntity<>(etat.getUsername()+ " Ne peut pas être bloqué car c'est le super admin", HttpStatus.OK);
         }
       if (etat.getStatut().equals("ACTIF")){
            etat.setStatut("bloquer");
            userRepository.save(etat);
            return new ResponseEntity<>(etat.getUsername()+ " a été bloqué", HttpStatus.OK);
        }
        else{
            etat.setStatut("ACTIF");
            userRepository.save(etat);
            return new ResponseEntity<>(etat.getUsername()+ " a été débloqué", HttpStatus.OK);
        }
    }




    @GetMapping(value = "/statut1/{id}")
    public ResponseEntity<String> blockPartener (@PathVariable("id")int id) throws Exception {
        Partenaire etat= partenaireRepository.findById((long) id).orElseThrow(
                ()->new Exception ("Ce Partenaire n'existe pas")
        );

        if (etat.getStatut().equals("ACTIF")){
            etat.setStatut("bloquer");
            partenaireRepository.save(etat);
            return new ResponseEntity<>(etat.getRaisonsociale()+ " a été bloqué", HttpStatus.OK);
        }
        else{
            etat.setStatut("ACTIF");
            partenaireRepository.save(etat);
            return new ResponseEntity<>(etat.getRaisonsociale()+ " a été débloqué", HttpStatus.OK);
        }
    }


    @PostMapping(value = "/findUsername")
    public User findUsername (@RequestBody(required = false) RegistrationUser  registrationUser) throws Exception {

        User u = (User) userRepository.findByUsername(registrationUser.getUsername())
                .orElseThrow(()->new Exception ("Ce username n'existe pas")
                );
        return u;

    }


}



