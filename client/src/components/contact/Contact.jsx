import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    width: 100%;
    background: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
        url(http://mrtaba.ir/image/bg2.jpg) center/cover no-repeat;
    height: 60vh; /* Adjusted height to ensure visibility */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px; /* Add margin to push content below the banner */
    background-color: #ffffff; /* Added background color for better contrast */
`;

const Heading = styled(Typography)`
    font-size: 60px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 20px;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
`;

const Text = styled(Typography)`
    font-size: 20px;
    color: #F7F7F7;
    font-weight: 400;
    line-height: 1.6;
    max-width: 600px;
    text-align: center;
    margin-bottom: 30px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
`;

const SocialLinks = styled(Box)`
    display: flex;
    gap: 20px;
    font-size: 35px;

    & > a {
        color: #FFFFFF;
        transition: transform 0.3s ease;
    }

    & > a:hover {
        transform: scale(1.2);
    }
`;

const Contact = () => {
    return (
        <Box>
            <Banner>
                <Heading>Contact Us</Heading>
                <Text variant="h5">
                    Have any questions or want to collaborate? Get in touch with us today!  
                    We're here to make connections, share ideas, and inspire.
                </Text>
            </Banner>
            <Wrapper>
                <Typography variant="h6" color="primary" style={{ marginBottom: '20px', textTransform: 'uppercase' }}>
                    Let's Connect!
                </Typography>
                <SocialLinks>
                    <Link href="https://www.instagram.com/inkzpire/" color="inherit" target="_blank">
                        <Instagram />
                    </Link>
                    <Link href="mailto:contact@inkzpire.com?Subject=Inquiry" target="_blank" color="inherit">
                        <Email />
                    </Link>
                    <Link href="https://github.com/inkzpire" color="inherit" target="_blank">
                        <GitHub />
                    </Link>
                </SocialLinks>
            </Wrapper>
        </Box>
    );
}

export default Contact;
