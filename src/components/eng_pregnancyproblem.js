import React, { Component } from 'react';

class PregnancyProblems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showmenstrual: false,
            showurinary: false,
            showbloodpressure:false,
        }
    }

    menstrual() {
        this.setState({
            showurinary: false,
            showbloodpressure:false,
            showmenstrual:!this.state.showmenstrual
        })
    }

    urinary() {
        this.setState({
            showmenstrual: false,
            showbloodpressure:false,
            showurinary:!this.state.showurinary
        })
    }
    bloodpressure() {
        this.setState({
            showmenstrual: false,
            showurinary: false,
            showbloodpressure:!this.state.showbloodpressure
        })
    }
    render() {
        return (
            <div>
                <h1 className='h1issues'>Pregnancy Problems</h1>
                <h2 className='h2englishMedicine'>WHAT IS PREGNANCY PROBLEMS ?</h2>
                <p className='penglishMedicine'>During your pregnancy you may have a number of annoying problems that are not dangerous but may need some attention. These problems include cramps, urinary frequency and incontinence, heartburn and indigestion, varicose veins, backache, constipation, haemorrhoids and thrush.</p>
                <p className='penglishMedicine'>Fortunately some simple changes can often relieve your symptoms. Always contact your doctor or midwife if you have any concerns about these or any other health problems during your pregnancy.Leg and foot cramps are most common during the second half of your pregnancy and usually happen at night</p>
            
            
                <br />
                <h1 className='h1general'>Find Your  English Medicines</h1>
                
                <span>
                    {
                        this.state.showmenstrual ?<center>
                            <div className='bgcolorgeneral'><hr />
                                <h1 className='generaltab'> Midol RX/OTC </h1>
                                <h1 className='generaltab'> Motrin IB RX/OTC </h1>
                                <h1 className='generaltab'> Naproxen </h1>
                            </div></center>
                            : null
                    }
                </span>
                <span>
                    {this.state.showurinary ? <center>
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Ditropan</h1>
                            <h1 className='generaltab'>Tolterodine</h1>
                            <h1 className='generaltab'>Trospium</h1>
                        </div></center>
                        : null
                    }
                </span>
                <span>
                    {this.state.showbloodpressure ? <center>
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Hyzaar </h1>
                            <h1 className='generaltab'> Lotrel </h1>
                            <h1 className='generaltab'> Tribenzor</h1>
                        </div></center>
                        : null
                    }
                </span>
               
                <span>
                    <center><h5 className='h5issue'>*Press any of a issue to view medicine*</h5>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.menstrual()}>  Menstrual Cramps </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.urinary()}>  Urinary Stress </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.bloodpressure()}> High Blood Pressure  </button>
                    </center>
                </span>
                <br /><br /><br /><br />
            
            </div>

        );
    }
}
    export default PregnancyProblems;