import React from "react";
import CardItem from "./CardItem";

import TableComponent from "./Table";
import AreaChartComponent from "./AreaChart";

export default function LeftColumn() {
  return (
    <div className="w-full flex flex-col justify-between p-2 px-2">
      <div className="flex flex-col lg:flex-row gap-2">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="flex-auto w-full flex flex-col gap-4">
        <AreaChartComponent />
        <TableComponent />
      </div>
    </div>
  );
}
