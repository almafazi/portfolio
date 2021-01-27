import React, { Dispatch, SetStateAction, useState } from 'react';

import { Logo } from 'components/Logo';
import * as S from './styles';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    return open && setOpen(!open);
  };

  return (
    <S.NavbarContainer open={open}>
      <Logo dark={!open} alt="That's my logo" />
      <S.MenuIcon aria-label='Hamburger menu' onClick={() => setOpen(!open)} open={open} />
      <S.NavList open={open}>
        <a onClick={() => open && setOpen(!open)} href='#header'>
          Home
        </a>
        <a onClick={() => open && setOpen(!open)} href='#languages'>
          Techs
        </a>
        <a onClick={() => open && setOpen(!open)} href='#languages'>
          About
        </a>
        <a onClick={() => open && setOpen(!open)} href='#experiences'>
          Experiences
        </a>
      </S.NavList>
      <S.ButtonLink onClick={() => open && setOpen(!open)} href='#hireMe' dark={!open}>
        Hire me
      </S.ButtonLink>
    </S.NavbarContainer>
  );
};

export default Navbar;
