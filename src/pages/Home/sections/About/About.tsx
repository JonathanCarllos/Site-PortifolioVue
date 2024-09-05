import { Container, Grid, styled } from "@mui/material"
import SlideInText from "../../../../components/SlideInText/SlideInText"
import FadeInText from "../../../../components/StyledFadeInText/FadeInText"

const About = () => {

    const StyleAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "5px",
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0",
        }
    }))

    return (
        <>
            <StyleAbout>
                <Container maxWidth="lg">
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item xs={12} md={12} display="flex" justifyContent="center" textAlign="center">
                            <SlideInText color="secondary.contrastText" variant="h2" mb={0}>
                                Quem Sou Eu?
                            </SlideInText>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FadeInText color="secondary.contrastText" variant="h4" textAlign="justify">
                                Olá, sou Naiane, fotógrafa especializada em família. Desde que comecei na fotografia, fui profundamente encantada pela arte de capturar momentos familiares. Esses instantes são preciosos e irrepetíveis!
                                Minha experiência abrange não apenas ensaios de família, mas também casamentos, gestantes, aniversários e batizados. Cada sessão é uma oportunidade única de criar memórias duradouras, e estou comprometida em usar minha experiência para oferecer o melhor registro do seu ensaio.
                            </FadeInText>
                        </Grid>
                    </Grid>
                </Container>
            </StyleAbout>
        </>
    )
}

export default About
