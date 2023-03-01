import { useState } from "react";
import { Divider, Input } from 'antd';

function Search({filter}) {

    const [filtro, setFiltro] = useState("");

    const filterFood = (e) => {
        setFiltro(e.target.value)
        filter(e.target.value);
    }

    return (
        <>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input value={filtro} type="text" onChange={filterFood} />
        </>
    );
}

export default Search;