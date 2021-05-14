import React from 'react';
import styled from '@emotion/styled';

const TareaContainer = styled.li`
    border-radius: 6px;
    border: solid 1px gray;
    padding: 1rem 2rem;
    background: #fff;
    margin-bottom: 1rem;
    color: #545353;
`;

const Task = ({ tarea }) => {
    return (
        <TareaContainer>
            <p>{ tarea.name }</p>
        </TareaContainer>
    )
}

export default Task;