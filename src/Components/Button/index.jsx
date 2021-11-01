const Button = ({text,color,fuction}) => {
  return (
    <button onClick={fuction} className={`btn btn-${color}`}>
      {text}
    </button>
  );
};

export default Button;
