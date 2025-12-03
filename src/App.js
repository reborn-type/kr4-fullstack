import './components/TechnologyCard.css';
import React, {useState} from 'react';
import TechnologyCard from './components/TechnologyCard';
import './App.css';
import ProgressHeader from './components/ProgressHeader';

function App() {
  const [cards, setCard] = useState([
    {id:1, title: "Сделать практику 1-19", description: "Сделать технологии карточек и добавить им стили", status: "completed"},
    {id:2, title: "Научиться использовать React свободно", description: "Разобраться в разновидности хуков и понять как все работает под капотом", status: "in-progress"},
    {id:3, title: "Изучение Vue", description: "Начат изучение Vue", status: "not-started"},
    {id:4, title: "Изучение Ts", description: "Начать изучение TypeScript", status: "not-started"}
  ])



  return (
    <div className="App">
      <ProgressHeader cards={cards}/>
      <div className="technology-cards__grid">
        {cards.map(card => 
          <TechnologyCard card={card} key={card.id}/>
        )}
      </div>
    </div>
  );
}

export default App;
