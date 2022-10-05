import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../GeoDBAPI";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null); //setSeacrh para atualizar a variavel

    const loadOptions = (inputValue) => { // vai passar pro fetch data

        return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange({ searchData });

    }

    return (
        <AsyncPaginate
            placeholder="Procure por uma cidade"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}

            loadOptions={loadOptions}// Vai ser responsável por buscar todas as cidades com o que ta escrito aqui
        />
    )

};

export default Search;