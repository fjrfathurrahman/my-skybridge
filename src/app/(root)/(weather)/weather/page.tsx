"use client";

import { Breadcrumb } from "@/components/fragments/Breadcrumb";
import { useForm } from "react-hook-form";
import { FormWeather, WeatherSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "@/pages/weather/LoaderWeather";
import { ErrorDisplay, ErrorResponse } from "@/components/fragments/ErrorDisplay";
import { AxiosError } from "axios";
import dynamic from "next/dynamic";
import useGetWeather from "@/hooks/useGetWeather";
import SearchWeather from "@/pages/weather/SearchWeather";

const DetailWeather = dynamic(
  () => import("@/pages/weather/DetailWeather").then((mod) => mod.default),
  { ssr: false, loading: () => <Loader.DetailWeather /> }
);

export default function WeatherPage(): JSX.Element {
  const { handleSubmit, register, formState, getValues } = useForm<FormWeather>({ mode: "onSubmit", resolver: zodResolver(WeatherSchema) });
  const { data: result, isLoading, isSuccess, isIdle, isError, error, refetch } = useGetWeather(
    formState.isSubmitSuccessful ? getValues().location : "Korea"
  );

  return (
    <div>
      <Breadcrumb />

      <SearchWeather
        onSubmit={() => refetch()}
        isLoading={isLoading}
        useForm={{ formState, register, handleSubmit }}
      />

      {isLoading || isIdle ? (
        <Loader.DetailWeather />
      ) : error && isError ? (
        <ErrorDisplay {...(error as AxiosError<ErrorResponse>)} />
      ) : null}

      {isSuccess && result && (
        <DetailWeather
          current={{ ...result?.data.current }}
          location={{ ...result?.data.location }}
        />
      )}
    </div>
  );
}
