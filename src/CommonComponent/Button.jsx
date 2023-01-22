import styled from "styled-components";

const Button = styled.button`
background:${({theme})=>theme.color.footerbg};
color:${({theme})=>theme.color.whitetxt};
font-size: 1.5rem;
    outline: 0;
    font-weight: 500;
    border: 0;
    padding: 1rem 2.5rem;
`

export default Button;