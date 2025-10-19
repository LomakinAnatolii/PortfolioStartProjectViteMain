import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle text={"My skills"}/>
            <SkillsList>
                <Skill iconId={"codeSvg"}
                       tile={"html5"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"css3Svg"}
                       tile={"css3"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"reactSvg"}
                       tile={"React"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"styledComponentsSvg"}
                       tile={"Styled components"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"typescriptSvg"}
                       tile={"Typescript"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"figmaSvg"}
                       tile={"Web Design"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            </SkillsList>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    text-align: center;
`

const SkillsList = styled.ul`
`