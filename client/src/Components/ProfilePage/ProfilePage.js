import React, { Component } from 'react';
// import ModalLogin from '../Login/Login';
// import ModalRegister from '../Register/Register';

import { Grid, Row, Col,Jumbotron, Button, Popover,
  Tooltip, Modal,OverlayTrigger, ButtonToolbar, Navbar,
  Nav, NavItem, NavDropdown, MenuItem, Image, Thumbnail,
  Media, ListGroup,ListGroupItem } from 'react-bootstrap';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Groups from '../Groups/Groups';
import Landing from '../Landing/Landing';
import '../Landing/Landing.css';


class ProfilePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showLogin: false,
      showReg:false
    }
    this.renderProfilePage = this.renderProfilePage.bind(this)
  }


renderProfilePage(){
  return(

    <div>
    <Grid fluid="gridlayout">
      <Row className="show-grid">


        <Col xs={6} md={4} id="sec1">
          <p>Profile Photo</p>
        </Col>
        <Col xs={12} md={8} id="sec2">
            <p>Welcome Jim</p>
            <p>Rating: Gold</p>

              <p>Memeber Since: 2017</p>
              <p>Savings to date: $3,689</p>
            </Col>

          </Row>
          <Row className="show-grid2">
            <Col xs={12} lg={12} className="cd-scrolling-bg__content">
              <h2>Groups</h2>
              <Row className="show-grid2">
                <Col xs={12} lg={12} className="cd-scrolling-bg__content">
                  <h2>Your Groups</h2>
                  <a href="http://localhost:3100/users/stripe/connect">STRIPE</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  render(){
    let loginClose = () => this.setState({ showLogin: false });
    let regClose = () => this.setState({ showReg: false });
    return(
      <div>
        <h1>Nav</h1>
        <Link to="/groups">Groups</Link>
        <Link to="/users/profile">Profile Page</Link>
        <Link to="/">Logout</Link>

        <Switch>
          <Route path="/users/profile" component={this.renderProfilePage} />
          <Route path="/groups" component={Groups} />
          <Route path="/" component={Landing} />
        </Switch>


      </div>
    )
  }
}

export default ProfilePage;
