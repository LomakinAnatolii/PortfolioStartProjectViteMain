import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <WorkImg src={props.src} alt=""/>
            <WorkTile>{props.title}</WorkTile>
            <WorkText>{props.text}</WorkText>
            <WorkLink href="">Demo</WorkLink>
            <WorkLink href="">Code</WorkLink>
            <WorkLink href="">View project</WorkLink>
        </StyledWork>
    );
};

const StyledWork = styled.li`
    
`
const WorkImg = styled.img`
`
const WorkTile = styled.h3`
`
const WorkText = styled.p`
`
const WorkLink = styled.a`

`