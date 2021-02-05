import React, { Component } from "react";
import SimpanPinjamDataService from "../services/simpan-pinjam.service";
import { Link } from "react-router-dom";

class ListTransaksiComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transaksis: []
    };
    // this.addAnggota = this.addAnggota.bind(this);
    // this.editEmployee = this.editEmployee.bind(this);
    // this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    SimpanPinjamDataService.getAllTransaksi()
      .then(response => {
        // sort by tanggal_transaksi 
        response.data.result.sort(function (a, b) {
          return new Date(a.tanggal_transaksi) - new Date(b.tanggal_transaksi);
        });

        this.setState({
          transaksis: response.data.result
        });
        console.log(response.data.result);
      })
      .catch(e => {
        console.log(e);
      });
  }

  addTransaksi() {
    this.props.history.push('/add-transaksi');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Daftar Transaksi</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={() => this.addTransaksi()}>+Tambah Transaksi</button>
        </div>
        <br></br>
        <div className="row">
          <table id="table-transaksi" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th>Tanggal Transaksi</th>
                <th>Status</th>
                <th>Nominal</th>
                <th>Anggota Bertransaksi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.transaksis.map(transaksi => (
                <tr key={transaksi.id}>
                  <td>
                    {new Intl.DateTimeFormat('en-GB', {
                      month: 'long',
                      day: '2-digit',
                      year: 'numeric',
                    }).format(new Date(transaksi.tanggal_transaksi))}
                  </td>
                  <td>{transaksi.status}</td>
                  <td>{transaksi.nominal}</td>
                  <td>{transaksi.anggota.nama}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    )
  }
}

export default ListTransaksiComponent