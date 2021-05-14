import React, { useContext } from 'react';
import styled from '@emotion/styled';

import taskContext from '../../context/tasks/taskContext';

import Task from './Task';

const TareasContainer = styled.ul`
    color: var(--gris);
`;

const ListadoTasks = () => {
    
    const tasksContext = useContext(taskContext);
    const { obtenerTareas } = tasksContext;

    obtenerTareas();

    const tareas = [
        { id: 1, name: 'Compra agua', completed: false },
        { id: 2, name: 'Compra pan', completed: false },
        { id: 3, name: 'Compra helado', completed: false },
    ];
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