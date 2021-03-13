import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../types';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';

const VERTICAL_PADDING = 3;
const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    layoutContainer: {
      paddingTop: theme.spacing(VERTICAL_PADDING),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 4),
      },
      padding: theme.spacing(0, '10%'),
      height: `calc(100% - ${theme.spacing(VERTICAL_PADDING)})`,
    },
    title: { marginBottom: theme.spacing(1) },
  })
);

interface Props {
  children: any;
  className?: string;
  title?: string;
}

const ContentPageLayout = ({ children, className, title }: Props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.layoutContainer, className)}>
      {title && (
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
};

export default ContentPageLayout;
