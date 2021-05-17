import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { 
    TAREAS,
    ACTUALIZAR_TAREA,
    AGREGAR_TAREA,
    BORRAR_TAREA
} from '../../types';

import clienteAxios from '../../config/axios';

const TaskState = props => {
    const initialState = {
        tareas: [],
        tareasPendientes: [],
        tareasCompletadas: []
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
            console.error(error);
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

    const agregarTarea = async (tarea) => {

        try {
            const resultado = await clienteAxios.post('/api/tasks', { name: tarea, completed: false });
            dispatch({
                type: AGREGAR_TAREA,
                payload: resultado.data
            });
        } catch (error) {
            console.error('Hubo un error al agregar la tarea');
        }
    };

    const borrarTarea = async (tarea) => {

        try {
            const resultado = await clienteAxios.delete(`/api/tasks/${tarea.id}`);
            dispatch({
                type: BORRAR_TAREA,
                payload: resultado.data
            });
        } catch (error) {
            console.error('Hubo un error al eliminar la tarea');
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tareas : state.tareas,
                tareasPendientes : state.tareasPendientes,
                tareasCompletadas : state.tareasCompletadas,
                obtenerTareas,
                actualizarTarea,
                agregarTarea,
                borrarTarea
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;