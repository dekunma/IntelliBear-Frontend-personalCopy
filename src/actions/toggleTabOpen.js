/**
 * 控制现在side bar中打开的tab
 * @param value 是一个array，当前打开的tab对应的id为true
 */

export const toggleTabOpen = (value) => {
    return{
        type: 'TOGGLE_TAB_OPEN',
        value:value
    }
}