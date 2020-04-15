import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Ayurvedicmedicine extends Component {
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

    generalPhysicianayur = () => {
        this.props.history.push('ayurvedicmedicine/generalphysician');
    }
    hairandscalpayur = () => {
        this.props.history.push('ayurvedicmedicine/hairandscalp')
    }
    pregnancyproblemayur() {
        this.props.history.push('ayurvedicmedicine/pregnancyproblem')
    }
    skinproblemsayur() {
        this.props.history.push('ayurvedicmedicine/skinproblem')
    }
    stressandmentalhealthayur() {
        this.props.history.push('ayurvedicmedicine/stressandmentalhealth')
    }
    womenissuesayur() {
        this.props.history.push('ayurvedicmedicine/womensissues')
    }

    render() {
        return (
            <div className='englishMedi'>
                <h1 className='h1EngMedi'> Ayurvedic Medicine</h1>
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
                    </div>   </center>
                <div className='landing-grid'>
                    <div className="feel">
                        <h1>How You Feel Today?</h1>
                        <button className="btn1"
                            onClick={() => this.womenissuesayur()}
                        >Womens Issues</button>
                        <button className="btn1"
                            onClick={() => this.generalPhysicianayur()}
                        >Genral Physician</button>
                        <button className="btn1"
                            onClick={() => this.hairandscalpayur()}
                        >Hair and Scalp</button>
                        <button className="btn1"
                            onClick={() => this.stressandmentalhealthayur()}
                        >stress and Mental Health</button>
                        <button className="btn1"
                            onClick={() => this.skinproblemsayur()}
                        >Skin Problems</button>
                        <button className="btn1"
                            onClick={() => this.pregnancyproblemayur()}
                        >pregnancy Problems</button>
                    </div><br />
                </div>
            </div>
        )
    }


}







export default Ayurvedicmedicine;