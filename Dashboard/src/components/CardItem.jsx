import { BadgeDelta, Card, Flex, Metric } from "@tremor/react";
import React from "react";

export default function CardItem() {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      {/* <Text>Sales</Text> */}
      <Flex justifyContent="between" alignItems="center">
        <p>Sales</p>
        <BadgeDelta deltaType={"moderateIncrease"}>+12</BadgeDelta>
      </Flex>
      <Metric>$ 34,743</Metric>
    </Card>
  );
}
