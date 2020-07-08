export default function dishReducer(state='酸汤肥牛', action){
    switch(action.type){
        case "HANDLE_CHANGE_DISH":
            return action.value
        default:
            return state
    }
}