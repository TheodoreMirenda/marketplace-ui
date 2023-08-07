import {
  Box
} from "@chakra-ui/react";
import { FC, useContext, useEffect } from "react";
import Navbar from "./shared/components/navbar/navbar.component";

import AuthContext from '../../shared/contexts/auth.context'
import { useRouter } from "next/router";

interface NavigationProps {
  children: any;
}
const Navigation: FC<NavigationProps> = ({ children }: NavigationProps) => {
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();

  
  // useEffect(() => {

  //   if(!user && !isLoading){
  //       router.push('/login')
  //   }
  // }, [user, isLoading])
  
  return    <Box minHeight="100vh">
  <Navbar />
  <Box  mx="auto" px={[4, 6, 8]} pt={20} pb={8} >
     {children}
   </Box>
 </Box>
};

export default Navigation;
