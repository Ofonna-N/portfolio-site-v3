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
        " mx-auto relative h-screen flex items-center snap-center overflow-y-auto"
      }
    >
      <MaxWidth>{children}</MaxWidth>
    </section>
  );
};

export default Section;
