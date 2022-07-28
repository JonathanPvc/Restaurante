import React from "react";
import { ToggleCustom } from "../../atom/Toogle";
// import { InputCustom } from "../../atom/Inputs";
import { useForm } from "react-hook-form";
import "./styles.scss";
import { Add } from "../../atom/AddProduct/Add";
import { TextCustom } from "../../atom/TextArea";
import { InputG } from "../../atom/InputsGeneral";

const FormCategories = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      precioUnit: "",
      description: "",
    },
  });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <h1 className="h1-categories"> CATEGORIES </h1>
      <div className=" form-categories__container--forms">
        <div className="flex justify-between mb-5">
          <InputG name="name" watch={watch} title="Name" register={register} />
        </div>
        <div className="flex justify-between mb-5">
          <div className="flex justify-between mb-5">
            <ToggleCustom title="Estatus:" />
          </div>
        </div>
        <div>
          <TextCustom placeholder="Descripcion" />
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <Add />
      </div>
    </form>
  );
};

export default FormCategories;
