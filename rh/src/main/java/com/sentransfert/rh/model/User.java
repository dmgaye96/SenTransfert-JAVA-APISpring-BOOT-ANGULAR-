package com.sentransfert.rh.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "username"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min=3, max = 50)
    private String name;

    @NotBlank
    @Size(min=3, max = 50)
    private String username;

    @NaturalId
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min=6, max = 100)
    private String telephone;

    @NotBlank
    @Size(min=1, max = 100)
    private String statut;

    @NotBlank
    @Size(min=6, max = 100)
    private String password;
    @JsonIgnore
    @OneToMany(mappedBy ="user")
    @JsonIgnoreProperties("user")
    private List<Depot> depots;

    @JoinColumn(name = "partenaire_id" ,referencedColumnName = "id" , nullable = true)
    @JsonIgnore
    @ManyToOne(optional = false)
    private Partenaire partenaire;

    @JoinColumn(name = "compte_id" ,referencedColumnName = "id" , nullable = true)
    @JsonIgnore
    @ManyToOne(optional = false)
    private Compte compte;
    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))

    private Set<Role> roles = new HashSet<>();


    public User() {}

    public User(@NotBlank @Size(min = 3, max = 50) String name, @NotBlank @Size(min = 3, max = 50) String username, @NotBlank @Size(max = 50) @Email String email, @NotBlank @Size(min = 6, max = 100) String telephone, @NotBlank @Size(min = 1, max = 100) String statut, @NotBlank @Size(min = 6, max = 100) String password, List<Depot> depots, Partenaire partenaire, Compte compte, Set<Role> roles) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.telephone = telephone;
        this.statut = statut;
        this.password = password;
        this.depots = depots;
        this.partenaire = partenaire;
        this.compte = compte;
        this.roles = roles;
    }

    public User( String username, String email, String encode) {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }


    public List<Depot> getDepots() {
        return depots;
    }

    public void setDepots(List<Depot> depots) {
        this.depots = depots;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public Partenaire getPartenaire() {
        return partenaire;
    }

    public void setPartenaire(Partenaire partenaire) {
        this.partenaire = partenaire;
    }


    public Compte getCompte() {
        return compte;
    }

    public void setCompte(Compte compte) {
        this.compte = compte;
    }
}
