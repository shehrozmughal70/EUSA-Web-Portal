import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavLink,
  NavItem,
  Nav,
  Container,
} from "reactstrap";


const useStyles = makeStyles({
  nav__left: {
    display: 'flex'
  },
  image: {
    height: '40px',
    paddingRight: '10px'
  },
  nav__center: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginLeft: '100px'
  },
  blue: {
    color: 'blue'
  },
  aboutus: {
    backgroundColor: '#2ca8ff',
    marginTop: '10px'
  }
});

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [popOverOpen, setPopOverOpen] = useState(false);
  const [popOverOpen1, setPopOverOpen1] = useState(false);
  const [popOverOpen2, setPopOverOpen2] = useState(false);

  const classes = useStyles();


  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const preventDefault = (event) => event.preventDefault();
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top "} expand="lg" color="white">
        <Container>
          <div className="navbar-translate">
            <div className={classes.nav__left}>
              <img className={classes.image} src={require("../../assets/img/logo1.jpg")} alt="" />
              <NavbarBrand
                href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
                target="_blank"
                id="navbar-brand"
                style={{ fontWeight: 'bold', fontSize: '20px', color: '#2ca8ff' }}
              >
                Eusa
            </NavbarBrand>
            </div>
          </div>
          <div className={classes.nav__center}>
            <Link onMouseEnter={() => setPopOverOpen(true)} onMouseLeave={() => setPopOverOpen(false)} id="hire" href="#" onClick={preventDefault}>Hire Workers</Link>
            <UncontrolledPopover isOpen={popOverOpen} toggle={() => setPopOverOpen(!popOverOpen)} placement="bottom" target="hire">
              <PopoverHeader>Chatbot</PopoverHeader>
              <PopoverBody>
                Single place for your queries
                </PopoverBody>
            </UncontrolledPopover>
            <Link onMouseEnter={() => setPopOverOpen1(true)} onMouseLeave={() => setPopOverOpen1(false)} id="work" href="#" onClick={preventDefault}>Find Work</Link>
            <UncontrolledPopover isOpen={popOverOpen1} toggle={() => setPopOverOpen1(!popOverOpen1)} placement="bottom" target="work">
              <PopoverHeader>Chatbot</PopoverHeader>
              <PopoverBody>
                Single place for your queries
                </PopoverBody>
            </UncontrolledPopover>
            <Link onMouseEnter={() => setPopOverOpen2(true)} onMouseLeave={() => setPopOverOpen2(false)} id="service" href="#" onClick={preventDefault}>Services</Link>
            <UncontrolledPopover isOpen={popOverOpen2} toggle={() => setPopOverOpen2(!popOverOpen2)} placement="bottom" target="service">
              <PopoverHeader>Chatbot</PopoverHeader>
              <PopoverBody>
                Single place for your queries
                </PopoverBody>
            </UncontrolledPopover>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav nav>

              <NavItem>
                <NavLink style={{ backgroundColor: '#2ca8ff', color: 'white', marginTop: '8px', marginRight: '10px' }} href="#aboutus">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ backgroundColor: '#2ca8ff', color: 'white', marginTop: '8px', padding: '-10px' }} href="#aboutus">Ask a Query</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
