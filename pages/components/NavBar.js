import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div className={router.pathname === '/'? 'active' : ''}>
        <Link href="/">Home</Link>
      </div>
      <div className={router.pathname === '/about'? 'active' : ''}>
        <Link href="/about">About</Link>
      </div>
      <style jsx>{`
        div {
          // background-color: tomato;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
