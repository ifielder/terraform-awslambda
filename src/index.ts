import cuid from "cuid";

export const handler = async (event: any) => {
  console.log(cuid());
  console.log(JSON.stringify(event));
  return "success";
};
