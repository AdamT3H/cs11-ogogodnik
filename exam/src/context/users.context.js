import { createContext } from 'react';

const UsersContext = new createContext({
    createdChats: []
});

export default UsersContext;