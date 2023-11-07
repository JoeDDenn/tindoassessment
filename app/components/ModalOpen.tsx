import React from 'react'

interface ModalOpenProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

function ModalOpen({ setOpenModal, children }: ModalOpenProps) {
    return (
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => { setOpenModal(true) }}>
            {children}
        </button>
    )
}

export default ModalOpen