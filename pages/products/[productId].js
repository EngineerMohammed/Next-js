import axios from "axios";
import { useRouter } from "next/router";

export default function Post({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h3>
        {product.id} {product.title}
      </h3>
      <p>{product.description} </p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const resp = await axios.get(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = resp.data;

  console.log(`Generating Page for /posts/${params.productId}`);

  return {
    props: {
      product: data,
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
      // { params: { postId: "2" } },
      // { params: { postId: "3" } },
    ],
    fallback: true,

    // paths,
    //   fallback:false
  };
}
