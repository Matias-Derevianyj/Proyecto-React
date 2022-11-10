import Item from "./Item"

const ItemList = ({catalogo}) => {

  return (
    <div className="containerZapatillas">
      {catalogo.map((zapatillas) =>{
        return <Item zapatillas={zapatillas} key={zapatillas.id}/>
      })}
    </div>
  )
}

export default ItemList
