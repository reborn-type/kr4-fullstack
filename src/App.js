import './components/TechnologyCard.css';
import React, {useState, useEffect} from 'react';
import TechnologyCard from './components/TechnologyCard';
import './App.css';
import ProgressHeader from './components/ProgressHeader';
import QuickActions from './components/QuickActions';
import TechnologyNotes from './components/TechnologyNotes';
import useTechnologies from './hooks/useTechnologies';


function App() {

  const {technologies, updateStatus, updateNotes, progress} = useTechnologies();


  const [searchQuery, setSearchQuery] = useState('');

  const [filter, setFilter] = useState('all')

  const filteredCards = technologies.filter(tech => 
    filter === 'all' ? true : tech.status === filter)
    .filter(tech => tech.title.toLowerCase().includes(searchQuery.toLowerCase())
    || tech.description.toLowerCase().includes(searchQuery.toLowerCase()))
  

  return (
    <div className="App">
      <ProgressHeader cards={technologies}/>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Поиск технологий...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='search-box__input'
        />
        <span className='search-box__count'>Найдено: {filteredCards.length}</span>
      </div>

      <QuickActions cards={technologies} onChangeCards={updateStatus} />

      <div className='filters'>
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
          Все
        </button>
        <button className={filter === 'not-started' ? 'active' : ''} onClick={() => setFilter('not-started')}>
          Не начато
        </button>
        <button className={filter === 'in-progress' ? 'active' : ''} onClick={() => setFilter('in-progress')}>
          В процессе
        </button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>
          Выполнено
        </button>
      </div>
      <div className="technology-cards__grid">
        {filteredCards.map(tech => 
        <React.Fragment key={tech.id}>
          <TechnologyCard cards={tech} key={tech.id} 
          onStatusChange={(newStatus) => updateStatus(tech.id, newStatus)}/>
          <TechnologyNotes notes={tech.notes} onNotesChange={updateNotes} techId={tech.id}/>
        </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
