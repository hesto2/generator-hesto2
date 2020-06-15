import React from 'react';
import { Grid, IconButton, Menu, MenuItem, Button } from '@material-ui/core';
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
  createStyles({
    phone: {
      fontSize: 11,
      color: '#4B4B4D',
      fontWeight: 600,
    },
    link: { height: 70, visibility: 'visible' },
    iconButton: {
      paddingRight: theme.spacing(0),
    },
    icon: {
      fontSize: 35,
    },
    container: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(0),
      },
      height: HEADER_HEIGHT,
      background: theme.palette.background.default,
    },
    href: {
      textDecoration: 'none',
      '&:visited, &:active, &:hover, &:link': { color: 'initial' },
    },
    image: {
      height: 69,
      [theme.breakpoints.only('sm')]: {
        height: 52,
      },
      [theme.breakpoints.only('xs')]: {
        width: 130,
        height: 'initial',
      },
    },
    mobileImage: { width: 130, height: 'initial' },
    typography: {
      [theme.breakpoints.only('sm')]: {
        fontSize: 14,
      },
      fontWeight: 600,
      fontSize: 14,
      color: theme.palette.common.black,
      '&:visited, &:active, &:hover, &:link': {
        color: theme.palette.common.black,
      },
    },
    orange: {
      color: theme.palette.primary.main,
      '&:visited, &:active, &:hover, &:link': {
        color: theme.palette.primary.main,
      },
    },
    internal: {
      fontSize: 14,
      fontWeight: 'bold',
      textDecoration: 'underline',
    },
    background: {
      background: theme.palette.background.default,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const { anchorEl, setAnchorEl, clearAnchorEl } = useAnchorElStateApi(null);
  const mobile = false;
  const [session, setSession] = useSession();
  const items: any = [];

  return (
    <WithEdgePaddingLayout className={classes.background}>
      <div className={clsx(classes.container)}>
        <Grid
          container
          alignItems="center"
          style={{ height: '100%' }}
          direction={'row'}
          justify={'space-between'}
          wrap="nowrap"
        >
          <Grid item>
            <div className={classes.link}></div>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={4}
              alignItems="center"
              style={{ height: '100%', margin: 0 }}
              wrap="nowrap"
            >
              {items}
            </Grid>
          </Grid>
          {mobile && (
            <Grid item xs={6}>
              <Grid
                container
                justify="flex-end"
                alignItems="center"
                style={{ height: '100%', margin: 0 }}
              >
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={setAnchorEl}
                    edge="start"
                    classes={{ root: classes.iconButton }}
                  >
                    <MenuIcon className={classes.icon} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
        {mobile && (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={clearAnchorEl}
          >
            {items.map((i: any) => (
              <MenuItem key={i} onClick={clearAnchorEl}>
                {i}
              </MenuItem>
            ))}
          </Menu>
        )}
      </div>
    </WithEdgePaddingLayout>
  );
};

export default Header;
