export default function tabReducer(state='Overview', action){
    switch(action.type){
        case('HANDLE_CHANGE_TAB'):
            return action.value
        default:
            return state
    }
}