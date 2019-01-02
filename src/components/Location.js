import React, { Component } from "react";

const locationStyles = {
    locationCells:{
        display: "flex",
        flexDirection: "row",
    },
    locationInput: {
        display: "flex",
        flexDirection: "column",
        margin: 10,
        flex: 1,
    },
    locationInputLength: {
        flex: 1,
    }
}

class Location extends Component {
    render () {
        return (
            <div
                style={locationStyles.locationCells}
            >
                <div
                    style={locationStyles.locationInput}
                >
                    <label
                        htmlFor="zip"
                        style={{
                        color: "red",
                        }}
                    >
                        Zip:
                    </label>
                    <input
                        type="text" 
                        id="zip"
                        style={{
                            width: 55,
                        }}
                        name="zip"
                        value={this.props.zip}
                    />
                </div>
                <div
                    style={locationStyles.locationInput}
                >
                    <label
                        htmlFor="city"
                        style={{
                        color: "red",
                        }}
                    >
                        City:
                    </label>
                    <input
                        type="text" 
                        id="city"
                        style={{
                            width: 100,
                        }}
                        name="city"
                        value={this.props.city}
                    />
                </div>
                <div
                    style={locationStyles.locationInput}
                >
                    <label
                        htmlFor="state"
                        style={{
                        color: "red",
                        }}
                    >
                        State:
                    </label>
                    <input
                        type="text" 
                        id="state"
                        style={{
                            width: 30,
                        }}
                        name="state"
                        value={this.props.state}
                    />
                </div>
            </div>
        )
    }
}

export default Location;
