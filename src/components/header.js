import React from "react";
import { Link } from "gatsby"
import rin1 from "../images/rin1.png";
import rin2 from "../images/rin2.png";
import rin3 from "../images/rin3.png";

const PageHeader = () => {
  return (
    <>
      <h1>Rin Hoshizora (星空凛)</h1>
      <h2>
        The Nya-Mazing Future Wife of Maki
        (yielded to <a href="https://twitter.com/r2salt" target="_blank">r2</a>)
      </h2>
      <br />
      <p className="centerimage">
        <img src={rin2} alt="" />
        <img src={rin1} alt="" />
        <img src={rin3} alt="" />
        <br />
        <Link to='/'>home</Link> | <Link to='/information'>information</Link> |{" "}
        <Link to='/gallery'>gallery</Link>
      </p>
    </>
  );
};

export default PageHeader;
