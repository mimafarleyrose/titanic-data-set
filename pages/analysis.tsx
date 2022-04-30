import { Wrapper } from "../components/wrapper";
import Octopus from "../styles/octopus.svg";
import Link from "next/link";

export default function Analysis() {
  return (
    <Wrapper>
      <Link href="/">
        <Octopus className="cursor-pointer" />
      </Link>
      <div>Analysis</div>
    </Wrapper>
  );
}
