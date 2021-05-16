import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';

import taskContext from '../../context/tasks/taskContext';

import Task from './Task';

const TareasContainer = styled.ul`
    color: var(--gris);
`;

const ListadoTasks = ({ completed }) => {
    
    const tasksContext = useContext(taskContext);
    const { 
        tareasPendientes, 
        tareasCompletadas, 
        obtenerTareas,
    } = tasksContext;

    useEffect(() => {
        obtenerTareas(completed);
    }, [completed]);

    return (
        <>
            <TareasContainer>

                {

                    (completed) ? (
                        
                        (tareasCompletadas.length > 0) ? (
                            tareasCompletadas.map(tarea => (
                                <Task
                                tarea={tarea}
                                key={tarea.id}
                                />
                            ))
                        ) : <li className="tarea text-white">No hay tareas completadas</li>
                        
                    ) : (

                        (tareasPendientes.length > 0) ? (
                            tareasPendientes.map(tarea => (
                                <Task
                                tarea={tarea}
                                key={tarea.id}
                                />
                            ))
                        ) : <li className="tarea text-white">No hay tareas pendientes</li>

                    )

                }
                    
            </TareasContainer>
        </>
    )
}

export default ListadoTasks;