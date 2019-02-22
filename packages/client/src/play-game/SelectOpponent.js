import React from 'react'

//material-ui
import { InputLabel, Select, MenuItem } from '@material-ui/core/'

const SelectOpponent = () => (
  <div>

    <InputLabel shrink htmlFor="age-label-placeholder">
      Select Opponent
    </InputLabel>
    <Select
      style={{width: '300px'}}
      // value={state.age}
      // onChange={handleChange}
      // input={<Input name="age" id="age-label-placeholder" />}
      // displayEmpty
      name="Select Opponent"
      // className={classes.selectEmpty}
    >
      <MenuItem value="">Player 1</MenuItem>
      <MenuItem value="">Player 2</MenuItem>
      <MenuItem value="">Player 3</MenuItem>
    </Select>
     
  </div>
);

export default SelectOpponent;