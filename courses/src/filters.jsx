import React, { useEffect, useState} from "react"
import { items } from "./items"
import "./filterStyles.css"

export default function filters(){
    const [selectedFilters, setSelectedFilters] = useState([])
    const [filteredItems, setFilteredItems] = useState(items)
    let filterList = ["Introduction Courses", "Intermediate Courses", "Expect Courses"]

    return(
        <div>
            <div className="buttons-container">
                {filterList.map((category, idx) => (
                    <button onClick = {() => handleFilterButtonClick(category)} className={`button ${selectedFilters?.includes(category) ? "active" : ""}'} key={'filters-${idx}`}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="items-containier">

            </div>
        </div>
    )
}