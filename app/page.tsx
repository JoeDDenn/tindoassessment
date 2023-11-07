'use client'

import { useState } from 'react';

import Modal from './components/Modal'
import Form from './components/Form';
import Frame from './components/Frame';
import ModalOpen from './components/ModalOpen';

export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-9">
      <div className=" shadow-lg p-4">
        <h1 className="text-5xl font-bold p-2 m-2">Tindo Assessment</h1>
        <div className="flex flex-row space-x-4 p-4 rounded-lg border-2 border-gray-400 shadow-lg">
          <div className="">
            <ModalOpen setOpenModal={setOpenModal}>
              launch iframe Modal
            </ModalOpen>

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
            <ModalOpen setOpenModal={setOpenForm}>
              launch form Modal
            </ModalOpen>

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
      </div>
    </main>
  )
}
