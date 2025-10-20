import {Icon} from "../../../../components/icons/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string,
    tile: string,
    text: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTile>{props.tile}</SkillTile>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 380px;
    padding: 62px 20px 40px;
    &::after {
        content: '';
        position: absolute;
        top: 45px;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg);
    }
`

const SkillTile = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
    font-weight: 400;
    line-height: 1.4;
`