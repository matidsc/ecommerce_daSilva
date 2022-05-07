import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Item = ({ producto }) => {
  return (
    <motion.div
      className="item"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="infoItem">
      <img src={producto.pictureURL}></img>
        <span className='modeloItem'>{producto.modelo}</span>
        <span className='precioItem'>{`${producto.precio} US$`}</span>
      </div>
      <Link to={`/productos/${producto.id}`}>
        <button>Más detalles</button>
      </Link>
    </motion.div>
  );
};

export default Item;
