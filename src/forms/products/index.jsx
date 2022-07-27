import React from "react";
import { ToggleCustom } from "../../atom/Toogle";
import { InputCustom } from "../../atom/Inputs";
import { useForm } from "react-hook-form";
import "./styles.scss";
import { Add } from '../../atom/AddProduct/Add';
import { TextCustom} from '../../atom/TextArea'


const FormProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      precioUnit: '',
      description: ''
    }
  });
  return (
    <form
      className="form-product__container"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <h1 className="h1-products"> PRODUCTS </h1>
      <div className="grid grid-cols-3 gap-5 form-product__container--forms  justify-center items-center">
        <div className="flex justify-between mb-5">
        <InputCustom type="text" title="Nombre" watch={watch} name="name" register={register} />
        </div>
        <div className="flex justify-between mb-5">
          <InputCustom type="text" title="Descripcion" watch={watch} name="description" register={register} />
        </div>
        <div className="flex justify-between mb-5">
          <div className="flex justify-between mb-5">
          <ToggleCustom title="Estatus:" />

          <ToggleCustom title="Bowl:" />
          </div>
        </div>
        <div className="flex justify-between mb-5 input-container">
        <InputCustom type="number" title="Precio unit" watch={watch} name="precio-unit" register={register} />
        </div>
        <div className="flex justify-between mb-5">
        <InputCustom type="number" title="Precio cost" watch={watch} name="precio-cost" register={register} />
        </div>
        <div className="flex justify-between mb-5">
        <InputCustom type="number" title="Discont" watch={watch} name="discont" register={register} />
        </div>
        <div className="flex justify-between mb-5">
        <InputCustom type="text" title="Unidad" watch={watch} name="unidad" register={register} />

        </div>
        <div className="flex justify-between mb-5">
        <InputCustom type="number" title="Unid min" watch={watch} name="unid-min" register={register} />

        </div>
        <div className="flex justify-between mb-5">
        <InputCustom type="number" title="En stock" watch={watch} name="en-stock" register={register} />

        </div>
        <div>
        <TextCustom placeholder="Descripcion" />
        </div>
        <div className="flex justify-between mb-5">
        <Add />
        </div>
      </div>
    </form>
  );
};

export default FormProduct;
