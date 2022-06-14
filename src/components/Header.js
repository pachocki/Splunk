
import {StyledHeader , Nav , Logo , Image} from './styled/Header.styled'
import {Container} from './styled/Container.styled'
import {Flex} from './styled/Flex.styled'
import{Button} from './styled/Button.styled'



export default function Header(){
    return (
        <StyledHeader>
            <Container>
            <Nav>
                <Logo src='./images/splunk.svg' alt="Logo" />
                <Button>Download Now!</Button>
            </Nav>
            <Flex>
                <div>
                <h1>Create Better Future To You!</h1>
                <p>Splunk will help you to build something special. Remember You have a last voice.
                    Create connections with your fans and earn money with fun.</p>
                    <Button bg="#19e9549e" color="#fff" margin="4em 0 2em 0">Get Started For Free!</Button>
                    </div>
                    

                    <Image src="./images/header.svg" alt="men"/>
            </Flex>
            </Container>
        </StyledHeader>
    )
}