// client.ts
import { createClient } from 'next-sanity';


const client =createClient({
  projectId: "zkde40c9",
  dataset: "production",
  useCdn: true,
});


export default client;
