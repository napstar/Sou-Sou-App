import React, { Component } from 'react';
import ModalLogin from '../Login/Login';
import ModalRegister from '../Register/Register';

import { Grid, Row, Col,Jumbotron} from 'react-bootstrap';
import { Button} from 'mdbreact';
import './Landing.css';
//import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';


import { Link, Route, Switch } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';

class Landing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showLogin: false,
      showReg:false
    }
  }




  render(){
   let loginClose = () => this.setState({ showLogin: false });
   let regClose = () => this.setState({ showReg: false });
       const url = `/react-router-modal-examples`;
  return(

  <div>

  <div>

    <Jumbotron className="jumbotron">
        <h1>OWO Logo</h1>
        <p>
        OWO is ... Information about what we do. Who we cater to and why.
        </p>

              <div className="modButtons">
                <Switch>

                 <ModalRoute path={`/users/login`} component={ModalLogin} />
                 <ModalRoute path={`/users/register`} component={ModalRegister} />

              </Switch>

             <ModalLogin show={this.state.showLogin} onHide={loginClose}/>
             <ModalRegister show={this.state.showReg} onHide={regClose}/>

        
            <ModalContainer />
        </div>




    </Jumbotron>
    </div>
  <Grid fluid="gridlayout">
    <Row className="show-grid">
      <Col xs={12} lg={12} id="row1">
        <h2>Why OWO ?</h2>
      </Col>
    </Row>
    <Row className="show-grid2">
      <Col xs={6} md={4} id="sec1">
        <p>Some images and text about saving  with OwO</p>
      </Col>
      <Col xs={6} md={4} id="sec1">
        <p>Some images and text about saving  with OwO</p>
      </Col>
      <Col xs={6} md={4} id="sec1">
          <p>Some images and text about saving  with OwO</p>
      </Col>
    </Row>
    <Row className="cd-scrolling-bg cd-scrolling-bg--color-1">
      <Col xs={12} lg={12} className="cd-scrolling-bg__content">
        <h2>Why OWO ?</h2>
      </Col>
    </Row>

    <div className="cd-fixed-bg cd-fixed-bg--1">
      <div className="cd-fixed-bg__content">
        <h2>The Future</h2>
      </div>
    </div>

      <Row className="cd-scrolling-bg cd-scrolling-bg--color-2">
        <Col xs={12} md={8} className="cd-scrolling-bg__content">
          <code>&lt;{'2 width col'} /&gt;</code>
        </Col>
        <Col xs={6} md={4} className="cd-scrolling-bg__content">
          <code>&lt;{'1 width col'} /&gt;</code>
        </Col>
      </Row>


      <Row className="show-grid">
        <Col xs={6} xsOffset={6}>
          <code>&lt;{'full width col'} /&gt;</code>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <code>&lt;{'half width'} /&gt;</code>
        </Col>
        <Col md={6} mdPull={6}>
          <code>&lt;{'half width'} /&gt;</code>
        </Col>
      </Row>
    </Grid>
  </div>
    )
  }
}

export default Landing;
