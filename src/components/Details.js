import React, {useEffect, useState} from 'react';
import fetchData from './fetchData.js';

const Details = ({id}) => {
    const [info, setInfo] = useState();

    useEffect(() => {
        fetchData(String(process.env.REACT_APP_API_LIST_URL).replace('users', id), setInfo);
    }, [id])

    return <div className='info'>
        {info ? 
            <div>
                <img src={info.avatar} alt='avatar' key={crypto.randomUUID()}></img>
                <p>{info.name}</p>
                <p>City: {info.details.city}</p> 
                <p>Company: {info.details.company}</p>
                <p>Position: {info.details.position}</p>
            </div>
        : null}
    </div>
};

export default Details;
