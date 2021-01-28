import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { Techs } from 'components/Techs';
import { Experiences } from 'components/Experiences';

import { MainContainer } from 'shared/mainContainer';
import { Contact } from 'components/Contact';

export default function Home() {
  return (
    <MainContainer>
      <Navbar />
      <Header />
      <Techs />
      <Experiences />
      <Contact />
    </MainContainer>
  );
}
