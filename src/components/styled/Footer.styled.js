import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  margin-top:4em;

  ul {
    list-style-type: none;
    padding-left:1em;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }
  img{
    width:150px;
    padding-left:1em;
    padding-bottom:1em;
}

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`