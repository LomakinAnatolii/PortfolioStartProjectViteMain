import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle text={"My Skills"}/>
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
    padding: 100px 30px;
`

const SkillsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1140px;
`