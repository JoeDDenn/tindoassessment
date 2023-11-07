function Form() {
    function closeForm() {
        
        const Modal = document.querySelector('.formModal') as HTMLDialogElement
        Modal.close()
    }

    return (
        <form className="flex flex-col space-y-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <div className="flex flex-row space-x-4">
                <button type="submit" className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={closeForm}>Login</button>
                <button onClick={closeForm} className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </div>
        </form>
    )
}

export default Form