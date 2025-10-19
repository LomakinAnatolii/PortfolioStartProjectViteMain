import styled from "styled-components";

type SectionTitlePropsType = {
    text: string;
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <Title>{props.text}</Title>
    );
};

const Title = styled.h2`
    text-transform: uppercase;
`