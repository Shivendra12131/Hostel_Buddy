import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function Lending() {
  // Step 1: Initialize the deadline state
  const [deadline, setDeadline] = useState(new Date("2024-08-03T12:00:00"));
  const [isActive, setIsActive] = useState(true);

  // Step 2: Compare current date and time with deadline
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setIsActive(now < deadline);
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="White Shirt"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Shirt
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          White Shirt for Interview
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        {/* Step 3: Display active state */}
        <Typography variant="caption" color={isActive ? "green" : "red"}>
          {isActive ? "Active" : "Inactive"}
        </Typography>
        <Typography className="font-normal">
          Deadline: {deadline.toLocaleString()}
        </Typography>
      </CardFooter>
    </Card>
  );
}
