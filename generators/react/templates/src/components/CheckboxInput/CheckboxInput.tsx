import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { CustomTheme } from '../../types';
import clsx from 'clsx';

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: { paddingTop: theme.spacing(1) },
  })
);

export type CheckBoxInputChangeEvent = {
  target: { value: boolean; name: string };
};

export interface CheckboxInputProps {
  checked: boolean;
  label: string | JSX.Element;
  name: string;
  onChange: (e: CheckBoxInputChangeEvent) => void;
  className?: string;
}

const CheckboxInput = ({
  checked,
  label,
  onChange,
  name,
  className,
}: CheckboxInputProps) => {
  const classes = useStyles();

  const handleChange = () => {
    onChange({ target: { value: !checked, name } });
  };

  return (
    <div className={classes.container}>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={handleChange} name={name} />
        }
        label={<Typography variant="caption">{label}</Typography>}
      />
    </div>
  );
};

export default CheckboxInput;
