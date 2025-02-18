import { Icon } from "@iconify/react";

const Button = ({ link, title, icon, className, style }) => {
  return (
    <a
      href={link}
      className={`text-decoration-none primary-button rounded-1 d-flex align-items-center gap-1 ${className}`}
      style={{ width: "fit-content", ...style }}
    >
      {title}
      {icon && (
        <Icon icon={icon} width="30" height="30" style={{ color: "white" }} />
      )}
    </a>
  );
};

export default Button;
