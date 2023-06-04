type Props = {
  children: React.ReactNode;
  className: string;
};

const GalleryItem = ({ children, className }: Props) => {
  return (
    <li
      className={`shrink-0 p-2 snap-center ${className ? className : "w-full"}`}
    >
      {children}
    </li>
  );
};

export default GalleryItem;
