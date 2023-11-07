import { HtmlHTMLAttributes } from "react"

function CloseModal() {
    const modal = document.querySelector('.modal') as HTMLDialogElement
    modal.close()
}


function Modal({ children, className, ...props }: HtmlHTMLAttributes<HTMLDialogElement>) {

    return (
        <dialog className={`modal fixed z-10 inset-0 rounded-lg top-[50%] transform -translate-y-1/2 left-0 overflow-y-auto min-w-fit-content min-h-fit-content ${className}`} {...props}>
            <div className="flex flex-col items-center justify-center space-y-9 ">
                {children}
            </div>
        </dialog>
    )
}

export default Modal
Modal.Content = ModalContent
Modal.Title = ModalTitle

function ModalTitle({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
    return (
        <div className="flex justify-between w-full border-b-2 border-gray-200">
            <h1 className={`text-2xl font-bold w-full  pb-2 m-2 p-4
         ${className}`} {...props}>
                {children}
            </h1>
            <button className="text-2xl font-bold w-10 h-10 rounded-lg  m-3 p-2 hover:text-gray-500" onClick={CloseModal}>
                <span className="text-2xl font-bold">X</span>
            </button>
        </div>

    )
}

function ModalContent({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`} {...props} >
            {children}
        </div>
    )
}

function ModalFooter({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`flex justify-end w-full border-t-2 border-gray-200 ${className}`} {...props}>
            {children}
        </div>
    )
}