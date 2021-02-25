import React from 'react';
import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useAnchorElStateApi } from 'use-state-api-hooks';
import { CustomTheme } from '../../types';
import WithEdgePaddingLayout from '../../layouts/WithEdgePaddingLayout';
import { useSession } from '../../providers/SessionProvider';
import { clearToken } from '../../utils/tokenUtils';

export const HEADER_HEIGHT = 60;

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({ container: { background: theme.palette.primary.main } })
);

const Header = () => {
  const classes = useStyles();

  return (
    <WithEdgePaddingLayout className={classes.container}>
      <Typography variant="h1">Header Here</Typography>
    </WithEdgePaddingLayout>
  );
};

export default Header;
