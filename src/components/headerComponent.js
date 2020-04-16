import React from 'react';
import { Layout, Header, Navigation, Drawer, Content, } from 'react-mdl';
import { withRouter } from 'react-router-dom';

const HeaderComponent = withRouter((props) => {

  const redirectTo = (value) => {
    props.history.push(value);
  }

  return (
    <div className="hdr">
      <Layout>
        <Header className="navbar" title="MediKare">
          <Navigation>
            <h1
              className='hdrcomponenth1'
              onClick={() => redirectTo('/homeheader')}>Home</h1>
            <h1
              className='hdrcomponenth1'
              onClick={() => redirectTo('/aboutus')}
            >About Us</h1>
            <h1
              className='hdrcomponenth1'
              onClick={() => redirectTo('/creator')}
            >Creator
             </h1>
{/* 
            <h1
              className='hdrcomponenth1'
              onClick={() => redirectTo('/talktodoctor')}

            >TTD</h1> */}

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
        {/* <Content>
          <div className="page-content" />
        </Content> */}
      </Layout>




    </div>
  )
})

export default HeaderComponent;