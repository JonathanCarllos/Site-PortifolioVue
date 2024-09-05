import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
}

const StyledButtonComponent = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.secondary.contrastText
    }
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
    return (
        <StyledButtonComponent>
            {children}
        </StyledButtonComponent>
    );
}

export default StyledButton;
