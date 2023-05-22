import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { colors } from '../utils/colors';

export const FollowUserCard = ({ user }: { user: any }) => {

    return (
        <Flex mt='15px' justifyContent={'space-between'} w='100%'>
            <Flex gap='10px' >
                <Button colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                    h='38px' w='38px' fontSize='13px'
                    p='0px 0px' borderRadius='50%'>
                    {user?.userName[0].toUpperCase()}
                </Button>
                <Box >
                    <Heading fontSize='15px' cursor='pointer'>{user.userName}</Heading>
                    <Text w='180px' overflow={'hidden'} textOverflow='ellipsis'
                        fontSize='13px' color='gray' fontWeight={500} mt='5px' cursor='pointer'>
                        {user.about.substring(0, 50)}...</Text>
                </Box>
            </Flex>
            <Button variant='unstyled' fontWeight={400} border='1px solid black' h='28px' w='72px'
                borderRadius='20px' fontSize='14px' _hover={{ bg: "rgba(0,0,0,0.8)", color: "white" }}>
                Follow
            </Button>
        </Flex>
    )
}