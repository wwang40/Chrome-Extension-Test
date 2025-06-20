import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './dih.tsx'

const body = document.querySelector('body')
const app = document.createElement('div')

app.id = 'react-root'

if(body){
    body.prepend(app)
}

const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(<App/>)
