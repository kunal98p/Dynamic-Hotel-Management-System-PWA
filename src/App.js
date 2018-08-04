import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, FormInline } from 'mdbreact';
import './AppPage.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import CarouselPage from './CarouselPage.js'
import  { Carousel, CarouselInner, CarouselItem } from 'mdbreact';


class AppPage extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }
  render(){
  const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    return (
      <div id="apppage">
       
        
  



        <Router>
          <div>
          <Navbar dark expand="md" fixed="top" scrolling>
            <Container>
              <NavbarBrand>
                <strong className="white-text display-4">HMS</strong>
              </NavbarBrand>
              <NavbarToggler onClick = { this.onClick } />
              <Collapse isOpen = {this.state.collapse} navbar>
                <NavbarNav left>
                  <NavItem active>
                      <NavLink to="#!">DINE</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="#!">BOOK</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="#!">ORDER ONLINE</NavLink>
                  </NavItem>
                </NavbarNav>

               
              </Collapse>
            </Container>
          </Navbar>
          { this.state.collapse && overlay}
          </div>


           
        </Router>

        
          <View>
          <Carousel
           
            
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="http://cdn.desktopwallpapers4.me/wallpapers/world/1680x1050/4/30906-madhubhan-resort-and-spa-1680x1050-world-wallpaper.jpg" alt="First slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="http://www.madhubhanresortandspa.com/gallery/MPS-04.jpg" alt="Second slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src="https://t-ec.bstatic.com/images/hotel/max1024x768/399/39930889.jpg" alt="Third slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src="http://www.indiakhoj.co.in/wp-content/uploads/2016/11/ZDS-01.jpg" alt="Mattonit's item" />
              </View>
            </CarouselItem>
          </CarouselInner>
           <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-8 mt-xl-5 mb-5">
                  <h1 className="font-weight-bold mt-sm-5 display-1">COMING SOON!!</h1>
                  <hr className="hr-light"/>
                  <h5 className="mb-4 ">
                  We're working hard to finish the development of this site. </h5>
                  <br/>
                  <h4 className="mb-4 d-none d-md-block font" >
                  <h4 className="display-3">"Dynamic Hotel Management System(HMS)"</h4>
                   </h4>
                </div>
               
                </Row>
              
              </Container>
            </Mask>
              </Carousel>
          </View>

            <Container>
            <Row className="py-5">
              <Col md="12" className="text-center">
                <p>
                  This site is made to demonstrate Dynamic Hotel Management System where user can the Guest can see the availaibilty of Rooms , waiting time in Restaurants and order food online </p> 
              </Col>
            </Row>
          </Container>

    

    </div>
  
    );
  }
};

export default AppPage;