import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import "../styles/ItemDetailContainer.scss";
import Loading from "../components/Loading";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../firebase/firebase";
import BackToMain from "../components/backToMain";
const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [itemExists, setItemExists] = useState(true);
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      
      const documento = doc(db, "productos", id);
      getDoc(documento).then(producto => (

        typeof producto.data() === 'undefined'
          ?setItemExists(false)
          :(setDetails({ id: producto.id, ...producto.data() })
          ,setItemExists(true)
          ,setIsLoading(false))
      ));

    }, 2000);
  }, [id]);

  return itemExists? (
    <div className="detailWrapper">
      {isLoading ? <Loading /> : <ItemDetail details={details} />}
    </div>
  ) : (
    <BackToMain boton='Volver al inicio' ruta='/' mensaje='Producto no encontrado'/>
  );
};

export default ItemDetailContainer;
