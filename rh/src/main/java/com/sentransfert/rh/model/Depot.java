package com.sentransfert.rh.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Data
@EqualsAndHashCode(exclude ="comptes")

public class Depot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "compte_id" ,referencedColumnName = "id")
    @JsonIgnore
    @ManyToOne(optional = false)
    private Compte compte;
    private Double montant;

    @DateTimeFormat(pattern ="yyyy-MM-dd")
    private Date date;

    @JoinColumn(name = "caissier_id" ,referencedColumnName = "id")
    @JsonIgnore
    @ManyToOne(optional = false)
     User user;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Compte getCompte() {
        return compte;
    }

    public void setCompte(Compte compte) {
        this.compte = compte;
    }

    public Double getMontant() {
        return montant;
    }

    public void setMontant(Double montant) {
        this.montant = montant;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
