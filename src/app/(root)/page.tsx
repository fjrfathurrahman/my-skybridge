"use client";

import Headline from "@/pages/home/Headline";
import { LinksApi } from "@/resource/data";

export default function HomePage(): JSX.Element {
  return <Headline links={LinksApi} />;
}
