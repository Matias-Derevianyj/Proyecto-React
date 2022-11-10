
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
        </div>
       
      </div>

    </div>
  )
}

export default Item
