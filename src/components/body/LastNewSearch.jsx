import React from 'react'

const LastNewSearch = props => (
	
	<form className="SearchForm" onSubmit={props.onSearch}>
		<div className="input-group">
			<input className="form-control py-2 border-right-0 border" type="search" id="search_input" name="search_input" />
			<span className="input-group-append">
				<button type="submit" className="input-group-text bg-transparent"><i className="fa fa-search"></i></button>
			</span>
        </div>
    </form>
)

export default LastNewSearch