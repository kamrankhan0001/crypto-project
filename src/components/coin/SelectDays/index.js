import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './style.css';

export default function SelectDays({days, handleDaysChange, noPTag}) {

  return (
    <div className='select-days'>

        {!noPTag && <p>Prices Change In</p>}
        <Select
          sx = {{
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutlined":{
                borderColor: "var(--white)",
                
            },
            "& .MuiSvgIcon-root": {
                color: "var(--white)",
                
            },
            "&:hover":{
                "&& fieldset": {
                    borderColor:"#3a80e9",
                    
                },
            },

          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}> 7 days </MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={120}>120 days</MenuItem>
        </Select>
      
    </div>
  );
}