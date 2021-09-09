import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { Fragment } from 'react';
import styled from '@emotion/styled';
import { Transition } from '@headlessui/react';

import useScrollDirection from '@app/utils/hooks/useScrollDirection';

const HiddenWrapper = styled.div`
  z-index: 49;
`;

type NavHiderProps = {
  children: React.ReactChild;
}

export default function NavHider({ children }: NavHiderProps) {
  const {scrollDirection, y} = useScrollDirection();
  return (
    <HiddenWrapper className="fixed inset-0 h-14 max-h-14">
      <Transition
        as={Fragment}
        show={scrollDirection === 'down' && y > 350 ? false : true}
        enter="transform transition duration-200 ease-out"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transform transition duration-200 ease-in"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"    
      >
        <div>
          {children}
        </div>
      </Transition>
    </HiddenWrapper>

  );
}