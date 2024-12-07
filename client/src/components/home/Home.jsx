import { Grid, Box, styled } from '@mui/material';

// Components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';
import Footer from '../footer/Footer';

const StyledGrid = styled(Grid)`
    padding: 20px;
    background-color: #F9F9F9;
`;

const Home = () => {
    return (
        <>
            <Banner />
            <StyledGrid container spacing={3}>
                <Grid item lg={3} xs={12} sm={4}>
                    {/* Categories Section */}
                    <Box
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            padding: "20px",
                        }}
                    >
                        <Categories />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={8} lg={9}>
                    {/* Posts Section */}
                    <Box
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            padding: "20px",
                        }}
                    >
                        <Posts />
                    </Box>
                </Grid>
            </StyledGrid>
            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;
