import { Sponsor } from "@/models";
import { client } from "@/sanity/lib/client";
import { TIER_SPONSORS_QUERY } from "@/sanity/lib/queries";
import MarqueePartnersClient from "./MarqueePartnersClient";

const MarqueePartnersServer = async () => {
  const PARTNERS: Sponsor[] = await client.fetch(TIER_SPONSORS_QUERY, {
    tier: "diamond",
  });
  return <MarqueePartnersClient  partners={PARTNERS}/>;
};

export default MarqueePartnersServer;
