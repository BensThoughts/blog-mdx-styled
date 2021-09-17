import {FeatureToggleContext} from '@app/utils/context/FeatureToggleContext';

type FeatureToggleProps = {
  children: React.ReactNode,
  enabledFeatures: string[]
}

export default function FeatureToggle({
  children,
  enabledFeatures,
}: FeatureToggleProps) {
  return (
    <FeatureToggleContext.Provider value={{enabledFeatures}}>
      {children}
    </FeatureToggleContext.Provider>
  );
}
