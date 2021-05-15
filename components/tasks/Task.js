import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const TareaContainer = styled.li`
    border-top: solid 0.3px #4f4f4f;
    margin-bottom: 1rem;
    padding-top: 10px;
    padding-bottom: 4px;
    color: #545353;

    &:last-child {
       border-bottom: solid 0.3px #4f4f4f;
       padding-bottom: 14px;
    }

    span {
        color: var(--gris3);
    }
`;


const Task = ({ tarea }) => {
    return (
        <TareaContainer>
            <input type="radio" />
            <span css={css`
                margin-left: 1rem;
            `}>{ tarea.name }</span>
        </TareaContainer>
    )
}

export default Task;