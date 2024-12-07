import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">About Inkzpire</Typography>
                <Text variant="h5">
                    Welcome to <strong>Inkzpire</strong>, a platform designed to foster collaboration and inspiration among college communities. Our mission is to bridge the gap between campuses by creating a hub for inter-college blogs, events, and research. Whether you're a student, a faculty member, or a club enthusiast, Inkzpire offers the tools you need to share your ideas and build connections.
                </Text>
                <Text variant="h5">
                    Discover the latest blogs, participate in exciting events, and collaborate on projects with peers across institutions. Inkzpire is built to amplify your voice and help you showcase your achievements on a wider stage.
                </Text>
                <Text variant="h5">
                    Check out our latest projects and initiatives here:
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/inkzpire" color="inherit" target="_blank">
                            <GitHub />
                        </Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Got questions or want to get involved? Reach out to us on:
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/inkzpire/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>
                    or drop us an email at 
                    <Link href="mailto:inkzpire.support@gmail.com?Subject=Inquiry" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
};

export default About;
