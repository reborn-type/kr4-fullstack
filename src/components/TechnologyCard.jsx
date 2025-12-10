

function TechnologyCard({cards, onStatusChange}){

    const statuses = ['not-started', 'in-progress', 'completed']

    const handleClick = () => {
        const currentIdx = statuses.indexOf(cards.status);
        const nextIdx = (currentIdx + 1) % statuses.length;
        const newStatus = statuses[nextIdx];

        onStatusChange(newStatus);
    };


    
    const getStatusContent = (status) => {
        if(status === "completed"){
            return <p className="completed-status">Выполнено</p>;
        } else if(status === "in-progress"){
            return <p className="in-progress-status">В процессе</p>;
        } else {
            return <p className="not-started-status">Не начато</p>;
        }
    }


    return (
        <div className="technology-card">
            <div className="technology-card__title">
                <h2>{cards.title}</h2>
            </div>
            <div className="technology-card__content">
                <p>{cards.description}</p>
            </div>
            <div onClick={handleClick} className="technology-card__status">
                {getStatusContent(cards.status)}
            </div>
        </div>
    )
}

export default TechnologyCard; 