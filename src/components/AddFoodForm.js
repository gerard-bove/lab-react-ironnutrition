import { useState } from "react";
import FoodBox from './FoodBox';
import { Card, Row, Col, Divider, Input, Button } from "antd";

function AddFoodForm({newFood}) {
 
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState();
    const [servings, setServing] = useState();
    /* const [errorForm, setErrorForm] = useState(false); */

    const nameHandler = (e) => setName(e.target.value);
    const imageHandler = (e) => setImage(e.target.value);
    const caloriesHandler = (e) => setCalories(e.target.value);
    const servingHandler = (e) => setServing(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();

        /* if (name === "" || calories === "" || servings === "") {
            setErrorForm(true);
            return;
        };
 */
        newFood({name, image, calories, servings})
        setName("");
        setImage("");
        setCalories("");
        setServing("");
        /* setErrorForm(false); */
    }

    return (
        <form onSubmit={submitHandler}>
            {/* {errorForm && <div> Director y titulo son campos obligatorios! </div>} */}
            <div>
                <label htmlFor="nameInput">Name</label>
                <Input value={name} type="text" onChange={nameHandler} id="nameInput"/>
            </div>
            <div>
                <label htmlFor="imageInput">Image</label>
                <Input value={image} type="text" onChange={imageHandler} id="imageInput"/>
            </div>
            <div>
                <label htmlFor="caloriesInput">Calories</label>
                <Input value={calories} type="number" onChange={caloriesHandler} id="caloriesInput"/>
            </div>
            <div>
                <label htmlFor="servingsInput">Serving</label>
                <Input value={servings} type="number" onChange={servingHandler} id="servingsInput"/>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default AddFoodForm;