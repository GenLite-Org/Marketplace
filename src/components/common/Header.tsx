import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>Marketplace</Typography>
                <nav>
                    <Link component={NavLink} to="/listings" variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }} underline='none'>{"Listings"}</Link>
                    <Link component={NavLink} to="/auctions" variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }} underline='none'>{"Auctions"}</Link>
                </nav>

                <Button component={NavLink} to="/dashboard" variant="contained" color="primary" href="#" sx={{ my: 1, mx: 1.5 }}>{"Dashboard"}</Button>

            </Toolbar>
        </AppBar>
    );
}