import axios from "axios";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h3>
        {post.id} {post.title}
      </h3>
      <p>{post.body} </p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const resp = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postId} `
  );
  const data = resp.data;

  console.log(`Generating Page for /posts/${params.postId}`);

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  // const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
  // const data = resp.data;
  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`
  //     }
  //   };
  // });
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: true,

    // paths,
    //   fallback:false
  };
}
