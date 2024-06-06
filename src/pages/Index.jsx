import React, { useState, useEffect } from "react";
import { Container, Text, VStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/message")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setMessage("Failed to load message");
      });
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Hello World Application</Text>
        <IconButton aria-label="Show Message" icon={<FaRocket />} size="lg" onClick={onOpen} />
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Message</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{message}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
