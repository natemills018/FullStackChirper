import React, {useState, useEffect} from 'react';
import { fetchData } from '../services/fetchData';
import type { ITweetRow } from '../types';

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
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='col-12 col-md-6'>
                    <ul className='list-group'>
                        {list.map(tweet => (
                            <li className='list-group-item' key={`tweet-${tweet.id}`}>
                                {tweet.location}
                            </li>
                        ))}
                    </ul>

                </h1>
            </section>
        </main>
    )
}


export default Tweets;