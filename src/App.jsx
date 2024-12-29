import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <button className="border-2 rounded-full p-2" onClick={handleClose}>
        X
      </button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <button
        className="border-2 bg-slate-500 rounded-md px-4 py-1.5 text-white active:translate-y-0.5 transition-all"
        onClick={handleClick}
      >
        show modal
      </button>
      {showModal && modal}
    </div>
  );
}

export default App;
