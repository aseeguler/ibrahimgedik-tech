import React from 'react'
import moment from 'moment'
function BookmarkList(props) {
    const convertRelativeTime = (date) => {
        return moment(date).fromNow();
    }
    return (
        <div className="bookmarks-list">
            {props.bookmarks.map((bookmark) => (
                <a href={bookmark.Notes} key={bookmark.id} className="bookmarks-card">
                    <span className="bookmarks-card-date">{convertRelativeTime(bookmark.Created)}</span>
                    <span className="bookmarks-card-name">{bookmark.Name}</span>
                </a>
            ))}
        </div>
    )
}

export default BookmarkList
