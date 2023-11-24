const fetchUser = async (): Promise<{ name: string}> => {
  const response = await fetch("https://cloudflare-nextjs-9il.pages.dev/api/hello");
  const data = await response.json();
  return data;
}

export default async  function Page() {
  const user = await fetchUser();
  console.log(user);


  return (
    <div>
      <h1>User</h1>
      <p>{user.name}</p>
    </div>
  )
}
