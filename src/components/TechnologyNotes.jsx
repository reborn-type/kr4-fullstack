import './TechnologyNotes.css'


const TechnologyNotes = ({notes, onNotesChange, techId}) => {
    return (
        <div className="notes-section">
            <h4 className='notes-section__title'>Мои заметки:</h4>
            <textarea 
                value={notes}
                onChange={(e) => onNotesChange(techId, e.target.value)}
                placeholder="Записать заметку..."
                rows='3'
                className='notes-section__text'
            />
            <div className="notes-hint">
                {notes.length > 0 ? `Заметка сохранена (${notes.length} символов)` : 'Добавьте заметку'}
            </div>
        </div>
    )
}

export default TechnologyNotes; 
