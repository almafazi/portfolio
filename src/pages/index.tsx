import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

import { MainContainer } from 'shared/mainContainer';

export default function Home() {
  return (
    <MainContainer>
      <Navbar />
      <Header />
    </MainContainer>
  );
}
