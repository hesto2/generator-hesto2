import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../types';
import { HEADER_HEIGHT } from './Header/Header';

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    appContentContainer: {
      height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      background: theme.palette.background.default,
      overflowY: 'auto',
      overflowX: 'hidden',
    },
  })
);

interface Props {
  children: any;
}

const AppContent = ({ children }: Props) => {
  const classes = useStyles();
  return <div className={classes.appContentContainer}>{children}</div>;
};

export default AppContent;
