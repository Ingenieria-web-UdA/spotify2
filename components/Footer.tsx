import Link from "next/link";

const Footer = () => {
  return (
    <footer>
        <Link href="/santiago/">Link a Santiago</Link>
        <div>
            <span>Company</span>
            <span>Communities</span>
            <span>Useful links</span>
        </div>
        <div>
            <span>IG</span>
            <span>Facebook</span>
            <span>Twitter</span>
        </div>
    </footer>
  );
}

export {Footer};