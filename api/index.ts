export type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json: Post[] = await response.json();

  return json;
}

export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json: User[] = await response.json();

  return json;
}
