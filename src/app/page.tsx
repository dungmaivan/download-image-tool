import dynamic from "next/dynamic";
const Home = dynamic(() => import("../components/index"), { ssr: false });
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home />
    </main>
  );
}
