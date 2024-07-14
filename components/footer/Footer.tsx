const Footer = ({ ...props }) => {
  const year = new Date().getFullYear();

  return (
    <div
      className="text-center section_padding mb-40 text-slate-500"
      {...props}
    >
      Copyright &copy;{year} All rights reserved
    </div>
  );
};

export default Footer;
