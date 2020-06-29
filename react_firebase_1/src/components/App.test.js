import React from 'react';
import ReactDom from 'react-dom';
// import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', ()=> {
  const div = document.createElement('div');

  //Creating a new Div and rendering App inside a Router
  ReactDom.render(
    <Router>
      <App/>
    </Router>,div
  );
  ReactDom.unmountComponentAtNode(div);
});