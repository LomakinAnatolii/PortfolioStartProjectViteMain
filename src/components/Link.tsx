import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Link = styled.a`
    position: relative;
    padding: 10px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    &::after {
        content: '';
        position: absolute;
        bottom: 6px;
        left: 0;
        right: 0;
        display: inline-block;
        height: 0;
        background-color: ${theme.colors.accent};
    }
    &:hover {
        &::after {
            height: 10px;
        }
    }
`