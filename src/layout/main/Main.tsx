import React from 'react';
import {Developer} from "../sections/developer/Developer.tsx";
import {Skills} from "../sections/skills/Skills.tsx";
import {Works} from "../sections/works/Works.tsx";
import styled from "styled-components";
import {Testimony} from "../sections/testimony/Testimony.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Developer/>
            <Skills/>
            <Works/>
            <Testimony/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    height: 100vh;
    background-color: bisque;
`