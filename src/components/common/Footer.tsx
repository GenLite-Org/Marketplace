import * as React from 'react';

// Material UI Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
    return (
        // Component should always be at the bottom of the root element in App.ts
        <Box component="footer" sx={{ backgroundColor: 'background.paper', mt: 8, py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">{'This project is open source and can be found on '}<Link color="inherit" href="https://github.com/GenLite-Org/Marketplace">{'GitHub'}</Link></Typography>
                <Typography variant="body2" align="center">{'Developed with '}<span role="img" aria-label="love">❤️</span> {' by KKonaOG'}</Typography>
            </Container>
        </Box>
    );
}

