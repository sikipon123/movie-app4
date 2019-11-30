import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

class ModalComp extends React.Component {
  state = {
    modal: false,
    name: "",
    img: "",
    rate: 0
  };

  handleonchangeMovie = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    return (
      <div className="addmoviemodalbody">
        <Button color="outline-danger" onClick={this.toggle} className="addmoviemodal">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmSJT-Gclar7dE-4EzhSzTQxzwaaz9gsDM9TsNMcvEKnpYwKJ0g&s" />
          <p>Add New Movie</p>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add New Movie</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              name="name"
              placeholder="Enter a Movie Name"
              onChange={this.handleonchangeMovie}
            />
            <Input
              type="text"
              name="img"
              placeholder="Enter Image Link"
              onChange={this.handleonchangeMovie}
            />
            <Input
              type="text"
              name="rate"
              placeholder="Enter rating"
              onChange={this.handleonchangeMovie}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.toggle}
              onClick={() => {
                this.toggle();
                this.props.addnewmovie({
                  name: this.state.name,
                  img: this.state.img,
                  rate: this.state.rate
                });
              }}
            >
              Save Changes
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() => {
                this.toggle();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalComp;
