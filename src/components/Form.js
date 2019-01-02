import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Search from "./Search";
import axios from "axios";

const formStyle = {
    formFormat : {
      display: "flex",
      flexDirection: "column",
      width: 300,
      backgroundColor: "#3D8EC3",
      margin: "0 auto",
    },
    innerForm: {
      width: 280,
      backgroundColor: "#EEEEEE",
      margin: 10,
      borderRadius: 10,
      border: "1px solid black"
    },
    formHeader: {
      textAlign: "center",
      margin: "5px 0",
      color: "#fff"
    }
  }

class Form extends Component{
    state = {
        firstName: "",
        lastName: "",
        address: "",
        zip: "",
        city: "",
        state: "",
        email: "",
        phone: "",
        program: "",
        school: "",
        year: "",
        level: "",
        data: [],
      }

    //   componentDidMount(){
    //       this.handleRender();
    //   }
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value,
        })
      }
    
      handleSubmit = event => {
        event.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/http://www.app.educationspots.com/api/search/v3/?oAuth=0c74b7f78409a4022a2c4c5a5ca3ee19&&firstname=${this.state.firstName}&lastname=${this.state.lastName}&address=123+Maine+St&zip=${this.state.zip}&city=${this.state.city.toUpperCase()}&state=${this.state.state.toUpperCase()}&email=billstone1ccc%40gmail.com&homephone=${this.state.phone}&programid=${this.state.school}&concentrationid=${this.state.program}&hsgradyear=${this.state.year}&educationlevel=${this.state.level}`)
          .then(response => {
                // console.log("From the response", response.data)
                this.setState({
                    data: response.data.SEARCHRESULTS.COLLEGE
                })
                console.log("from the state", this.state.data)
            })
          .catch(error => {console.log(error)});

        this.setState({
          firstName: "",
          lastName: "",
          address: "",
          zip: "",
          city: "",
          state: "",
          email: "",
          phone: "",
          program: "",
          school: "",
          year: "",
          level: "",
          data: [],
        })
        console.log(this.state);
      }

      handleRender = () => {
        return (
            <h1>
                {/*{this.state.data.SEARCHRESULTS}*/}
            </h1>
        )
      }

    render(){
        const { firstName, lastName, address, zip, city, state, email, phone, program, school, year, level } = this.state
        return (
            <div>
                <div
                    style={formStyle.formFormat}
                    onChange={this.handleChange}
                >
                    <h3
                        style={formStyle.formHeader}
                    >
                        Personal Information
                    </h3>
                    <form
                    style={formStyle.innerForm}
                    onSubmit={this.handleSubmit}
                    >
                            <PersonalInfo 
                                firstName={firstName}
                                lastName={lastName}
                                address={address}
                                zip={zip}
                                city={city}
                                state={state}
                                email={email}
                                phone={phone}
                            />
                            <h3
                                style={{
                                    textAlign: "center",
                                    margin: "5px 0",
                                    color: "#000"
                                }}
                            >
                                Search Criteria
                            </h3>
                            <Search 
                                program={program}
                                school={school}
                                year={year}
                                level={level}
                            />

                            <button
                                style={{
                                    outline: "none",
                                    width: 140,
                                    height: 40,
                                    color: "#fff",
                                    backgroundColor: "#59A5F3",
                                    margin: "5px 80px 5px 80px",
                                    fontSize: 25,
                                    borderRadius: 5,
                                }}
                            >
                                Search
                            </button>
                    </form>
                </div>
                <h1
                        style={{
                            textAlign: "center",
                        }}
                    >
                        Results:
                    </h1>
                    <div>
                        {this.handleRender()}
                    </div>
            </div>
        )
    }
}

export default Form;
