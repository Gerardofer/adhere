import React, { Component } from "react";
import year from "../year";

class GradYear extends Component{
    render(){
        const handleYear = year.map (y => {
            return (
                <option
                    key={y}
                >
                    {y}
                </option>
            )
        });

        return(
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: 10,

                }}
            >
                <label
                    style={{
                        color: "red",
                    }}
                >
                    HS Grad Year
                </label>
                <select
                name="year"
                value={this.props.year}
                    style={{
                        width: "50%",
                    }}
                >
                    <option>
                        --- Select One ---
                    </option>
                    {handleYear}
                </select>
            </div>            
        )
    }
}

export default GradYear;
