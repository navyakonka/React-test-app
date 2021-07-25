import { createContext } from "react";
import { INITIAL_STATE } from "../constants";

const UserContext = createContext({ ...INITIAL_STATE, updateUser: () => {} });

export default UserContext;
