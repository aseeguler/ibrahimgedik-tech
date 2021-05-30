import BookmarksSelect from 'components/BookmarksSelect'
import BookmarkList from 'components/BookmarkList'
import { getTable } from 'lib/airtable'
import React, { useState } from 'react'

function Bookmarks({data}) {
    const [bookmarks, setBookmarks] = useState(data)
    const [filter, setFilter] = useState('UI');

    const handleFilter = (filter) => {
        setFilter(filter)
    }

    const filterByCategory = (bookmarks) => {
        return bookmarks.filter(bookmark => {
            if(bookmark.Category === filter){
                return bookmark
            }
        })
    }


    return (
    <section className="bookmarks">
        <div className="container">
           <h1 className="bookmarks-heading">Bookmarks</h1>
           <p className="bookmarks-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ratione alias cum debitis molestias consequatur laborum quae ipsam explicabo perspiciatis.</p>
           <BookmarksSelect handleFilter={handleFilter} filter={filter} />
           <BookmarkList bookmarks={filterByCategory(bookmarks)} />
        </div>
   </section>
    )
}

export async function getStaticProps(){
    const data = await getTable('Bookmarks')

    const ui = data.filter((c) => c.Category === 'UI')
    const pw = data.filter((c) => c.Category === 'Personal Websites')

    return {
        props: {
            data : [...ui, ...pw]
        },
    }
}

export default Bookmarks
