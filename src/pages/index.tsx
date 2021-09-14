import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main
      meta={<Meta title="gh pages example" description="gh pages example" />}
    >
      <h1 className="font-bold text-2xl">GitHub pages lukKowalski</h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
      </p>
      <h2 className="font-semibold text-lg">Hey!</h2>
    </Main>
  );
};

export default Index;
