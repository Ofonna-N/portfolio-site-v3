import MaxWidth from "./MaxWidth";

type Props = {
  id?: string;
  className: string;
  children: React.ReactNode;
};

const Section = ({ className, children, id }: Props) => {
  return (
    <section
      id={id}
      className={
        className +
        " mx-auto relative h-screen flex items-center snap-center overflow-y-auto overflow-x-hidden"
      }
    >
      <MaxWidth>
        <div className="h-full px-[2rem] pt-[10rem] md:gap-[2rem] md:flex md:flex-col md:items-center md:justify-center md:pt-0">
          {children}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Section;
