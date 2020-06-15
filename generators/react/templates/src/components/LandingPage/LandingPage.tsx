import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../../types';
import WithEdgePaddingLayout from '../../layouts/WithEdgePaddingLayout';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: CustomTheme) => createStyles({}));

interface Props {}

const LandingPage = ({}: Props) => {
  const classes = useStyles();
  return (
    <WithEdgePaddingLayout>
      <Typography>Welcome</Typography>
    </WithEdgePaddingLayout>
  );
};

export default LandingPage;
