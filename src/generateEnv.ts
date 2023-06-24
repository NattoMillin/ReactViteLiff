export const generateEnv = () => {
  let liffId: string;
  let mock: boolean;
  switch (import.meta.env.VITE_NODE_ENV) {
    case "production":
      liffId = import.meta.env.VITE_APP_LIFF_ID ?? "";
      mock = false;
      break;
    default:
      liffId = "dummyId";
      mock = true;
      break;
  }
  return { liffId, mock };
};
