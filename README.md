This is a simple Task showcasing a modal compound component.

## To use the component

simply import component

```javascript
import { Modal } from "./components/Modal";
```

create a state for managing modal visibility

```javascript
const [openModal, setOpenModal] = useState(false);
```

then use the component like so

```javascript
<Modal
  //Side note: you can include any style customizations through the classNames added to the modal component.
  className="anyRequiredClasses w-[500px] h-[400px]"
  open={openModal}
  onClose={() => {
    setOpenModal(false);
  }}
>
  <Modal.Title
    closeModal={() => {
      setOpenModal(false);
    }}
  >
    Set a title for the modal here
  </Modal.Title>
  <Modal.Content>
    place any content here, paragraphs, images, or even another component.
    <Frame />
  </Modal.Content>
</Modal>
```
