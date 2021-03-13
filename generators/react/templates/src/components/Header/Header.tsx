import React, { useEffect, useState } from 'react';
import {
  Button,
  ClickAwayListener,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { CustomTheme } from '../../types';
import { Link } from 'react-router-dom';
import { login } from '../../api/auth';
import { AppRoutes } from '../../constants/routes';
import { useSession } from '../../providers/SessionProvider';
import { UserRole } from '../../api/users';

export const HEADER_HEIGHT = 65;

const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: {
      background: theme.palette.background.paper,
      padding: theme.spacing(0, 2),
      display: 'flex',
    },
    logoImage: {
      height: HEADER_HEIGHT,
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        height: '15vw',
        maxHeight: HEADER_HEIGHT,
      },
    },
    menu: {
      padding: theme.spacing(2),
      position: 'absolute',
      top: HEADER_HEIGHT + 3,
      left: 0,
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.common.black}`,
      zIndex: theme.zIndex.modal,
      borderLeft: 'none',
    },
    menuItem: {
      padding: theme.spacing(1, 2),
      color: theme.palette.text.primary,
      '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  })
);

const LOGO_URL = '';

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const session = useSession();
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = (event?: React.MouseEvent<HTMLElement | Document>) => {
    event?.stopPropagation();
    event?.preventDefault();
    setOpen(false);
  };
  const urlMap = [
    {
      url: '/admin',
      name: 'Admin',
      hide:
        Boolean(session?.user) === false ||
        session?.user?.role !== UserRole.ADMIN,
    },
    {
      url: AppRoutes.LOGOUT,
      name: 'Logout',
      hide: Boolean(session.user) === false,
    },
    {
      url: AppRoutes.LOGIN,
      name: 'Login',
      hide: Boolean(session.user) === true,
    },
  ];

  return (
    <div className={classes.container}>
      <div>
        <IconButton onClick={handleClick}>
          <MenuIcon color="primary" fontSize="large" />
        </IconButton>
      </div>
      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          <div className={classes.menu}>
            {urlMap.map((item) =>
              item?.hide ? (
                <></>
              ) : (
                <Link key={item.url} to={item.url}>
                  <div
                    onClick={() => handleClose()}
                    className={classes.menuItem}
                  >
                    <Typography color="inherit" variant="h6">
                      {item.name}
                    </Typography>
                  </div>
                </Link>
              )
            )}
          </div>
        </ClickAwayListener>
      )}
      <Link to={AppRoutes.LANDING}>
        <img src={LOGO_URL} className={classes.logoImage} />
      </Link>

      {!Boolean(session.user) && (
        <Link to={AppRoutes.LOGIN}>
          <Button variant="outlined">Login</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
