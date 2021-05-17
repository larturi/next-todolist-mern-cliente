import { 
    TAREAS,
    ACTUALIZAR_TAREA,
    AGREGAR_TAREA,
    BORRAR_TAREA
} from '../../types';

const TaskReducer = (state, action) => {
    switch(action.type) {
        case TAREAS:
            return {
                ...state,
                tareas: action.payload.tareas,
                tareasPendientes: action.payload.pendientes,
                tareasCompletadas: action.payload.completadas
            }

        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
                tareasPendientes: state.tareas.filter(tarea => tarea.completed === false),
                tareasCompletadas: state.tareas.filter(tarea => tarea.completed === true)
            }

        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [...state.tareas, action.payload],
                tareasPendientes: [...state.tareasPendientes, action.payload]
            }

        case BORRAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload.id),
                tareasPendientes: state.tareasPendientes.filter(tarea => tarea.id !== action.payload.id),
                tareasCompletadas: state.tareasCompletadas.filter(tarea => tarea.id !== action.payload.id)
            }

        default:
            return state;
    }
}

export default TaskReducer;