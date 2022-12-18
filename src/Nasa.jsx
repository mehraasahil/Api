import JavaScri, { useState, useEffect } from 'react';
import axios from 'axios';


const Nasa = () => {
    const [weather, setWeather] = useState([]);
    useEffect(( ) => {
        axios.get('https://all-the-weather.herokuapp.com/cities')
        .then((res) => {
            setWeather(res.data.items)
        })    
}, []);

return(
    <>
     { weather.map((wd) => {
        return (
            <div className="weatherApp" key={wd.id}>
                <h1>{wd.countryCode}</h1>
                <h1>{wd.id}</h1>
                <h1>{wd.name}</h1>
                <h1>{wd.regionCode}</h1>
                <hr />
            </div>
            )
      })
    }
    </>
  );
   
}

export default Nasa