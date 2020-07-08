export default function tabOpenReducer(state=[false,false], action){
    switch(action.type){
        case('TOGGLE_TAB_OPEN'):
            return action.value
        default:
            return state
    }
}