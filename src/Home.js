// src/components/PostEditor.js
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // Choose your theme

const PostEditor = () => {
  const [code, setCode] = useState('');

  return (
    <div>
      <h2>Post a Question</h2>
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
      <h3>Preview</h3>
      <ReactMarkdown>{code}</ReactMarkdown>
    </div>
  );
};

export default PostEditor;
