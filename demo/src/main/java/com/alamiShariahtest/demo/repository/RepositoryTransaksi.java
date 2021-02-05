package com.alamiShariahtest.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import com.alamiShariahtest.demo.model.Transaksi;

@Repository
public interface RepositoryTransaksi extends JpaRepository<Transaksi, Long> {

}
