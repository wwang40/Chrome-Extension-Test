import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Frame from 'react-frame-component'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Frame
      scrolling='no'
      head={[
        <link
          key='0'
          type='text/css'
          rel='stylesheet'
          href={chrome.runtime.getURL('/react/index.css')}
        />,
      ]}
    >
      <App />
    </Frame>
  </StrictMode>
)

