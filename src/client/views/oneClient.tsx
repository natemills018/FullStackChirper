import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { IClientRow } from '../types';
interface ClientProps {

}

const Client = (props: ClientProps) => {
    const { id } = useParams();
    const [data, setData] = useState<IClientRow | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/clients${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <h2 className='card-title'>{data?.email} </h2>
                            <p className='card-text'>User #{id}</p>
                            <Link to='/clients' className='btn btn-outline btn-primary'>Go Back to Users Handle</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Client;