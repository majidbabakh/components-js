import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />

      <div>
        <Route path="/dropdown">
          <Dropdown />
        </Route>
      </div>
    </div>
  );
}

export default App;
