import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png.jpg"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyleHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.contrastText,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyleImg = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`

    }))

    return (
        <>
            <StyleHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <Box position="relative">
                                <Box position="absolute" width={"130%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyleImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                                Naiane Barbosa - Fotógrafa
                            </Typography>
                            <Typography color="primary.contrastText" variant="h3" textAlign="center">
                                Ensaios externos e internos
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <CloudDownloadIcon />
                                        <Typography>
                                            Ensaios - PDF
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <WhatsAppIcon />
                                        <Typography>
                                            Whatsapp
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <InstagramIcon />
                                        <Typography>
                                            Instagram
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyleHero>
        </>
    )
}

export default Hero
