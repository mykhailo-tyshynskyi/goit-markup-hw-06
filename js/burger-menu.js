(() => {
  const refs = {
    // Додати атрибут burger-menu-open на кнопку відкриття
    openModalBtn: document.querySelector("[burger-menu-open]"),
    // Додати атрибут burger-menu-close на кнопку закриття
    closeModalBtn: document.querySelector("[burger-menu-close]"),
    // Додати атрибут burger-menu на бекдроп модалки
    modal: document.querySelector("[burger-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();