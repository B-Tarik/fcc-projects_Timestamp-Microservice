import React from 'react';
import AppTitle from './common/appTitle.jsx';

const UserStory = () => {
  return (
    <div className="inner-container">
      
      <AppTitle title={<h1>Timestamp Microservice</h1>} />
      
      <div className="user-story" >
        <h2>User Story</h2>
        <ol>
          <li>The API endpoint is <b>GET</b> <code>[project_url]/api/timestamp/:date_string?</code></li>

          <li>A date string is valid if can be successfully parsed by <i>new Date(date_string)</i> (JS) . Note that the unix timestamp needs to be an <b>integer</b> (not a string) specifying <b>milliseconds</b>. In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.</li>

          <li>If the date string is <b>empty</b> it should be equivalent to trigger <i>new Date()</i>, i.e. the service uses the current timestamp.</li>

          <li>If the date string is <b>valid</b> the api returns a JSON having the structure <code>{'{'}"unix": date.getTime(), "utc" : date.toUTCString() {'}'} e.g. {'{'}"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"{'}'}</code>.</li>

          <li>If the date string is <b>invalid</b> the api returns a JSON having the structure <code>{'{'}"unix": null, "utc" : "Invalid Date" {'}'}</code>. It is what you get from the date manipulation functions used above.</li>

        </ol>
      </div>      
      
    </div>
  );
}

export default UserStory;