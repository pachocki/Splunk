import styled from 'styled-components';

export const Button = styled.button`
border-radius:50px;
border:none;
box-shadow: 0 0 10px #047a05ad;
cursor:pointer;
font-size:16px;
font-weight:700;
padding:15px 60px;
background-color:${({bg})=>bg || '#fff'};
color:${({color}) => color || '#000'};
margin:${({margin}) => margin || '0'};
transition:0.5s ease-in-out;

&:hover{
    opacity:0.5;transform:scale(0.98);
}

`