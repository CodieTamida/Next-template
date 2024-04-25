import { signIn } from "../../../auth.js";
import Link from "next/link.js";
import Home from "../page.js";

const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit">Signin with Github</button>
      <Link href="../">Go Home</Link>
    </form>
  );
};

export default SignIn;
