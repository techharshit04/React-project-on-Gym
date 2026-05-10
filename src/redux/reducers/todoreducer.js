import { combineReducers } from "redux";

let initialState = {
    tasks: [], oldaTask: [], newTask: []
}
let taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTASK": return { ...state, tasks: [...state.tasks, action.payload] };
        case "DELETETASK": return { ...state, tasks: state.tasks.filter((a, i) => { return i != action.payload }) };
        case "UPDATETASK": return {
            ...state, tasks: state.tasks.map((v, i) => {
                if (i == action.payload.index) {
                    return { ...v, ...action.payload.data }
                } else {
                    return v
                }
            })
        };

        

        default: return state;
    }
}

export let root = combineReducers({ taskReducer })
