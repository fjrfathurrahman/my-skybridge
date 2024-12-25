import Link from "next/link";
import { ButtonJoinDiscord } from "../elements/ButtonJoinDiscord";
import { LinkConnect } from "@/resource/data";
import { Box } from "../layouts/Box";

export const Footer: React.FC = () => {
  return (
    <Box className="max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[968px] mx-auto px-4">
      <div className="flex justify-between border-t py-6 ">
        <ButtonJoinDiscord />

        <div className="flex flex-col gap-2">
          <small>Lets connect with me</small>

          <div className="flex gap-2 justify-end">
            {LinkConnect.map((item) => (
              <Link key={item.name} href={item.url} passHref target="_blank">
                <item.icon size={24} />
              </Link>
            ))}
          </div>
        
        </div>
      </div>
    </Box>
  );
};
