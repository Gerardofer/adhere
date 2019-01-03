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
        data: "",
        collegeName: "",
        image: "",
        programInterest: [],
        rnLicense: [],
        leadStatus: [],
        compAccess: [],
        usCitizen: [],
        isLoaded: false,
        error: null,
      }

      componentDidMount(){
          this.handleRender();
      }
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value,
        })
      }
    
      handleSubmit = event => {
        event.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/http://www.app.educationspots.com/api/search/v3/?oAuth=0c74b7f78409a4022a2c4c5a5ca3ee19&&firstname=${this.state.firstName}&lastname=${this.state.lastName}&address=123+Maine+St&zip=${this.state.zip}&city=${this.state.city.toUpperCase()}&state=${this.state.state.toUpperCase()}&email=billstone1ccc%40gmail.com&homephone=${this.state.phone}&programid=${this.state.school}&concentrationid=${this.state.program}&hsgradyear=${this.state.year}&educationlevel=${this.state.level}`)
          .then(response => {
                this.setState({
                    data: response.data.SEARCHRESULTS,
                    image: response.data.SEARCHRESULTS.COLLEGE[0]
                    .LOGO,
                    collegeName: response.data.SEARCHRESULTS.COLLEGE[0].NAME,
                    programInterest: response.data.SEARCHRESULTS.COLLEGE[0].FIELDPARAMETER[0].FIELDVALUES,
                    rnLicense: response.data.SEARCHRESULTS.COLLEGE[0].FIELDPARAMETER[1].FIELDVALUES,
                    usCitizen: response.data.SEARCHRESULTS.COLLEGE[0].FIELDPARAMETER[2].FIELDVALUES,
                    leadStatus: response.data.SEARCHRESULTS.COLLEGE[0].FIELDPARAMETER[3].FIELDVALUES,
                    compAccess: response.data.SEARCHRESULTS.COLLEGE[0].FIELDPARAMETER[4].FIELDVALUES,
                    isLoaded: true,
                })
            })
          .catch(error => {
              this.setState({
                  error,
              })
          });

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
            data: "",
            image: "",
            programInterest: [],
            rnLicense: [],
            leadStatus: [],
            compAccess: [],
            usCitizen: [],
            isLoaded: false,
            error: null,
        })
      }

      handleRender = () => {
        const programList = this.state.programInterest.map(label => {
            return (
                <option
                    key={label.FVALUE}
                >
                    {label.FLABEL}
                </option>
            )
        })

        const rnLic = this.state.rnLicense.map(license => {
            return (
                <option
                    key={license.VALUE}
                >
                    {license.FLABEL}
                </option>
            )
        })

        const lead = this.state.leadStatus.map(l => {
            return (
                <option
                    key={l.VALUE}
                >
                    {l.FLABEL}
                </option>
            )
        })

        const citizen = this.state.usCitizen.map(us => {
            return (
                <option
                    key={us.VALUE}
                >
                    {us.FLABEL}
                </option>
            )
        })

        const computer = this.state.compAccess.map(comp => {
            return (
                <option
                    key={comp.VALUE}
                >
                    {comp.FLABEL}
                </option>
            )
        })

        return (
            <div
                style={{
                    flex: 1,
                    margin: "0 auto",
                }}
            >
                <h1>
                    {this.state.collegeName}
                </h1>
                {this.state.isLoaded ?
                    <img 
                    style={{
                        width: 200,
                        hight: 80
                    }}
                    src={this.state.image}
                    alt="College"
                    />
                    :
                    ""
                }
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label>
                        Program of Interest
                    </label>
                    <select
                        style={{
                            width: 300,
                        }}
                    >
                        <option>
                            --- Select Option ---
                        </option>
                        {this.state.isLoaded ? programList : ""}
                    </select>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label>
                        Do you have a RN License?
                    </label>
                    <select
                        style={{
                            width: 300,
                        }}
                    >
                        <option>
                            --- Select Option ---
                        </option>
                        {this.state.isLoaded ? rnLic : ""}
                    </select>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label>
                        Lead Status
                    </label>
                    <select
                        style={{
                            width: 300,
                        }}
                    >
                        <option>
                            --- Select Option ---
                        </option>
                        {this.state.isLoaded ? lead : ""}
                    </select>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label>
                        Are you US Citizen?
                    </label>
                    <select
                        style={{
                            width: 300,
                        }}
                    >
                        <option>
                            --- Select Option ---
                        </option>
                        {this.state.isLoaded ? citizen : ""}
                    </select>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label>
                        Computer Access
                    </label>
                    <select
                        style={{
                            width: 300,
                        }}
                    >
                        <option>
                            --- Select Option ---
                        </option>
                        {this.state.isLoaded ? computer : ""}
                    </select>
                </div>
            </div>
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
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {this.handleRender()}
                    </div>
            </div>
        )
    }
}

export default Form;
