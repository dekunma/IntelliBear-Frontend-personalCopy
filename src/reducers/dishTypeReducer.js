export default function dishTypeReducer(state = 2, action){
    switch(action.type){
        case('HANDLE_CHANGE_DISH_TYPE'):
            return action.value
        default:
            return state
    }
}