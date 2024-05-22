import React from 'react';
import {
    Container, Grid, Typography, Button, Select, MenuItem, FormControl, InputLabel, IconButton, Box,
    Link, Paper, LinearProgress,
    Divider,
    AppBar
} from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../images/logo.avif';
import toy1 from '../images/toy1.webp';
import gif1 from '../images/gif1.webp';
import gif2 from '../images/gif2.webp';
import gif3 from '../images/gif3.webp';
import gif4 from '../images/gif4.webp';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import c1 from '../images/c1.webp';
import c2 from '../images/c2.webp';
import c3 from '../images/c3.webp';
import c4 from '../images/c4.webp';
import c5 from '../images/c5.webp';
import c6 from '../images/c6.webp';

const Img = styled('img')({
    width: '100%',
    borderRadius: '8px',
});

const reviews = [
    {
        id: 1,
        rating: 5,
        text: 'This is my second purchase of these. They are sturdy and amazing toys for good price. Thank you',
        author: 'Vito C.',
        imgSrc: c1,
    },
    {
        id: 2,
        rating: 4,
        text: 'My daughter loves it!',
        author: 'Jane D.',
        imgSrc: c2,
    },
    {
        id: 3,
        rating: 5,
        text: 'Perfect educational toy for my kid.',
        author: 'John S.',
        imgSrc: c3,
    },
    {
        id: 4,
        rating: 5,
        text: 'Very nice set, Velcro to stick and parts to cut, very easy to do, such a tamper case 😃 Good quality materials. Fast shipping.',
        author: 'Caterpillar.',
        imgSrc: c4,
    },
    {
        id: 5,
        rating: 3,
        text: 'I love it! Ideal for the little ones my baby for a year is entertained very well',
        author: 'Tony shark.',
        imgSrc: c5,
    },
    {
        id: 6,
        rating: 5,
        text: 'I give you a 10 is a great thank you',
        author: 'Rakshitha S.',
        imgSrc: c6,
    },
];

