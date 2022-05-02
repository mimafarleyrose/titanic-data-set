import { ReactElement, useState } from "react";
import { Wrapper } from "./wrapper";
import Arrow from "../styles/svgs/arrow.svg";

interface CarouselProps {
  items: ReactElement[];
}
export const Carousel = ({ items }) => {
  const [visisbleItem, setVisibleItem] = useState(0);

  const listOfItems = items.map((item, i) => (
    <div key={i} className={`${i !== visisbleItem ? "hidden" : ""}`}>
      {item}
    </div>
  ));
  
  const lastItemIndex = items.length - 1
  
  const setNextItem = () => {
    const isLastItem = visisbleItem === lastItemIndex;
    if (isLastItem) {
      return setVisibleItem(0);
    }
    return setVisibleItem(visisbleItem + 1);
  };
  
  const setPreviousItem = () => {
    const isFirstItem = visisbleItem === 0;
    if (isFirstItem) {
      return setVisibleItem(lastItemIndex);
    }
    return setVisibleItem(visisbleItem - 1);
  };

  return (
    <div className="flex flex-row items-start lg:items-center text-center">
      <button onClick={setPreviousItem} >
        <Arrow className="rotate-180 w-6 h-6 md:w-20 md:h-20" />
      </button>
      {listOfItems}
      <button onClick={setNextItem}>
        <Arrow className="w-6 h-6 md:w-20 md:h-20" />
      </button>
    </div>
  );
};
