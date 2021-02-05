import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import ListAnggotaComponent from "./components/anggota-list.component";
import AddAnggotaComponent from "./components/anggota-add.component";
import UpdateAnggotaComponent from "./components/anggota-update.component";
import ListTransaksiComponent from "./components/transaksi-list.componest";
import AddTransaksiComponent from "./components/transaksi-add.component"
import ListHistoriTransaksiComponent from "./components/histori-transaksi-list.component"

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand mb-0 h1" href="#">Simpan-Pinjam App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav nav-fill">
            <li class="nav-item nav-link">
              <Link to={"/daftar-transaksi"} className="nav-link" data-toggle="tab">
                Daftar Transaksi
              </Link>
            </li>
            <li class="nav-item nav-link">
              <Link to={"/daftar-anggota"} className="nav-link" data-toggle="tab">
                Daftar Anggota
              </Link>
            </li>
            <li class="nav-item nav-link">
              <Link to={"/histori-transaksi"} className="nav-link" data-toggle="tab">
                Riwayat Transaksi Anggota
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/daftar-transaksi"]} exact component={ListTransaksiComponent} />
          <Route exact path="/add-transaksi" component={AddTransaksiComponent}></Route>

          <Route exact path="/daftar-anggota" component={ListAnggotaComponent} />
          <Route exact path="/add-anggota" component={AddAnggotaComponent}></Route>
          <Route exact path="/update-anggota/:id" component={UpdateAnggotaComponent}></Route>

          <Route exact path="/histori-transaksi" component={ListHistoriTransaksiComponent}></Route>
        </Switch>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit saja <code>src/App.js</code> and save to reload.
        </p>
        <a className="btn btn-danger"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Bersama Saya
        </a>
        <button className="btn btn-primary">Test</button>
      </header> */}
    </div>
  );
}

export default App;
