import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
        url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/cover no-repeat;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 64px;
    color: #FFFFFF;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const SubHeading = styled(Typography)`
    font-size: 24px;
    color: #F7F7F7;
    font-weight: 400;
    text-align: center;
    max-width: 600px;
    line-height: 1.5;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
`;

const Banner = () => {
    return (
        <Image>
            <Heading>Inkzpire</Heading>
            <SubHeading>
                Collaborate. Innovate. Inspire.  
            </SubHeading>
            <SubHeading>
                Your one-stop platform for cross-campus ideas and interactions.
            </SubHeading>
        </Image>
    );
};

export default Banner;

