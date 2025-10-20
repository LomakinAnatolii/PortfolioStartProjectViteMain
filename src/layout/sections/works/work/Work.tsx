import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.tsx";
import {Button} from "../../../../components/Button.tsx";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <WorkImg src={props.src} alt=""/>
            <WorkWrapper>
                <WorkTile>{props.title}</WorkTile>
                <WorkText>{props.text}</WorkText>
                <Link href="">Demo</Link>
                <Link href="">Code</Link>
                <Button>View project</Button>
            </WorkWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.li`
    min-width: 540px;
    max-width: 540px;
    position: relative;
    background-color: ${theme.colors.secondaryBg};
    ${Link} {
        padding: 10px 0;
        & + ${Link} {
        margin-left: 20px;
        }
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 260px;

    }
    &:hover {
        &::before {
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }
        ${Button} {
            display: block;
        }
    }
    ${Button} {
        position: absolute;
        top: 122px;
        left: 50%;
        display: none;
        transform: translateX(-50%);
        &::after{
            width: 100%;
            height: 100%;
        }
    }
`
const WorkImg = styled.img`
    width: 100%;
    height: 260px;
`
const WorkTile = styled.h3`
`
const WorkText = styled.p`
    margin: 14px 0 10px;
`
const WorkWrapper = styled.div`
padding: 25px 20px;
`