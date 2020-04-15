import React from 'react';
import { Layout, Header, Navigation, Drawer, Content, } from 'react-mdl';
import { withRouter } from 'react-router-dom';

const HeaderComponent = withRouter((props) => {

  return (
    <div className="hdr">
      <Layout>
        <Header className="navbar" title="MediKare" onClick={() => props.history.push('/')}>
          {/* <img src='jithu5.png'
            className='Mklogo' 
            alt='avatar'/> */}
          <Navigation>
            <a href="/home">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/creator">Creator</a>
            <a href="/contactus">Talk To Doctor</a>

          </Navigation>
        </Header>
        {/* <Drawer title="MediKare">
          <Navigation>
            <a href="/home">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/contactus">Contact</a>
            <a href="/creator">Creator</a>
          </Navigation>
        </Drawer> */}
        <Content>
          <div className="page-content" />
        </Content>
      </Layout>
    
      
      

    </div>
  )
})

export default HeaderComponent;