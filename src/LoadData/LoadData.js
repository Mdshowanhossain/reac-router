// import React from 'react';
// import { useEffect, useState } from 'react';
// import ClubDetail from '../component/ClubDetail/ClubDetail';
// // import { useParams } from 'react-router';

// const LoadData = () => {
//     const [clubs, setClubs] = useState([])
//     useEffect(() => {
//         fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
//             .then(res => res.json())
//             .then(data => setClubs(data.leagues))

//     }, [])

//     return (
//         <div>
//             <h1>Data{clubs.length}</h1>
//            {/* <ClubDetail></ClubDetail> */}
//             {/* {
//                 clubs.map(club=> <ClubDetail club={club}></ClubDetail>)
//             } */}
//         </div>
//     );
// };

// export default LoadData;