import React from 'react';
import {Developer} from "../sections/developer/Developer.tsx";
import {Skills} from "../sections/skills/Skills.tsx";
import {Works} from "../sections/works/Works.tsx";
import {Testimony} from "../sections/testimony/Testimony.tsx";
import {Contact} from "../sections/contacts/Contacts.tsx";
import {Slogan} from "../sections/Slogan/Slogan.tsx";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <Developer/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    height: 100vh;
    background-color: bisque;
`