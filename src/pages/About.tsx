import { Box, Container } from '@mui/material';
import me from '../assets/me.jpeg';
import { Title } from '../components/Component';


export const About = () => {
    return(
       <Container id="about" sx={{height: "100%", overflow: "hidden"}}>
            <Box>
                <Box width={"150px"}>
                    <Title>Sobre mim</Title>
                </Box>

                <Box className='information'>
                    <p><strong>
                        Cursando engenharia da computação, atualmente trabalho como
                        desenvolveddor front-end, porém também possuo fortes habilidades como
                        desenvolvedor back-end, o que me permite ter bastante flexibilidade em diversos
                        projetos.
                    </strong></p>

                    <p>
                        Mesmo com pouca idade, já trabalhei com diversas linguagens e frameworks, indo desde o front da aplicação,
                        passando por containers e virtualização, até o desenvolvimento de API's e banco de dados.
                        Também tive uma experiência com segurança da informação, onde em 2020, fui o 3º melhor hacker ético na competição do TryHackMe
                    </p>

                    <ul>
                        <li><strong>+3</strong><p>Anos de <br />experiência</p></li>
                        <li><strong>+43</strong><p>Projetos <br /> realizados</p></li>
                        <li><strong>+8</strong><p>Linguagens <br /> de programação</p></li>
                    </ul>
                </Box>
            </Box>
       </Container>
    );
}