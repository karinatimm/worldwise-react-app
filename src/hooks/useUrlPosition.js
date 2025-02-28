import { useSearchParams } from "react-router-dom";

const useUrlPosition = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat") || 0;
  const lng = searchParams.get("lng") || 0;

  return [lat, lng];
};

export default useUrlPosition;
