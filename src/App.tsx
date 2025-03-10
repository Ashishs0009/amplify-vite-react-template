import { useEffect } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const { signOut } = useAuthenticator();

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
    });
  }, []);

  return (
    <main>
      <h1>Welcome to my Page</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
