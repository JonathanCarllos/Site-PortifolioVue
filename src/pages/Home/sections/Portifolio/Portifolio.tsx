import { Container, Grid, styled, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import SlideInText from "../../../../components/SlideInText/SlideInText"

const StylePortifolio = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    display: "flex"


}))

const Portifolio = () => {
    return (
        <>
            <StylePortifolio>
                <Container maxWidth="lg">
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item xs={12} md={12} display="flex" justifyContent="center" textAlign="center">
                            <SlideInText color="secondary.contrastText" variant="h2" mb={0}>
                                Portifólio
                            </SlideInText>
                        </Grid>
                        <Grid item xs={12} md={12} spacing={4} display="flex" justifyContent="center" textAlign="center">
                            <Card sx={{ maxWidth: 345, mx: 2 }}>
                                <CardMedia
                                    component="img"
                                    alt="Casamentos"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Casamentos
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ex, a autem maxime voluptatibus libero dolor exercitationem omnis dignissimos blanditiis, molestiae debitis, perspiciatis neque sint mollitia et non reiciendis optio!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Baixar - PDF</Button>
                                    <Typography> - </Typography>
                                    <Button size="small">Leia mais</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 345, mx: 2 }}>
                                <CardMedia
                                    component="img"
                                    alt="Aniversários"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Aniversários
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ex, a autem maxime voluptatibus libero dolor exercitationem omnis dignissimos blanditiis, molestiae debitis, perspiciatis neque sint mollitia et non reiciendis optio!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Baixar - PDF</Button>
                                    <Typography> - </Typography>
                                    <Button size="small">Leia mais</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 345, mx:2 }}>
                                <CardMedia
                                    component="img"
                                    alt="Ensaios"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Ensaios
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ex, a autem maxime voluptatibus libero dolor exercitationem omnis dignissimos blanditiis, molestiae debitis, perspiciatis neque sint mollitia et non reiciendis optio!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Baixar - PDF</Button>
                                    <Typography> - </Typography>
                                    <Button size="small">Leia mais</Button>
                                </CardActions>
                            </Card>
                        </Grid>


                    </Grid>

                </Container>

            </StylePortifolio>
        </>
    )
}

export default Portifolio
