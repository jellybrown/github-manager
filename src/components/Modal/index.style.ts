import styled from 'styled-components';

export const ModalWrapper = styled.section`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 15;
`;

export const ModalBox = styled.div`
  padding: 35px 60px;
  background: #fff;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.p`
  text-align: center;
  max-width: 230px;
  line-height: 1.3;
  margin: 30px auto;
  font-size: 15px;
`;

export const ButtonArea = styled.div`
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  width: 130px;
  padding: 20px 0;
  border-radius: 10px;
  background: #dcdcdc;
  color: #fff;
  margin-right: 20px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const OkButton = styled.button`
  width: 130px;
  padding: 20px 0;
  border-radius: 10px;
  background: #393b4a;
  color: #fff;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;
