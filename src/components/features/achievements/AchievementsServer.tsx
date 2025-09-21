// src/components/achievements/AchievementsServer.tsx (Server Component)
import { client } from "@/sanity/lib/client";
import { ACHIEVEMENTS_QUERY } from "@/sanity/lib/queries";
import AchievementsClient from "./AchievementsClient";
import { Achievement } from "@/models";

export default async function AchievementsServer() {
  const data = await client.fetch<Achievement[]>(ACHIEVEMENTS_QUERY);
  console.log(data);
  return <AchievementsClient achievements={data} />;
}
