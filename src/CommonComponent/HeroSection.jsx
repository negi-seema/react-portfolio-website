import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useGlobalContext } from "../Context";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const { name, title, img, btntxt } = useGlobalContext();
  return (
    <>
      <Wrapper className="wrap">
        <div className="container hero__cnt">
          <div className="hero__txtcnt">
            <h3>The section</h3>
            <h1>{name}</h1>
            <p className="hero__txt"> {title}</p>
            <Button className="btn">
              <NavLink to="/contact">{btntxt}</NavLink>
            </Button>
          </div>
          <div className="hero__img">
            <img src={img} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  margin: 4rem 0;
  .hero__cnt {
    display: flex;
    align-items: center;
    max-width: 100rem;
    justify-content: space-between;
    .hero__txtcnt {
      max-width: 30rem;
      .hero__txt {
        margin-bottom: 1rem;
      }
      .btn a {
        color: ${({ theme }) => theme.color.lightgrey};
        padding:1rem 2.5rem;
      }
    }
    .hero__img img {
      max-width: 40rem;
      width: 100%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .hero__cnt {
      flex-wrap: wrap;
      row-gap: 2rem;
    }
  }
`;
export default HeroSection;
