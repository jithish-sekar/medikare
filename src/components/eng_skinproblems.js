import React, { Component } from 'react';

class SkinProblems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showpimples: false,
            showsunburn: false,
            showvitiligo: false,
            showshingles: false,
        }
    }

    pimples() {
        this.setState({
            showsunburn: false,
            showvitiligo: false,
            showshingles: false,
            showpimples: !this.state.showpimples
        })
    }
    sunburn() {
        this.setState({
            showpimples: false,
            showvitiligo: false,
            showshingles: false,
            showsunburn: !this.state.showsunburn
        })
    }
    vitiligo() {
        this.setState({
            showpimples: false,
            showsunburn: false,
            showshingles: false,
            showvitiligo: !this.state.showvitiligo
        })
    }
    shingles() {
        this.setState({
            showpimples: false,
            showsunburn: false,
            showvitiligo: false,
            showshingles: !this.state.showshingles
        })
    }
    render() {
        return (
            <div>
                <h1 className='h1issues'>Skin Problems</h1>
                <h2 className='h2englishMedicine'>WHAT IS SKIN PROBLEM?</h2>
                <p className='penglishMedicine'>Your skin is your body's largest organ. It covers and protects your body.A skin disease characterized by dark wartlike patches in the body folds; can be benign or malignant. acne. an inflammatory disease involving the sebaceous glands of the skin; characterized by papules or pustules or comedones. They are sold, controversially, for their meat and scales, and for use in traditional Chinese medicine, in which parts of the animal are used to treat ailments such as skin diseases, menstrual disorders and arthritis.</p>
                <p className='penglishMedicine'>Anything that irritates, clogs, or inflames your skin can cause symptoms such as redness, swelling, burning, and itching. Allergies, irritants, your genetic makeup, and certain diseases and immune system problems can cause rashes, hives, and other skin conditions. Many skin problems, such as acne, also affect your appearance.</p>

                <br />
                <h1 className='h1general'>Find Your English Medicines</h1>
                
                <span>
                    {
                        this.state.showpimples ?<center>
                            <div className='bgcolorgeneral'><hr />
                                <h1 className='generaltab'> Retino-A </h1>
                                <h1 className='generaltab'> Doxycycline RX </h1>
                                <h1 className='generaltab'> Clindamycin </h1>
                            </div></center>
                            : null
                    }
                </span>
                <span>
                    {this.state.showsunburn ?<center>
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>ibuprofen</h1>
                            <h1 className='generaltab'>Naproxin</h1>
                        </div></center>
                        : null
                    }
                </span>
                <span>
                    {this.state.showvitiligo ? <center>
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'> Betamethasone</h1>
                            <h1 className='generaltab'> Hydrocortisone </h1>
                            <h1 className='generaltab'>Vitamin D</h1>
                        </div></center>
                        : null
                    }
                </span>
                <span>
                    {this.state.showshingles ? <center>
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Acyclovir </h1>
                            <h1 className='generaltab'>Valacyclovir </h1>
                            <h1 className='generaltab'>Famvir </h1>

                        </div></center>
                        : null
                    }
                </span>
                <span>
                    <center><h5 className='h5issue'>*Press any of a issue to view medicine*</h5>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.pimples()}> Pimples </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.sunburn()}>  Sun Burn </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.vitiligo()}>  Vitiligo </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.shingles()}>  Shingles</button>
                    </center>
                </span>
                <br /><br /><br /><br />



            </div>

        );
    }
}
export default SkinProblems;