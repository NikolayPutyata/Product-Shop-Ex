
const FooterSvg = ({ d }) => {
  return (
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="fill-current"
      >
        <path d={d}></path>
      </svg>
    </a>
  );
};

export default FooterSvg;
