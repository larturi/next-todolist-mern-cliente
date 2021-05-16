import { 
    TAREAS,
    ACTUALIZAR_TAREA
} from '../../types';

const TaskReducer = (state, action) => {
    switch(action.type) {
        case TAREAS:
            return {
                ...state,
                tareas: action.payload.tareas,
                tareasPendientes: action.payload.pendientes,
                tareasCompletadas: action.payload.completadas,
                countPendientes: action.payload.pendientesCount,
                countCompletadas: action.payload.completadasCount
            }

        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
                tareasPendientes: state.tareas.filter(tarea => tarea.completed === false),
                tareasCompletadas: state.tareas.filter(tarea => tarea.completed === true),
                countPendientes: state.tareas.filter(tarea => tarea.completed === false).length,
                countCompletadas: state.tareas.filter(tarea => tarea.completed === true).length
            }

        default:
            return state;
    }
}

export default TaskReducer;