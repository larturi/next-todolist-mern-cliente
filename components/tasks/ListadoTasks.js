import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';

import taskContext from '../../context/tasks/taskContext';

import Task from './Task';

const TareasContainer = styled.ul`
    color: var(--gris);
`;

const ListadoTasks = ({ completed }) => {
    
    const tasksContext = useContext(taskContext);
    const { tareas, obtenerTareas } = tasksContext;

    useEffect(() => {
        obtenerTareas(completed);
    }, [completed]);

    return (
        <>
            <TareasContainer>
                {
                    (tareas.length == 0) ? (
                        <li className="tarea">No hay tareas</li>
                    ) : (
                        tareas.map(tarea => (
                            <Task
                              tarea={tarea}
                              key={tarea.id}
                            />
                        ))
                    )
                }
            </TareasContainer>
        </>
    )
}

export default ListadoTasks;