import { useState } from "react";
import { Input } from "antd";

function AddFoodForm({newFood}) {
 
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState();
    const [servings, setServing] = useState();
    const [errorForm, setErrorForm] = useState(false);
    const [hidden, setHidden] = useState(true);

    const nameHandler = (e) => setName(e.target.value);
    const imageHandler = (e) => setImage(e.target.value);
    const caloriesHandler = (e) => setCalories(e.target.value);
    const servingHandler = (e) => setServing(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();

        if (name === "" || calories === "" || servings === "") {
            setErrorForm(true);
            return;
        };
        newFood({name, image, calories, servings})
        setName("");
        setImage("");
        setCalories("");
        setServing("");
        setErrorForm(false);
    }

    return (
        <>
            {hidden ? 
                <button type="button" className="btn btn-secondary" value={hidden} onClick={()=> setHidden(false)}>Add new food</button> : 
                <div>
                    <form onSubmit={submitHandler} style={{width: '200px', margin: 'auto'}}>
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
                        {errorForm && <div className="mt-3 alert alert-danger"> Hay campos vacios! </div>}
                        <button type="submit" className="btn btn-primary m-4">Create</button>
                    </form> 
                    <button type="button" className="btn btn-secondary" onClick={()=>{setHidden(true)}}>Hide</button> 
                </div>
            }
        </>
    )
}

export default AddFoodForm;