import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {

  const [data, setData] = useState('');
  const [requestParams, setRequestParams] = useState({})
  const [loading, setLoading] = useState(false);


  const callApi = (requestParams) => {
    setLoading(true);
    setTimeout(() => {
      setRequestParams(requestParams);
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {

    const getData = async () => {
      console.log('TESTING BEFORE AXIOS ---- >', requestParams)
      let response = await axios(requestParams)
      console.log('RESPONSE------->', response.data)
      setData(response.data.results);
    }
    getData();
  }, [requestParams]);


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <div>Sent data: {requestParams.textArea} </div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  );
}

export default App;