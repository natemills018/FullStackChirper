import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../services/fetchData';
import type { IClientRow } from '../types';
interface ClientsProps {

}

const Clients = (props: ClientsProps) => {
    const [list, setList] = useState<IClientRow[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/api/clients")
        .then(res => res.json())
        .then(list => setList(list));
    }, [])


    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='col-12 col-md-6'>
                    <ul className='list-group'>
                        {list.map(client => (
                            <li className='list-group-item d-flex justify-content-between align-items center'
                            key={`client-${client.id}`}>
                                <span>{client.handle}</span>
                                <Link to={`/clients/${client.id}`} className='btn btn-sm btn-secondary'>Email</Link>
                            </li>
                        ))}
                    </ul>

                </h1>
            </section>
        </main>
    )
}

export default Clients;