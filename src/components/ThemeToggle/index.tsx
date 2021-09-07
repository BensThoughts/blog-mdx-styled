import { useContext, useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { ThemeContext } from '@app/utils/context/colorMode';

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
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
  transition: background 0.25s ease-in-out, box-shadow 0.25 ease-in-out;
  will-change: background, box-shadow;
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
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: rgba(var(--color-app-secondary), var(--app-bg-opacity));
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.colorMode === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const ThemeToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const inactiveColorMode = colorMode === 'light' ? 'dark' : 'light';

  return (
    <ToggleButton
      aria-label={`Change to ${inactiveColorMode} mode`}
      title={`Change to ${inactiveColorMode} mode`}
      type="button"
      onClick={() => setColorMode(inactiveColorMode)}
    >
      <ToggleThumb colorMode={colorMode!} />
      <span aria-hidden="true">🌙</span>
      <span aria-hidden="true">☀️</span>
    </ToggleButton>
  );
};

export default ThemeToggle;