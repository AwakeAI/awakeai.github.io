"use client";

import { Flex } from "@chakra-ui/react";
import { Section1 } from "@/app/(normal)/activity/Section1";
import { Section2 } from "@/app/(normal)/activity/Section2";
import { Section3 } from "@/app/(normal)/activity/Section3";
import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation'

import activities from "./activities";

function ActivityPage() {
  const router = useRouter()
  const searchParams = useSearchParams();

  const activityId = searchParams.get("id") || "resi"; 
  const activity = activities.find((item) => item.key === activityId) || activities[0];

  return (
    <Flex w="100%" direction="column">
      <Section1 activity={activity} />
      <Section2 activity={activity} />
      <Section3
        onChangeActivity={(key) => {
          router.push(`?id=${key}`);
        }}
        activities={activities.filter((item) => activity?.linkKeys && activity?.linkKeys.indexOf(item.key) > -1)}
        currentActivity={activity}
      />
    </Flex>
  );
}
export default function Activity() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ActivityPage />
    </Suspense>
  );
}