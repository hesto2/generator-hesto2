import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../../types';

const useStyles = makeStyles((theme: CustomTheme) => createStyles({}));

interface Props {}

const LandingPage = ({}: Props) => {
  const classes = useStyles();
  return <div>Landing Page</div>;
};

export default LandingPage;
