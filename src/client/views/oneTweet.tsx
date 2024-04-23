import React, {useState, useEffect} from 'react';
import type { ITweetRow } from '../types';
import { Link, useParams } from 'react-router-dom';

interface TweetProps {

}

const Tweet = (props: TweetProps) => {
    const { id } = useParams();
    const [data, setData] = useState<ITweetRow | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/tweets/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => alert(e.message))
    }, [id])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div className='card-title'> {data?.handle} You've reached the details page of your Tweet</div>
                            <h1 className='text-primary'>This is the {id} tweet submitted</h1>
                            <p className='card-text'>{data?.body}</p>
                            
                            <Link to='/tweets' className='btn btn-outline btn-primary'>Go Back to Tweets</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Tweet;