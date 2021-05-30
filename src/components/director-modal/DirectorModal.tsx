import './director-modal-styles.css';

import { Button, Modal } from 'react-bootstrap';
import { IDirectorModalProps } from '../../interfaces/director-data';

const DirectorModal: React.FC<IDirectorModalProps> = (props) => {
  const { directorData, showDirectorModal, toggleModal } = props;
  const { directorName, info, imageUrl } = directorData;

  return (
    <Modal show={showDirectorModal} keyboard={true} onHide={toggleModal} centered className="director-modal">
      <Modal.Header closeButton>
        <Modal.Title data-testid="director-modal__director-name">{directorName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl} alt="" className="director-modal__director-image" data-testid="director-modal__director-image" />
        <p className="director-modal__director-text" data-testid="director-modal__director-text">
          {info}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal} data-testid="director-modal__close-button">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DirectorModal;
