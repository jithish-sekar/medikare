import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { withRouter } from 'react-router-dom';
const FooterPage = withRouter((props) => {
    return (
        <div className='footer'>
            <hr className='foot-hr'></hr>
            <div className='footer'>
                <MDBFooter color="#2193b0" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <h5 className="title">MediKare</h5>
                                <p className='abtp'>
                                    ("Pills & leaves!")
                                </p>
                            </MDBCol>
                            <center>
                                <div className='lnkfb'>
                                <a href='https://www.facebook.com/profile.php?id=100012662224779" rel="noopener noreferrer" target="_blank"' > <i class="fab fa-facebook-square"></i></a>
                                <a href='https://www.linkedin.com/in/jithish-sekar-a46a95157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh8jOfTQUSlWqq9PhJ2Y2Wg%3D%3D" rel="noopener noreferrer" target="_blank" ' > <i class="fab fa-linkedin"></i></a>
                                <a href='https://twitter.com/JithuSekar'><i class="fab fa-twitter"></i></a>
                                <a href=''><i class="fab fa-github"></i></a>
                                </div>
                            </center>

                            <MDBCol md="6">
                                {/* <h5 className='foot-h5'>Resources</h5> */}
                                <ul className='ft1head'>

                                    <div className='ft1'>
                                        <li className="list-unstyled">
                                            <a href="#!"
                                                className='foot-name'
                                            ></a>
                                        </li>
                                        <li className="list-unstyled">
                                            <a href="#!"
                                                className='foot-name'
                                            >  </a>
                                        </li>
                                    </div>
                                    <div className='ft2'>
                                        <li className="list-unstyled">
                                            <a href="#!"
                                                className='foot-name'
                                            > </a>
                                        </li>
                                        <li className="list-unstyled">
                                            <a href="#!"
                                                className='foot-name'
                                            ></a>
                                        </li>
                                    </div>
                                </ul>
                            </MDBCol>
                        </MDBRow>      
                        <center>        
                            <span className='ftrhome'
                            onClick={() => props.history.push('/footerhome')}
                            >Home</span> <span className='ftrhome'
                            onClick={()=>props.history.push('/aboutus')}
                            >About </span>
                            <span className='ftrhome'
                            onClick={()=>props.history.push('/footercreator')}
                            >Creator</span>
                            <span className='ftrhome'
                            onClick={()=>props.history.push('/footerdoctor')}
                            >Talk To Doctor</span>
                        </center>

                    </MDBContainer>
                    {/* <div className='footer-social-link'>

                        <a href="https://www.facebook.com/profile.php?id=100012662224779" rel="noopener noreferrer" target="_blank" >
                            <i class="fab fa-facebook-square"></i>
                        </a>


                        <a href="https://www.linkedin.com/in/jithish-sekar-a46a95157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh8jOfTQUSlWqq9PhJ2Y2Wg%3D%3D" rel="noopener noreferrer" target="_blank" >
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div> */}
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.medikare.org.in/" target='blank'> medikare.org.in </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        </div>
    )
})
export default FooterPage;