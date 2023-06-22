import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div style={{ margin:'auto'}}>
      <h1>the product product id is {productId} </h1>
      <h2>reviewed by reviewer {reviewId} </h2>
    </div>
  );
}
