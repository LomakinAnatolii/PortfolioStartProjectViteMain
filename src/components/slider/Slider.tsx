import React from 'react';
import styled from "styled-components";

type SliderPropsType = {
    text: string
    author: string
}


export const Slider = (props: SliderPropsType) => {
    return (
        <SliderItem>
            <Response>{props.text}</Response>
            <Author>{props.author}</Author>
        </SliderItem>
    );
};

const SliderItem = styled.li`

`
const Response = styled.p`

`

const Author = styled.h4`

`