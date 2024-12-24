import Dropdown from './components/Dropdown';

function App() {
  const data = [
    { label: 'JavaScript Programming', value: 'JS' },
    { label: 'HyperText Markup Language', value: 'HTML' },
    { label: 'CSS Style Sheet', value: 'CSS' }
  ];
  return <Dropdown data={data} />;
}

export default App;
