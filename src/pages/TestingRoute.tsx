import { useParams } from "react-router-dom";

export const TestingRoute = () => {
  const { storeId } = useParams();
  return (
    <>
      <h1>{storeId}</h1>
    </>
  );
};
