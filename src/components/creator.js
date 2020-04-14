import React, { Component } from 'react';
import { Grid, cell } from 'react-mdl';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Creator extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <cell col={12}>
                        <center>
                            <img src="_DSC0090-01.jpeg"
                                alt="avatar"
                                className="img" />
                        </center>
                        <hr/>       
                        <div className="creator">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>
                                Html/Css | Java script | React | Node.js | MongoDB
                            </p>
                            <div className="social-links">

                                <a href="https://www.facebook.com/profile.php?id=100012662224779" rel="noopener noreferrer" target="_blank" >
                                    <i class="fab fa-facebook-square"></i>
                                </a>


                                <a href="https://www.linkedin.com/in/jithish-sekar-a46a95157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh8jOfTQUSlWqq9PhJ2Y2Wg%3D%3D" rel="noopener noreferrer" target="_blank" >
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                            <p>JITHISH SEKAR</p>
                            <p className='creator-brand'>"When someone calls me a blogger, I think, 'That's one of the things I used to do.' I'm a creative director for my shoe brand; I'm the editor-in-chief of 'The MediKare,' which is a website and not just a blog anymore."</p>

                        </div>
                    </cell>
                </Grid>
            </div>
        )
    }
}
export default Creator;