const ProductDetails = () => {
    const [quantity, setQuantity] = React.useState(1);

    const handleQuantityChange = (delta) => {
        setQuantity((prev) => Math.max(1, prev + delta));
    };

    const totalReviews = 226;
    const averageRating = 4.9;
    const ratingCounts = {
        5: 208,
        4: 17,
        3: 0,
        2: 1,
        1: 0,
    };

    return (
        <div>
        <AppBar position='sticky' sx={{backgroundColor:'white'}}>
        <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} position={'sticky'}>
                <Grid item>
                    <img src={logo} alt="Logo" style={{ marginRight: 16 }} />
                </Grid>
                <Grid item>
                    <Link href="#" color="inherit" sx={{ marginRight: 2, textDecoration: 'none', color: '#4682B4', fontWeight: 'bold' }}>
                        Home
                    </Link>
                    <Link href="#" color="inherit" sx={{ marginRight: 2, textDecoration: 'none', color: '#4682B4', fontWeight: 'bold' }}>
                        Shop all
                    </Link>
                    <Link href="#" color="inherit" sx={{ marginRight: 2, textDecoration: 'none', color: '#4682B4', fontWeight: 'bold' }}>
                        Track your order
                    </Link>
                    <Link href="#" color="inherit" sx={{ marginRight: 2, textDecoration: 'none', color: '#4682B4', fontWeight: 'bold' }}>
                        Contact us
                    </Link>
                </Grid>
                <Grid item>
                    <IconButton color="inherit">
                        <ShoppingCartIcon sx={{color:'#4682B4'}}/>
                    </IconButton>
                </Grid>
            </Grid>
        </AppBar>
        <Container>
            
            <Grid container spacing={4} sx={{ marginTop: 2 }}>
                <Grid item xs={12} md={6}>
                    <Img src={toy1} alt="Montessori Busy Book" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Montessori Busy Book
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <StarIcon color="primary" />
                        <StarIcon color="primary" />
                        <StarIcon color="primary" />
                        <StarIcon color="primary" />
                        <StarIcon color="primary" />
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>
                            226 Reviews
                        </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ marginTop: 2 }}>
                        $34.99 <Typography variant="body2" component="span" sx={{ textDecoration: 'line-through', marginLeft: 1 }}>$69.99</Typography>
                        <Typography variant="body2" component="span" sx={{ color: 'red', marginLeft: 1 }}>SAVE 50%</Typography>
                    </Typography>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel>Color</InputLabel>
                        <Select defaultValue="BLUE">
                            <MenuItem value="BLUE">Blue</MenuItem>
                            <MenuItem value="PINK">Pink</MenuItem>
                        </Select>
                    </FormControl>
                    <Box display="flex" alignItems="center" sx={{ marginTop: 2 }}>
                        <Typography variant="body1" sx={{ marginRight: 2 }}>Quantity</Typography>
                        <IconButton onClick={() => handleQuantityChange(-1)}><RemoveIcon /></IconButton>
                        <Typography variant="body1" sx={{ marginX: 2 }}>{quantity}</Typography>
                        <IconButton onClick={() => handleQuantityChange(1)}><AddIcon /></IconButton>
                    </Box>
                    <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2, p: 2, backgroundColor: '#4682B4', fontWeight: 'bold' }}> <ShoppingCartIcon />  Add to Cart</Button>
                    <Button variant="outlined" fullWidth sx={{ marginTop: 1, p: 2, borderColor: '#4682B4', fontWeight: 'bold' }}>Buy it now</Button>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                        <ShoppingCartIcon />
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>Guaranteed safe & secure checkout</Typography>
                    </Box>
                </Grid>
                <Container maxWidth="md">
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" color={'#84a7f6'} textAlign={'center'} fontWeight={'bold'} pt={3} gutterBottom>
                            End the Search for Engaging Education
                        </Typography>
                        <Typography variant="body" textAlign={'center'} >
                            <p>Are you constantly on the lookout for educational tools that both engage and educate your
                                child, all while grappling with the challenge of finding activities that hold their attention?
                                We understand the struggle of keeping little ones entertained and stimulated, and that's
                                why our Montessori Busy Book is here to alleviate your parenting pains and turn learning
                                into an exciting adventure!</p>
                        </Typography>
                        <img src={gif1} alt='aa' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" color={'#84a7f6'} textAlign={'center'} fontWeight={'bold'} pt={3} gutterBottom>
                            Dynamic Learning, No More Boredom
                        </Typography>
                        <Typography variant="body" textAlign={'center'} >
                            <p>Children often grow bored quickly, making it challenging to keep them focused on
                                educational activities. Our Busy Book provides a dynamic learning experience.
                                Watch as your child explores various interactive pages, ensuring that boredom is
                                replaced with continuous discovery and enjoyment.</p>
                        </Typography>
                        <img src={gif2} alt='aa' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" color={'#84a7f6'} textAlign={'center'} fontWeight={'bold'} pt={3} gutterBottom>
                            Say Goodbye to Screentime Woes
                        </Typography>
                        <Typography variant="body" textAlign={'center'} >
                            <p>Concerned about the negative effects of excessive screen time on your child's development?
                                Our Montessori Busy Book offers a screen-free alternative to learning. With engaging
                                activities that stimulate the mind and senses, you can bid farewell to the worries associated
                                with prolonged exposure to screens.</p>
                        </Typography>
                        <img src={gif3} alt='aa' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" color={'#84a7f6'} textAlign={'center'} fontWeight={'bold'} pt={3} gutterBottom>
                            Interactive Education, Anytime, Anywhere
                        </Typography>
                        <Typography variant="body" textAlign={'center'} >
                            <p>Busy schedules and on-the-go lifestyles can make consistent educational
                                engagement challenging. Our Busy Book is portable and versatile, turning any
                                moment into an opportunity for learning. Say goodbye to rigid learning
                                schedules and hello to the flexibility of interactive education, wherever your
                                adventures take you.</p>
                        </Typography>
                        <img src={gif4} alt='aa' />
                    </Box>
                </Container>
                <Grid container display={'flex'} flexDirection={'column'} rowGap={3}>
                    <Typography variant="h6" fontWeight={'bold'}>Customer Reviews</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', columnGap: 5 }}>
                        <Box display="flex" flexDirection={'column'} alignItems="center" marginTop={2}>
                            <Typography variant="h3" component="span">{averageRating}</Typography>
                            <Box sx={{ marginLeft: 1, display: 'flex', alignItems: 'center' }}>
                                {[...Array(5)].map((_, index) => (
                                    index < Math.round(averageRating) ? <StarIcon key={index} color="primary" /> : <StarBorderIcon key={index} />
                                ))}
                            </Box>
                            <Typography variant="body1" sx={{ marginLeft: 2,pt:2 }}>{totalReviews} reviews</Typography>
                        </Box>
                        <Divider sx={{border:'1px solid grey',height:'200px'}}/>
                        <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column',width:'100%'}}>
                            {Object.entries(ratingCounts).map(([stars, count]) => (
                                <Box key={stars} display="flex" alignItems="center" marginTop={1}>
                                    <Typography variant="body1" sx={{ width: '3rem' }}>{stars} Star  </Typography>
                                    <LinearProgress variant="determinate" value={(count / totalReviews) * 100} sx={{ width: '100%' }} />
                                    <Typography variant="body1">{count}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {reviews.map(review => (
                        <Grid item xs={12} md={4} key={review.id}>
                            <Paper sx={{ padding: 2 }}>
                                <img src={review.imgSrc} alt='' width={'280px'} height={'330px'} /> 
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                                    {[...Array(5)].map((_, index) => (
                                        index < review.rating ? <StarIcon key={index} color="primary" /> : <StarBorderIcon key={index} />
                                    ))}
                                </Box>
                                <Typography variant="h6" fontWeight={'bold'}>{review.author}</Typography>
                                <Typography variant="body1">{review.text}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default ProductDetails;
