type Props = {
  children: React.ReactNode;
};

const MaxWidth = ({ children }: Props) => {
  return <div className="relative max-w-[90rem] mx-auto grow">{children}</div>;
};

export default MaxWidth;
