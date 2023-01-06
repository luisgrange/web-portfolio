import React from 'react';
import Typewriter from 'typewriter-effect';
import me from '../assets/me-design.png'
import { Box, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Home = () => {
    return(
        <Container id='home' sx={{height: "100%", overflow: "hidden"}}>
            <Box>
                <h1>Luis <br /> Fernando</h1>

                <div id="me">
                    <img src={me} alt="" />
                </div>            
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
            }}>
                <p className='typewritter'><Typewriter
                    options={{
                        strings: ['Desenvolvedor Fullstack', 'Freelancer', "Ethical hacker"],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </p>
                
                <div className='intro'>
                    <p>Olá, eu sou um desenvolvedor e estou pronto para ajudar no que for necessário</p>
                    <p>
                        Com a alta demanda de profissionais experientes no ramo da codificação e desenvolvimento
                        estou disposto a fazer o melhor para ajudar no que puder.
                    </p>

                    <div>
                        <p><EmailIcon/> E-mail: <a href="mailto:luisfernando237grange@gmail.com">luisfernando237grange@gmail.com</a></p>
                        <p><LocalPhoneIcon/> telefone: <a href="tel:+5519993573647">(19) 993573647</a></p>
                    </div>
                </div>
            </Box>      
        </Container>
    )
}   