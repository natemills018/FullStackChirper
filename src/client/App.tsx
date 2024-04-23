import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
interface AppProps {}
import Home from './views/Home';
import Tweets from './views/Tweets';
import Clients from './views/Clients';
import Tweet from './views/oneTweet';
import Client from './views/oneClient';
import NotFound from './views/NotFound';
import Add from './views/AddTweet';
import AdminClients from './views/adminPanel';

const App = (props: AppProps) => {
	
	return (
		<BrowserRouter>
		<div className='px-5 py-2 '>
			<Link to='/' className='btn btn-outline btn-primary m-3'>Home</Link>
			<Link to='/tweets'className='btn btn-outline btn-light m-3'>Tweets</Link>
			<Link to='/clients'className='btn btn-outline btn-secondary m-3'>Clients</Link>
			<Link to='/tweets/new'className='btn btn-outline btn-success m-3'>Add Tweet</Link>
			<Link to='/adminclients'className='btn btn-outline btn-danger m-3'>Admin Panel</Link>
		</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tweets' element={<Tweets />} />
				<Route path='/tweets/new' element={<Add/>}/>
				<Route path='/clients' element={<Clients/>} />
				<Route path='/tweets/:id' element={<Tweet />} />
				<Route path='/clients/:id' element={<Client />} />
				<Route path='/adminclients' element={<AdminClients/>} />
				<Route path='*' element={<NotFound/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;