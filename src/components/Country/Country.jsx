import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => {

    const { name, flags, population, area, cca3 } = country;


    const [Visited, setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!Visited);
    }


    return (
        <div className={`country ${Visited ?'visited': 'non-visited'}`}>
            <h3 style={{color:Visited ? 'green':'Red'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p> <small>Code: {cca3}</small> </p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            {Visited ?  ' I have visited this country.' : 'I want to visit.'}
        </div>
    );
};

export default Country;