import './components/TechnologyCard.css';
import React, {useState} from 'react';
import TechnologyCard from './components/TechnologyCard';
import './App.css';
import ProgressHeader from './components/ProgressHeader';
import QuickActions from './components/QuickActions';


function App() {
  const [cards, setCards] = useState([
    {id:1, title: "Сделать практику 1-19", description: "Сделать технологии карточек и добавить им стили", status: "completed"},
    {id:2, title: "Научиться использовать React свободно", description: "Разобраться в разновидности хуков и понять как все работает под капотом", status: "in-progress"},
    {id:3, title: "Изучение Vue", description: "Начат изучение Vue", status: "not-started"},
    {id:4, title: "Изучение Ts", description: "Начать изучение TypeScript", status: "not-started"}
  ])

  const [filter, setFilter] = useState('all')

  const filteredCards = cards.filter(card => {
    if (filter === 'all') return true;
    return card.status === filter; 
  }
  )

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
          <TechnologyCard cards={card} key={card.id} 
          onStatusChange={(newStatus) => updateCardStatus(card.id, newStatus)}/>
        )}
      </div>
    </div>
  );
}

export default App;
