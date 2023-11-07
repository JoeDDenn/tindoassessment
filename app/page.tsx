'use client'

import Form from './components/Form';
import Frame from './components/Frame';
import Modal from './components/Modal'

function onClick(event: any) {
  const modal = document.querySelector('.modal') as HTMLDialogElement
  if (event.target === modal) {
    modal.close();
  }
}

function launchModal(selector: string) {
  const modal = document.querySelector(selector) as HTMLDialogElement
  modal.addEventListener("click", onClick);
  modal.showModal()
}

export default function Home() {
  return (
      <main className="flex h-screen flex-col items-center justify-center space-y-9">
        <h1 className="text-5xl font-bold">Tindo Assessment</h1>
        <div>
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => { launchModal(".SomeModal") }}>
            launch modal
          </button>

          <Modal className='SomeModal w-[500px] h-[400px]'>
            <Modal.Title>
              Modal Title
            </Modal.Title>
            <Modal.Content>
              <Frame />
            </Modal.Content>
          </Modal>
        </div>
      </main>
  )
}
