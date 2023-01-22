import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    box-sizing:border-box;
}

html{
    font-size:62.50%;
    
}
h1{
    font-size:4.5rem;
    font-weight:900;
}
h2{
    font-size:4rem;
    font-weight:600;
}
h3{
    font-size:2rem;
    font-weight:600;
}
p{
    font-size:1.6rem;
    font-weight:300;
    color: ${({theme})=>theme.color.lightgrey};
    line-height: 2.10rem;
}
.container{
    max-width:1200px;
    margin:0 auto;
    padding:0 2rem;
}
a{
    text-decoration:none;
    color: ${({theme})=>theme.color.blacktxt};
    font-weight:600;
}
Button{
    cursor:pointer;
}
`

export default GlobalStyle