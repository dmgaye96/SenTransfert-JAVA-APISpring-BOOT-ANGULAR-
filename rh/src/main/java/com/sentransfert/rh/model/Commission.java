package com.sentransfert.rh.model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Data
public class Commission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min=3, max = 50)
    private Double borninf;

    @NotBlank
    @Size(min=3, max = 50)
    private Double bornesup;

    @NotBlank
    @Size(min=3, max = 50)
    private Double commissionttc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getBorninf() {
        return borninf;
    }

    public void setBorninf(Double borninf) {
        this.borninf = borninf;
    }

    public Double getBornesup() {
        return bornesup;
    }

    public void setBornesup(Double bornesup) {
        this.bornesup = bornesup;
    }

    public Double getCommissionttc() {
        return commissionttc;
    }

    public void setCommissionttc(Double commissionttc) {
        this.commissionttc = commissionttc;
    }
}
