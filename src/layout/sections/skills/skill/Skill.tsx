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
            <ScillText>{props.text}</ScillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.li`
    
`

const SkillTile = styled.h3`
    
`
const ScillText = styled.p`
    
`