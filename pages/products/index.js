import axios from "axios";

export default function PRODUCTList({ posts }) {
  return (
    <div>
      {posts.map((product) => {
        return (
          <div key={product.id} style={{ paddingBlock: "20px" }}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description} </p>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const resp = await axios.get("http://localhost:4000/products");
  const data = resp.data;

  return {
    props: {
      posts: data,
    },
  };
}
