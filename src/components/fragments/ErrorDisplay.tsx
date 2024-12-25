import { AxiosError } from "axios";

export const ErrorDisplay: React.FC<AxiosError<ErrorResponse>> = ({ status, response}) => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <div className="text-center space-y-6">
        <h1>{`{ ${status} - Error }`}</h1>
        <p className="w-3/4 mx-auto">message: {response?.data?.error?.message ?? response?.data?.message}</p>
      </div>
    </div>
  );
};

export interface ErrorResponse {
  error?: {
    code?: number;
    message?: string;
  };
  message?: string;
}
