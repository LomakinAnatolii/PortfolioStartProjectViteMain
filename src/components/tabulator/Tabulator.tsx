import styled from "styled-components";

export const Tabulator = (props: {tabItems: Array<string> }) => {
    return (
        <ListTab>
            {props.tabItems.map((item) => {
                return <li>
                    <a>{item}</a>
                </li>
            })}
        </ListTab>
    );
};

const ListTab = styled.ul`

`