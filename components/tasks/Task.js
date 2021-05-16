import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import taskContext from '../../context/tasks/taskContext';

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

    const tasksContext = useContext(taskContext);
    const { actualizarTarea } = tasksContext;

    const handleCambiarEstado = (tarea) => {

        if (tarea.completed) {
            tarea.completed = false;
        } else {
            tarea.completed = true;
        }

        actualizarTarea(tarea);
    };

    return (
        <TareaContainer>
            <input 
                type="radio"
                onClick={() => handleCambiarEstado(tarea) }  
            />
            <span css={css`
                margin-left: 1rem;
            `}>{ tarea.name }</span>
        </TareaContainer>
    )
}

export default Task;