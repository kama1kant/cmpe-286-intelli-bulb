import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulbStatus: "off"
        }
    }

    render() {
        console.log(this.state.bulbStatus);
        return (
            <div>
                <div className="container">
                    <div className="row align-items-start pt-4">
                        <div className="col-sm-12">
                            <h3>Intelli Bulb Dashboard</h3>
                        </div>
                    </div>
                    <div className="row align-items-start pt-4 text-start">
                        <div className="col-sm-12 pb-2">
                            <h3>Smart bulb status</h3>
                        </div>
                        <div className="col-sm-2">
                            <p>Bulb is {this.state.bulbStatus}</p>
                        </div>
                    </div>

                    <div className="row align-items-start pt-5 text-start">
                        <div className="col-sm-12 pb-2">
                            <h3>Module: Bulb Controller</h3>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-success" onClick={e => this.setState({ bulbStatus: "on" })}>Switch On</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-danger" onClick={e => this.setState({ bulbStatus: "off" })}>Switch Off</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-primary" onClick="">Change color</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-warning" onClick="">Brightness Up</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-dark" onClick="">Brightness Down</button>
                        </div>
                    </div>
                    <div className="row align-items-start pt-5 text-start">
                        <div className="col-sm-12 pb-2">
                            <h3>Module: Stock Alert</h3>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-success" onClick={this.submit}>Alert On</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-danger" onClick={this.submit}>Alert Off</button>
                        </div>
                    </div>
                    <div className="row align-items-start pt-5 text-start">
                        <div className="col-sm-12 pb-2">
                            <h3>Module: Day time Status</h3>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-success" onClick={this.submit}>Turn On</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-danger" onClick={this.submit}>Turn Off</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Dashboard;
