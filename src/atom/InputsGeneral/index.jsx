  import './style.scss';
  
  
  export const InputG = (props) => {
    const{title,type,watch,register,name}= props;
  
    return (
      <div className="AppStyle" >
        <form className="formStyle">
          <label className="label-style">{title}</label>
          <input className="inputStyle" {...register(name)} type={type} />
        </form>
      </div>
    );
  }
  