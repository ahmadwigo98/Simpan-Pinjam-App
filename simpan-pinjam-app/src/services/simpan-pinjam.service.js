import http from "../http-common";

class SimpanPinjamDataService {
    getAllAnggota() {
        return http.get("/getAllAnggota");
    }

    addAnggota(data) {
        return http.post("/addAnggota", data);
    }

    updateAnggota(id, data) {
        return http.put(`/updateAnggota?id=${id}`, data);
    }

    getAllTransaksi() {
        return http.get("/getAllTransaksi");
    }

    addTransaksi(id_anggota, data) {
        return http.post(`/addTransaksi?id_anggota=${id_anggota}`, data);
    }

    updateTransaksi(id, id_anggota, data) {
        return http.put(`/updateTransaksi?id=${id}&id_anggota=${id_anggota}`, data);
    }

    getHistoriTransaksi() {
        return http.get("/getHistoriTransaksiAnggota");
    }

    // get(id) {
    //     return http.get(`/tutorials/${id}`);
    // }

    // delete(id) {
    //     return http.delete(`/tutorials/${id}`);
    // }

    // deleteAll() {
    //     return http.delete(`/tutorials`);
    // }

    // findByTitle(title) {
    //     return http.get(`/tutorials?title=${title}`);
    // }
}

export default new SimpanPinjamDataService();