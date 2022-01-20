import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Button from '@app/components/Button';

type DrawerProps = {
  title?: string,
  description?: string,
  children: React.ReactNode,
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuDrawer({
  title = '',
  description = '',
  children,
  isOpen,
  setIsOpen,
}: DrawerProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        className="overflow-y-auto fixed inset-0 z-50"
      >
        <div className="flex w-3/4">
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
            <Dialog.Overlay className="fixed inset-0 z-40 bg-black" />
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
            <div className="flex overflow-hidden z-50 flex-col justify-between p-6 w-full max-w-sm text-left align-middle bg-opacity-70 rounded-br-md shadow-xl backdrop-filter backdrop-blur-sm bg-app-bg">
              <div>
                <Dialog.Title className="text-2xl font-bold md:text-4xl text-secondary">{title}</Dialog.Title>
                <Dialog.Description>{description}</Dialog.Description>
                {children}
              </div>
              <div className="self-center mt-10">
                <Button className="bg-primary" onClick={() => setIsOpen(!isOpen)}>Close</Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
