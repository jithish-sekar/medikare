import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
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
                                    ("I only answer to two medicines, Ayurvedic and English medicines.")
                             </p>
                            </MDBCol>

                            <MDBCol md="6">
                                {/* <h5 className='foot-h5'>Resources</h5> */}
                                <ul className='ft1head'>

                                    <div className='ft1'>
                                        <li className="list-unstyled">
                                            <a href="#!"
                                                className='foot-name'
                                            >Home</a>
                                        </li>
                                        <li className="list-unstyled">
                                            <a href="#!"
                                                className='foot-name'
                                            >About Us</a>
                                        </li>
                                    </div>
                                    <div className='ft2'>
                                        <li className="list-unstyled">
                                            <a href="#!"
                                                className='foot-name'
                                            >Talk To Doctor </a>
                                        </li>
                                        <li className="list-unstyled">
                                            <a href="#!"
                                                className='foot-name'
                                            >Creator</a>
                                        </li>
                                    </div>
                                </ul>
                            </MDBCol>
                        </MDBRow>


                     </MDBContainer>
                    <div className='footer-social-link'>

                        <a href="https://www.facebook.com/profile.php?id=100012662224779" rel="noopener noreferrer" target="_blank" >
                            <i class="fab fa-facebook-square"></i>
                        </a>


                        <a href="https://www.linkedin.com/in/jithish-sekar-a46a95157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh8jOfTQUSlWqq9PhJ2Y2Wg%3D%3D" rel="noopener noreferrer" target="_blank" >
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid> */}
                            &copy; {new Date().getFullYear()} Copyright: <a href=""> medikare.org.in </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        </div>
    )
}
export default FooterPage;