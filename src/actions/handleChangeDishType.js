/**
 * 改Forecast Accuracy的菜类型
 * @param {*} value 类型
 */

export const handleChangeDishType = (value) => {
    return {
        type: 'HANDLE_CHANGE_DISH_TYPE',
        value:value
    }
}