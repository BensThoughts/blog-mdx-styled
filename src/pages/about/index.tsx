import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import Drawer from '@app/components/Drawer';
import { useState } from 'react';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

    <MaxWidthWrapper>
      <button 
        className="w-64 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </button>

    </MaxWidthWrapper>
    </>
  );
}