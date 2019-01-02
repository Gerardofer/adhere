import React, { Component } from "react";

const nameStyle = {
    nameCells: {
        display: "flex",
        flexDirection: "row",
    },
    nameInput:{
        display: "flex",
        flexDirection: "column",
        margin: 5,
    },

}

class Name extends Component {

    render(){
        return (
            <div
                style={nameStyle.nameCells}
            >
                <div
                    style={nameStyle.nameInput}
                >
                    <label 
                        htmlFor="firt-name"
                        style={{
                            color: "red",
                        }}
                    >
                        First Name:
                    </label>
                    <input 
                        type="text" 
                        id="first-name"
                        name="firstName"
                        value={this.props.firstName}
                    />
                </div>
                <div
                        style={nameStyle.nameInput}
                >
                    <label 
                        htmlFor="last-name"
                        style={{
                        color: "red",
                        }}
                    >
                        Last Name:
                    </label>
                    <input 
                        type="text" 
                        id="last-name"
                        name="lastName"
                        value={this.props.lastName}
                    />
                </div>
            </div>
        );
    }
}

export default Name;
