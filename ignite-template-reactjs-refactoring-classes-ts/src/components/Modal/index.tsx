import { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

export const Modal = (props: ModalProps) => {
  const { isOpen, setIsOpen, children } = props

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal >
  )
}
