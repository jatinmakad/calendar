import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel, Typography } from "@material-ui/core";
const Test = ({ checked, handleCheck, data,time,no }) => {
    return (data.map((e) => (
        <FormControlLabel
            className="radio-outer-second"
            labelPlacement="start"
            control={
                <Checkbox
                    onChange={() => handleCheck(e.value,time,no)}
                    checked={checked.includes(e.value)}
                    value={e.value}
                />
            }
            label={
                <Typography className="radio-label-left">
                    {e.value}
                </Typography>
            }
        />

    ))

    );
};

export default Test;