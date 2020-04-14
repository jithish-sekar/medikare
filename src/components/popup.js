import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Popup extends Component {
    constructor(props) {
        super(props);
    }

    getHeading() {
        switch (this.props.type) {
            case "Genral": return "Meet Genral Doctor";
            case "womens issues": return "Meet Gynacologist";
            case "mental": return "Mentally Disturbed";
            case "skin": return "Skin Allergy";
            case "sexual": return "Sexual Disorder";
            case "pregnancy": return "Pregnancy Issues";
            default: return "Meet Genral Doctor";
        }
    }
    geturl() {
        switch (this.props.type) {
            case "Genral": return "/genral";
            case "womens issues": return "/women";
            case "mental": return "/metal";
            case "skin": return "Skin Allergy";
            case "sexual": return "Sexual Disorder";
            case "pregnancy": return "Pregnancy Issues";
            default: return "Meet Genral Doctor";
        }
    }
    redirect(url) {
        const urlToload = url + this.geturl()
        this.props.history.push('/englishmedicine/generalphysician')
    }
    redirect() {
        this.props.history.push('/ayurvedicmedicine/generalphysician')
    }

    render() {
        return (
            <div className="popup">
                <div>
                    <h4 className='h4'>{this.getHeading()}</h4>
                    <button className='bn' onClick={() => this.redirect("/english")}>English Medicine</button>
                    <button className='bn' onClick={() => this.redirect1("/ayurvedicmedicine")}>Ayurvedic Medicine</button><br />
                    {this.props.type}
                </div>
            </div>
        );
    }
}

export default withRouter(Popup);