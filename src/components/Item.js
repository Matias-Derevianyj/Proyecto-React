import Link from "./Link"
const Item = ({zapatillas}) => {
  return (
    <div>

      <div className="Articulo">
        
        <div className="cajaImagen">
          <img src={zapatillas.img} alt='zapas'/>
        </div>
        <div className="Datos">
          <h2>{zapatillas.nombre}</h2>
          <h2>$ {zapatillas.precio}</h2>
          <p>Talles: {zapatillas.talla}</p>
          <p>Disponibilidad: {zapatillas.stock}</p>
          <Link to={'/product/' + zapatillas.id}>Ver producto</Link>
        </div>
       
      </div>

    </div>
  )
}

export default Item
