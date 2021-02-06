import React, { Component, Fragment } from "react";
import SimpanPinjamDataService from "../services/simpan-pinjam.service";
import { Link } from "react-router-dom";

class ListHistoriTransaksiComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      historiTransaksis: []
    };
  }

  componentDidMount() {
    SimpanPinjamDataService.getHistoriTransaksi()
      .then(response => {
        this.setState({
          historiTransaksis: response.data.result
        });
        console.log(response.data.result);
        console.log(response.data.result.length);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      // test = ({ states = {} }) => {
      //   const stateValues = Object.values(states);
      //   const tbodies = stateValues.map((state, index) => {
      //     const cityValues = Object.values(state.cities);
      //     const cityRows = cityValues.map((city, i) => {
      //       const stateName =
      //         i === 0 ? <td rowSpan={cityValues.length + 1}>{state.name}</td> : null;
      //       const stateAbbreviation =
      //         i === 0 ? (
      //           <td rowSpan={cityValues.length + 1}>{state.abbreviation}</td>
      //         ) : null;
      //       return (
      //         <tr key={i}>
      //           {stateName}
      //           {stateAbbreviation}
      //           <td>{city.name}</td>
      //           <td>{city.metroPopulation}</td>
      //         </tr>
      //       );
      //     });
      //     return (
      //       <tbody key={index} className={state.name}>
      //         {cityRows}
      //       </tbody>
      //     );
      //   });
      //   return (
      //     <div>
      //       <table>
      //         <thead>
      //           <tr>
      //             <th colSpan="4">Metro Areas by State</th>
      //           </tr>
      //           <tr>
      //             <th>State Name</th>
      //             <th>State Abbreviation</th>
      //             <th>City</th>
      //             <th>Population</th>
      //           </tr>
      //         </thead>
      //         {tbodies}
      //       </table>
      //     </div>
      //   );
      // });
      <div>
        <h2 className="text-center">Riwayat Transaksi Anggota</h2>
        <br></br>
        <div className="row">
          <table id="table-anggota" class="table table-striped table-bordered table-sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Tanggal Transaksi</th>
                <th>Status Transaksi</th>
                <th>Nominal Transaksi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.historiTransaksis.map((anggotaTransaksi, index) => (
                <tr key={anggotaTransaksi.id}>
                  <td rowSpan={anggotaTransaksi.transaksi.length - 1}>{index + 1}</td>
                  <td rowSpan={anggotaTransaksi.transaksi.length - 1}>{anggotaTransaksi.namaAnggotaBertransaksi}</td>
                  {/* {anggotaTransaksi.transaksi.map((item, i) => (
                    <tr>
                      <td>
                        {item.tanggal_transaksi}
                      </td>
                      <td>{item.status}</td>
                      <td>{item.nominal}</td>
                    </tr>
                  ))} */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListHistoriTransaksiComponent