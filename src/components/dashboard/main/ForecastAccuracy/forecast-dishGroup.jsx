import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import { handleChangeDish } from '../../../../actions/handleChangeDish'

const OrangeRadio = withStyles({
    root: {
      color: '#F7941D',
      '&$checked': {
        color: '#F7941D',
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    radioGroup: {
        minWidth: 100,
        height: 20,
      },
      radio: {
        width: 60,
        minWidth: 60,
      },
      label: {
          fontSize: 14
      }
}))

export default function RadioButtonsGroup(props) {
  const classes = useStyles();
  
  const dish = useSelector(state => state.dish)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(handleChangeDish(event.target.value))
  };

  return (
    <RadioGroup row aria-label="dishes" name="dishes" value={dish} onChange={handleChange}>
        {props.items.map(elem => (
          <FormControlLabel classes={{label: classes.label}} value={elem} control={<OrangeRadio size="small" />} label={elem} />
        ))}
    </RadioGroup>
  );
}