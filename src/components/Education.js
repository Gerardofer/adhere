import React, { Component } from "react";

const level = [1,2,3,4,5,6,7]

class Education extends Component{

    render(){

        const handleLevel = level.map(l => {
            return (
                <option
                    key={l}
                >
                    {l}
                </option>
            )
        })

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
                    Highest Education
                </label>
                <select
                    name="level"
                    valu={this.props.level}
                    style={{
                        width: "50%",
                    }}
                >
                    <option>
                    --- Select One ---
                    </option>
                    {handleLevel}
                </select>
            </div>
        )
    }
}

export default Education;
