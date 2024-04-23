import React, { useState, useEffect } from 'react';
import type { ITweetRow } from '../types';
import type { IClientRow } from '../types';
import { Link, useParams } from 'react-router-dom';

interface AdminClientProps {

}

const AdminClients = (props: AdminClientProps) => {
    const [list, setList] = useState<IClientRow[]>([]);
    const [selectedClientid, setSelectedClientId] = useState([]);
    const { id } = useParams();
    const [data, setData] = useState<ITweetRow | null>(null);

    const [tweet, setTweet] = useState<ITweetRow[]>([])

    useEffect(() => {
        fetch("http://localhost:3000/api/clients")
            .then(res => res.json())
            .then(list => setList(list));
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/api/tweets/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => alert(e.message))
    }, [id])


    
    const optionHandler = (event: any) => {
        setSelectedClientId(event.target.value);
        console.log("User Selected Value -", event.target.value);
    }

    return (
        <main className='container'>
            <div className='row justify-content-center mt-5'>
                <h1 className='text-light'>Choose your Client</h1>
                <select value={selectedClientid} onChange={optionHandler}>
                    {list.map(client => <option value={client.id}>{client.email}</option>)}
                </select>
                <div className='col-12 col-md-6 m-5'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div className='card-title'> {data?.email} You've reached the details page of your Tweet</div>
                            <h1 className='text-primary'>This is the {id} tweet submitted</h1>
                            <p className='card-text'>{data?.body}</p>
                            
                            <Link to='/tweets' className='btn btn-outline btn-primary'>Go Back to Tweets</Link>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}


export default AdminClients;