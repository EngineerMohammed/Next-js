import axios from "axios";
import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{ paddingBlock: "20px" }}>
            <Link href={`/posts/${post.id}`} passHref>
              <h2>
                {post.id}: {post.title}
              </h2>
              <p>{post.body} </p>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = resp.data;


  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
