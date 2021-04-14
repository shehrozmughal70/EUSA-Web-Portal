import React from "react";
// reactstrap components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from "reactstrap";
import Card from '../../components/Card/Card';
// core components

const useStyles = makeStyles({
  cards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 900px)': {

      flexDirection: 'column',
    }
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    flexDirection: 'column'
    // borderBottom: '5px solid #2ca8ff',
  }
  , h: {
    fontWeight: 'bold'
  },
  line: {
    border: '5px solid #2ca8ff',
    width: '30vw'
  },
  banner: {
    display: 'flex',
    flexDirection: 'column',
  },
  paragraph: {
    padding: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    wordWrap: 'break-word',
  }
});

function Images() {

  const classes = useStyles();
  return (
    <>
      <div className={classes.banner}>
        <div className={classes.heading}>
          <h1 className={classes.h}>Our Services</h1>
          <hr className={classes.line} />
        </div>
        <div className={classes.paragraph}>
          <h4>Looking for reliable Construction, Renovation, and Maintenance & Repair Services? Our prices start as low as Rs. 1000* only!</h4>
        </div>

        <div className={classes.cards}>
          <Card image="https://www.thehandyman.com.pk/images/zabbym__Electrician_3_blk.png" heading="ELECTRICAL SERVICES" para="Electrical Faults, UPS Installation, TV Installation, Breaker Replacement, Plug Repair, Wiring etc. Starting as low as Rs. 1000 only." />
          <Card image="https://www.thehandyman.com.pk/images/zabbym__Plumber_blue.png" heading="PLUMBING SERVICES" para="Pipe Leaks, Muslim Shower &amp; Tap Replacement, Geyser Installation, Opening Blocked Drains etc. Starting as low as Rs. 1000 only." />
          <Card image="https://www.thehandyman.com.pk/images/zabbym__Painter_2.png" heading="PAINTING SERVICES" para="Painting walls,ceilings and furniture. Only the most skilled professionals for commercial office paint." />
        </div>
      </div>

      {/* <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-1.png")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-2.png")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-3.png")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
}

export default Images;
