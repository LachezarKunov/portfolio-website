import './CardContainer.css'

function CardContainer({children}) {
    return (
        <div className = 'cards-container'>
            {children}
        </div>
    )
}

export default CardContainer;