import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
interface AppProps {}
import Home from './views/Home';
import Tweets from './views/Tweets';
import Clients from './views/Clients';
import Tweet from './views/oneTweet';
import Client from './views/oneClient';
import NotFound from './views/NotFound';

const App = (props: AppProps) => {
	
	return (
		<BrowserRouter>
		<div className='px-5 py-2'>
			<Link to='/'>Home</Link>
			<Link to='/tweets'>Tweets</Link>
			<Link to='/clients'>Clients</Link>
		</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tweets' element={<Tweets />} />
				<Route path='/clients' element={<Clients/>} />
				<Route path='/tweets/:id' element={<Tweet />} />
				<Route path='/clients/:id' element={<Client />} />
				<Route path='*' element={<NotFound/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;