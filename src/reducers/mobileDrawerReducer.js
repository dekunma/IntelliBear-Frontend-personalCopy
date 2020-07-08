const mobileDrawerReducer = (state = false, action) => {
    switch(action.type){
        case 'MOBILE_DRAWER_TOGGLE':
            return !state
        default:
            return state
    }
}
export default mobileDrawerReducer