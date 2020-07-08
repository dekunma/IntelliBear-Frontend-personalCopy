/**
 * 改现在导航栏的tab
 * @param value tab的名字（不是链接名）
 */

export const handleChangeTab = (value) => {
    return{
        type:'HANDLE_CHANGE_TAB',
        value:value
    }
}