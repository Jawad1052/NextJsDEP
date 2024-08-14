import Link from "next/link";
function NamePage() {
  return (
    <div>
      <h1>This is the Name Page</h1>
      <Link href="/home">Back to Home</Link>
    </div>
  );
}
export default NamePage;
