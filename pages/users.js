import User from "@/components/user";
import axios from "axios";

export default function UserList({ users }) {
  return (
    <>
      <h1>User list</h1>
      {users.map((us) => {
        return (
          <div key={us.id}>
            <User us={us} />  
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data =  resp.data;
  return {
    props: {
      users: data,
    },
  };
}
