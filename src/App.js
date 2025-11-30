import './App.css';
import TechnologyCard from './components/TechnologyCard';

function App() {
  return (
    <div className="App">
      <TechnologyCard 
        title='Какая-то задача'
        description='Изучить что-то'
        status="completed"
      />
    </div>
  );
}

export default App;
