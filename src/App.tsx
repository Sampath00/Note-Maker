import React, {useState} from "react"
import {Note} from "./Models/note.model"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import Header from "./Components/Header";
import NotesList from "./Components/NotesList";
import CreateNotes from "./Components/CreateNotes";

function App()
{
  const[notes,setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meeting",
    text: "Schedule meeting with UI/UX Team Schedule meeting with UI/UX Team Schedule meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);


  return(
    <ChakraProvider theme={theme}>
       <Header></Header>
       <Box m={2} ml={10} mr={10}>
          <NotesList notes={notes} setNotes={setNotes}></NotesList>
       </Box>
       <Box m={2} ml={10} mr={10}>
          <CreateNotes notes={notes} setNotes={setNotes}/>
       </Box>
  </ChakraProvider>
  );

}

export default App;
