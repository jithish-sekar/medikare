import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import Popup from "./popup"





class Landingpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupType: "",
            showPopup: false,
        };
    }
    openPopup = (arg) => {
        this.setState({
            showPopup: true,
            popupType: arg
        });
    }

    closePopup = () => {
        this.setState({
            showPopup: false,
            popupType: ""
        });
    }

    handleOnSubmit = () => {
        this.props.history.push('/englishmedicine');
    }

    handleOnSubmit1 = () => {
        this.props.history.push('/ayurvedicmedicine');
    }


    render() {
        return (
     <div>
            <div style={{ width: "100%", margin: "auto" }} className="rel-inline">
                <Grid className="landing-grid">
                    <cell col={12} className='cell'>
                        <h1 className="landh1">MediKare</h1>
                        <p className="landp">("Pills & leaves!") </p>
                        <hr />
                        <p className="peng">It is treated in the form of a pill or a liquid.</p>
                        <p>"Try English"</p>
                        <button
                            className='button'
                            onClick={() => this.handleOnSubmit()}
                        >English Medicine</button>
                        <hr />
                        <p className="payur">I got the bill for my surgery. Now I know what those doctors were wearing masks for.</p>
                        <p>"Try Ayurvedic"</p>
                        <button
                            className='button'
                            onClick={() => this.handleOnSubmit1()}
                        >Ayurvedic Medicine</button><hr />

                        <div className="fel">
                            <h1 className='happytoserve'>We are happy to serve you pills and leaves.</h1><br/>
                            <button className="btn1" onClick={() => { this.openPopup("womens issues") }}>Womens Issues</button>
                            <button className="btn1" onClick={e => { this.openPopup("Genral") }}>Genral Physician</button><br/><br/><br/>
                            <button className="btn1" onClick={e => { this.openPopup("Hair and Scalp") }}>Hair and Scalp</button>
                            <button className="btn1" onClick={e => { this.openPopup("mental") }}>stress and Mental Health</button><br/><br/><br/>
                            <button className="btn1" onClick={e => { this.openPopup("skin") }}>Skin Problems</button>
                            <button className="btn1" onClick={e => { this.openPopup("pregnancy") }}>pregnancy Problems</button>
                        </div>
                        <br />
                    </cell>
                </Grid>
                {this.state.showPopup === true &&
                    <div>
                        <Popup type={this.state.popupType} />
                        <div onClick={e => { this.closePopup() }} className="overlay"></div>
                    </div>
                }
            </div>
</div>
        )
    }
}
export default Landingpage;