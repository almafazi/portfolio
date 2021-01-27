import React from 'react';
import Typed from 'react-typed';

import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer id='header'>
      <S.HeroTextContainer>
        <S.HeroText>
          Hello I&apos;m <S.HeroTextOrange>Felipe Vieira</S.HeroTextOrange>
        </S.HeroText>
        <S.HeroText>
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "and I&apos;m a <span class='accent'>Web Developer.</span>",
              "and I&apos;m a <span class='accent'>Mobile Developer.</span>",
              "and I&apos;m a <span class='accent'>Full Stack.</span>",
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar='|'
            className='typed'
          />
        </S.HeroText>
      </S.HeroTextContainer>
      <S.HeroDraw alt='Draw of a programmer using a computer' />
    </S.HeaderContainer>
  );
};

export default Header;
