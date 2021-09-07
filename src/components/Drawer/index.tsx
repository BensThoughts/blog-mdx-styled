import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { H1 } from '@app/components/mdx';
import Button from '../Button';

type Direction = 'left' | 'right' | 'top' | 'bottom';

type MyDrawerProps = {
  title?: string,
  description?: string,
  direction?: Direction,
  children: React.ReactChild,
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Drawer({
  title = '',
  description = '',
  direction = 'left',
  children,
  isOpen,
  setIsOpen
}: MyDrawerProps) {
  // let [isOpen, setIsOpen] = useState(true);
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        className="fixed z-30 inset-0 overflow-y-auto"
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
            <Dialog.Overlay className="z-40 fixed inset-0 bg-black" />
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
            <div className="flex flex-col justify-between bg-primary z-50 w-full max-w-sm p-6 overflow-hidden text-left align-middle shadow-xl rounded-r-2xl">
                <div>
                  <Dialog.Title className="font-bold text-2xl md:text-4xl text-secondary">{title}</Dialog.Title>
                  <Dialog.Description>{description}</Dialog.Description>
                  {children}
                </div>
                <div className="self-center mt-10">
                  <Button onClick={() => setIsOpen(!isOpen)}>Close</Button>
                </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>    
  );
}