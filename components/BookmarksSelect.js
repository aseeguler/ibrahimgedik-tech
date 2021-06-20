import React, { useState } from 'react'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'

const options = [
    'Personal Websites', 'UI', 'Reading'
]

function BookmarksSelect(props) {
    const [showItems, setShowItems] = useState(false);
    const [selectedItem, setSelectedItem] = useState(props.filter)

    const selectItem = (bookmark) => {
        props.handleFilter(bookmark)
        setSelectedItem(bookmark)
        setShowItems(false)
    }

    const dropDown = () => {
        setShowItems(!showItems)
    }

    return (
        <>
            <div className="select-box">
                <div className="select-box-container" onClick={dropDown}>
                    <div className="select-box-selected-item">
                        {selectedItem === null ? '' : selectedItem}
                    </div>
                    <div className="arrow">
                        {showItems ? <AiFillCaretUp size={20} /> : <AiFillCaretDown size={20} />}
                    </div>
                </div>
                <div 
                className="select-box-items" 
                style={{display: showItems ? 'block' : 'none'}}
                >
                    {options.map((bookmark,index) => (
                        <div 
                        key={index}
                        onClick={() => selectItem(bookmark)}
                        >
                        {bookmark}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BookmarksSelect
