import SocialIcons from './SocialIcons'
import { Container } from './styled/Container.styled'
import { Flex } from './styled/Flex.styled'
import { StyledFooter } from './styled/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/splunk.svg' alt='' />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+4794238922</li>
            <li>example@splunk.com.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Splunk. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
