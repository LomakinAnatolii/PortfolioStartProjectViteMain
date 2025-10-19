import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icons/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle text={"Testimony"}/>
            <Icon iconId={"quoteAltRightSvg"}/>
            <ol>
                <Slider text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        author={"@Ivan Ivanow"}/>
                <Slider text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        author={"@Ivan Ivanow"}/>
                <Slider text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        author={"@Ivan Ivanow"}/>
                <PaginationList>
                    <PaginationItem>
                        <PaginationButton></PaginationButton>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationButton></PaginationButton>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationButton></PaginationButton>
                    </PaginationItem>
                </PaginationList>
            </ol>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

`
const PaginationList = styled.ol`

`
const PaginationItem = styled.li`

`

const PaginationButton = styled.button`
`
