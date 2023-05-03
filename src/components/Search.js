import { useState } from "react";
import { Input } from 'antd';

function Search({filter}) {

    const [filtro, setFiltro] = useState("");

    const filterFood = (e) => {
        setFiltro(e.target.value)
        filter(e.target.value);
    }

    return (
        <div>
            <p>Search</p>
            <Input style={{width: '200px', marginBottom: '10px'}} id="searchInput" value={filtro} type="text" onChange={filterFood} />
        </div>
    );
}

export default Search;