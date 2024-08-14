import Link from "next/link";
function HomePage() {
  return (
    <div>
      <Link href="/home">Go to Home</Link>
      <br />
      <Link href="/name">Go to Name</Link>
      <h1>Hello, I am Muhammad Jawad and this is my first Next.js project.</h1>
    </div>
  );
}
export default HomePage;
