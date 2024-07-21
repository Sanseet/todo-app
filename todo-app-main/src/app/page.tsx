import { Button } from "@/components/ui/button";

import { signInAction } from "../../actions/auth-action";
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      TODO LIST

      <form action={signInAction}>
      <Button>LogIn</Button>
      </form>
    </main>
  );
}
