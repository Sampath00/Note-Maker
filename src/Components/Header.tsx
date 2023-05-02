import { Box, Container, Flex, Heading, Text} from '@chakra-ui/react';
import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Flex as='nav' p='10px' bg='gray.300'>
        <Text fontSize='2xl' fontWeight='semibold'> Note Maker</Text>
    </Flex>
    );
};

export default Header;
