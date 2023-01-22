import React, { useEffect } from "react";

import { useGlobalContext } from "../Context";
import Section from "./Section";

const Services = () => {
  const { Servicesupdate } = useGlobalContext();
  useEffect(() =>Servicesupdate(), []);
  return (
   <>
     <Section/>
   </>
  )
};


export default Services;
