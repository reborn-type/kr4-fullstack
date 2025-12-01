import './components/TechnologyCard.css';
import React, {useState} from 'react';
import TechnologyCard from './components/TechnologyCard';
import './App.css';

function App() {
  const [cards, setCard] = useState([
    {title: "Сделать практику 1-19", description: "Сделать технологии карточек и добавить им стили", status: "completed"},
    {title: "Научиться использовать React свободно", description: "Разобраться в разновидности хуков и понять как все работает под капотом", status: "in-progress"},
    {title: "Изучение Vue", description: "Начат изучение Vue", status: "not-started"}
  ])

  return (
    <div className="App">
      {cards.map(card => 
        <TechnologyCard card={card}/>
      )}
    </div>
  );
}

export default App;
