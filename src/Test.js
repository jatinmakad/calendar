import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel, Typography } from "@material-ui/core";
const Test = ({ handleCheck, data, id ,ind}) => {
  return data.map((p,index) => {
    return (
      <FormControlLabel
        className="radio-outer-second"
        labelPlacement="start"
        key={p.value}
        control={
          <Checkbox
            onChange={(event) => handleCheck(event, id,index,ind)}
            checked={p.isChecked}
            // value={p.value[index]}
            name={p.value}
          />
        }
        label={<Typography className="radio-label-left">{p.value}</Typography>}
      />
    );
  });
};

export default Test;
