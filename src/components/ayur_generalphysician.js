import React, { Component } from 'react';

class GeneralPhysician extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showfever: false,
            showcold: false,
            showcaugh: false,
            showthroatpain: false,

        }

    }

    fever() {
        this.setState({
            showcold: false,
            showcaugh: false,
            showthroatpain: false,
            showfever: !this.state.showfever
        })
    }
    cold() {
        this.setState({
            showfever: false,
            showcaugh: false,
            showthroatpain: false,
            showcold: !this.state.showcold
        })
    }
    caugh() {
        this.setState({
            showfever: false,
            showcold: false,
            showthroatpain: false,
            showcaugh: !this.state.showcaugh
        })
    }
    throatpain() {
        this.setState({
            showfever: false,
            showcold: false,
            showcaugh: false,
            showthroatpain: !this.state.showthroatpain
        })
    }
    render() {
        return (
            <div>
                <h1 className='h1issues'>Genral Physician</h1>
                <h2 className='h2englishMedicine'>WHAT IS A GENERAL MEDICINE?</h2>
                <p className='penglishMedicine'> Internal medicine or general internal medicine (in Commonwealth nations) is the medical specialty dealing with the prevention, diagnosis, and treatment of internal diseases. Physicians specializing in internal medicine are called internists, or physicians (without a modifier) in Commonwealth nations.</p>
                <p className='penglishMedicine'>Much of their work takes place with hospitalised patients and most general physicians also see patients in their consulting rooms.</p>
                <p className='penglishMedicine'>Their broad range of expertise differentiates General Physicians from other specialists who limit their medical practice to problems involving only one body system or to a special area of medical knowledge.</p>

                <br />
                <h1 className='h1general'>Find Your Ayurvedic  Medicines</h1>
               
                <span>
                    {
                        this.state.showfever ?
                            <center>
                            <div className='bgcolorgeneral'><hr />
                                <h1 className='generaltab'> Sudharshan Leaves </h1>
                                <h1 className='generaltab'> Ginger </h1>
                                <h1 className='generaltab'> Neem </h1>
                                <h1 className='generaltab'> Cloves</h1>

                            </div></center>
                            : null
                    }
                </span>
                <span>
                    {this.state.showcold ?
                      <center>  <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Tulsi</h1>
                            <h1 className='generaltab'>Turmeric Powder</h1>
                            <h1 className='generaltab'>Black Pepper</h1>
                        </div></center>
                        : null
                    }
                </span>
                <span>
                    {this.state.showcaugh ?
                        <center>                       <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Tulsi Tea </h1>
                            <h1 className='generaltab'>Garlic </h1>
                            <h1 className='generaltab'>Pepper Mint</h1>
                        </div></center>
 
                        : null
                    }
                </span>
                <span>
                    {this.state.showthroatpain ?
                        <center>
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Turmeric Milk </h1>
                            <h1 className='generaltab'>Gargle with salt water</h1>
                            <h1 className='generaltab'>Honey</h1>
                        
                        </div></center>
                        : null
                    }
                </span>
                <span>
                    <center><h5 className='h5issue'>*Press any of a issue to view medicine*</h5>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.fever()}>  Fever </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.cold()}>  Cold </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.caugh()}>  Cough </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.throatpain()}>  Throat Pain </button>
                    </center>
                </span>
                <br /><br /><br /><br />

            </div>

        );
    }
}

export default GeneralPhysician;