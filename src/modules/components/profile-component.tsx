import { Box, Button, Flex, HStack, Image, VStack, Text, Spacer, Grid, SimpleGrid, Input} from "@chakra-ui/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  useUserLazyQuery,
  useUserUpdateMutation,
} from "@src/shared/generated/graphql-schema";
import AuthContext from "@src/shared/contexts/auth.context";
import { UserUpdateInput } from "@src/shared/generated/graphql-schema";
import { toast } from "react-toastify";

const ProfileComponent: FC = () => {
  // console.log(useContext(AuthContext));
  const userContext = useContext(AuthContext)?.user;
  const [userUpdate] = useUserUpdateMutation({})
  const [data, setData] = useState<UserUpdateInput>({});
  const [handleUserNameField, setHandleUserNameField] = useState(userContext?.username);


  const handleClick = async () => {
    const userUpdateInput : UserUpdateInput = {};
    //get input with the id of the title
    const username = (document.getElementById('UserName') as HTMLInputElement).value;
    if(username !== userContext.username) {
      userUpdateInput.username = username;
    }
    const firstName = (document.getElementById('First Name') as HTMLInputElement).value;
    if(firstName !== userContext.firstName) {
      userUpdateInput.firstName = firstName;
    }
    const lastName = (document.getElementById('Last Name') as HTMLInputElement).value;
    if(lastName !== userContext.lastName) {
      userUpdateInput.lastName = lastName;
    }
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    if(email !== userContext.email) {
      userUpdateInput.email = email;
    }
    const password = (document.getElementById('Password') as HTMLInputElement).value;
    if(password !== "") {
      userUpdateInput.password = password;
    }

    try{
      const info = await userUpdate({
        variables: {
          where: {uuid: userContext.uuid},
          data: userUpdateInput
        }});
        console.log(info);
        toast.success("Profile Updated");
        // window.location.reload();
      }
      catch(error : any) {
        console.log(error);
        toast.error(error?.message)
        // console.log(error.extensions.response.message);
      }
  }
  return (
    <>
    {!userContext ? <> <Text>No user signed in</Text> </> : <> 
     
        <Flex mt={0} paddingTop={0} justifyContent={'center'} justifyItems={'center'} >
          <VStack minH={'1000px'}>
              <Text fontSize={32} as={'b'}>Profile</Text>
          <Image
            position={'absolute'}
            src='img/fishTank.jpg'
            opacity={0.25}
            minH={'450px'}
            zIndex={-1}
            />
            <VStack 
              align={'left'} 
              background={'fishPalette.cyan'}
              rounded={'lg'}
              boxShadow={'lg'}
              mr={25}
              padding={6}
              opacity={0.9}
              outline={'4px solid'}
              outlineColor={'fishPalette.green'}
            >
              {/* <Image
                boxSize="200px"
                objectFit="cover"
                /> */}
              <ProfileBlock title={'UserName'} info={userContext.username}/>
              <ProfileBlock title={'First Name'} info={userContext.firstName}/>
              <ProfileBlock title={'Last Name'} info={userContext.lastName}/>
              <ProfileBlock title={'Email'} info={userContext.email}/>
              <ProfileBlock title={'Password'} info={userContext.password}/>
              <Button
                onClick={handleClick}
              >Save</Button>
            </VStack>
          </VStack>
      </Flex>
      </>}
      </>
  );
};

export default ProfileComponent;

const ProfileBlock = ({title, info}:{title:string, info:string}) => {
  
  const [value, setValue] = useState(info)
  const handleChange = (event: any) => setValue(event.target.value)
  
  return (
    <VStack align={'left'} spacing={0}>
      <Text fontSize={18} as={'b'}>{title}:</Text>
      <Input onChange={handleChange} id={title} type={title==='Password' ? 'password' : 'text' } 
        fontSize={16} value={value}></Input>
    </VStack>
  )
}
