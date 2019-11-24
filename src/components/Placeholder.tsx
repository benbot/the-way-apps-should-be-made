interface PlaceholderProps {
  w: number;
  h: number;
  color?: boolean;
}

const Placeholder: React.FunctionComponent<PlaceholderProps> = ({ w, h, color }) => (
  <img src={`http://placekitten.com${color ? '' : '/g'}/${w}/${h}`} width={w} height={h} />
);

export default Placeholder;
