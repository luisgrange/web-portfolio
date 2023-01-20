import { Box, Container} from '@mui/material';
import { Title } from '../components/Component';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import { shades } from '../components/Styles/Theme';

export const Services = () => {
    return(
        <Container id="services" sx={{height: "100%", overflow: "hidden"}}>
            <Box width={"150px"}><Title>Serviços</Title></Box>
            <Box className='whatOffer'>
                <Box className='box'>
                    <div className="box--head">
                        <TerminalIcon sx={{
                            color: shades.neutral[500],
                            fontSize: "58px"
                        }}/>
                        <h3>Backend</h3>
                    </div>
                    <div className="box--body">
                        <p>
                            Desenvolvo API's para que a comunicação com banco de dados
                            ou outra função de sua escolha seja facilitada, por meio de um
                            código limpo e sempre com as melhores práticas
                        </p>
                    </div>
                </Box>
                <Box className='box'>
                    <div className="box--head">
                        <CodeIcon sx={{
                            color: shades.neutral[500],
                            fontSize: "58px"
                        }}/>
                        <h3>Frontend</h3>
                    </div>
                    <div className="box--body">
                        <p>
                            Faço seus layouts ganharem "vida" por meio das tecnologias
                            do frontend. Sempre de forma rápida e eficiente, com uma ótima perfomance.
                        </p>
                    </div>
                </Box>

                <Box className='box'>
                    <div className="box--head">
                        <BugReportIcon sx={{
                            color: shades.neutral[500],
                            fontSize: "58px"
                        }}/>
                        <h3>Bug Bounty</h3>
                    </div>
                    <div className="box--body">
                        <p>
                            Realizo "caça aos bugs" que podem comprometer seus sistemas, utilizando
                            conhecimentos de Hacking para manter sua empresa ou projeto seguro, livre de usuários mal intencionados
                        </p>
                    </div>
                </Box>
                
            </Box>
        </Container>
    );
}