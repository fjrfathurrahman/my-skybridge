import { Box } from "@/components/layouts/Box";
import { LinksApi } from "@/resource/data";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Headline({links}: {links: typeof LinksApi}): JSX.Element {
  return (
    <Box className="h-[700px] flex flex-col justify-center gap-24">

      {/* Headline */}
      <div className="text-center sm:space-y-2 cursor-pointer *:font-extrabold">
        <h2>Learn, Experiment, <br /> and Connect APIs with</h2>
        <h2 className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white w-max mx-auto p-2.5 sm:p-3.5 rounded-xl font-extrabold -rotate-2 hover:rotate-2 duration-100">SkyBridges</h2>
      </div>

      {/* Links API */}
      <div className="flex items-center justify-center gap-4">
        {links.map((item) => (
          <Button key={item.name} isIconOnly>
            <Link href={item.url}>
              <item.icon size={22} />
            </Link>
          </Button>
        ))}
      </div>
    </Box>
  );
}
