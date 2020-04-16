// import React, { Component } from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';


// // const validate = values => {
// //     var errors = {};
// //     if (!values.name) {
// //         errors.name='name is required'
// //     } 
// //         else if (values.name.length > 15) {
// //             errors.name='max 15 characters only'
// //         }
// //     else if (values.name.length < 3) {
// //         errors.name='min 3 characters required'
// //     }
// //     return errors;
// // }
// const FormValidation = () => {

//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             list: '',
//             number:'',
//         },

//         validationSchema: yup.object({
//             name: yup.string()
//                 .required('*name is required')
//                 .trim()
//                 .strict()
//                 .min(3, '*minimum 3 characters required')
//                 .max(15, '*maximum 15 characters only'),
//             email: yup.string()
//                 .email()
//                 .required('*email is required'),
//             list: yup.string()
//                 .required('*select state'),
//             number: yup.string()
//                 .required('*enter the number')
//                 .min(10, 'enter valid mobile Number')
//                 .max(10,'enter valid mobile Number'),
//         }),
//         onSubmit: (userInputData) => {
//             console.log(userInputData);
//         }
//     })
//     return (
//         <div className='formvalidation-style'>
//             <center>
//             <form autoComplete='off' onSubmit={formik.handleSubmit}>
//                 <div className='form-group'>
//                 <label>Name:</label><br />
//                     <input   
//                     className="input-form"        
//                     type='text'
//                     name='name'
//                     onChange={formik.handleChange}
//                     value={formik.values.name} />
//                 <br />
//                     {formik.errors.name ?
//                         <div className='text-danger'>{formik.errors.name}</div>
//                         : null
//                     }
//                 </div>

//                 <div className='form-group'>
//                 <label>Email:</label><br />
//                     <input   
//                     className="input-form"        
//                     type='text'
//                     name='email'
//                     onChange={formik.handleChange}
//                     value={formik.values.email} />
//                 <br />
//                 {formik.errors.email ?
//                     <div className='text-danger'>{formik.errors.email}</div>
//                    : null 
//                     }
//                 </div>

//                     <br/><div className='form-group'>
//                         <label>Mobile Number:</label><br/>
//                             <input
//                             className='input-form'
//                             type='number'
//                             name='number'
//                             onChange={formik.handleChange}
//                             value={formik.values.number}
//                         />
//                          <br />
//                       {formik.errors.number ?
//                       <div className='text-danger'>{formik.errors.number}</div>
//                       :null 
//                     }
//                     </div>
//                     <div className='form-group'>
//                         <label>Select State:</label>  <br />
//                         <select
//                         className='input-form'
//                         type='text'
//                         name='list'
//                         onChange={formik.handleChange}
//                         value={formik.values.list}>



//                             <option value=''>---Select State---</option>
//                             <option value='1'>Tamil Nadu</option>
//                             <option value='2'>Kerala</option>
//                             <option value='3'>Karnataka</option>
//                             <option value='4'>Andhra Pradesh</option>
//                             <option value='5'>Maharashtra</option>
//                             <option value='6'>Madhya Pradesh</option>
//                             <option value='7'>Goa</option>
//                             <option value='8'>Uttar Pradesh</option>
//                             <option value='9'>Rajasthan</option>
//                             <option value='10'>Telangana</option>
//                         </select>
//                     <br />
//                      {formik.errors.list ?
//                     <div className='text-danger'>{formik.errors.list}</div>
//                     : null 
//                     }

//                 </div>    

//                 <button className='btn btn-primary'>Submit</button>


//             </form>


//             <div className="creator">
//                             <h1>Full Stack Web Developer</h1>
//                             <hr/>
//                             <p>
//                             Html/Css | Java script | React | Node.js | MongoDB     
//                             </p>
//                             <div className="social-links">

//                                 <a href="https://www.facebook.com/profile.php?id=100012662224779" rel="noopener noreferrer" target="_blank" >
//                                 <i className="fa fa-facebook-square " aria-hidden="true"></i>
//                                 </a>


//                                 <a href="https://www.linkedin.com/in/jithish-sekar-a46a95157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh8jOfTQUSlWqq9PhJ2Y2Wg%3D%3D" rel="noopener noreferrer" target="_blank" >
//                                 <i className="fa fa-linkedin-square" aria-hidden="true"></i>
//                                 </a>
//                             </div>
//                             <p>JITHISH SEKAR</p>
//                             <p>"When someone calls me a blogger, I think, 'That's one of the things I used to do.' I'm a creative creative director for my shoe brand; I'm the editor-in-chief of 'The MediKare,' which is a website and not just a blog anymore."</p>
//             </div>    
//             </center>    
//         </div>
//     )

// }
// export default FormValidation;



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
          {/* <MDBRow>
            <MDBInput
              type="checkbox"
              value="conditions"
              id="materialInvalidCheck"
              required
              label="Agree to terms and conditions"
            >
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </MDBInput>
          </MDBRow> */}
          <center>
          <button className='talkDoc'
            type="submit"
          >
              Submit Form
          </button></center>
          <hr />
        </form>
<br/><br/><br/>
        {this.state.showPopup === true &&
          <div>
            <Popup type={this.state.popupType} />
            <div onSubmit={e => { this.closePopup() }} className="overlay"></div>
          </div>
        }
      </div>
    );
  }
}
export default FormsPage;