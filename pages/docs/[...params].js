import { useRouter } from "next/router";

export default function DocsFile() {
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <div>
      <h1>DocsFile {params[0]} </h1>
      <h2>DocsFile {params[1]} </h2>
      <h2>DocsFile {params[3]} </h2>
    </div>
  );
}
