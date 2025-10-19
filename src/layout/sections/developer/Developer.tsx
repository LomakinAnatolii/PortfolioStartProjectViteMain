import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";


export const Developer = () => {
    return (
        <StyledDeveloperSection>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <TextWrapper>
                    <SmallText>Hi There</SmallText>
                    <Name>I am <span>Svetlana Dyablo</span></Name>
                    <DeveloperTitle>A Web Developer</DeveloperTitle>
                </TextWrapper>
                <PhotoWrapper>
                    <DeveloperPhoto src={photo}/>
                </PhotoWrapper>
            </FlexWrapper>
        </StyledDeveloperSection>
    );
};

const StyledDeveloperSection = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    min-height: 100vh;
`
const TextWrapper = styled.div`
    text-align: left;
`

const DeveloperPhoto = styled.img`
    height: 430px;
    width: 350px;
    object-fit: cover;
`
const SmallText = styled.span`
    display: block;
    font-weight: 400;
`

const Name = styled.h2`
    margin: 10px 0;
    font-family: Josefin Sans, sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    span {
        position: relative;
        z-index: 0;
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            z-index: -1;
            width: 100%;
            height: 20px;
            display: inline-block;
            background-color: ${theme.colors.accent};
        }   
    }
`
const DeveloperTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    &::before {
        content: '';
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
    }
`