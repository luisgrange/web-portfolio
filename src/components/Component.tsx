import styled from 'styled-components';
import { shades } from './Styles/Theme';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    height: 100%;
    overflow: hidden;
`;

export const Title = styled.h2`
    color: ${shades.neutral[500]};
    position: relative;
    font-size: 28px;
    &::after{
        content: "";
        width: 70%;
        height: 3px;
        background: ${shades.neutral[500]};
        position: absolute;
        top: 50%;
        right: -100px;
    }

`
