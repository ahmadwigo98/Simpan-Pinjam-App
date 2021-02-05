package com.alamiShariahtest.demo.model;

import java.io.Serializable;
import java.sql.Date;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import com.alamiShariahtest.demo.model.Anggota;

@Entity
@Table(name = "Transaksi")
public class Transaksi implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "status")
    private String status;

    @Column(name = "nominal")
    private Integer nominal;

    @Column(name = "tanggal_transaksi")
    private Date tanggal_transaksi;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "anggota_id", referencedColumnName = "id")
    // @JsonIgnore
    private Anggota anggota;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getNominal() {
        return nominal;
    }

    public void setNominal(Integer nominal) {
        this.nominal = nominal;
    }

    public Date getTanggal_transaksi() {
        return tanggal_transaksi;
    }

    public void setTanggal_transaksi(Date tanggal_transaksi) {
        this.tanggal_transaksi = tanggal_transaksi;
    }

    public Anggota getAnggota() {
        return anggota;
    }

    public void setAnggota(Anggota anggota) {
        this.anggota = anggota;
    }

    public Transaksi(long id, String status, Integer nominal, Date tanggal_transaksi, Anggota anggota) {
        this.id = id;
        this.status = status;
        this.nominal = nominal;
        this.tanggal_transaksi = tanggal_transaksi;
        this.anggota = anggota;
    }

    public Transaksi() {
    }
}
