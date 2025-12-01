function TechnologyCard(props){
    let statusContent; 

    if(props.card.status === "completed"){
        statusContent = <p className="completed-status">Выполнено</p>;
    } else if(props.card.status === "in-progress"){
        statusContent = <p className="in-progress-status">В процессе</p>;
    } else {
        statusContent = <p className="not-started-status">Не начато</p>;
    }

    return (
        <div className="technology-card">
            <div className="technology-card__title">
                <h2>{props.card.title}</h2>
            </div>
            <div className="technology-card__content">
                <p>{props.card.description}</p>
            </div>
            <div className="technology-card__status">
                {statusContent}
            </div>
        </div>
    )
}

export default TechnologyCard; 