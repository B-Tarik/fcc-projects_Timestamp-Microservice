import React, {useState} from 'react';

import Date from './date.jsx';
import Timestamp from './timestamp.jsx';
import Output from './output.jsx';
import AppTitle from './common/appTitle.jsx';

const Home = () => {
  
  const [result, setResult] = useState('');
  
  return (
    <div className="inner-container">
      <AppTitle title={<h1>Timestamp Microservice</h1>} />
      <Date setResult={setResult}/>
      <Timestamp setResult={setResult}/>
      <Output result={result}/>
    </div>
  );
  
}

export default Home;