function ErrorModal() {
  return (
    <dialog id="error_modal" className="modal">
      <form method="dialog" className="modal-box">
        An Unexpected Error has occurred. Please try searching for something different.
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default ErrorModal;
