export const handleFetchData = async (
  apiEndpoint: string,
  setData: (data: any) => void
) => {
  const response = await fetch(apiEndpoint);
  const data = await response.json();
  setData(data);
};
