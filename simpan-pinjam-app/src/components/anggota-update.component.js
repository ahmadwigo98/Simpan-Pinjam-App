import React, { Component } from "react";
import SimpanPinjamDataService from "../services/simpan-pinjam.service";
import { Link } from "react-router-dom";

class UpdateAnggotaComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      nama: this.props.location.state.anggotaBeingUpdated.nama,
      tanggal_lahir: this.props.location.state.anggotaBeingUpdated.tanggal_lahir,
      alamat: this.props.location.state.anggotaBeingUpdated.alamat,

      submitted: false
    };
    this.onChangeNama = this.onChangeNama.bind(this);
    this.onChangeTanggalLahir = this.onChangeTanggalLahir.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.saveOldAnggota = this.saveOldAnggota.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     nama: this.props.nama
  //   });
  // }

  onChangeNama(e) {
    this.setState({
      nama: e.target.value
    });
  }

  onChangeTanggalLahir(e) {
    this.setState({
      tanggal_lahir: e.target.value
    });
  }

  onChangeAlamat(e) {
    this.setState({
      alamat: e.target.value
    });
  }

  saveOldAnggota() {
    var data = {
      nama: this.state.nama,
      tanggal_lahir: this.state.tanggal_lahir,
      alamat: this.state.alamat
    };

    console.log(data);
    var id = this.state.id;
    SimpanPinjamDataService.updateAnggota(id, data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nama: response.data.nama,
          tanggal_lahir: response.data.tanggal_lahir,
          alamat: response.data.alamat,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  backToDaftarAnggota() {
    this.props.history.push('/daftar-anggota');
  }

  render() {
    return (
      <div className="submit-form container">
        {this.state.submitted ? (
          <div>
            <h4>Anggota Berhasil Diubah!</h4>
            <button className="btn btn-light" onClick={() => this.backToDaftarAnggota()}>
              Kembali ke Daftar Anggota
            </button>
          </div>
        ) : (
            <div style={{ "text-align": 'left' }}>
              <h2 className="text-center">Edit Anggota</h2>
              <hr></hr>
              <div className="form-group">
                <label htmlFor="nama">Nama :</label>
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  required
                  value={this.state.nama}
                  onChange={this.onChangeNama}
                  name="nama"
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="tanggal_lahir">Tanggal Lahir :</label>
                <input
                  type="date"
                  className="form-control"
                  id="tanggal_lahir"
                  required
                  value={this.state.tanggal_lahir}
                  onChange={this.onChangeTanggalLahir}
                  name="tanggal-lahir"
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="alamat">Alamat :</label>
                <input
                  type="text"
                  className="form-control"
                  id="alamat"
                  required
                  value={this.state.alamat}
                  onChange={this.onChangeAlamat}
                  name="alamat"
                ></input>
              </div>

              <button onClick={this.saveOldAnggota} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
      </div>
    );
  }
}

export default UpdateAnggotaComponent