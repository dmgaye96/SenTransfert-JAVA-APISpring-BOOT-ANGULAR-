package com.sentransfert.rh.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
public class Partenaire {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Size(min=3, max = 50)
    private String raisonsociale;

    @NotBlank
    @Size(min=3, max = 50)
    private String ninea;

    @NotBlank
    @Size(min=3, max = 50)
    private String adresse;

    @NotBlank
    @Size(min=3, max = 50)
    private String statut;
    @JsonIgnore
    @OneToMany(mappedBy ="partenaire")

    private List <Compte> comptes;
    @JsonIgnore
    @OneToMany(mappedBy ="partenaire")
    private List <User> users;
    @JsonIgnoreProperties("partenaire")

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRaisonsociale() {
        return raisonsociale;
    }

    public void setRaisonsociale(String raisonsociale) {
        this.raisonsociale = raisonsociale;
    }

    public String getNinea() {
        return ninea;
    }

    public void setNinea(String ninea) {
        this.ninea = ninea;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public List<Compte> getComptes() {
        return comptes;
    }

    public void setComptes(List<Compte> comptes) {
        this.comptes = comptes;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
