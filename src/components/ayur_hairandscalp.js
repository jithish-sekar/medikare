
import React, { Component } from 'react';

class HairScalp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showsores: false,
            showhairloss: false,
            showcradlecap: false,
            showdandruff: false,
        }
    }

    sores() {
        this.setState({
            showhairloss: false,
            showcradlecap: false,
            showdandruff: false,
            showsores: !this.state.showsores
        })
    }
    hairloss() {
        this.setState({
            showsores: false,
            showcradlecap: false,
            showdandruff: false,
            showhairloss: !this.state.showhairloss
        })
    }
    cradlecap() {
        this.setState({
            showsores: false,
            showhairloss: false,
            showdandruff: false,
            showcradlecap: !this.state.showcradlecap
        })
    }
    dandruff() {
        this.setState({
            showsores: false,
            showhairloss: false,
            showcradlecap: false,
            showdandruff: !this.state.showdandruff
        })
    }
    render() {
        return (
            <div>
                <h1 className='h1issues'>Hair and Scalp</h1>
                <h2 className='h2englishMedicine'>WHAT IS A  HAIR AND SCALP?</h2>
                <p className='penglishMedicine'>The scalp is usually described as having five layers, which can conveniently be remembered as a mnemonic.</p>
                <p className='penglishMedicine'>S: The skin on the head from which head hair grows. It contains numerous sebaceous glands and hair follicles.
                C: Connective tissue. A dense subcutaneous layer of fat and fibrous tissue that lies beneath the skin, containing the nerves and vessels of the scalp.
                A: The aponeurosis called epicranial aponeurosis (or galea aponeurotica) is the next layer.
                L: The loose areolar connective tissue layer provides an easy plane of separation between the upper three layers and the pericranium. In scalping the scalp is torn off through this layer.
                   P: The pericranium is the periosteum of the skull bones and provides nutrition to the bone and the capacity for repair. It may be lifted from the bone to allow removal of bone windows</p>


                <br />
                <h1 className='h1general'>Find Your Ayurvedic Medicines</h1>
                
                <span>
                    {
                        this.state.showsores ?<center>
                            <div className='bgcolorgeneral'><hr />
                                <h1 className='generaltab'>Coconut Oil With Alovera</h1>
                                <h1 className='generaltab'>Baking Soda </h1>
                                <h1 className='generaltab'>Garlic </h1>
                                <h1 className='generaltab'>Vitamin D </h1>
                            </div></center>
                            : null
                    }
                </span>
                <span>
                    {this.state.showhairloss ? <center>
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Fenugreek Seeds</h1>
                            <h1 className='generaltab'>Triphala</h1>
                            <h1 className='generaltab'>Therapeutic Oil</h1>
                        </div></center>
                        : null
                    }
                </span>
                <span>
                    {this.state.showcradlecap ?<center>
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Oil massage </h1>
                            <h1 className='generaltab'> Vaseline  </h1>
                        </div></center>
                        : null
                    }
                </span>
                <span>
                    {this.state.showdandruff ?<center>                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'> Camphor With Coconut Oil </h1>
                            <h1 className='generaltab'>Coconut With Lemon</h1>
                            <h1 className='generaltab'>White Egg And Lime Juice </h1>       
                        </div></center>

                        : null
                    }
                </span>
                <span>
                    <center><h5 className='h5issue'>*Press any of a issue to view medicine*</h5>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.dandruff()}>  Dandruff </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.hairloss()}>  Hair Loss </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.cradlecap()}>  Cradle Cap </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.sores()}> sores  </button>
                    </center>
                </span>

                <br /><br /><br /><br />




            </div>

        );
    }
}
export default HairScalp;