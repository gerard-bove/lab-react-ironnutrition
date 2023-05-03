
function FoodBox({food: {name, calories, image, servings}, deleteHandler}) {

    let totalCalories = calories * servings;

    return (
        
        <div className="card col-sm-4 cards-container" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Calories: {calories}</p>
                <p className="card-text">Servings: {servings}</p>
                <p className="card-text">Total Calories: {totalCalories}</p>
                <button type='button' className="btn btn-primary" onClick={()=>deleteHandler(name)}>Delete</button>
            </div>
        </div>        
    );
}

export default FoodBox;