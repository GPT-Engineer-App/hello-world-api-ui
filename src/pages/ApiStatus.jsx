import React, { useState, useEffect } from "react";
import { Container, Text, VStack } from "@chakra-ui/react";

const ApiStatus = () => {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    fetch("http://localhost:3001/api/status")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStatus(data.status);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setStatus("Failed to load status");
      });
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">API Status</Text>
        <Text>{status}</Text>
      </VStack>
    </Container>
  );
};

export default ApiStatus;
