import {useContext} from 'react';
import {ThemeContext} from '@app/utils/context/colorMode';

import {
  CloudMoon,
  Sun,
} from '@app/components/Icons';

export default function ThemeToggle() {
  const {colorMode, setColorMode} = useContext(ThemeContext);
  const inactiveColorMode = colorMode === 'light' ? 'dark' : 'light';

  return (
    <button
      aria-label={`Change to ${inactiveColorMode} mode`}
      title={`Change to ${inactiveColorMode} mode`}
      type="button"
      onClick={() => setColorMode(inactiveColorMode)}
      className="relative flex items-center justify-around text-[1.5rem] leading-4
                 w-[78px] h-[38px] p-[3px] border-0 rounded-[39px] cursor-pointer bg-accent"
    >
      <span
        className={`absolute top-[3px] left-[3px] w-[32px] h-[32px] rounded-[50%]
                    ease-in-out duration-[250ms] bg-secondary
                    ${colorMode === 'dark' ? 'translate-x-[40px]' : 'translate-x-0'}
        `}
      />
      <span aria-hidden="true"><CloudMoon className="text-icon-secondary" /></span>
      <span aria-hidden="true"><Sun className="text-icon-secondary" /></span>
    </button>
  );
};

// <span aria-hidden="true"><CloudMoon className="text-icon-secondary" /></span>
// <span aria-hidden="true"><Sun className="text-icon-secondary" /></span>
