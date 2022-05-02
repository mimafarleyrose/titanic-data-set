import Octopus from "../styles/svgs/octopus.svg";
import Arrow from "../styles/svgs/arrow.svg";
import { Wrapper } from "../components/wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row items-center lg:w-full lg:justify-around">
        <Octopus className="w-32 h-32 md:w-60 md:h-60 lg:h-72 lg:w-72"/>
        <h1 className="md:font-Lodrina font-LodrinaSolid lg:text-7xl md:text-5xl text-3xl text-center">
          Understanding the Titanic
        </h1>
        <Link href="/analysis" passHref>
          <Arrow className="w-14 h-14 md:w-20 md:h-20 pl-4 pt-3" />
        </Link>
      </div>
    </Wrapper>
  );
}
