import React from 'react';
import { Link } from 'react-router-dom';
import './Club.css';
import './card.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Club = (props) => {
    const { idLeague, strLeague, strSport, strLeagueAlternate } = props.club
    return (
        <div>

                <container className="card-container" >
                    <div className="img">
                        <img src="" alt="" />
                    </div>

                    <div className="cardStyle">
                        <h5>Club id number:{idLeague}</h5>
                        <h3>Club Name: {strLeague}</h3>
                        <h4>Type Of Sports: {strSport}</h4>
                        <h3>Name Of league:{strLeagueAlternate}</h3>
                        <Link to={`/clubName/${strLeague}`}><button>Show Detail Club <FontAwesomeIcon icon={faCoffee, faArrowRight} /> </button> </Link>
                    </div>

                </container>
        
        </div>
    );
};

export default Club;