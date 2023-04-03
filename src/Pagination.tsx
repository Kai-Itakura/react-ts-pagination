import React, { useState } from 'react'
import './Pagination.css'
import AlbumList from './AlbumList'
import Album from './type'
import ReactPaginate from 'react-paginate'

type Props = {
  albums: Album[]
}

const Pagination = (props: Props) => {
  const { albums } = props

  const itemsPerPage = 6

  const [itemsOffset, setItemsOffset] = useState(0)

  const endOffset = itemsOffset + itemsPerPage

  const currentAlbums = albums.slice(itemsOffset, endOffset)
  const pageCount = Math.ceil(albums.length / itemsPerPage)

  const handleChangeClick = (e: { selected: number }) => {
    // console.log(e.selected)
    const newOffset = (e.selected * itemsPerPage) % albums.length
    setItemsOffset(newOffset)
  }

  return (
    <div className='albumWrapper'>
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <div className='paginateWrapper'>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handleChangeClick}
          nextLabel='next >'
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          previousLabel='< previous'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
        />
      </div>
    </div>
  )
}

export default Pagination
