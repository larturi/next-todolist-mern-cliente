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

const BtnBorrar = styled.button`
    background: #b1003f;
    color: #fff;
    margin-left: 1rem;
    border: 0;
    font-size: 12px;
    padding: 4px 8px;
    text-transform: uppercase;
`;

const BtnEditar = styled.button`
    background: #5d5d5d;
    color: #fff;
    margin-left: 1rem;
    border: 0;
    font-size: 12px;
    padding: 4px 8px;
    text-transform: uppercase;
`;

const Task = ({ tarea, padre }) => {

    const tasksContext = useContext(taskContext);
    const { actualizarTarea, borrarTarea, seleccionarTarea } = tasksContext;

    const handleCambiarEstado = (tarea) => {

        if (tarea.completed) {
            tarea.completed = false;
        } else {
            tarea.completed = true;
        }

        actualizarTarea(tarea);
    };

    const handleBorrarTarea = (tarea) => {
        borrarTarea(tarea);
    };

    const handleSeleccionarTarea = (tarea) => {
        seleccionarTarea(tarea);
    };

    return (
        <>
            <TareaContainer>

                <input 
                    type="radio"
                    onClick={ () => handleCambiarEstado(tarea) }  
                />
                <span css={css`
                    margin-left: 1rem;
                    max-width: 500px;
                `}>{ tarea.name }
                </span>

                <BtnBorrar css={css`
                    float: right;
                    margin-top: 4px;
                    cursor: pointer;
                `}
                    onClick={ () => handleBorrarTarea(tarea) }  
                >
                    Borrar
                </BtnBorrar>

               {
                   (padre === 'index') &&

                    <BtnEditar css={css`
                        float: right;
                        margin-top: 4px;
                        cursor: pointer;
                        `}
                            onClick={ () => handleSeleccionarTarea(tarea) }  
                        >
                            Editar
                        </BtnEditar>
               }

                

            </TareaContainer>

            
        </>
        
    )
}

export default Task;