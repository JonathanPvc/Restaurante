import React from "react";
import { ToggleCustom } from "../../atom/Toogle";
import { InputCustom } from "../../atom/Inputs";
import { useForm } from "react-hook-form";
import "./styles.scss";
import { Add } from '../../atom/AddProduct/Add';
import { TextCustom} from '../../atom/TextArea'


const FormTypes = () => {
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
      className="form-types__container"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <h1 className="h1-types"> TYPES </h1>
      <div className="grid grid-cols-3 gap-5 form-types__container--forms  justify-center items-center">
        <div className="flex justify-between mb-5">
        <InputCustom type="text" title="Nombre" watch={watch} name="name" register={register} />
        </div>
        <div className="flex justify-between mb-5">
          <div className="flex justify-between mb-5">
          <ToggleCustom title="Estatus:" />
          </div>
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

export default FormTypes;
