import Link from "next/link";
// import styles from './styles.module.css'
export default function Home() {
  return (
    <main >
     <h1 className="bg-gray-400 text-red-100">Good mroning</h1>
     <Link href={'/about'}>Go to about page</Link>
    </main>
  );
}
