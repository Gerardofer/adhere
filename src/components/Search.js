import React, { Component } from "react";
import Program from "./Program";
import GradYear from "./GradYear";
import Education from "./Education";

class Search extends Component{
    render(){
        return (
            <div>
                <Program />
                <GradYear />
                <Education />
            </div>
        )
    }
}

export default Search;
