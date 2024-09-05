import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png.jpg"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import FadeInText from "../../../../components/StyledFadeInText/FadeInText"

const Hero = () => {

    const StyleHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.contrastText,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
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
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"120%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyleImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h3" textAlign="center" pb={2}>
                                Naiane Barbosa - Fotografias
                            </Typography>
                            <FadeInText color="primary.contrastText" variant="h4" textAlign="center">
                                O nosso papel é registrar tudo que vocês estão vendo e o que não podem ver,todas as
                                cores desse momento especial.
                            </FadeInText>
                            <Grid container display="flex" justifyContent="center" spacing={1} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <a href="https://drive.google.com/file/d/17aZD_89mfXN2W5rUBUht88dNOPWSlvAH/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <StyledButton>
                                            <CloudDownloadIcon />
                                            <Typography>
                                                PDF Fotos
                                            </Typography>
                                        </StyledButton>
                                    </a>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <a href="https://wa.me/+5588997147719" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <StyledButton>
                                            <WhatsAppIcon />
                                            <Typography>
                                                Whatsapp
                                            </Typography>
                                        </StyledButton>
                                    </a>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <a href="https://www.instagram.com/naafoto_/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <StyledButton>
                                            <InstagramIcon />
                                            <Typography>
                                                Instagram
                                            </Typography>
                                        </StyledButton>
                                    </a>
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
