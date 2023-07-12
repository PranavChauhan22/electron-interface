// @ts-check
import React, { useEffect, useState } from "react";
import { getButtonLinks } from "../api";

const Navbar = () => {
  /**
   * @type {[{
   *  heroku?: string;
   *  google_cloud?: string;
   *  vercel?: string;
   *  github?: string;
   *  }, React.Dispatch<any>]}
   */
  const [links, setLinks] = useState(null);
  useEffect(() => {
    getButtonLinks().then(setLinks);
  }, []);
  return (
    <></>
  );
};



export default Navbar;
