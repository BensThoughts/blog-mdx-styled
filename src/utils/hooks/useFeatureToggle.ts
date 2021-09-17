import {useContext} from 'react';
import {FeatureToggleContext} from '../context/FeatureToggleContext';

export default function useFeatureToggle() {
  const {enabledFeatures} = useContext(FeatureToggleContext);

  const isEnabled = (featureName: string) => {
    return enabledFeatures.includes(featureName);
  };

  return [
    isEnabled,
  ];
}
