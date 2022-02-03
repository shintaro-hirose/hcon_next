import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/results">
        <a>過去の大会</a>
      </Link>
      <Link href="/ranking">
        <a>ランキング</a>
      </Link>
      <Link href="/login">
        <a>ログイン</a>
      </Link>
      <Link href="/signup">
        <a>登録</a>
      </Link>
    </nav>
  );
};
export default Navbar;
