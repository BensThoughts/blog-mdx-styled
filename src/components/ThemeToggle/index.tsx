import {useContext} from 'react';
import styled from '@emotion/styled';
import {ThemeContext} from '@app/utils/context/colorMode';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ToggleButton = styled.button`
  --toggle-width: 78px;
  --toggle-height: 38px;
  --toggle-padding: 3px;
  --app-bg-opacity: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background-color: rgba(var(--color-app-accent), var(--app-bg-opacity));
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-app-secondary);
  }
`;

const ToggleThumb = styled.span<{
  colorMode: string
}>`
  --app-bg-opacity: 1;
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: rgba(var(--color-app-secondary), var(--app-bg-opacity));
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.colorMode === 'dark' ?
      'translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)' :
      'none'};
`;

const ThemeToggle = () => {
  const {colorMode, setColorMode} = useContext(ThemeContext);
  const inactiveColorMode = colorMode === 'light' ? 'dark' : 'light';

  return (
    <ToggleButton
      aria-label={`Change to ${inactiveColorMode} mode`}
      title={`Change to ${inactiveColorMode} mode`}
      type="button"
      onClick={() => setColorMode(inactiveColorMode)}
    >
      <ToggleThumb colorMode={colorMode!} />
      <span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'cloud-moon']} className="text-icon-secondary text-opacity-95" /></span>
      <span aria-hidden="true"><FontAwesomeIcon icon={['fas', 'sun']} className="text-icon-secondary text-opacity-95" /></span>
    </ToggleButton>
  );
};

export default ThemeToggle;
