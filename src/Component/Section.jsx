import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../CommonComponent/Button";
import { useGlobalContext } from "../Context";
const Section = () => {
  const { arra } = useGlobalContext();
  console.log(arra);
  if (arra !== undefined) {
    return (
      <Wrapper>
        <h2 className="services__title">OUR SERVICES</h2>
        <div className="container">
          <div className="wrap">
            {console.log(arra)}
            {arra.map((curVal, index) => {
              let { img, text } = curVal;
              return (
                <div className="cnt" key={index}>
                  <img src={img} className="service__img" />
                  <p className="service__txt">{text}</p>
                  <Button className="btn">
                    <NavLink to="/about">MORE</NavLink>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  .services__title {
    text-align: center;
    margin: 3rem;
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .cnt {
    overflow: hidden;
    position: relative;
    ${"" /* background:${({theme})=>theme.color.headerbg}; */}
    max-height: 300rem;
    height: 100%;
    max-width: 30%;
    margin: 1rem;
    text-align: center;
    padding: 3rem 1rem;
    box-shadow: ${({ theme }) => theme.color.shadow};
    .service__img {
      max-width: 30rem;
      height: 15rem;
      width: 100%;
    }
    .service__txt {
      padding: 1rem;
    }
    .btn a {
      color: ${({ theme }) => theme.color.lightgrey};
      padding:1rem 2.5rem;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: ${({ theme }) => theme.color.hoverbg};
      transform: translateX(-100%);
      transition: all 0.3s linear;
    }
    &:hover::after {
      transform: translateX(100%);
      transition: all 0.3s linear;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: ${({ theme }) => theme.color.hoverbg};
      transform: translateX(100%);
      transition: all 0.5s linear;
    }

    &:hover::before {
      transform: translateX(-100%);
      transition: all 0.5s linear;
    }
  }

  @media (max-width : ${({theme})=>theme.media.mobile}){
    .cnt {
      max-width:100%;
    }
  }
`;
export default Section;
