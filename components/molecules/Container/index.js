const Container = ({ children, ...props }) => {
  return (
    <div className="max-w-screen-2xl w-9/12 m-auto" {...props}>
      {children}
    </div>
  );
};

export default Container;
