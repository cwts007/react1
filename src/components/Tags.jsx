import { Badge } from 'react-bootstrap';

export default function Tags({ text, color }) {
    return <Badge style={{ backgroundColor: color }}>{text}</Badge>;
}
