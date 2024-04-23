import React from 'react';
import Tweets from './Tweets';
interface HomeProps {

}

const Home = (props: HomeProps) => {
    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='text-center text-primary'>
                    Welcome to CRUD
                </h1>
                <div className='container d-flex justify-content-center align-items-center'>
                    < Tweets/>
                </div>
            </section>
        </main>
    )
}

export default Home;