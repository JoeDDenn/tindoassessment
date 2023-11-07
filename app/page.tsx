'use client'

import { useState } from 'react';

import Modal from './components/Modal'
import Form from './components/Form';
import Frame from './components/Frame';

export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-9">
      <h1 className="text-5xl font-bold">Tindo Assessment</h1>
      <div className="flex flex-row space-x-4 bg-gray-200 p-4 rounded-lg border-2 border-gray-400 shadow-lg">
        <div className="">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => { setOpenModal(true) }}>
            launch modal
          </button>

          <Modal className='SomeModal w-[500px] h-[400px]' open={openModal} onClose={() => { setOpenModal(false) }}>
            <Modal.Title closeModal={() => { setOpenModal(false) }}>
              Iframe Modal
            </Modal.Title>
            <Modal.Content>
              <Frame />
            </Modal.Content>
          </Modal>
        </div>
        <div>
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => { setOpenForm(true) }}>
            launch form
          </button>

          <Modal className='SomeModal w-[500px] h-[400px]' open={openForm} onClose={() => { setOpenForm(false) }}>
            <Modal.Title closeModal={() => { setOpenForm(false) }}>
              Simple Form
            </Modal.Title>
            <Modal.Content>
              <Form closeModal={() => { setOpenForm(false) }} />
            </Modal.Content>
          </Modal>
        </div>



      </div>


    </main>
  )
}
