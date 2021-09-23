import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main
      meta={<Meta title="gh pages example" description="gh pages example" />}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center h-screen">
          <div className="flex justify-start items-center">
            <div className="box bg-orange">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="pl-10 text-5xl">Awesome</div>
          </div>
          <div className="flex justify-start items-center">
            <div className="box bg-green">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="pl-10 text-5xl">Github</div>
          </div>
          <div className="flex justify-start items-center">
            <div className="box bg-purple">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="pl-10 text-5xl">Pages</div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
