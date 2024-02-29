import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Vidushi Singhal.</div>
      <div>
        <Link to={"https://github.com/21vidushi"} target="_blank">
        <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/vidushi-singhal-ba3980226/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/its_vidsinghal_/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
