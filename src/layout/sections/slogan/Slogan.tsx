import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";


export const Slogan = () => {
    return (
        <StyledSlogan>
                <SectionTitle text={"I am available for Freelance"}/>
                <Button type={"button"}>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    padding: 100px 30px;
    ${Button} {
        margin: 0 auto;
    }
`