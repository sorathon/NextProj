export default function ServerComponent() {
    const item = [ 'apple', 'banana', 'orange' ];
    return (
        <div>
            <h1>Server Component</h1>
            <ul>
                {item.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );

}