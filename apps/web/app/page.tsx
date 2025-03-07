
import { client } from "@repo/store/client"
import { Form } from "./components/form";

export default async function Home() {
  const user = await client.user.findFirst()
  return (
   <div>
      <Form/>
   </div>
  );
}
