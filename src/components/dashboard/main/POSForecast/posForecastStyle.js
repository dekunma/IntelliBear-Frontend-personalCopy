import {
    warningColor,
    primaryColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    defaultFont
} from "../../../assets/globalStyleProperties.js";

const posForecastStyle = theme => ({
    root: {
        padding: '1em',
        background: '#f7fafc',
        marginTop: '70px',
        color:grayColor[1]
    },
    section1: {
        textAlign: 'left'
    }
});

export default posForecastStyle;