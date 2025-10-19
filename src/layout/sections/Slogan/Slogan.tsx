import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle text={"I am available for Freelance"}/>
            <button type={"button"}>Hire me</button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`

`