import Link from "next/link";
export default function Home() {
  return (
    <main>
      landing page
      <br />
      <Link href="/announcements">
      announcements
      </Link>
    </main>
  );
}
