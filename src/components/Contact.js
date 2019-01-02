import React, { Component } from "react";

const contactStyles = {
    contactCells: {
        display: "flex",
        flexDirection: "column",
    },
    contactInput: {
        display: "flex",
        flexDirection: "column",
        margin: 10,
    }
}

class Contact extends Component {
    render(){
        return (
            <div
                style={contactStyles.contactCells}
            >
                <div
                    style={contactStyles.contactInput}
                >
                    <label
                        htmlFor="email"
                        style={{
                        color: "red",
                        }}
                    >
                        Email:
                    </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        value={this.props.email}
                    />
                </div>
                <div
                    style={contactStyles.contactInput}
                >
                    <label
                        htmlFor="phone"
                        style={{
                        color: "red",
                        }}
                    >
                        Phone:
                    </label>
                    <input 
                        id="phone"
                        type="number"
                        placeholder="(---) --- ----"
                        name="phone"
                        value={this.props.phone}
                    />
                </div>
            </div>
        )
    }
}

export default Contact;
