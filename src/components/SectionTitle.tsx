import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type SectionTitlePropsType = {
    text: string;
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <Title>{props.text}</Title>
    );
};

export const Title = styled.h2`
    position: relative;
    margin-bottom: 90px;
    text-align: center;
    font-family: Josefin Sans, sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 5px;
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -30px;
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        transform: translateX(-50%);
    }
`