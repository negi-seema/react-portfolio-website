import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Wrapper className="wrap">
        <div className="sub__ftr container">
          <p className="sub__txt">Ready to get started? Talk to us today</p>
          <Button className="sub__btn"><NavLink to='/contact'>GET STARTED</NavLink></Button>
        </div>
        <div className="main__ftr container">
          <div className="ftr__cnt">
            <h3 className="ftr__heading">Technical Negi</h3>
            <p className="ftr__subtxt">
              the site is belonging to a web learning Ready to get started? Talk
              to us today
            </p>
          </div>
          <div className="ftr__cnt">
            <h3 className="ftr__heading">Subscribe to get important update</h3>
            <input type="text" placeholder="YOUR E-MAIL" className="ftr__inp" />
            <Button className="ftr__btn">
              <NavLink to="/">SUBSCRIBE</NavLink>
            </Button>
          </div>
          <div className="ftr__cnt">
            <h3 className="ftr__heading">Follow Us</h3>
            <div className="social__cnt">
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook className="social__icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <AiFillTwitterCircle className="social__icon" />
              </a>
              <a href="https://www.google.com" target="_blank">
                <AiFillGoogleCircle className="social__icon" />
              </a>
            </div>
          </div>
          <div className="ftr__cnt">
            <h3 className="ftr__heading">Call Us</h3>
            <p className="ftr__subtxt">+91 1234454598</p>
          </div>
        </div>
        <hr />
        <div className="caption">@2022 Technical Negi. All Right Reserved</div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.footerbg};
margin-top:5rem;
  .sub__ftr {
    border-radius: 1rem;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.color.headerbg};
    margin: auto;
    max-width: 90rem;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sub__txt {
      max-width: 15rem;
      color: ${({ theme }) => theme.color.footerbg};
      font-weight: 500;
    }
    .sub__btn a{
      color: ${({ theme }) => theme.color.lightgrey};
    }
  }

  .main__ftr {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .ftr__cnt {
      max-width: 25%;
      width: 100%;
      padding: 2rem;
      .ftr__heading {
        color: ${({ theme }) => theme.color.whitetxt};
        font-size: 1.8rem;
        padding-bottom: 1.7rem;
        font-weight: 500;
      }

      .ftr__inp {
        padding: 1rem;
        font-size: 1rem;
        width: 80%;
      }

      .ftr__btn {
        background: ${({ theme }) => theme.color.lightgrey};
        margin: 1rem 0;
      }
      .social__cnt {
        display: flex;
        gap: 0.9rem;
      }
      .social__icon {
        font-size: 2rem;
        color: ${({ theme }) => theme.color.lightgrey};
      }
    }
  }

  hr {
    background: ${({ theme }) => theme.color.lightgrey};
  }
  .caption {
    padding: 1.3rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.lightgrey};
    text-align: center;
    letter-spacing: 0.04rem;
  }

  @media screen and (max-width:${({theme})=>theme.media.tab}) {
    .sub__ftr {
      margin: 0 2rem;
    }
  }

  @media screen and (max-width:${({theme})=>theme.media.mobile}) {
    .main__ftr .ftr__cnt {
      max-width: 100%;
    }
  }
`;
export default Footer;
