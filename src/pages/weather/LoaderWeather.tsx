import { Skeleton } from "@nextui-org/react";

const DetailWeather = () => {
  return (
    <div className="bg-default-200/50 rounded-3xl  p-4 my-4 sm:p-6 sm:my-6 md:p-8 md:my-8 flex flex-col sm:flex-row gap-4 *:w-full">

      <div>
        <div className="space-y-4">
          <Skeleton className="h-12 w-4/5 rounded-xl" />
          <Skeleton className="h-6 w-1/2 rounded-xl" />
        </div>
        <div className="flex gap-4 mt-6">
          {[1, 2, 3, 4].map((item) => <Skeleton key={item} className="h-12 w-12 rounded-xl" />)}
        </div>
      </div>

      <div className="items-center justify-center hidden sm:flex">
        <Skeleton className="w-48 h-48 rounded-full" />
      </div>
    </div>
  );
};

export const Loader = {
  DetailWeather,
};
