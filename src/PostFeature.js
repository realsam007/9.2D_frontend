import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import './PostFeature.css';


const PostFeature = () => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('// Write here ');
  const [markdown, setMarkdown] = useState('');

  const handleSubmit = () => {
    const newPost = {
      title,
      code,
      markdown,
    };
    
    // For now, simply log the new post data.
    console.log("New Question Submitted:", newPost);
    
    // Reset form fields after submission
    setTitle('');
    setCode('// Write text here');
    setMarkdown('');
    
    // Add further code here to save the post, e.g., API call
  };

  return (
    <div className="post-feature">
      <h2>Post a Question</h2>
      
      <div>
        <h3>Title</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your question title"
        />
      </div>
      
      <div>
        <h3>Code</h3>
        <CodeMirror
          value={code}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            setCode(value);
          }}
        />
      </div>
      
      <div>
        <h3>Markdown</h3>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write in markdown..."
        />
      </div>
      
      <div>
        <h3>Preview</h3>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      
      <button onClick={handleSubmit}>Submit Question</button>
    </div>
  );
};

export default PostFeature;
