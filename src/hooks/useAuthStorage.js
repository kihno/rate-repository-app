import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthoStorageContext";

const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;
