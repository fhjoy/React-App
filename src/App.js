import react from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};
export default App;
