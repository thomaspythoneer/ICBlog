import React, { useState, useEffect, useContext } from 'react';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    margin-top: 50px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    background: #fff8f0; /* Cream background */
`;

const Header = styled(Box)`
    background: #ff7043; /* Vibrant orange color */
    color: white;
    text-align: center;
    padding: 15px;
`;

const Image = styled('img')({
    width: 120,
    display: 'block',
    margin: '20px auto',
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #ff7043;
    color: #fff;
    height: 48px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    &:hover {
        background: #e55b2a;
    }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #ffffff;
    color: #ff7043;
    height: 48px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
        background: #f9f9f9;
    }
`;

const Text = styled(Typography)`
    color: #757575;
    font-size: 14px;
    text-align: center;
`;

const Error = styled(Typography)`
    font-size: 12px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: bold;
`;

const loginInitialValues = {
    username: '',
    password: '',
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png'; 

    useEffect(() => {
        showError(false);
    }, [login]);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });

            isUserAuthenticated(true);
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! Please try again.');
        }
    };

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! Please try again.');
        }
    };

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    };

    return (
        <Component>
            <Header>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                    Welcome to Inkzpire
                </Typography>
            </Header>
            <Box>
                <Image src={imageURL} alt="Inkzpire Logo" />
                {account === 'login' ? (
                    <Wrapper>
                        <TextField
                            variant="outlined"
                            value={login.username}
                            onChange={(e) => onValueChange(e)}
                            name="username"
                            label="Enter Username"
                            fullWidth
                        />
                        <TextField
                            variant="outlined"
                            value={login.password}
                            onChange={(e) => onValueChange(e)}
                            name="password"
                            label="Enter Password"
                            type="password"
                            fullWidth
                        />

                        {error && <Error>{error}</Error>}

                        <LoginButton variant="contained" onClick={() => loginUser()}>
                            Login
                        </LoginButton>
                        <Text>OR</Text>
                        <SignupButton onClick={() => toggleSignup()}>
                            Create an account
                        </SignupButton>
                    </Wrapper>
                ) : (
                    <Wrapper>
                        <TextField
                            variant="outlined"
                            onChange={(e) => onInputChange(e)}
                            name="name"
                            label="Enter Name"
                            fullWidth
                        />
                        <TextField
                            variant="outlined"
                            onChange={(e) => onInputChange(e)}
                            name="username"
                            label="Enter Username"
                            fullWidth
                        />
                        <TextField
                            variant="outlined"
                            onChange={(e) => onInputChange(e)}
                            name="password"
                            label="Enter Password"
                            type="password"
                            fullWidth
                        />

                        <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
                        <Text>OR</Text>
                        <LoginButton variant="contained" onClick={() => toggleSignup()}>
                            Already have an account
                        </LoginButton>
                    </Wrapper>
                )}
            </Box>
        </Component>
    );
};

export default Login;
