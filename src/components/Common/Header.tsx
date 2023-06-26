import { FunctionComponent } from "preact";
import { Link } from "preact-router";

const Header: FunctionComponent = () => (
  <header>
    <nav>
      <ul className=" flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
