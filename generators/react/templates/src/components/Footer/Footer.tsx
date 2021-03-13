import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../../types';
import WithEdgePaddingLayout from '../../layouts/WithEdgePaddingLayout';
import { HEADER_HEIGHT } from '../Header/Header';

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: {
      background: theme.palette.background.contrast,
      padding: theme.spacing(4, 2),
    },
  })
);

export const FOOTER_HEIGHT = 150 - HEADER_HEIGHT;

const Footer = () => {
  const classes = useStyles();

  return (
    <WithEdgePaddingLayout className={classes.container}>
      <div>Footer Here</div>
    </WithEdgePaddingLayout>
  );
};

export default Footer;
