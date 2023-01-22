import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Button from '../CommonComponent/Button';

const Success = ()=>{
    return <Wrapper>
    <div className='wrap'>FORM SUBMIT SUCCESS  </div>
   <Button className='btn'><NavLink to='/'>GO BACK</NavLink></Button> 
    </Wrapper>
}

const Wrapper = styled.section`
.wrap{
    box-shadow:${({theme})=>theme.color.shadow};
    background:${({theme})=>theme.color.footerbg};
   color:${({theme})=>theme.color.whitetxt};
    padding: 10rem 3rem;
    border-radius:1rem;
    max-width:50rem;
    margin:2rem;
}
    font-size: 4rem;
    text-align: center;
    margin: 5rem auto;
.btn a{
   color:${({theme})=>theme.color.whitetxt};

}
`
export default Success