import { Card } from '@rneui/themed';

export default function Botao(props) {
    return (
        <Card>
            <Card.Title>{props.titulo}</Card.Title>
        </Card>
    );
}