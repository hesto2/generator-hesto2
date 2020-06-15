import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CustomTheme } from '../types';
import clsx from 'clsx';

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    layoutContainer: {
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 4),
      },
      padding: theme.spacing(0, 6),
    },
  })
);

interface Props {
  children: any;
  className?: string;
}

const WithEdgePaddingLayout = ({ children, className }: Props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.layoutContainer, className)}>{children}</div>
  );
};

export default WithEdgePaddingLayout;
