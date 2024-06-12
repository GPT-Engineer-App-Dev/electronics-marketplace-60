import React from 'react';
import { ChakraProvider, Box, Heading, SimpleGrid, Image, Text, Button } from '@chakra-ui/react';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'Latest model with advanced features',
    price: '$699',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Laptop',
    description: 'High performance laptop for professionals',
    price: '$999',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Smartwatch',
    description: 'Stylish smartwatch with health tracking',
    price: '$199',
    image: 'https://via.placeholder.com/150'
  }
];

const App = () => (
  <ChakraProvider>
    <Box p={5}>
      <Heading as="h1" mb={5}>Electronics Store</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {products.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={product.image} alt={product.name} />
            <Heading as="h2" size="md" mt={4}>{product.name}</Heading>
            <Text mt={2}>{product.description}</Text>
            <Text mt={2} fontWeight="bold">{product.price}</Text>
            <Button mt={4} colorScheme="teal">Add to Cart</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  </ChakraProvider>
);

export default App;