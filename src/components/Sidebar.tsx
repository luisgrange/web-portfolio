import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { shades } from './Styles/Theme';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 65px;
    gap: 20px;
    position: fixed;
    top: 0;
    bottom: 0;


    &::after{
        content: "";
        background: ${shades.primary[500]};
        height: 300px;
        width: 2px;
        bottom: 0;
    }
`
export const Sidebar = () => {
    return(
        <Box>
            <a href="#"><LinkedInIcon style={{color: shades.primary[500]}} /></a>
            <a href="#"><GitHubIcon style={{color: shades.primary[500]}}/></a>
            <a href="#"><TwitterIcon style={{color: shades.primary[500]}}/></a>
        </Box>
    )
}

