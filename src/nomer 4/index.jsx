import React, { useState, useEffect } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Input} from '@chakra-ui/react';

import jsonData from './data.json'; // Import JSON data

function UserTable() {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    setData(jsonData); // Set the data from the imported JSON
  }, []);

  const handleEdit = (user) => {
    setEditMode(true);
    setEditedUserData(user);
   };

   const handleSave = () => {
    // Implement saving the edited data logic here
    const updatedData = data.map((user) =>
    user.id === editedUserData.id ? editedUserData : user
  );
    
    // Exit edit mode after saving
    setData(updatedData);
    setEditMode(false);
    setEditedUserData({});
  };
  

  const handleDelete = (id) => {
    const updatedData = data.filter((user) => user.id !== id);
  setData(updatedData);
  };

  return (
    <Box  w={'100%'} p={2}>
      <Table colorScheme='black' variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
        {data.map((user) => (
  <Tr key={user.id}>
    <Td>
      {editMode && editedUserData.id === user.id ? (
        <Input
          value={editedUserData.name}
          onChange={(e) => setEditedUserData({ ...editedUserData, name: e.target.value })}
        />
      ) : (
        user.name
      )}
    </Td>
    <Td >
      {editMode && editedUserData.id === user.id ? (
        <Input
          value={editedUserData.username}
          onChange={(e) => setEditedUserData({ ...editedUserData, username: e.target.value })}
        />
      ) : (
        user.username
      )}
    </Td>
    <Td>
      {editMode && editedUserData.id === user.id ? (
        <Input
          value={editedUserData.email}
          onChange={(e) => setEditedUserData({ ...editedUserData, email: e.target.value })}
        />
      ) : (
        user.email
      )}
    </Td>
    <Td display={'flex'} colSpanSpan={2}>
      {editMode && editedUserData.id === user.id ? (
        <Button colorScheme="green" size="sm" onClick={handleSave}>
          Save
        </Button>
      ) : (
        <Button
          colorScheme="white"
          color={'black'}
          size="sm"
          onClick={() => handleEdit(user)}
          mr={2}
        >
          Edit
        </Button>
      )}
      <Button
        colorScheme="white"
        color={'black'}
        size="sm"
        onClick={() => handleDelete(user.id)}
      >
        Delete
      </Button>
    </Td>
  </Tr>
))}

        </Tbody>
      </Table>
    </Box>
  );
}

export default UserTable;
