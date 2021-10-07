import { useEffect, useState } from 'react';

const useModal = (initialState = false) => {
  const [opened, setOpened] = useState(initialState);

  useEffect(() => {
    if (opened) document.body.classList.add('lock');
    else document.body.classList.remove('lock');
  }, [opened]);

  const openModal = () => {
    setOpened(true);
  };

  const closeModal = () => {
    setOpened(false);
  };

  return { opened, openModal, closeModal };
};

export default useModal;
