import React, {useEffect, useState} from 'react';
import fetchData from './fetchData.js';

const List = ({list, setList, handleClick}) => {
    const [Loading, setLoading] = useState(true);
      
    useEffect(() => {
        fetchData(process.env.REACT_APP_API_LIST_URL, setList);
        setLoading(false);
    }, []);

    return <div>
        {Loading && <p>Loading data...</p>}
        <ul className='list' onClick={handleClick}>
            {list ? list.map(el => {
                return <li key={el.id} id={el.id} className='item'>
                    {el.name}
                </li>
            }): null}
        </ul>
    </div>

};

export default List;
