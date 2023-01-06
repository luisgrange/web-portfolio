import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { shades } from './Styles/Theme';
import { Box } from '@mui/material';
const Row =  styled.div `
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1f1f1f;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 10px 1px rgb(0 0 0 / 40%);

    & > div{
        width: 90%;
        height:  100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Navbar = () => {
    return(
        <Row>
            <div>
                <div className='logo'><a href='/'>L.</a></div>
                <Box className='menu'>
                    <a href='#home'>Home</a>
                    <a href='#about'>Sobre mim</a>
                    <a href='#services'>Serviços</a>
                    <a href='#portifolio'>Portifolio</a>
                </Box>

                <Box className='social-medias' sx={{display: 'flex', gap: '15px'}}>
                    <a href="#"><LinkedInIcon style={{color: shades.neutral[500]}} /></a>
                    <a href="#"><GitHubIcon style={{color: shades.neutral[500]}}/></a>
                    <a href="#"><TwitterIcon style={{color: shades.neutral[500]}}/></a>
                </Box>
            </div>
        </Row>
    );
}