import React from 'react';
import { Link, Router } from '@reach/router';
import logo from './logo.svg';
import './App.css';

import FormikForm from './FormikForm';
import FinalForm from './FinalForm';

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <Link className="App-link" to="/">
          Home
        </Link>
        <Link className="App-link" to="formik">
          Formik
        </Link>
        <Link className="App-link" to="final-form">
          Final Form
        </Link>
      </nav>
      <Router>
        <Home path="/" />
        <FormikForm path="/formik" />
        <FinalForm path="/final-form" />
      </Router>
    </div>
  );
}

const Home = () => (
  <>
    <p>
      I was going to say something extremely rough to Lorem Ipsum, to its
      family, and I said to myself, "I can't do it. I just can't do it. It's
      inappropriate. It's not nice." Lorem Ipsum is unattractive, both inside
      and out. I fully understand why it’s former users left it for something
      else. They made a good decision. It’s about making placeholder text great
      again.
    </p>

    <p>
      That’s what people want, they want placeholder text to be great again. The
      best taco bowls are made in Trump Tower Grill. I love Hispanics! Lorem
      Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you
      know, shot. Trump Ipsum is calling for a total and complete shutdown of
      Muslim text entering your website.{' '}
    </p>

    <p>
      I was going to say something extremely rough to Lorem Ipsum, to its
      family, and I said to myself, "I can't do it. I just can't do it. It's
      inappropriate. It's not nice." An 'extremely credible source' has called
      my office and told me that Lorem Ipsum's birth certificate is a fraud.
      It’s about making placeholder text great again. That’s what people want,
      they want placeholder text to be great again. It’s about making
      placeholder text great again. That’s what people want, they want
      placeholder text to be great again. Despite the constant negative ipsum
      covfefe. I was going to say something extremely rough to Lorem Ipsum, to
      its family, and I said to myself, "I can't do it. I just can't do it. It's
      inappropriate. It's not nice."
    </p>

    <p>
      Lorem Ipsum best not make any more threats toyour website. It will be met
      with fire and fury like the world has never seen. I will write some great
      placeholder text – and nobody writes better placeholder text than me,
      believe me – and I’ll write it very inexpensively. I will write some
      great, great text on your website’s Southern border, and I will make
      Google pay for that text. Mark my words. You’re disgusting. I think the
      only card she has is the Lorem card.
    </p>
  </>
);

export default App;
