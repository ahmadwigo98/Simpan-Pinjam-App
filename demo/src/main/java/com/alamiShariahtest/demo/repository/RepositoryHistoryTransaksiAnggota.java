package com.alamiShariahtest.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.alamiShariahtest.demo.model.HistoryTransaksiAnggota;

@Repository
public interface RepositoryHistoryTransaksiAnggota extends MongoRepository<HistoryTransaksiAnggota, Long> {

}
