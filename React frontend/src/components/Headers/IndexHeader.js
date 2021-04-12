/*eslint-disable*/
import React from "react";
// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
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
      <div className="page-header " filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/back1.png") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              style={{ objectFit: 'contain' }}
              className="n-logo"
              src={require("assets/img/logo3.png")}
            ></img>
            <h1 className="h1-seo">EUSA WEB</h1>
            <h3>THE SERVE BUILT FOR YOU.</h3>
          </div>

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
