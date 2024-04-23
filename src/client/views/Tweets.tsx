import React, { useState, useEffect } from 'react';
import type { ITweetRow } from '../types';
import type { IClientRow } from '../types';
import { Link } from 'react-router-dom';

interface TweetsProps {

}

const Tweets = (props: TweetsProps) => {
    const [list, setList] = useState<ITweetRow[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/tweets")
            .then(res => res.json())
            .then(list => setList(list));
    }, [])


    return (
        <main className='container'>
            <div className='row justify-content-center mt-5'>
                    {list.map((tweet) => (
                        <div className="col-md-3 m-3 card card-shadow" key={`div-${tweet.id}`}>
                            <div className="card-title mt-2">
                                <div>{tweet.handle}</div>
                            </div>
                            <div className='card-body mx-1'>
                                {tweet.body}
                            </div>
                            <div className=' d-flex justify-content-center pb-3'>
                                <Link to={`/tweets/${tweet.id}`} className='btn btn-md btn-light'>Details</Link>
                            </div>
                        </div>
                    ))}
            </div>
        </main>
    )
}


export default Tweets;