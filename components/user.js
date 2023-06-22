export default function User({ us }) {
  return (
    <div style={{ paddingBlock: "10px" }}>
      <p>{us.username}</p>
      <p>{us.email} </p>
    </div>
  );
}
