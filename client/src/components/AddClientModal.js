import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { Modal, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { fi } from 'date-fns/locale';

const AddClientModal = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || phone === '') {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    addClient(name, email, phone);
    setEmail('');
    setName('');
    setPhone('');
    setShow(false);
  };

  return (
    <>
      <Alert show={showAlert} variant="warning">
        Please fill in all fields
      </Alert>
      <Button variant="primary" onClick={handleShow}>
        Add Client
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className="form-group mb-10">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-10">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-10">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddClientModal;
