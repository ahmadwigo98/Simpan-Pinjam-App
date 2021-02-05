package com.alamiShariahtest.demo.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "history-transaksi")
public class HistoryTransaksiAnggota {

    @Id
    private long id;
    private String nama;
    private Date tanggal_lahir;
    private String alamat;

    // Foreign key

    // One-to-Many
    @DBRef(lazy = true)
    private List<Transaksi> transaksi;

    // Setter dan Getter
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public Date getTanggal_lahir() {
        return tanggal_lahir;
    }

    public void setTanggal_lahir(Date tanggal_lahir) {
        this.tanggal_lahir = tanggal_lahir;
    }

    public String getAlamat() {
        return alamat;
    }

    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    public List<Transaksi> getTransaksi() {
        return transaksi;
    }

    public void setTransaksi(List<Transaksi> transaksi) {
        this.transaksi = transaksi;
    }

    public void addTransaksi(Transaksi transaksi) {
        this.transaksi.add(transaksi);
    }

    @Override
    public String toString() {
        return "Tutorial [id=" + id + ", nama=" + nama + ", tanggal_lahir=" + tanggal_lahir + ", alamat=" + alamat
                + "]";
    }

    public HistoryTransaksiAnggota(long id, String nama, Date tanggal_lahir, String alamat, List<Transaksi> transaksi) {
        this.id = id;
        this.nama = nama;
        this.tanggal_lahir = tanggal_lahir;
        this.alamat = alamat;
        this.transaksi = transaksi;
    }

    public HistoryTransaksiAnggota() {
    }
}
