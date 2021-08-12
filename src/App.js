import React, {useState} from 'react'
import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from 'html-react-parser'

function App() {
  const [text,setText] = useState('');


  return (
    <div className="App">
      <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
          setText(data)
        }}
      />
      <div className='Content' >
        <h1>Content</h1>
        <div>{parse(text)}</div>
      </div>
    </div>
  );
}

export default App;
