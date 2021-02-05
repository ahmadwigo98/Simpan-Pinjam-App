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
}

export default new SimpanPinjamDataService();