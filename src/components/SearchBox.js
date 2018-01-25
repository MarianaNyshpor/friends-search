import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className ='pa2 ma3'>
		    <input
		        className ='pa2 center ba br3 b--green bg-lightest-blue' 
		        type='search' 
		        placeholder='search friends' 
		        onChange ={searchChange}
		    />
		</div>
	)
}

export default SearchBox;