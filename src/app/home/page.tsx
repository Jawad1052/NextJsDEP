import Link from "next/link";
function Home() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Link href="/name">Go to Name Page</Link>
    </div>
  );
}
export default Home;
