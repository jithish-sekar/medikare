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
                <h1 className='h1general'>Find Your English Medicines</h1>
                
                <span>
                    {
                        this.state.showfever ?
                            <div className='bgcolorgeneral'><hr />
                                <h1 className='generaltab'> Paracetomol </h1>
                                <h1 className='generaltab'> Ibuprofen </h1>
                                <h1 className='generaltab'> Acetaminophen </h1>
                            </div>
                            : null
                    }
                </span>
                <span>
                    {this.state.showcold ?
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Benadryl</h1>
                            <h1 className='generaltab'>Diphenhydramine</h1>
                            <h1 className='generaltab'>Chloropheniramine</h1>
                            <h1 className='generaltab'>Cetirizine </h1>
                        </div>
                        : null
                    }
                </span>
                <span>
                    {this.state.showcaugh ?
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'> AMDROL-T  (syrup)</h1>
                            <h1 className='generaltab'> DARCET    (syrup) </h1>
                            <h1 className='generaltab'>Guaifenesin</h1>
                        </div>
                        : null
                    }
                </span>
                <span>
                    {this.state.showthroatpain ?
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Acetaminophen (Tylenol) </h1>
                            <h1 className='generaltab'> ibuprofen (Advil or Motrin)</h1>
                        </div>
                        : null
                    }
                </span>
                <span>
                    <center>
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