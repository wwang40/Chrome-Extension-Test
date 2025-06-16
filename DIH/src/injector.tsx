import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: 'white',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '10px',
    zIndex: 10000
  }}>
    <h3>Hello from DIH!</h3>
    <p>This was injected only when DIH is ON.</p>
  </div>
);

if (!document.getElementById('dih-extension-root')) {
  const container = document.createElement('div');
  container.id = 'dih-extension-root';
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
