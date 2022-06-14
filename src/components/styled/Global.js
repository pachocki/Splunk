import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
}
body{
    background:${({theme})=>theme.colors.body};
    font-family:'Roboto',sans-serif;
    font-size:1.2rem;
}
p{
    line-height:1.5;
    
   
}
img{
    max-width:100%;
}

`

export default GlobalStyles