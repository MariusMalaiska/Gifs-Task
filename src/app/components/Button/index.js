import "./index.css";

function Button(props) {
  const { children, onClick } = props;

  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
