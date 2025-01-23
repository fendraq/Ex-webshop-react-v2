import { useState } from 'react'
// importera data
import data from "../public/data.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className="title">BeerShop</h1>
      </header>
      <main>
        <div className="itemList">
          {/* Lyfta ut detta till egen fil för hantering av lägg till kundkorgen */}
          {data.map((item, index) => (
            <div className="itemCard" key={index}>
              <h2>{item.name}</h2>
              <img className="cardImage" src={item.image} />
              <div className="itemCardBottom">
              <h4>{item.price}</h4>
              <button>Buy</button>
              </div>
            </div>))}
        </div>
        <aside className="basket">
          <h2>Basket</h2>
        </aside>
      </main>
      <footer>
        <p>Contact information: </p>
      </footer>
    </>
  )
}

export default App
