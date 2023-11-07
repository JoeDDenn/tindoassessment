interface FormProps {
    closeModal: () => void
}

function Form({ closeModal }: FormProps) {
    const closeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        closeModal()
    }

    return (
        <form className="flex flex-col space-y-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <div className="flex flex-row space-x-4">
                <button onClick={closeForm} className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" >Login</button>
                <button onClick={closeForm} className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </div>
        </form>
    )
}

export default Form