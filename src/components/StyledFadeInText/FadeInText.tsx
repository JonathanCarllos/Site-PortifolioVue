import {styled, Typography } from "@mui/material"

const FadeInText = styled(Typography)`
    opacity: 0;
    animation: fadeIn 10s forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export default FadeInText