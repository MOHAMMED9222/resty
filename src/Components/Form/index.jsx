import React, { useState } from 'react';

import './Form.scss';

function Form(props) {
const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
const [data, setData] = useState('')
const [method, setMethod] = useState('GET')


const handleClick = e => {
  
  setMethod(e.target.innerText)

}; 

 const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      data: data,
    };
    props.handleApiCall(formData);
  }


    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input data-testid="url" name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
            <button data-testid="button" type="submit">GO!</button>
          </label>
          <label className="methods">
            <span data-testid="get" id="get" onClick={handleClick} style={{backgroundColor: method === 'GET' ? 'red' : 'white'}}>GET</span>
            <span data-testid="post" id="post" onClick={handleClick} style={{backgroundColor: method === 'POST' ? 'red' : 'white'}}>POST</span>
            <span data-testid="put" id="put" onClick={handleClick} style={{backgroundColor: method === 'PUT' ? 'red' : 'white'}}>PUT</span>
            <span data-testid="delete" id="delete" onClick={handleClick} style={{backgroundColor: method === 'DELETE' ? 'red' : 'white'}}>DELETE</span>
          </label>
          {method === "POST" &&  <textarea onChange={(e) => setData(e.target.value)}/>}
          {method === "PUT" &&  <textarea onChange={(e) => setData(e.target.value)}/>}
        </form>
      </>
    );
  }



export default Form;