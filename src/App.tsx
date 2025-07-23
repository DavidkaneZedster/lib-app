import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <p>App</p>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </main>
  );
}
