import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <Link to={'protected'}>Link to Protected</Link>;
};

export default Home;
