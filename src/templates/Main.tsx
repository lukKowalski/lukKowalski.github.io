import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full h-screen text-black">
    {props.meta}
    {props.children}
  </div>
);

export { Main };
