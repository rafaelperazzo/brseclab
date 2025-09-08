import { Card } from '@rn-vui/themed';

export default function Botao(props) {
    return (
        <Card>
            <Card.Title>{props.titulo}</Card.Title>
        </Card>
    );
}