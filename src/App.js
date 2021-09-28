import react, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
  // const [selected, setSelected] = useState(options[1]);
  return (
    <div>
      <Translate />
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
    </div>
  );
};
export default App;
