import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Button = styled.button`
    position: relative;
    z-index: 0;
    width: 170px;
    height: 32px;
    font-weight: 400;
    text-transform: uppercase;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: -1;
        display: inline-block;
        width: 50%;
        height: 10px;
        background-color: ${theme.colors.accent};
        transform: translateX(-50%);
    }
    &:hover {
        &::after{
            width: 100%;
            height: 100%;
        }
    }
`