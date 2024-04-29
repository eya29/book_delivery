import React from 'react'
import './Library.css'
import { library_list } from '../../assets/assets'

const Library = ({category,setCategory}) => {
  return (
    <div className='explorre-lib' id='explore-lib'>
        <h1> Explore Our Library</h1>
        <p className='explorelib-text'>Choose from our library your favourite book to order </p>
        <div className='explore-lib-list'>
            {library_list.map((item,index)=> {
                return(
                    <div onClick={()=> setCategory(prev=>prev===item.book_name?"All":item.book_name)} key={index} className='book-item'>
                        <img className={category===item.book_name?"active":""} src={item.book_image} alt='' />
                        <p>{item.book_name}</p>
                        </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Library