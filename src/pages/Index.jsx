import { Button, Container, Grid, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Input value={input} readOnly placeholder="Enter calculation" size="lg" textAlign="right" />
        <Grid templateColumns="repeat(4, 1fr)" gap={2} width="100%">
          <Button onClick={() => handleInput("1")}>1</Button>
          <Button onClick={() => handleInput("2")}>2</Button>
          <Button onClick={() => handleInput("3")}>3</Button>
          <Button onClick={() => handleInput("+")} colorScheme="blue">
            +
          </Button>
          <Button onClick={() => handleInput("4")}>4</Button>
          <Button onClick={() => handleInput("5")}>5</Button>
          <Button onClick={() => handleInput("6")}>6</Button>
          <Button onClick={() => handleInput("-")} colorScheme="blue">
            -
          </Button>
          <Button onClick={() => handleInput("7")}>7</Button>
          <Button onClick={() => handleInput("8")}>8</Button>
          <Button onClick={() => handleInput("9")}>9</Button>
          <Button onClick={() => handleInput("*")} colorScheme="blue">
            *
          </Button>
          <Button onClick={() => handleInput("0")}>0</Button>
          <Button onClick={clearInput} colorScheme="red">
            C
          </Button>
          <Button onClick={calculateResult} colorScheme="green">
            =
          </Button>
          <Button onClick={() => handleInput("/")} colorScheme="blue">
            /
          </Button>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
