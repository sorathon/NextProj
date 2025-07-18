export default async function Page() {
    let data = await fetch('https://api.vercel.app/blog');
    let post = await data.json();
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {post.map((post : any) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );

}