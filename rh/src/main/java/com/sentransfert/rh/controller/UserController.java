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

    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PostMapping(value = "/addDepot",consumes =(MediaType.APPLICATION_JSON_VALUE))
    public ResponseEntity<String> addepot (@RequestBody(required = false) RegistrationUser registrationUser){
        Depot d =new Depot();
        d.setDate(new Date());
        d.setMontant(registrationUser.getMontant());
        d.setCompte(registrationUser.getCompte());
        User user=userDetailsService.getUserConnecte();
        d.setUser(user);
        //ajout du montant du depot sur le solde du compte
        Compte cpt= compteRepository.findById(registrationUser.getCompte().getId()).orElseThrow();
        cpt.setSolde(cpt.getSolde()+d.getMontant());
        compteRepository.save(cpt);
        depotRepository.save(d);

        return new ResponseEntity<>("depot reussit", HttpStatus.OK);
    }



    //@PreAuthorize("hasAuthority('ROLE_SUPER_ADMIN')")
    @PostMapping(value = "/addCompte",consumes =(MediaType.APPLICATION_JSON_VALUE))
    public ResponseEntity<String> findcompte (@RequestBody(required = false) RegistrationUser registrationUser){

        Compte c = new Compte();

        SimpleDateFormat formater = null;

        formater = new SimpleDateFormat("ssyyyyMMddHHmm");
        Date now=new Date();
        String numcompt = formater.format(now);
         Partenaire p= registrationUser.getPartenaire();

        c.setNumerocompte(numcompt);
        c.setSolde((double) 0);
        c.setSolde((double) 75000);
        c.setPartenaire(p);
        compteRepository.save(c);

        return new ResponseEntity<>("ajoue compte  reussit", HttpStatus.OK);
    }

    @PostMapping(value = "/findCompte",consumes =(MediaType.APPLICATION_JSON_VALUE))
    public Compte findCompte (@RequestBody(required = false) RegistrationUser  registrationUser) throws Exception {

        Compte c = (Compte) compteRepository.findCompteByNumerocompte(registrationUser.getNumerocompte()).orElseThrow(
                ()->new Exception ("Ce numero de Compte n'existe pas"));
        return c;
    }



    @PostMapping(value = "/compteUser",consumes =(MediaType.APPLICATION_JSON_VALUE))
    public ResponseEntity<String> addCompteUser (@RequestBody(required = false) RegistrationUser  accountUser){
        User user= userRepository.findByUsername(accountUser.getUsername()).orElseThrow();
        user.setUsername(accountUser.getUsername());
        user.setCompte(accountUser.getCompte());
        userRepository.save(user);

        return new ResponseEntity<>("Compte Utilsateur Ajouté Avec Succés", HttpStatus.OK);
    }



    @PutMapping(value = "/statut/{id}",consumes =(MediaType.APPLICATION_JSON_VALUE))
    public ResponseEntity<String> blockUser (@PathVariable("id")long id) throws Exception {
        User etat= userRepository.findById(id).orElseThrow(
                ()->new Exception ("Ce user n'existe pas")
        );

        if(etat.getUsername().equals("kabirou")){
            return new ResponseEntity<>(etat.getUsername()+ " Ne peut pas être bloqué car c'est le super admin", HttpStatus.OK);
        }
        if (etat.getStatut().equals("debloquer")){
            etat.setStatut("bloquer");
            userRepository.save(etat);
            return new ResponseEntity<>(etat.getUsername()+ " a été bloqué", HttpStatus.OK);
        }
        else{
            etat.setStatut("debloquer");
            userRepository.save(etat);
            return new ResponseEntity<>(etat.getUsername()+ " a été débloqué", HttpStatus.OK);
        }
    }

    @PostMapping(value = "/findUsername",consumes =(MediaType.APPLICATION_JSON_VALUE))
    public User findUsername (@RequestBody(required = false) RegistrationUser  registrationUser) throws Exception {

        User u = (User) userRepository.findByUsername(registrationUser.getUsername())
                .orElseThrow(()->new Exception ("Ce username n'existe pas")

                );
        return u;

    }



    @PutMapping(value = "/statut/{id}",consumes =(MediaType.APPLICATION_JSON_VALUE))
    public ResponseEntity<String> blockPartener (@PathVariable("id")int id) throws Exception {
        Partenaire etat= partenaireRepository.findById((long) id).orElseThrow(
                ()->new Exception ("Ce Partenaire n'existe pas")
        );


        if (etat.getStatut().equals("debloquer")){
            etat.setStatut("bloquer");
            partenaireRepository.save(etat);
            return new ResponseEntity<>(etat.getRaisonsociale()+ " a été bloqué", HttpStatus.OK);
        }
        else{
            etat.setStatut("debloquer");
            partenaireRepository.save(etat);
            return new ResponseEntity<>(etat.getRaisonsociale()+ " a été débloqué", HttpStatus.OK);
        }
    }
}



