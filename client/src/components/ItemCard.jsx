export default function ItemCard ({ item }) {
  return (
    <>
      <h2>{item.name}</h2>
      <img className="cardImage" src={item.image} />
      <div className="itemCardBottom">
      <h4>{item.price}</h4>
      <button>Buy</button>
      </div>      
    </>
  )
}