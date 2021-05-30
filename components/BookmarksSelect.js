import React, { useState } from 'react'

const options = [
    'Personal Websites', 'UI'
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
                </div>
                <div className="select-box-items" style={{display: showItems ? 'block' : 'none'}}>
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
