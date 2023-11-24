const fetchUser = async () => {
  const response = await fetch("/api/users");
  const data = await response.json();
  return data;
}

export default async  function Page() {
  const user = await fetchUser();
  console.log(user);


  return (
    <div>
      <p>User</p>
    </div>
  )
}
