import Link from "next/link";

export default function BlogPage(){
    return(
        <main>
            <h1>The blog</h1>
            <p><Link href="/blog/post-1">Post 1</Link></p>
            <p><Link href="/blog/post-2">Post 2</Link></p>
            <p><Link href="/blog/post-3">Post 3</Link></p>
            <p><Link href="/blog/post-4">Post 4</Link></p>
            <p><Link href="/blog/post-5">Post 5</Link></p>
        </main>
    )
}