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
           <p className="bookmarks-description">
           I share with you the things I like while surfing the Internet and the libraries and tools I use in the development environment in here
           </p>
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
        revalidate: 600,
    }
}

export default Bookmarks
