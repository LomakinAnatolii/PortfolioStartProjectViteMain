import React from 'react';
import {Developer} from "../sections/developer/Developer.tsx";
import {Skills} from "../skills/Skills.tsx";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <Developer/>
            <Skills/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    height: 100vh;
    background-color: bisque;
`