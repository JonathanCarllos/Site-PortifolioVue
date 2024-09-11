import { Container, Grid, styled, Box, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png.jpg"

const Rodape = () => {

    const StyleRodape = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.contrastText,
        display: "flex"
    }))

    const StyleImg = styled("img")(({ theme }) => ({        
        width: "40%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,

    }))

    return (
        <>
            <StyleRodape>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={2}>
                            <Box position="relative">                                
                                <Box position="relative" textAlign="center" paddingTop="10px">
                                  <StyleImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Box position="relative">                                
                            <Typography color="primary.contrastText" variant="h5" textAlign="center" pt={2}>
                                Naiane Barbosa
                            </Typography>
                            <Typography color="primary.contrastText" variant="h6" textAlign="center" pt={1}>
                                Fotográfa
                            </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary.contrastText" variant="h3" textAlign="center" pb={2}>
                              
                            </Typography>
                            <Typography color="primary.contrastText" variant="h4" textAlign="center">
                               
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={1} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                   
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyleRodape>
        </>
    )
}

export default Rodape