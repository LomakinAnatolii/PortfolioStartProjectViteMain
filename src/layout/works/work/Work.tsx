import React from 'react';
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
            <WorkText>{props.text}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</WorkText>
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