import ReactGA from 'react-ga4';

interface ApiEventTriggerProps {
  category: string;
  action: string;
  label: string;
  value: number;
}

export const apiEventGATrigger = ({ category, action, label, value }: ApiEventTriggerProps) => {
  ReactGA.event({
    action: action,
    category: category,
    label: label,
    value: value,
  });
};
