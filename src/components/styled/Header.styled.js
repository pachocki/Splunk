import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color:${({theme})=>theme.colors.header};
    padding: 20px 0;
    @media(max-width: ${({theme}) => theme.mobile}){
        text-align:center;
    }
    p{
        color:#fff !important;
    }
    h1{
        color:${({theme})=>theme.colors.titleheader};
        padding:1em 0;
        @media(max-width: ${({theme}) => theme.mobile}){
            padding:0;
        
    }
    
`

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:40px;
    
    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction:column;
    }

`

export const Logo=styled.img`
width:150px;
height:100px;
@media(max-width: ${({theme}) => theme.mobile}){
    margin-bottom:1em;
}

`
export const Image = styled.img `
width:475px;
margin-left:35px;
@media(max-width: ${({theme}) => theme.mobile}){
    margin:0;

`