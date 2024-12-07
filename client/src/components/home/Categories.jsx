import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/data';

// Custom styled components for Inkzpire branding
const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
    margin-top: 20px;
`;

const StyledButton = styled(Button)`
    margin: 20px 0;
    width: 85%;
    background-color: #FB641B;  /* Inkzpire orange */
    color: white;
    text-transform: none;
    font-size: 16px;
    border-radius: 5px;
    &:hover {
        background-color: #e55d1f;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 10px;
    font-weight: 500;
    font-size: 18px;
    &:hover {
        background-color: #FB641B;  /* Highlight color for hover */
        color: white;
        border-radius: 5px;
    }
`;

const CategoryRow = styled(TableRow)`
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2} style={{ textAlign: 'center', fontSize: '24px', fontWeight: '600' }}>
                            <StyledLink to={"/"}>All Categories</StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <CategoryRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </CategoryRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    );
}

export default Categories;
