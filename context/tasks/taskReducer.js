import { 
    TAREAS
} from '../../types';

const TaskReducer = (state, action) => {
    switch(action.type) {
        case TAREAS:
            return {
                ...state,
                tareasproyecto: action.payload
            }
        default:
            return state;
    }
}

export default TaskReducer;