import React from 'react'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'

const GalleryTable = ({galleries}) => {
  const rows = galleries.map(gallery => (
    <Table.Row>
      <Table.Cell>{gallery.id}</Table.Cell>
      <Table.Cell>{gallery.name}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='2'>
            <h1>{'Galleries'}</h1>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell colSpan="2">
            {galleries.length}{' Item(s)'}
            <Button floated="right">{'Add'}</Button>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Gallery</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows}
      </Table.Body>
    </Table>
  )
};

export default GalleryTable;