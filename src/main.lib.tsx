// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router';

// window.runMyApp = function (el) {
//   const root = createRoot(el);

//   root.render(
//     <StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </StrictMode>,
//   );
// };

// eslint-disable-next-line react-refresh/only-export-components
const App = () => <h1>Hello</h1>;

let root: ReturnType<typeof createRoot> | null = null;

export const mount = (container: HTMLElement) => {
  root = createRoot(container);

  root.render(<App />);

  return () => {
    root?.unmount();
    root = null;
  };
};
export default { mount };

// (window as any).MyMicroApp = { mount };
console.log('aaaaaaaaaaaa');
