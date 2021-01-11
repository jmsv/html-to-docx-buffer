import React from 'react';
import logo from './logo.svg';
import './App.css';

import htmlToDocx from 'html-to-docx-buffer';
import downloadFile from 'js-file-download';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button
          onClick={() => {
            const target = document.getElementById('html-body');
            if (!target) return;

            const wrappedTarget = document.createElement('div');
            wrappedTarget.appendChild(target.cloneNode(true));

            htmlToDocx(wrappedTarget.innerHTML).then((data) => {
              downloadFile(data, 'react-app.docx');
            });
          }}
          className="btn-download"
        >
          Download this page!
        </button>
      </header>
    </div>
  );
}

export default App;
