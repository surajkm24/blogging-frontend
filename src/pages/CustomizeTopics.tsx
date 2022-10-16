import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { BsMedium } from 'react-icons/bs';
import { useState } from 'react';
import { addTopicsAPI } from '../redux/auth/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const topics = ['Programming', 'Data Science', 'Technology',
    'Self ImproveMent', 'Writing', 'Relationships', 'Machine Learning', 'Productivity',
    'Politics', 'Cryptocurrency', 'Psychology', 'Money',
    'Business', 'Python', 'Health', 'Science', 'Mental Health',
    'Life', 'Software Development', 'Startup', 'Design', 'JavaScript', 'Artificial Intelligence',
    'Culture', 'Software Engineering', 'Blockchain', 'Coding', 'Entrepreneurship',
    'React', 'UX', 'Education', 'History', 'Homour',
    'Work', 'Lifestyle']
export const CustomizeTopics = () => {
    const [selectedTopics, setTopics] = useState<Array<string>>([])
    const { loading, data } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const select = (topic: string) => {
        if (!selectedTopics.includes(topic)) {
            setTopics(prev => [...prev, topic])
        }
        else {
            let newTopics = [...selectedTopics];
            newTopics = newTopics.filter((ele) => ele !== topic);
            setTopics(newTopics);
        }
    }

    const addTopics = () => {
        dispatch(addTopicsAPI(selectedTopics, data._id)).then((res: any) => {
            navigate('/')
        })
    }
    return (
        <Box minH='100vh'>
            <Flex align='center' justify='center' gap='7px' h='70px' >
                <Icon as={BsMedium} fontSize='43px' />
                <Text fontSize='32px' letterSpacing='-1.5px' fontWeight={900} fontFamily='Segoe-UI'>Medium</Text>
            </Flex>
            <Heading fontSize='30px' mt={{ base: 4, md: 8 }} textAlign='center' fontWeight={500} fontFamily='Times New Roman'>What are you interested in?</Heading>
            <Text fontSize='17px' mt='10px' fontWeight={400} fontFamily='sans-serif' textAlign='center' w='90%' mx='auto'>Choose three or more.</Text>

            <Flex wrap={'wrap'} gap='10px' w={{ base: '90%', md: "75%", lg: "55%" }} mx='auto' justifyContent={'center'} mt='30px'>
                {topics.map((topic) => (
                    <Button borderRadius='20px' fontSize='15px' color={selectedTopics.includes(topic) ? 'green' : 'black'}
                        border='1px' borderColor={selectedTopics.includes(topic) ? 'green' : 'transparent'}
                        onClick={() => select(topic)}>
                        {topic} {selectedTopics.includes(topic) ? '✔' : '+'}
                    </Button>
                ))}
            </Flex>
            <Box textAlign={'center'} mt='20px' bg='white' position='sticky' bottom='0px' h='50px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Button isLoading={loading} loadingText='Submitting' _loading={{ background: 'darkgreen' }}
                    fontSize='14px' _hover={{ background: 'darkgreen' }} bg='green'
                    color='white' h='37px' w='220px' borderRadius='20px' mx='auto' disabled={selectedTopics.length < 3}
                    onClick={() => addTopics()}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    )
}