import React, {useState, useEffect} from 'react';
import { POST } from '../services/fetchData';
import { useNavigate } from 'react-router-dom';
import type { ITweetRow } from '../types';

interface AddProps {

}

const Add = (props: AddProps) => {
    const navigate = useNavigate();
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<string>('');


    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/tweets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ body: value})
        }).then(res => res.json())
        .then(data => navigate(`/tweets/${data.id}`))
    };
    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='col-12 col-md-6'>
                    <form className='p-4 shadow border'>
                        <label htmlFor='body'className='m-2'>You can Tweet here!</label>
                        <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                            type="text"
                            className='form-control'
                            placeholder='This is the real Twitter'
                        />
                        <button onClick={handleSubmit} className='mt-3 btn btn-primary'>Add Tweet</button>
                    </form>
                </h1>
            </section>
        </main>
    )
}

export default Add;