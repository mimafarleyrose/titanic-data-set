import Octopus from "../styles/octopus.svg";
import Arrow from "../styles/arrow.svg";
import { Wrapper } from "../components/wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Octopus />
      <h1 className="font-Lodrina text-7xl">
        Understanding the Titanic
      </h1>
      <Link href="/analysis">
        <span className="transition ease-in-out delay-150 opacity-0 hover:opacity-100 cursor-pointer">
          <Arrow className="w-20 h-20 pl-4 pt-3" />
        </span>
      </Link>
    </Wrapper>
  );
}
