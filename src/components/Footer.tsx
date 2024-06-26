import React from 'react';
import { Typography, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
    return (
        <Grid container direction="column" alignItems="center" style={{ paddingTop: '10px'}} bgcolor="lightgrey">
            <Grid item xs={12} paddingTop={3}>
                <Typography variant="h5" fontWeight={'bold'} sx={{ mb: 4 }}>
                    Síguenos en redes sociales
                </Typography>
            </Grid>
            <Grid item container xs={12} justifyContent="center" spacing={1}>
                <Grid item style={{ textAlign: 'center' }}>
                    <WhatsAppIcon></WhatsAppIcon>
                    <Typography variant="body1">
                        WhatsApp
                    </Typography>
                </Grid>
                <Grid item style={{ textAlign: 'center' }}>
                    <FacebookIcon></FacebookIcon>
                    <Typography variant="body1">
                        Facebook
                    </Typography>
                </Grid>
                <Grid item style={{ textAlign: 'center' }}>
                    <YouTubeIcon></YouTubeIcon>
                    <Typography variant="body1">
                        YouTube
                    </Typography>
                </Grid>
                <Grid item style={{ textAlign: 'center' }}>
                    <TelegramIcon></TelegramIcon>
                    <Typography variant="body1">
                        Telegram
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} fontWeight={'bold'} sx={{ mb: 4 }} paddingTop={5}>
                <Typography variant="body1">
                    Política de privacidad
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;
