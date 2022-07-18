import React from "react";
import { Formik } from "formik";
import { ToggleCustom } from "../../components/Toogle";

import "./styles.css";

const FormProduct = () => {
  return (
    <Formik>
      <form className="form-product__container">
        <h1 className="h1"> PRODUCTOS </h1>
        <div className="grid grid-cols-3 gap-5 form-product__container--forms  justify-center items-center">
          <div className="flex justify-between mb-5">
            {/* <label htmlFor="nombre">Nombre: </label> */}
            <input
              type="text"
              id="nombre"
              name="name"
              placeholder="   Nombre "
            ></input>
          </div>
          <div className="flex justify-between mb-5">
            {/* <label htmlFor="descripcion">Descripcion: </label> */}
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              placeholder="   Descripcion "
            ></input>
          </div>
          <div className="flex justify-between mb-5">
            <ToggleCustom title="Estatus:" />

            <ToggleCustom title="Bowl:" />
          </div>
          <div className="flex justify-between mb-5">
            <label htmlFor="precio unit">Precio unit: </label>
            <input
              type="number"
              id="precio unit"
              name="precio unit"
              placeholder=" "
            ></input>
          </div>
          <div className="flex justify-between mb-5">
            <label htmlFor="precio cost">Precio cost: </label>
            <input
              type="number"
              id="precio cost"
              name="precio cost"
              placeholder=" "
            ></input>
          </div>
          <div className="flex justify-between mb-5">
            <label htmlFor="discont">Discont: </label>
            <input
              type="number"
              id="discont"
              name="discont"
              placeholder=" "
            ></input>
          </div>
          <div className="flex justify-between mb-5">
            <label htmlFor="unidad">Unidad: </label>
            <input
              type="text"
              id="unidad"
              name="unidad"
              placeholder="   Ej: kg, gr, lb "
            ></input>
          </div>
          <div className="flex justify-between mb-5">
            <label htmlFor="unidad minima">Unidad minima: </label>
            <input
              type="number"
              id="unidad minima"
              name="unidad minima"
              placeholder=" "
            ></input>
          </div>
          <div className="flex justify-between mb-5">
            <label htmlFor="stock">En stock: </label>
            <input
              type="number"
              id="stock"
              name="stock"
              placeholder=" "
            ></input>
          </div>
        </div>
      </form>
    </Formik>
  );
};

export default FormProduct;
