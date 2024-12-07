import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FB641B; /* Inkzpire's brand color */
    color: white;
    box-shadow: none;
    position: sticky;
    top: 0;
`;

const Container = styled(Toolbar)`
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const NavLinks = styled('div')`
    display: flex;
    gap: 30px;
`;

const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
        background: #fff;
        color: #FB641B;
        transform: scale(1.1);
    }
`;

const LogoutButton = styled(Button)`
    color: white;
    font-size: 16px;
    background-color: #2874f0;
    text-transform: none;
    border-radius: 5px;
    &:hover {
        background-color: #2168d1;
    }
`;

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => {
        // Add your logout logic here (if any)
        navigate('/account');
    }

    return (
        <Component>
            <Container>
                <NavLinks>
                    <StyledLink to='/'>HOME</StyledLink>
                    <StyledLink to='/about'>ABOUT</StyledLink>
                    <StyledLink to='/contact'>CONTACT</StyledLink>
                </NavLinks>
                <LogoutButton variant="contained" onClick={logout}>LOGOUT</LogoutButton>
            </Container>
        </Component>
    );
}

export default Header;
