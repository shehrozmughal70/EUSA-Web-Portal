/*eslint-disable*/
import React from "react";
// reactstrap components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "reactstrap";
// core components

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '220px',
    marginLeft: '-100px',
    width: '70%',
  }
});


function IndexHeader() {
  const classes = useStyles();
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/back6.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className={classes.content}>
            <h1>Quick. Reliable. Affordable.</h1>
            <h3>EUSA aims to add value to customers' lives by providing a smart solution to all their problems. We are providing the largest range of home maintenance services all over Karachi and Lahore.</h3>
          </div>

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
