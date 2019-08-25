import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import AppTitle from './common/appTitle.jsx';

const CodeSolution = () => {
  
  const q1 = `app.route('/api/timestamp/:date_string?')
    .get(parseDate)`
  const q2 = `const d = new Date(date);`
  const q3 = `const date = req.params.date_string || new Date();`
  const q4 = `return res.json({ unix: d.getTime(), utc: d.toUTCString() })`
  const q5 = `const t = d.getTime();

if(isNaN(t)) return  res.json({ unix: null, utc : "Invalid Date" })`
  
  
  return (
    <div className="inner-container">
      
      <AppTitle title={<h1>Timestamp Microservice</h1>} />
      <div className="code-solution">
        <h2>Code Solution</h2>
        <ol>
          <li>The API endpoint is <b>GET</b> <code>[project_url]/api/timestamp/:date_string?</code></li>
        
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {q1}
          </SyntaxHighlighter>
          
          <li>A date string is valid if can be successfully parsed by <i>new Date(date_string)</i> (JS) . Note that the unix timestamp needs to be an <b>integer</b> (not a string) specifying <b>milliseconds</b>. In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.</li>

          <SyntaxHighlighter language="javascript" style={atomDark}>
            {q2}
          </SyntaxHighlighter>
          
          <li>If the date string is <b>empty</b> it should be equivalent to trigger <i>new Date()</i>, i.e. the service uses the current timestamp.</li>

          <SyntaxHighlighter language="javascript" style={atomDark}>
            {q3}
          </SyntaxHighlighter>
          
          <li>If the date string is <b>valid</b> the api returns a JSON having the structure <code>{'{'}"unix": date.getTime(), "utc" : date.toUTCString() {'}'} e.g. {'{'}"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"{'}'}</code>.</li>

          <SyntaxHighlighter language="javascript" style={atomDark}>
            {q4}
          </SyntaxHighlighter>
          
          <li>If the date string is <b>invalid</b> the api returns a JSON having the structure <code>{'{'}"unix": null, "utc" : "Invalid Date" {'}'}</code>. It is what you get from the date manipulation functions used above.</li>

          <SyntaxHighlighter language="javascript" style={atomDark}>
            {q5}
          </SyntaxHighlighter>
          
        </ol>
      </div>   
      
    </div>
  );
}

export default CodeSolution;