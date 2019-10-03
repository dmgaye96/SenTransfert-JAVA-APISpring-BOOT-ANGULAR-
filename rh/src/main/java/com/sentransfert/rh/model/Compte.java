package com.sentransfert.rh.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
public class Compte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JoinColumn(name = "partenaire_id" ,referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Partenaire partenaire;
    @NotBlank
    @Size(min=3, max = 50)
    private String numerocompte;


    private Double solde;
    @OneToMany(mappedBy ="compte")
    private List<Depot> depots;
    @OneToMany(mappedBy ="compte")
    private List <User> users;
    @JsonIgnoreProperties("compte")
    public List<Depot> getDepots() {
        return depots;
    }
    public void setDepots(List<Depot> depots) {
        this.depots = depots;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Partenaire getPartenaire() {
        return partenaire;
    }

    public void setPartenaire(Partenaire partenaire) {
        this.partenaire = partenaire;
    }

    public String getNumerocompte() {
        return numerocompte;
    }

    public void setNumerocompte(String numerocompte) {
        this.numerocompte = numerocompte;
    }

    public Double getSolde() {
        return solde;
    }

    public void setSolde(Double solde) {
        this.solde = solde;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
