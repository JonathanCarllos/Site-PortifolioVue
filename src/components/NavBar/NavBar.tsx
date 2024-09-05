import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Sobre mim</MenuItem>
                    <MenuItem>Casamentos</MenuItem>
                    <MenuItem>Ensaios</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar