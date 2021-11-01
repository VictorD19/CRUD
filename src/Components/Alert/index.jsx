const Alert = ({type,text}) => {
  return (
    <div className={`alert alert-${type === 'danger' ? 'danger': type}`} style={{width:'500px',marginTop:'15px',fontSize:'18px'}} role="alert">
        {type === 'danger' 
        ? <> <i className="fas fa-times "></i> {text}</>
        : <><i className="fas  fa-check"></i> {text}</>
     }
</div>
  );
};

export default Alert;
