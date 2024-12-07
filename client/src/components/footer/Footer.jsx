import React from 'react';
import { Grid, Box, Typography, Link, styled } from '@mui/material';
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';

const FooterContainer = styled(Box)`
    background-color: #333;
    color: #fff;
    padding: 40px 20px;
    margin-top: 30px;
`;

const QuickLinks = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const SocialLinks = styled(Box)`
    display: flex;
    gap: 20px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" color="inherit">Quick Links</Typography>
                    <QuickLinks>
                        <Link href="/" color="inherit">Home</Link>
                        <Link href="/about" color="inherit">About</Link>
                        <Link href="/contact" color="inherit">Contact</Link>
                        <Link href="/categories" color="inherit">Categories</Link>
                    </QuickLinks>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" color="inherit">Contact Info</Typography>
                    <Typography variant="body2" color="inherit">Email: contact@inkzpire.com</Typography>
                    <Typography variant="body2" color="inherit">Phone: +123 456 789</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" color="inherit">About Inkzpire</Typography>
                    <Typography variant="body2" color="inherit">
                        Inkzpire is a platform for creative minds to share and explore inspiring blogs. Join us and become a part of the creative community!
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" color="inherit">Follow Us</Typography>
                    <SocialLinks>
                        <Link href="https://www.instagram.com/inkzpire" color="inherit" target="_blank">
                            <Instagram fontSize="large" />
                        </Link>
                        <Link href="https://github.com/inkzpire" color="inherit" target="_blank">
                            <GitHub fontSize="large" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/inkzpire" color="inherit" target="_blank">
                            <LinkedIn fontSize="large" />
                        </Link>
                    </SocialLinks>
                </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Typography variant="body2" color="inherit">
                    © {new Date().getFullYear()} Inkzpire. All rights reserved.
                </Typography>
            </Box>
        </FooterContainer>
    );
};

export default Footer;
