import * as React from "react";
import TutoCard from "../../common/card/TutoCard";
import LargeButton from "../../common/button/LargeButton";

// customizing
const sizeList = {
  cardElevation: 12,
  cardMargin: 80,
  cardBorderRadiusSize: 20,
  cardHeight: 500,
};

export default function Tuto() {
  return (
    <div>
      <TutoCard
        elevation={sizeList.cardElevation}
        borderRadius={sizeList.cardBorderRadiusSize}
        height={sizeList.cardHeight}
        marginBottom={sizeList.cardMargin}
      />
      <LargeButton />
    </div>
  );
}
