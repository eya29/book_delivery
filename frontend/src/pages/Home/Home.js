import React , {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Library from '../../components/Libraby/Library'

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Library category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home