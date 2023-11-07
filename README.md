This is a simple Task showcasing a modal compound component.

## To use the component

simply import component, create a state for managing if the component is open and closing it, then create

<!-- code block -->

```javascript
<Modal
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
