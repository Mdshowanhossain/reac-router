import React from 'react';
import { useEffect, useState } from 'react';
import Club from '../Club/Club';

const Home = () => {
    const [clubs, setClubs] = useState([])
    useEffect(()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    .then(res=> res.json())
    .then(data => setClubs(data.leagues))
    
    }, [])

    return (
        <div>
            <h1>All Club Quantity{clubs.length}</h1>
            {
                clubs.map(club => <Club club={club}></Club>)
            }
        </div>
    );
};

export default Home;