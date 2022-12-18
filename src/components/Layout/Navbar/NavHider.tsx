import {Fragment} from 'react';
import {Transition} from '@headlessui/react';

import useScrollDirection from '@app/utils/hooks/useScrollDirection';

type NavHiderProps = {
  className?: string;
  children: React.ReactNode;
}

export default function NavHider({className, children}: NavHiderProps) {
  const {scrollDirection, y} = useScrollDirection();
  return (
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
      <div className={`fixed inset-0 h-14 max-h-14 z-[49] ${className}`}>
        {children}
      </div>
    </Transition>


  );
}
