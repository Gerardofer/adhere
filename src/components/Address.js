import React, { Component } from "react";

const addressStyle = {
    addressInput: {
        display: "flex",
        flexDirection: "column",
        margin: 10
    }
}

class Address extends Component {
    render(){
        return (
            <div
                style={addressStyle.addressInput}
            >
                <label
                    htmlFor="address"
                    style={{
                    color: "red",
                    }}
                >
                    Address:
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    valure={this.props.address}
                />
            </div>
        )
    }
}

export default Address;
