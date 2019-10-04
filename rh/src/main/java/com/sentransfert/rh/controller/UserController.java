package com.sentransfert.rh.controller;


import com.sentransfert.rh.model.*;
import com.sentransfert.rh.repository.*;
import com.sentransfert.rh.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;





@RestController
@CrossOrigin(origins ="*")
@RequestMapping(value = "/user")

public class UserController {

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    private PartenaireRepository partenaireRepository;
    @GetMapping(value = "/listpartenaire")
    public List<Partenaire> listPartenaire(){ return partenaireRepository.findAll(); }


    @Autowired
    private DepotRepository depotRepository;
    @GetMapping(value = "/listdepot")
    public List<Depot> listDepot(){ return depotRepository.findAll(); }



    @Autowired
    private CompteRepository compteRepository;
    @GetMapping(value = "/listcompte")
    public List<Compte> listCompte(){ return compteRepository.findAll(); }


    @Autowired
    private RoleRepository roleRepository;
    @RequestMapping(value = "/listrole", method = RequestMethod.GET, consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_FORM_URLENCODED_VALUE })
//    @GetMapping(value = "/listrole" , method = RequestMethod.GET ,consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_FORM_URLENCODED_VALUE })
    public List<Role> listeRole(){ return roleRepository.findAll(); }



    @Autowired
    UserRepository userRepository;




    @Autowired
    PasswordEncoder encoder	;
    @PostMapping(value = "/add",consumes =(MediaType.APPLICATION_JSON_VALUE))
    public User add (@RequestBody(required = false) RegistrationUser  registrationUser){
        User u =new User();
        u.setUsername(registrationUser.getUsername());
        u.setName(registrationUser.getName());
        u.setPassword(encoder.encode(registrationUser.getPassword()));
        u.setTelephone(registrationUser.getTelephone());
        u.setEmail(registrationUser.getEmail());
        u.setStatut("ACTIF");
        Set<Role> roles =new HashSet<>();
        Role role =new Role();
        role.setId(registrationUser.getProfil());
        roles.add(role);
        u.setRoles(roles);
        User user=userDetailsService.getUserConnecte();
        user.getPartenaire();
        u.setPartenaire(user.getPartenaire());

        return userRepository.save(u);
    }

@PostMapping(value = "/user" , consumes = (MediaType.APPLICATION_JSON_VALUE))

public User detail(){
        return userDetailsService.getUserConnecte();
}






    @PostMapping(value = "/addPartener", consumes = (MediaType.APPLICATION_JSON_VALUE))
    public Partenaire addpuc(@RequestBody(required = false) RegistrationUser registrationUser) {

        //AJOUT PARTENAIRE
        Partenaire p = new Partenaire();
        p.setNinea(registrationUser.getNinea());
        p.setAdresse(registrationUser.getAdresse());
        p.setRaisonsociale(registrationUser.getRaisonsociale());
        p.setStatut("ACTIF");
        partenaireRepository.save(p);

        //AJOUT COMPTE
        Compte c = new Compte();
        // String nb;
        // nb = "MA"+(10000+(int) Math.random()*(99999-10000));
        SimpleDateFormat formater = null;

        formater = new SimpleDateFormat("ssyyyyMMddHHmm");
        Date now=new Date();
        String numcompt = formater.format(now);

        c.setNumerocompte(numcompt);
        c.setSolde((double) 0);
        //c.setNumeroCompte(nb);
        c.setPartenaire(p);
        c.setSolde((double) 75000);
        compteRepository.save(c);

        //AJOUT UTILISATEUR
        User u = new User();
        u.setUsername(registrationUser.getUsername());
        u.setName(registrationUser.getName());
        u.setPassword(encoder.encode(registrationUser.getPassword()));
        u.setTelephone(registrationUser.getTelephone());
        u.setEmail(registrationUser.getEmail());
        u.setStatut("debloquer");
        Set<Role> roles =new HashSet<>();
        Role role =new Role();
        role.setId(registrationUser.getProfil());
        roles.add(role);
        u.setRoles(roles);
        u.setPartenaire(p);
        u.setCompte(c);
        userRepository.save(u);

        return partenaireRepository.save(p);
    }

}



