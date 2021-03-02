import React, { Component } from "react";
import { Grid, cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <h1 className="landh1">MediKare </h1>
        <p className="abtp">("Pills & leaves!")</p>
        <hr />
        <h1 className="h1about">
          "We collaborate with brands and agencies to create memorable
          experiences."
        </h1>
        <h2 className="h2about">
          Think of us as more of a creative partner than a resource. This means
          we have shared perspective on how we can work together to achieve your
          goals. Basically, your new BFF.
        </h2>
        <hr />
        <div className="strategies">
          <div className="p-30px">
            <span className="span1">Discover</span>
            <span>
              <li className="li1">Research</li>
              <li className="li1">Strategy</li>
              <li className="li1">Ideation</li>
            </span>
          </div>
          <div className="p-30px">
            <span className="span1">Design</span>
            <li className="li1">Ux</li>
            <li className="li1">Branding</li>
            <li className="li1">Visual Design</li>
          </div>
          <div className="p-30px">
            <span className="span1">Develop</span>

            <span>
              <li className="li1">Research</li>
              <li className="li1">Strategy</li>
              <li className="li1">Ideation</li>
            </span>
          </div>
        </div>
        <br />
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="landing-grid">
            <cell col={12}>
              <br />
              <hr />
              <div className="creator">
                <h1>Full Stack Web Developer</h1>
                <hr />
                <p>Html/Css | Java script | React | Node.js | MongoDB</p>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/profile.php?id=100012662224779"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jithish-sekar-a46a95157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh8jOfTQUSlWqq9PhJ2Y2Wg%3D%3D"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
                {/* <p>JITHISH SEKAR</p> */}
                <p>LITHISH.S(19CS069)</p>
                <p>MUKESHKUMAR.A(19CS083)</p>
                <p>NANDHINI.R(19CS088)</p>
                <p>MEGA LOSHINI.S(19CS075)</p>
                <p>PAVITHRA.S(19CS104)</p>

                {/* <p className='creator-brand'>"When someone calls me a blogger, I think, 'That's one of the things I used to do.' I'm a creative director for my shoe brand; I'm the editor-in-chief of 'The MediKare,' which is a website and not just a blog anymore."</p> */}
              </div>
              <hr />
              <center>
                <img src="_DSC0090-01.jpeg" alt="avatar" className="img" />
              </center>
              <hr /> <br />
            </cell>
          </Grid>
        </div>
      </div>
    );
  }
}
export default About;
