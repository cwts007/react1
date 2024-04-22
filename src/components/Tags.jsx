import { Badge } from 'react-bootstrap';

export default function Tags({ text, color }) {
    return <Badge bg={color} style={{ width: '100%' }}>{text}</Badge>;
}