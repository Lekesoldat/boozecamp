import { useAuth } from "../context/Authentication";

const useUser = () => useAuth().user!;

export default useUser;
