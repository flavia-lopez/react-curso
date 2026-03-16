function Cards({title, children}){
    return(
        <div className="cards-container">
            <h3>{title}</h3>
            <div className="cards-content">
                <p>{children}</p>
            </div>

        </div>

    )
}
export default Cards;