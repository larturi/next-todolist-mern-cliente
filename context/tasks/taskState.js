import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { 
    TAREAS
} from '../../types';

import clienteAxios from '../../config/axios';

const TaskState = props => {
    const initialState = {
        tareas: []
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Obtener las tareas
    const obtenerTareas = async (completed) => {

        try {
            const resultado = await clienteAxios.get('/api/tasks', { params: {completed} });
            dispatch({
                type: TAREAS,
                payload: resultado.data.tareas
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TaskContext.Provider
            value={{
                tareas : state.tareas,
                obtenerTareas
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;