import React from 'react';
import { Typography, Box } from '@mui/material';
function Opinions() {
    return (
        <Box display="flex" flexDirection="column" alignItems="static" style={{ margin: '0 150px' }} paddingBottom={10} paddingTop={10}>
            <Box style={{ paddingLeft: '150px' }}>
                <Typography variant="h5" fontWeight={'bold'} sx={{ mb: 4 }} style={{ paddingTop: '40px' }}>
                    Nuestros Servicios
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-around" width="100%">
                <Box display="flex" flexDirection="column" alignItems="center" p={1} m={1} flexGrow={1} style={{ paddingTop: '50px', borderRadius: '50px' }} border={1}>
                    <Typography variant="h6" fontWeight={'bold'} sx={{ mb: 4 }}>
                        &quot;Excelete servicio en brillo Dental, Trato amable, precedimientos indolores. ¡Mi sonrisa nunca ha estado mejor!&quot;
                    </Typography>
                    <Typography fontWeight={'bold'} sx={{ mb: 4, color: 'green', textAlign: 'center' }}>
                        Lucia P.
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" p={1} m={1} flexGrow={1} style={{ paddingTop: '50px', borderRadius: '50px' }} border={1}>
                    <Typography variant="h6" fontWeight={'bold'} sx={{ mb: 4 }}>
                        &quot;En Magia Dental me senti como en casa, Profesionales excepcionales y resultados sorprendentes. ¡Muy recomendado!&quot;
                    </Typography>
                    <Typography fontWeight={'bold'} sx={{ mb: 4, color: 'green', textAlign: 'center' }}>
                        Jorge E.
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" p={1} m={1} flexGrow={1} style={{ paddingTop: '50px', borderRadius: '50px' }} border={1}>
                    <Typography variant="h6" fontWeight={'bold'} sx={{ mb: 4 }}>
                        &quot;Magia Dental transformo mi sonrisa con eficiencia y cuidado. ¡El mejor dentista al que he ido!&quot;
                    </Typography>
                    <Typography fontWeight={'bold'} sx={{ mb: 4, color: 'green', textAlign: 'center' }}>
                        Sofia M.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Opinions