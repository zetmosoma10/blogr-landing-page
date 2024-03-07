const Button = ({ children, varient }) => {
  const btn_white =
    varient === "white"
      ? "text-Light_red hover:text-White_text bg-White_text border-0 hover:bg-Very_light_red_CTA_hover_background focus:text-White_text focus:bg-Very_light_red_CTA_hover_background"
      : "";
  const btn_red =
    varient === "red"
      ? "text-White_text bg-Light_red_CTA_text hover:bg-bg-Light_red_CTA_text hover:text-White_text"
      : "";
  const btn_outline =
    varient === "outline"
      ? "text-White_text hover:bg-White_text hover:text-Light_red_CTA_text focus:bg-White_text focus:text-Light_red_CTA_text"
      : "";
  return (
    <button
      className={`btn outline-0 transition-all duration-100  ${btn_white} ${btn_red} ${btn_outline}`}
    >
      {children}
    </button>
  );
};

export default Button;
