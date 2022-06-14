import styled from "styled-components"

export const StyledCard = styled.div`
display:flex;
align-items:center;
background-color:#efefef70;
border-radius:10px;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
margin:40px 0 0 0;
padding:60px;
gap:1em;
flex-direction:${({layout})=>layout || 'row'};
img{
    width:80%;
}
h2{
padding-bottom:20px;
}
&>div{
    flex:1;
}
@media(max-width: ${({theme}) => theme.mobile}){
    flex-direction:column;

}

`