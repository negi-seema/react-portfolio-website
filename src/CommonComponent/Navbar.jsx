import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
const Navbar = () => {
  let [menuBtn ,setmenuBtn] = useState(false)
  return (
    <>
      <Wrapper>
        <nav className="container nav__cnt">
          <div className="navwrap">
            <h3 className="logo">
              <NavLink className="nav__links" to="/">
                Technical Negi
              </NavLink>
            </h3>
            <div className={menuBtn ? "nav__List active" : "nav__List"}>
              <NavLink className="nav__links" to="/" onClick={()=>setmenuBtn(false)}>
                Home
              </NavLink>
              <NavLink className="nav__links" to="/about" onClick={()=>setmenuBtn(false)}>
                About
              </NavLink>
              <NavLink className="nav__links" to="/services" onClick={()=>setmenuBtn(false)} >
                Services
              </NavLink>
              <NavLink className="nav__links" to="/contact" onClick={()=>setmenuBtn(false)}>
                Contact
              </NavLink>
            </div>

            <div className="toggle__btn" >
              <GiHamburgerMenu name="menu__icon" className="open-outline" onClick={()=>setmenuBtn(true)}/>
              <FaWindowClose name="menu__close" className="close-outline" onClick={()=>setmenuBtn(false)}/>
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.headerbg};

  .navwrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav__List {
      font-size: 1.6rem;
      display: flex;
      gap: 2.6rem;
      text-transform: uppercase;
    }

    .nav__links {
      padding: 2rem 0;
     
    }

    .toggle__btn {
      font-size: 2rem;
      display: none;
    }

    .toggle__btn [name="menu__close"] {
      display: none;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .nav__cnt {
      position: relative;
      .navwrap {
        padding: 2rem 0;
        .toggle__btn {
          display: flex;
        }
      }

      .nav__List {
        position: absolute;
        flex-direction: column;
        z-index: 999;
        background: ${({ theme }) => theme.color.footerbg};
        top: 100%;
        left: 0;
        right: 0;
        text-align: center;
        transform: translateX(100%);
      }
      .nav__List a{
        color: ${({ theme }) => theme.color.whitetxt};
      }
      .nav__List .nav__links.active{
        color: ${({ theme }) => theme.color.whitetxt};
      }
      .nav__List.active{
        transform: translateX(0%);
      }
      
      .nav__List.active + .toggle__btn [name='menu__icon']{
        display:none;
      }
      .nav__List.active + .toggle__btn [name='menu__close']{
        display:flex;
      }
    }
  }
`;
export default Navbar;
