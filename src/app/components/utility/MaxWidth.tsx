type Props = {
  children: React.ReactNode;
};

const MaxWidth = ({ children }: Props) => {
  return (
    <div className="relative max-w-[90rem] mx-auto grow h-full">{children}</div>
  );
};

export default MaxWidth;
