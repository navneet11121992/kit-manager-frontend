import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Configurator from './components/configurator';

function App() {
  return (
    <>
    <div className="App">
      <Header />
        <main style={styles.mainContent}>
            <section className="command">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>LISTING COMMAND</h3>
                            <h1>Open House Mastery System</h1>
                        </div>
                    </div>
                    <div className="row select-series">
                        <div className="col-xs-4 col-sm-5 col-md-5 select-series-col">
                            <div className="number text-right">
                                <span className="number-series">1</span>
                                <span className="series">Series</span>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-4 col-md-3">
                            <input id="collectionid_input" type="hidden" name="collection-id"/>
                            <input id="call_ajax_claim" type="hidden" value = "1"/>
                            <input id="call_ajax_kit" type="hidden" value = "1"/>
                            <input id="call_ajax_report" type="hidden" value = "1"/>
                            <select id="getSeriesById" className="date-box getSeriesById">
                                <option value="MzMyOTUxOTA" selected>12th-13th October 2024
                                </option>
                                <option value="MzMyMDUyMDM" >05th-06th October 2024
                                </option>
                                <option value="MzExMzU1MDI" >10th-11th August 2024
                                </option>
                            </select>
                            <a href="" className="add-series" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false">Add new Series</a>
                        </div>
                        <div className=" col-xs-0 col-sm-3 col-md-4">

                        </div>
                    </div>
                </div>
            </section>
            <section className="tabs-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="tabbable">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#configator_data" id="configator" data-toggle="tab"><span className="number-tab">2</span>Configurator</a></li>
                                    <li><a href="#claims_data" id="claims" data-toggle="tab"><span className="number-tab">3</span>Requests</a></li>
                                    <li><a href="#kit"  id="kits" data-toggle="tab"><span className="number-tab">4</span>Kits</a></li>
                                    <li><a href="#report" className="main_report" id="reports" data-toggle="tab"><span className="number-tab">5</span>Reports</a></li>
                                </ul>
                                <div className="tab-content hidden_owerflow">
                                <Configurator />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
     
    </div>
    </>
  );
}

const styles = {
  mainContent: {
    minHeight: '80vh', 
    padding: '20px',
    textAlign: 'center',
  },
};

export default App;

