import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/proj-2.webp";
import timerImg from "../../../assets/images/proj-1.webp";

const worksItems = ["All", "Landing page", "React", "Spa"]

export const Works = () => {
    return (
        <WorksSection>
            <SectionTitle text={"My Works"}/>
            <TabMenu tabItems={worksItems}/>
            <WorkList>
                <Work title={"Social networ"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                      src={socialImg}/>
                <Work title={"Timer"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                      src={timerImg}/>
            </WorkList>
        </WorksSection>
    );
};

const WorksSection = styled.section`
    padding: 100px 30px;
`
const WorkList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1140px;
`