import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/fetchData';
import type { ITweetRow } from '../types';
import type { IClientRow } from '../types';

interface TweetsProps {

}

const Tweets = (props: TweetsProps) => {
    const [list, setList] = useState<ITweetRow[]>([]);

    const [handle, setHandle] = useState<IClientRow[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/tweets")
            .then(res => res.json())
            .then(list => setList(list));
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/api/clients")
            .then(res => res.json())
            .then(handle => setHandle(handle));
        
    }, [])

    return (
        <main className='container'>
            <div className='row justify-content-center mt-5'>
                    {list.map((list) => (
                        <div className="col-md-3 m-3 card card-shadow" key={`div-${list.id}`}>
                            <div className="card-title mt-2">
                                <div>{list.handle}</div>
                            </div>
                            <div className='card-body mx-1'>
                                {list.body}
                            </div>
                        </div>
                    ))}
            </div>
        </main>
    )
}


export default Tweets;