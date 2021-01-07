import React from 'react'

import Button from "../Button";

const SearchLocation = () => {
    return (
        <div className="search p-12 flex justify-between">
        <Button color="gray-darker" onClick={alert}>
          Seach for places
        </Button>

        <Button
          color="gray-darker"
          onClick={alert}
          rounded={true}
          paddingEqual={true}
        >
          <i className="fas fa-map-marker-alt"></i>
        </Button>
      </div>
    )
}

export default SearchLocation
