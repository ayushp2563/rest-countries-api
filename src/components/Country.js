import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { bgcolor, margin } from '@mui/system';


const Country = ({ clearselectedRegionHandler, selectedRegion }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios({
      method: "GET",
      url: `https://restcountries.com/v3.1/region/${selectedRegion}`,
    })
      .then((responce) => {
        console.log(responce.data);
        setData(responce.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [selectedRegion]);


  return (
    //<div sx={{background :'linear-gradient(to right ,#ff8a00, red, #e52e71)'}} style={{placeItems:"center"}}>
     <Container  maxWidth='xl'   sx={{ background: 'linear-gradient(to right ,#ff8a00, red, #e52e71)'}}> 
      {
        loading ? <div className="progress">
          <LinearProgress color="success" />
        </div> :
          <Grid container display={'flex'} justifyContent={'flex-end'} spacing={8} columns={12}  direction={'row'}  sx={{ margin: "20px 10px ",background :'linear-gradient(to right ,#ff8a00, red, #e52e71)' }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <button variant='contained' className='buttonstyle button1' onClick={()=>clearselectedRegionHandler()}>
                Pick Another Region
              </button>
            </Grid> 
             {/* <div style={{display:'grid',flexDirection:'column',gridTemplateColumns:'1fr 1fr',placeItems:"center", width:'100vw'}}> */}
            {data.map((country) => (
              <Grid item xs={12} sm={12} md={12} lg={6} key={country.name.common} alignItems="center"  justifyContent="center" sx={ {marginTop:'10px',marginBottom:'10px'}}  >
              {/* <div style={{marginTop:'10px',marginBottom:'10px'}}> */}
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"
                    image={country.flags.png}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {country.name.common}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`Population:${country.population}`}
                      <br/>
                      {`Capital:${country.capital}`}
                      <br/>
                      {`Time Zone:${country.timezones}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> 
              //</div> 
              
            ))}
            {/* </div>  */}
          </Grid>
      }
     </Container>
  //</div>
  )
};

export default Country;