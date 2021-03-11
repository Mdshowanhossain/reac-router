import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetail.css';
import cardImg from './card.png';

const ClubDetail = () => {
    const { name, strLeague, strSport, strLeagueAlternate } = useParams({});
    const [club, setClub] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php/${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => setClub(data))
    }, []);

    const cardImgStyle = {
        width: '500px',
        marginTop: '20px'
    }
    const detailStyle = {
        textAlign: 'center'
    }
    return (
        <div >

            <div style={detailStyle} className="detail">
                <img style={cardImgStyle} src={cardImg} alt="" />
                <h6>CLUB NAME=> {name}</h6>

                <h6>Type Of Sports=>{strSport}</h6>
                <h6>Name Of league=>{strLeague}</h6>
                <h6>Type Of Sports=>{strSport}</h6>
                <h6>Name Of league=>{strLeagueAlternate}</h6>


       
              
                <br /> <br /><br /> <br />  <br /> <br /><br /> <br />
            </div>

            <div className="card-desc">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci earum suscipit autem deserunt cupiditate quaerat omnis quae, beatae atque tempora sint optio assumenda in quam, sit reiciendis repudiandae id ea error. Rerum earum dicta quos eius ipsum at placeat exercitationem assumenda iure perspiciatis! Repellat reiciendis dignissimos maiores. Deserunt accusantium sint excepturi est? Mollitia natus modi nemo veniam! Magnam, sequi doloribus modi sed iure excepturi architecto ea impedit aliquid? Eveniet placeat molestias repudiandae earum? Nam quaerat doloribus totam labore porro. Odit ratione blanditiis amet molestias ab doloribus nemo assumenda ea dolorum praesentium quas quidem accusantium magnam animi incidunt saepe debitis, temporibus voluptate excepturi asperiores aperiam voluptas accusamus quisquam eos! Temporibus, ratione! Pariatur, quidem! Doloremque, molestias illum cupiditate dolore qui, delectus reiciendis odio fugit adipisci quia odit consequuntur nobis, architecto commodi eum neque nesciunt ad eos quidem quis voluptas? A, quaerat quo!</p>
                <br /> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum error neque aliquid nihil earum iste rem saepe officiis cum autem at optio sequi sed deleniti adipisci, blanditiis culpa dolor quia, numquam itaque omnis praesentium exercitationem! Magni aliquid expedita, nemo est minus dolorem nesciunt nihil quia fuga provident exercitationem quas excepturi blanditiis beatae accusantium eum optio, temporibus dolorum esse ratione modi laboriosam! Nobis, facere! Possimus beatae itaque, modi autem dicta dolorem ad qui, deserunt odio animi ducimus quibusdam similique neque earum fugiat magnam illum. Dignissimos, numquam alias molestiae quod explicabo corporis. Explicabo pariatur esse, hic exercitationem iure quibusdam illo asperiores reiciendis? Commodi adipisci labore dicta dolore autem provident, neque vitae, facilis quisquam, vero perferendis non maxime. Sapiente magni ad debitis reiciendis dolor impedit nisi corporis officiis deleniti incidunt error repudiandae fuga magnam hic, accusantium iure temporibus ipsam asperiores? Modi, atque!</p>
            </div>

        </div>
    );
};

export default ClubDetail;