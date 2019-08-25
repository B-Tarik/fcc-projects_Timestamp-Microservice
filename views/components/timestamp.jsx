import React, {useState} from 'react';

const Timestamp = ({setResult}) => {
  
  const [date, setDate] = useState('');
  
  const url = '/api/timestamp/'
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(date)
    
    fetch(url + date)
    .then(res => res.json())
    .then((data) => {
      console.log(data)

      setResult(data)
    })
    .catch(error => console.error('Error:', error));
  }
  
  return (
    <div className="submit-date">
      <h3>Submit Timestamp</h3>
      
      <div className="form-container">
          <form className="submit-date-form" onSubmit={handleSubmit}>
            <input 
              className="form-date"  
              type="number" 
              placeholder="example: 1450137600" 
              name="date" 
              onChange={e => setDate(e.target.value)}  
              required
            />
            <input className="form-submit" type="submit" value="Submit"/>
          </form>
      </div>
       
    </div>
  )
}

export default Timestamp;