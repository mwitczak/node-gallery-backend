import React, {Component} from 'react'
import { Button, Input, Modal, Table } from 'semantic-ui-react'

class GalleryTable extends Component {
  constructor () {
    super();
    this.state = {
      addModalOpened: false,
      galleryName: null
    };
  }

  render() {
    const galleries = this.props.galleries;

    const rows = galleries.map(gallery => (
      <Table.Row>
        <Table.Cell>{gallery.id}</Table.Cell>
        <Table.Cell>{gallery.name}</Table.Cell>
      </Table.Row>
    ));

    return (
      <div>
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
                <Button floated="right" onClick={this.toggleModal.bind(this)}>{'Add'}</Button>
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
        <Modal open={this.state.addModalOpened}>
          <Modal.Header>Add new gallery</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Input onChange={(e) => this.setState({galleryName: e.target.value})} />
            </Modal.Description>
            <Button onClick={this.addGallery.bind(this)}>{'Add'}</Button>
            <Button onClick={this.toggleModal.bind(this)}>{'Close'}</Button>
          </Modal.Content>
        </Modal>
      </div>
    );
  }

  addGallery() {
    this.props.addGallery({name: this.state.galleryName});
    this.state.galleryName = null;
    this.state.addModalOpened = false;
    this.setState(this.state);
  }

  toggleModal() {
    this.state.addModalOpened = !this.state.addModalOpened;
    this.setState(this.state);
  }
}

export default GalleryTable;