import styled from "styled-components";
import {SectionTitle, Title} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle text={"Testimony"}/>
            <Icon iconId={"quoteAltRightSvg"}/>
            <SlidersList>
                <Slider text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        author={"@Ivan Ivanow"}/>
                <PaginationList>
                    <PaginationItem>
                        <PaginationButton></PaginationButton>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationButton className={"active"}></PaginationButton>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationButton></PaginationButton>
                    </PaginationItem>
                </PaginationList>
            </SlidersList>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    padding: 100px 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::after {
        content: '';
        position: absolute;
        top: 253px;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg);
    }
    ${Title} {
        margin-bottom: 120px;
    }
`

const SlidersList = styled.ol`
    margin: 60px auto 0;
    width: 500px;
    text-align: center;
`
const PaginationList = styled.ol`
    display: flex;
    justify-content: center;
    gap: 5px;
`
const PaginationItem = styled.li`

`
const PaginationButton = styled.button`
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    &.active {
        width: 20px;
        background-color: ${theme.colors.accent};
    }
`
