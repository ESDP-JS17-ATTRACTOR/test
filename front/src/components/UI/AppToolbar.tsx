import React from 'react';
import {AppBar, Grid, styled, Toolbar, Typography} from "@mui/material";
import UserMenu from "./UsersMenu";
import AnonymousMenu from "./AnonymousMenu";
import {useAppSelector} from "../../../hooks";
import {selectUser} from "../../features/users/usersSlice";
import Link from "next/link";

// const Link = styled(NavLink)({
//   color: 'inherit',
//   textDecoration: 'none',
//   '&:hover': {
//     color: 'inherit'
//   },
// });

const AppToolbar = () => {
  const user = useAppSelector(selectUser);

  return (
    <AppBar position="sticky" sx={{mb: 2}} >
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center"  >
          <Typography variant="h6" component="div">
            <Link href="/">Photo gallery</Link>
          </Typography>
          <Grid item>
            {user ? (<UserMenu user={user}/>) : <AnonymousMenu/>}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;