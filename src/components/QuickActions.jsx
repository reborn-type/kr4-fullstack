import './QuickActions.css'

const QuickActions = ({cards, onChangeCards}) => {

    const pointAllAsDone = () => {
        const updated = cards.map(card => (
            {...card, status: 'completed'}
        ))
        onChangeCards(updated);
    }

    const clearAllStatuses = () => {
        const updated = cards.map(crd => (
            {...crd, status: 'not-started'}
        ))
        onChangeCards(updated);
    }

    const focusRandomTechnology = () => {
        const notStartedCards = []
        cards.forEach(card => {
            if(card.status === 'not-started'){
                notStartedCards.push(card);
        }
        })

        if (notStartedCards.length === 0) return;

        const randomCard = notStartedCards[Math.floor(Math.random() * notStartedCards.length)]
        const updated = cards.map(card => (
            card.id === randomCard.id ? 
            {...card, status: 'in-progress'} :
            {...card}
        ))
        onChangeCards(updated)
    }

    return (
        <div className="quick-actions">
            <div className="quick-actions__buttons">
                <button className="done-button" onClick={pointAllAsDone}>Все готово</button>
                <button className='clear-button' onClick={clearAllStatuses}>Очистить</button>
                <button className="random-button" onClick={focusRandomTechnology}>Начать случайную</button>
            </div>
        </div>
    )

}

export default QuickActions;