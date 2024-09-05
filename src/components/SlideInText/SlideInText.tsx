import { styled, Typography } from "@mui/material";

const SlideInText = styled(Typography)`
    position: relative;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: slide-in 5s ease-out forwards;

    @keyframes slide-in {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
`;

export default SlideInText;
