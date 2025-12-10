import './components/TechnologyCard.css';
import React, {useState, useEffect} from 'react';
import TechnologyCard from './components/TechnologyCard';
import './App.css';
import ProgressHeader from './components/ProgressHeader';
import QuickActions from './components/QuickActions';
import TechnologyNotes from './components/TechnologyNotes';


function App() {
  const [cards, setCards] = useState([
    {id:1, title: "Сделать практику 1-19", description: "Сделать технологии карточек и добавить им стили", status: "completed", notes: 'Нужно чет сделать до завтра'},
    {id:2, title: "Научиться использовать React свободно", description: "Разобраться в разновидности хуков и понять как все работает под капотом", status: "in-progress", notes: 'Что-то крутое'},
    {id:3, title: "Изучение Vue", description: "Начат изучение Vue", status: "not-started", notes: 'полезная тема'},
    {id:4, title: "Изучение Ts", description: "Начать изучение TypeScript", status: "not-started", notes: ''}
  ])


  const [searchQuery, setSearchQuery] = useState('');



  useEffect(() => {
    const saved = localStorage.getItem('techTrackerData');
    if(saved){
      setCards(JSON.parse(saved)); 
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('techTrackerData', JSON.stringify(cards));
  }, [cards]);

  const UpdateTechnologyNotes = (cardId, newNotes) => {
    setCards(prevCards => 
      prevCards.map(card => 
        card.id === cardId ? {...card, notes: newNotes} : card
      )
    )
  }

  const [filter, setFilter] = useState('all')

  const filteredCards = cards.filter(card => 
    filter === 'all' ? true : card.status === filter)
    .filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase())
    || card.description.toLowerCase().includes(searchQuery.toLowerCase()))
  

  const updateCardStatus = (cardId, newStatus) => {
    setCards(prevCards => 
      prevCards.map(card => 
        card.id === cardId
          ? { ...card, status: newStatus } 
          : card
      )
    )
  }

  return (
    <div className="App">
      <ProgressHeader cards={cards}/>
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

      <QuickActions cards={cards} onChangeCards={setCards} />

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
        {filteredCards.map(card => 
        <React.Fragment key={card.id}>
          <TechnologyCard cards={card} key={card.id} 
          onStatusChange={(newStatus) => updateCardStatus(card.id, newStatus)}/>
          <TechnologyNotes notes={card.notes} onNotesChange={UpdateTechnologyNotes} techId={card.id}/>
        </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
