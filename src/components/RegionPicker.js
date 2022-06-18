import React from 'react'
import '../App';
import Africa from '../images/africa.png';
import America from '../images/america.png';
import Asia from '../images/asia.png';
import Europe from '../images/europe.png';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const RegionPicker = ({ onRegionPickHandler }) => {


    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth='xl'>
                    <Box sx={{ background: 'linear-gradient(to right bottom,#C15CFF,#FF5454)', minHeight: '90vh', display: "flex", alignItems: "center", justifyContent: "center", width: "100%", margin: "10px 0" }}>

                        <div className="hide" >
                            <Grid container spacing={1} columns={12}>

                                <Grid item xs={12} sm={12} md={6} lg={6}>

                                    <div className="regionpicker" onClick={() => onRegionPickHandler('africa')
                                    }>
                                        {/* <span className="tooltiptext"> Click here for info </span> */}

                                        {/* <h3>Click here</h3> */}
                                        <img className='img' src={Africa} alt="#" />
                                        <h2 className="neon">Africa</h2>
                                        {/* <Typography variant="h5">Africa</Typography> */}
                                        <div className='overlay'>
                                            <div className='title'>
                                                Click Here
                                                <p className='desc'>
                                                    For Information
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <div className="regionpicker"
                                        onClick={() => onRegionPickHandler('america')}>
                                        <img className='img' src={America} alt="#" />
                                        <h2 className="neon">America</h2>
                                        {/* <Typography variant="h5" >America</Typography> */}
                                        <div className='overlay'>
                                            <div className='title'>
                                                Click Here
                                                <p className='desc'>
                                                    For Information
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <div className="regionpicker" onClick={() => onRegionPickHandler('asia')}>
                                        <img className='img' src={Asia} alt="#" />
                                        <h2 className="neon">Asia</h2>
                                        {/* <Typography variant="h5" >Asia</Typography> */}
                                        <div className='overlay'>
                                            <div className='title'>
                                                Click Here
                                                <p className='desc'>
                                                    For Information
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <div className="regionpicker" onClick={() => onRegionPickHandler('europe')}>
                                        <img className='img' src={Europe} alt="#" />
                                        <h2 className="neon">Europe</h2>
                                        {/* <Typography variant="h5" >Europe</Typography> */}
                                        <div className='overlay'>
                                            <div className='title'>
                                                Click Here
                                                <p className='desc'>
                                                    For Information
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    )
}

export default RegionPicker