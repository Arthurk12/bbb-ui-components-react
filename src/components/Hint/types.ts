export interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  title?: string;
  icon?: React.ReactNode;
  onRequestClose?: () => void;
  children?: React.ReactNode;
}
