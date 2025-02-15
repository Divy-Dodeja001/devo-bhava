const Button = ({ link, title}) => {
  return (
    <a
      href={link}
      className={`text-decoration-none primary-button rounded-1`}
    >
      {title}
    </a>
  );
};

export default Button;
