import { IconDiscord } from "@/resource/icons";
import { Button } from "@nextui-org/react";

export const ButtonJoinDiscord = () => {
  return (
    <div className="w-max flex flex-col gap-2">
      <small>Lets join community</small>
      <Button className="font-bold tracking-widest" color="primary">
        <IconDiscord size={22}/>
        Discord
      </Button>
    </div>
  );
};
