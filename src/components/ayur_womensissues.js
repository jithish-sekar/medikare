import React, { Component } from 'react';

class WomensIssues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGynecological: false,
            showAutoimmune: false,
            showBreastcancer: false,
        }
    }

    Gynecological() {
        this.setState({
            showAutoimmune: false,
            showBreastcancer: false,
            showGynecological: !this.state.showGynecological
        })
    }

    Autoimmune() {
        this.setState({
            showGynecological: false,
            showBreastcancer: false,
            showAutoimmune: !this.state.showAutoimmune
        })
    }

    Breastcancer() {
        this.setState({
            showGynecological: false,
            showAutoimmune: false,
            showBreastcancer: !this.state.showBreastcancer
        })
    }

    render() {
        return (
            <div>
                <h1 className='h1issues'>Women Issues</h1>
                <h2 className='h2englishMedicine'>WHAT IS A WOMENS ISSUES?</h2>
                <p className='penglishMedicine'>While both men and women contract various conditions, some health issues affect women differently and more commonly. [1] Furthermore, many women’s health conditions go undiagnosed and most drug trials do not include female test subjects. Even so, women bear exclusive health concerns, such as breast cancer, cervical cancer, menopause, and pregnancy. Women suffer higher heart attack deaths compared to men. Depression and anxiety exhibit more frequently among female patients.</p>
                <p className='penglishMedicine'>Urinary tract conditions present more often in females, and sexually transmitted diseases can cause more harm to women.Among the conditions that present most frequently in women, the following eight illnesses pose considerable health risks.</p>
                <br />
                <h1 className='h1general'>Find Your Ayurvedic Medicines</h1>
                

                <span>
                    {this.state.showGynecological ?
                            <div className='bgcolorgeneral'><hr />
                                <h1 className='generaltab'> Nasya </h1>
                                <h1 className='generaltab'> Gyneza </h1>
                            </div>
                            : null
                    }
                </span>
                <span>
                    {this.state.showAutoimmune ?
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>(*Sanas or Pranayamas to be practised*)</h1>
                        </div>
                        : null
                    }
                </span>
                <span>
                    {this.state.showBreastcancer ?
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Amla Saar</h1>
                            <h1 className='generaltab'> Turmeric(Curclear) </h1>
                        </div>
                        : null
                    }
                </span>
                <span>
                    <center>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.Gynecological()}>  Gynecological </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.Autoimmune()}>  Autoimmune Disease </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.Breastcancer()}>  Breast Cancer </button>

                    </center>
                </span>
                <br /><br /><br /><br />
            </div>


        );
    }
}
export default WomensIssues;