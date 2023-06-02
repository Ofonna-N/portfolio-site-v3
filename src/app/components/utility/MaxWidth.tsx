type Props = {
  children: React.ReactNode;
};

const MaxWidth = ({ children }: Props) => {
  return <div className="max-w-[120rem] mx-auto">{children}</div>;
};

export default MaxWidth;
