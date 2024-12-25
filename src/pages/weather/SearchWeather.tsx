import { IconSearch } from "@/resource/icons";
import { FormWeather } from "@/schema";
import { Button, Input } from "@nextui-org/react";
import { UseFormReturn } from "react-hook-form";

interface SearchWeatherProps {
  useForm: {
    formState: UseFormReturn<FormWeather>['formState'];
    register: UseFormReturn<FormWeather>['register'];
    handleSubmit: UseFormReturn<FormWeather>['handleSubmit'];
  }
  onSubmit: () => void;
  isLoading: boolean;
}

export default function SearchWeather({onSubmit, isLoading, useForm: { formState, register, handleSubmit }}: SearchWeatherProps): JSX.Element {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <Input
        type="text"
        placeholder="Search for city"
        errorMessage={formState.errors.location?.message}
        isInvalid={Boolean(formState.errors.location)}
        {...register("location", { required: true })}
        description='Sorry, If the data does not appear click button Search again'
        startContent={<IconSearch size={18}/>}
      />
      <Button type="submit" color="primary" isDisabled={isLoading} isLoading={isLoading}>Search</Button>
    </form>
  );
}
