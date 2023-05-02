import * as React from 'react';
import {Note} from "../Models/note.model"
import Notes from './Notes';
import { JsxElement } from 'typescript';
import { Box, Text } from '@chakra-ui/react';

interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({notes, setNotes}) => {

    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const renderNotes = ():JSX.Element[] => {
       return notes.map(note =>{
            return <Notes key={ note.id } note={note} handleDelete={handleDelete}/>
        })
    }
  return (
  <>
    <Box>
        <Text fontWeight={'bold'} fontSize={'2xl'} ml='20px'>Notes</Text>
        { renderNotes() }
    </Box>
  </>
  );
};

export default NotesList;
