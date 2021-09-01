import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type MyDialogProps = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Drawer({ isOpen, setIsOpen}: MyDialogProps) {
  // let [isOpen, setIsOpen] = useState(true);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        className="fixed z-30 inset-0 overflow-y-auto"
      >
        <div className="flex min-h-screen w-3/4">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            entered="opacity-30"
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="z-30 fixed inset-0 bg-black" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="z-40 inline-block w-full max-w-sm p-6 overflow-hidden text-left align-middle bg-white shadow-xl rounded-r-2xl">
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>    
  );
}