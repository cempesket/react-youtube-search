import React from 'react';


const SearchBar = ({onSearch}) => {
    return (<input type="text"
                   onChange={event => {
                       onSearch(event.target.value)
                   }} className="col-md-3 form-control"/>)
};

export default SearchBar;




