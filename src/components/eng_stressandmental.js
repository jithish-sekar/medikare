import React, { Component } from 'react';

class StressMentalHealth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showdepression: false,
            showinsomnia: false,
            showasthma: false,
        }
    }
    depression() {
        this.setState({
            showinsomnia: false,
            showasthma: false,
            showdepression: !this.state.showdepression
        })
    }
    insomnia() {
        this.setState({
            showdepression: false,
            showasthma: false,
            showinsomnia: !this.state.showinsomnia
        })
    }
    asthma() {
        this.setState({
            showdepression: false,
            showinsomnia: false,
            showasthma: !this.state.showasthma
        })
    }
    render() {
        return (
            <div>
                <h1 className='h1issues'>Stress And Mental Health</h1>
                <h2 className='h2englishMedicine'>WHAT IS STRESS AND MENTAL HEALTH?</h2>
                <p className='penglishMedicine'>We all know what it's like to feel stressed, but it's not easy to pin down exactly what stress means. When we say things like "this is stressful" or "I'm stressed", we might be talking about.</p>
                <p className='penglishMedicine'>Situations or events that put pressure on us – for example, times where we have lots to do and think about, or don't have much control over what happens.Our reaction to being placed under pressure – the feelings we get when we have demands placed on us that we find difficult to cope with.</p>
                <p className='penglishMedicine'>There's no medical definition of stress, and health care professionals often disagree over whether stress is the cause of problems or the result of them. This can make it difficult for you to work out what causes your feelings of stress, or how to deal with them. But whatever your personal definition of stress is, it's likely that you can learn to manage your stress better.</p>
                <br />
                <h1 className='h1general'>Find Your English Medicines</h1>
                <span>
                    <center>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.depression()}>  Depression </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.insomnia()}>  Insomnia </button>
                        <button
                            className='btngeneralphysician'
                            onClick={() => this.asthma()}>  Asthma </button>
                    </center>
                </span>
                <span>
                    {
                        this.state.showdepression ?
                            <div className='bgcolorgeneral'><hr />
                                <h1 className='generaltab'> Citalopram(celexa) </h1>
                                <h1 className='generaltab'> Viibryd(vilazodone hydrochloride) </h1>
                                <h1 className='generaltab'> Sertraline </h1>
                            </div>
                            : null
                    }
                </span>
                <span>
                    {this.state.showinsomnia ?
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Zolpidem</h1>
                            <h1 className='generaltab'>Zaleplon</h1>
                            <h1 className='generaltab'>Ramelteon</h1>
                            <h1 className='generaltab'>Eszopiclone</h1>
                        </div>
                        : null
                    }
                </span>
                <span>
                    {this.state.showasthma ?
                        <div className='bgcolorgeneral'><hr />
                            <h1 className='generaltab'>Leukotriene Receptor Antagonists (LTRAs) </h1>
                            <h1 className='generaltab'>Monteluksat(singulair)  </h1>
                            <h1 className='generaltab'>Zileuton</h1>
                        </div>
                        : null
                    }
                </span>
                <br /><br /><br /><br />



            </div>

        );
    }
}
export default StressMentalHealth;