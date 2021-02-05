package com.alamiShariahtest.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alamiShariahtest.demo.model.Anggota;

@Repository
public interface RepositoryAnggota extends JpaRepository<Anggota, Long> {

}
