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
    margin: 22px 0 42px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
`