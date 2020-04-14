import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
class Popup extends Component {
  constructor(props) {
    super(props);
  }
  getHead() {
    switch (this.props.type) {
      case "SUBMITTED": return "ThankYou";
    }
  }
  render() {
    return (
      <div className="popup">
        <div>
          <h4 className='h4'>{this.getHead()}</h4>
          <h1>Sucessfully submitted</h1>
          {this.props.type}
        </div>
      </div>
    );
  }
}

class FormsPage extends Component {
  constructor(props) {
    super(props);
    this.items = [
      'Tamil Nadu',
      'kerala',
      'karnataka',
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chhattisgarh',
      'Goa',
      'Gujarat',
      'Haryana',
      'Himachal Pradesh',
      'JharKhand',
      'Madhya Pradesh',
      'Maharashtra',
      'Manipur',
      'Meghalya',
      'Mizoram',
      'Nagaland',
      'Odisha',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'Telangana',
      'Tirpura',
      'Uttar Pradesh',
      'Uttarkhand',
      'West Bengal'
    ];
    this.state = {
      suggestions: [],
      text: '',
      popupType: "",
      showPopup: false,

    }
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

  onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }))
  }

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (

      <ul>{suggestions.map((item) => <ul onClick={() => this.suggestionSelected(item)}>{item}</ul>)}</ul>

    )
  }
  state = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    MobileNumber: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    console.log(event.target)
    if (event.target.checkValidity()) {
      this.openPopup("Will contact you shortly!")
    } else {
      //all if switch state 
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <div className='formvalid'>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="Last name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="city"
                label="City"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                className='AutoCompleteText'
                value={text}
                onChange={this.onTextChange}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="state"
                label="State"
                required>
                {this.renderSuggestions()}

                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.MobileNumber}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="MobileNumber"
                label="Mobile Number"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
                </MDBRow>
                <button className='talkDoc'
            type="submit"
          >
            Submit Form
          </button>
        </form>

        {this.state.showPopup === true &&
          <div>
            <Popup type={this.state.popupType} />
            <div onSubmit={e => { this.closePopup() }} className="overlay"></div>
          </div>
        }
        <br/><br/><hr/>
      </div>
    );
  }
}
export default FormsPage;