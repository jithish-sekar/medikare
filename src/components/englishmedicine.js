import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import SkinProblems from "./eng_skinproblems";

class Englishmedicine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: false
        }
    }
    GenderMale() {
        this.setState({
            gender: ' Gentleman!'
        })
    }

    GenderFemale = () => {
        this.setState({
            gender: ' Ladies!'
        })
    }

    // alertBtn = () => {
    //     alert('Will Be Updated Soon.Thankyou for your patient!!')
    // }

    //form validation for talk to doctor
    FormValidation = () => {
        this.props.history.push('/formvalidation')
    }

    generalPhysician = () => {
        this.props.history.push('/englishmedicine/generalphysician');
    }
    womensIssues = () => {
        this.props.history.push('/englishmedicine/womensissues')
    }
    hairscalp = () => {
        this.props.history.push('/englishmedicine/hairandscalp')
    }
    StressMentalHealth = () => {
        this.props.history.push('/englishmedicine/stressandmental')
    }
    SkinProblems = () => {
        this.props.history.push('/englishmedicine/skinproblems')
    }
    PregnancyProblems = () => {
        this.props.history.push('englishmedicine/pregnancyproblems')
    }
    render() {
        return (
            <div className='englishMedi'>
                <h1 className='h1EngMedi'> English Medicine</h1>
                <center>
                <div>

                    <h3 className='engMedih2'>Hey{this.state.gender}</h3>
                    <h5 className='gender'>Gender?</h5>
                    <button className='genderbtn' onClick={() => this.GenderMale()}>Male</button>
                    <button className='genderbtn' onClick={() => this.GenderFemale()}>Female</button>

                </div>
                <div>
                    <button
                        onClick={() => this.FormValidation()}
                        className='talkDoc'>
                        Talk To  Doctor
                            <i class="fa fa-arrow-circle-right "></i>
                    </button><hr />
                </div></center>
                <div className='landing-grid'>
                    <div className="feel">
                        <h1>How do you feel today?</h1>
                        <button className="btn1"
                            onClick={() => this.womensIssues()}
                        >Womens Issues</button>
                        <button className="btn1"
                            onClick={() => this.generalPhysician()}
                        >Genral Physician</button>
                        <button className="btn1"
                            onClick={() => this.hairscalp()}
                        >Hair and Scalp</button>
                        <button className="btn1"
                            onClick={() => this.StressMentalHealth()}
                        >stress and Mental Health</button>
                        <button className="btn1"
                            onClick={() => this.SkinProblems()}
                        >Skin Problems</button>
                        <button className="btn1"
                            onClick={() => this.PregnancyProblems()}
                        >Pregnancy Problems</button>
                    </div><br />
                </div>

            </div>
        )
    }


}







export default Englishmedicine;