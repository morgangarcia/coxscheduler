const modal = (state) => {
  return {
      show: state.modalReducer.modal.showModal,
      time: state.modalReducer.modal.time,
      index: state.modalReducer.modal.index,
      name: state.modalReducer.modal.name,
      phone: state.modalReducer.modal.phone,
      reserved: state.modalReducer.modal.reserved
  }
};

export default modal;
