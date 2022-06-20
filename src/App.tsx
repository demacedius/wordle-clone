import { styled } from "@stitches/react";
import React from "react";
import Grid from "./Components/Grid";
import { WordleContext } from "./context/WordleContext";

const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

function App() {
  const [word, setWord] = React.useState("");

  
  const handleKeydown = (event: KeyboardEvent) => {
    const newLetter = event.key;
    console.log(event.key)
    setWord((leMotDavant) => leMotDavant + newLetter);

  }
  React.useEffect(() => {

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <WordleContext.Provider value={{ word }}>
      <Container>
        <Grid />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
