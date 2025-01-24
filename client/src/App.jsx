import { useState } from 'react'
// importera data
import data from "../public/data.js"
import './App.css'
import ItemCard from "./components/ItemCard.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className="title">BeerShop</h1>
      </header>
      <main>
        <div className="itemList">
          {data.map((item, index) => (
            <div className="itemCard" key={index}>
              <ItemCard key={item.id} item={item} />
            </div>))}
        </div>
        <aside className="basket">
          <h2>Basket</h2>
          <ul>
            
          </ul>
        </aside>
      </main>
      <footer>
        <p>Contact information: </p>
      </footer>
    </>
  )
}

export default App
