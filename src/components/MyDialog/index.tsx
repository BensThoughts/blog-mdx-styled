import { useState } from 'react';
import { Dialog } from '@headlessui/react';

type MyDialogProps = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MyDialog({ isOpen, setIsOpen}: MyDialogProps) {
  // let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <Dialog.Title>Test</Dialog.Title>
          <Dialog.Description>
            This is a test of the dialog modal.
          </Dialog.Description>
          
          <p>
            Are you sure you want to deactivate your account? All of your data will
            be permanently removed. This action cannot be undone.
          </p>
          
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </div>
      </div>
    
    
    </Dialog>
  );
}