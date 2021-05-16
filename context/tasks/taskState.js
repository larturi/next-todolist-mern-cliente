import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { 
    TAREAS,
    ACTUALIZAR_TAREA
} from '../../types';

import clienteAxios from '../../config/axios';

const TaskState = props => {
    const initialState = {
        tareas: [],
        tareasPendientes: [],
        tareasCompletadas: [],
        countPendientes: 0,
        countCompletadas: 0
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const obtenerTareas = async (completed) => {
        try {

            const resultado = await clienteAxios.get('/api/tasks');
            const pendientes = await resultado.data.tareas.filter(tarea => tarea.completed === false);
            const completadas = await resultado.data.tareas.filter(tarea => tarea.completed === true);

            dispatch({
                type: TAREAS,
                payload: { 
                    tareas: resultado.data.tareas, 
                    pendientes: pendientes,
                    completadas: completadas,
                    pendientesCount: pendientes.length,
                    completadasCount: completadas.length
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const actualizarTarea = async (tarea) => {
        try {

            const resultado = await clienteAxios.put(`/api/tasks/${tarea.id}`, { completed: tarea.completed });

            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: { 
                    tarea: resultado.data
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tareas : state.tareas,
                tareasPendientes : state.tareasPendientes,
                tareasCompletadas : state.tareasCompletadas,
                countPendientes: state.countPendientes,
                obtenerTareas,
                actualizarTarea
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;