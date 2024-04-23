import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { IClientRow } from '../types';
interface ClientProps {

}

const Client = (props: ClientProps) => {
    const { id } = useParams();
    const [data, setData] = useState<IClientRow | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/clients/${id}`)
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
                            <div className='card-title'> User {id}</div>
                            <p className='card-text'>{data?.email}</p>
                            
                            <Link to='/clients' className='btn btn-outline btn-primary'>Go Back to Users</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Client;