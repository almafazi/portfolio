import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { Techs } from 'components/Techs';
import { Experiences } from 'components/Experiences';

import { MainContainer } from 'shared/mainContainer';

export default function Home() {
  return (
    <MainContainer>
      <Navbar />
      <Header />
      <Techs />
      <Experiences />
    </MainContainer>
  );
}
