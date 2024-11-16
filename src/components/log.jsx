export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li>{turn.player} selected {turn.square.row} {turn.square.col}</li>
            ))}
        </ol>
    );
}
