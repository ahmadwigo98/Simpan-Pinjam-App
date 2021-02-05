import React, { Component } from "react";
import SimpanPinjamDataService from "../services/simpan-pinjam.service";

class AddTransaksiComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      id_anggota_bertransaksi: null,
      tanggal_transaksi: '',
      status: '',
      nominal: 0,

      anggotas: [],

      submitted: false
    };
    this.onChangeAnggotaBertransaksi = this.onChangeAnggotaBertransaksi.bind(this);
    this.onChangeTanggalTransaksi = this.onChangeTanggalTransaksi.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeNominal = this.onChangeNominal.bind(this);
    this.saveNewTransaksi = this.saveNewTransaksi.bind(this);
  }

  componentDidMount() {
    SimpanPinjamDataService.getAllAnggota()
      .then(response => {
        // sort by id
        response.data.result.sort(function (a, b) {
          return a.id - b.id;
        });

        this.setState({
          anggotas: response.data.result
        });
        console.log(response.data.result);
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeAnggotaBertransaksi(e) {
    this.setState({
      id_anggota_bertransaksi: e.target.value
    });
  }

  onChangeTanggalTransaksi(e) {
    this.setState({
      tanggal_transaksi: e.target.value
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onChangeNominal(e) {
    this.setState({
      nominal: e.target.value
    });
  }

  saveNewTransaksi() {
    var data = {
      tanggal_transaksi: this.state.tanggal_transaksi,
      status: this.state.status,
      nominal: this.state.nominal
    };

    console.log(data);

    var id = this.state.id_anggota_bertransaksi;
    SimpanPinjamDataService.addTransaksi(id, data)
      .then(response => {
        this.setState({
          id: response.data.id,
          tanggal_transaksi: response.data.tanggal_transaksi,
          status: response.data.status,
          nominal: response.data.nominal,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  backToDaftarTransaksi() {
    this.props.history.push('/daftar-transaksi');
  }

  anotherNewTransaksi() {
    this.props.history.push('/add-transaksi');
  }

  render() {
    return (
      <div className="submit-form container">
        {this.state.submitted ? (
          <div>
            <h4>Transakasi Berhasil Ditambah!</h4>
            <button className="btn btn-light" onClick={() => this.backToDaftarTransaksi()}>
              Kembali ke Daftar Transaksi
            </button>
            <button className="btn btn-primary" onClick={() => this.anotherNewTransaksi()}>
              Tambah Transaksi
            </button>
          </div>
        ) : (
            <div style={{ "text-align": 'left' }}>
              <h2 className="text-center">Pelaporan Transaksi</h2>
              <hr></hr>
              <div className="form-group">
                <label htmlFor="anggota_bertransaksi">Pilih Anggota :</label>
                <select class="form-control" id="anggota_bertransaksi" onChange={this.onChangeAnggotaBertransaksi}>
                  <option value="" selected disabled hidden>Silahkan pilih anggota</option>
                  {this.state.anggotas.map(anggota => (
                    <option value={anggota.id}>{anggota.nama}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="tanggal_transaksi">Tanggal Transaksi :</label>
                <input
                  type="date"
                  className="form-control"
                  id="tanggal_transaksi"
                  required
                  value={this.state.tanggal_transaksi}
                  onChange={this.onChangeTanggalTransaksi}
                  name="tanggal-transaksi"
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="status">Status :</label>
                <div>
                  <input
                    type="radio"
                    value="Meminjam"
                    checked={this.state.status === "Meminjam"}
                    onChange={this.onChangeStatus}
                  />
                  <span style={{ marginLeft: 5, marginRight: 10 }}>Meminjam</span>
                  <input
                    type="radio"
                    value="Mengembalikan"
                    checked={this.state.status === "Mengembalikan"}
                    onChange={this.onChangeStatus}
                  />
                  <span style={{ marginLeft: "5px" }}>Mengembalikan</span>

                </div>
                {/* <div onChange={this.onChangeStatus}>
                  <input type="radio" value="Meminjam" name="status">Meminjam</input>
                  <input type="radio" value="Mengembalikan" name="status">Mengembalikan</input>
                </div> */}
              </div>

              <div className="form-group">
                <label htmlFor="nominal">Nominal :</label>
                <input
                  type="number"
                  className="form-control"
                  id="nominal"
                  required
                  value={this.state.nominal}
                  onChange={this.onChangeNominal}
                  name="nominal"
                ></input>
              </div>

              <button onClick={this.saveNewTransaksi} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
      </div>
    );
  }
}

export default AddTransaksiComponent