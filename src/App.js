import './App.css';
import UserList from './components/UserList'; 
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
