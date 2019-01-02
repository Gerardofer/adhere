import React, { Component } from "react";
import concentration from "../program";

class Program extends Component {
    render(){

        const program = concentration.map(p => {
            return (
                <option
                    key={p.value}
                >
                    {p.value}
                </option>
            )
        })

        return (
            <div
                style={{
                    margin: 10,
                }}
            >
                <div>
                    <label
                        htmlFor="program"
                        style={{
                            color: "red",
                        }}
                    >
                        First Choice Program/Concentration
                    </label>
                    <select
                        id="program"
                        name="program"
                        value={this.props.program}
                    >
                        <option>--- Select One ---</option>
                        {program}
                    </select>
                </div>
                <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                >
                    <label
                        style={{
                            color: "red",
                        }}
                    >
                        Program
                    </label>
                    <select
                        style={{
                            width: "50%",
                        }}
                        name="school"
                        value={this.props.school}
                    >
                        <option>
                            --- Select ---
                        </option>
                        <option>
                            6B5B6155
                        </option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Program;
