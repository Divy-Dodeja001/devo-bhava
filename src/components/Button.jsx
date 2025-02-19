import { Icon } from "@iconify/react";

const Button = ({ title, icon, className, style }) => {
  return (
    <button
      type="button"
      className={`text-decoration-none primary-button rounded-1 d-flex align-items-center gap-1 ${className}`}
      style={{ width: "fit-content", ...style }}
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      {title}
      {icon && (
        <Icon icon={icon} width="30" height="30" style={{ color: "white" }} />
      )}
    </button>
  );
};

export default Button;
