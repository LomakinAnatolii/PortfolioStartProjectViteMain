import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {Tabulator} from "../../components/tabulator/Tabulator.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../assets/images/proj-2.webp";
import timerlImg from "../../assets/images/proj-1.webp";

const worksItems = ["All", "Landing page", "React", "Spa"]

export const Works = () => {
    return (
        <WorksSection>
            <SectionTitle text={"My Works"}/>
            <Tabulator tabItems={worksItems}/>
            <ul>
                <Work title={"Social networ"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                      src={socialImg}/>
                <Work title={"Timer"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                      src={timerlImg}/>
            </ul>
        </WorksSection>
    );
};

const WorksSection = styled.section`

`