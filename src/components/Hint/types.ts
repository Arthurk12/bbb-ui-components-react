export interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Main text content of the hint. */
  label: string;

  /** Optional title shown in the header; when set, `label` renders as a separate line below instead of inline. */
  title?: string;

  /** Optional icon node displayed next to the title or label. @default <MdInfo /> */
  icon?: React.ReactNode;

  /** Whether the hint is visible. Omit to let the hint manage its own visibility, closing itself when the close button is clicked; pass a boolean to control visibility externally. */
  open?: boolean;

  /** Callback fired when the close button is clicked, in both controlled and uncontrolled mode. */
  onRequestClose?: () => void;

  /** Optional additional content rendered under the label. */
  children?: React.ReactNode;
}
