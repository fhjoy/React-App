import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'what is react',
    content: 'React is a JavaScript library',
  },
  {
    title: 'Why we use React',
    content: 'React is a popular JS framework for making UI',
  },
  {
    title: 'Why we use React',
    content: 'We use React because of its state',
  },
];

const options = [
  {
    label: 'The color Red',
    value: 'red',
  },
  {
    label: 'The color Blue',
    value: 'blue',
  },
  {
    label: 'The color Yellow',
    value: 'yellow',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[1]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
