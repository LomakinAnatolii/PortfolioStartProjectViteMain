import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";


export const Developer = () => {
    return (
        <StyledDeveloperSection>
            <div>
                <span>Hi There</span>
                <h2>I am Svetlana Dyablo</h2>
                <h1>A Web Developer</h1>
            </div>
            <DeveloperPhoto src={photo}/>
        </StyledDeveloperSection>
    );
};

const StyledDeveloperSection = styled.section`
    display: flex;
    justify-content: space-around;
`
const DeveloperPhoto = styled.img`
    height: 430px;
    width: 350px;
    object-fit: cover;
`