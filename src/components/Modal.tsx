/**
 * @param {Object} props - Modal 컴포넌트 props
 * @param {string} props.title - 모달 타이틀 텍스트
 * @param {string} props.btnText - 확인 버튼 텍스트 (오른쪽: primary 스타일)
 * @param {string} [props.cancelText="취소"] - 취소 버튼 텍스트 (왼쪽: outline 스타일, 기본값: "취소")
 * @param {React.ReactNode} props.children - 모달 본문 내용
 * @param {("one-btn" | "two-btn")} [props.type="one-btn"] - 버튼 개수 (기본값: "one-btn")
 */

import Button from './Button/Button';
import './Modal.css';

type ModalProps = {
  title: string;
  btnText: string;
  cancelText?: string;
  children?: React.ReactNode;
  type?: 'one-btn' | 'two-btn';
};

export default function Modal({
  title,
  btnText,
  cancelText = '취소',
  children,
  type = 'one-btn',
}: ModalProps) {
  return (
    <div className='modal-dim'>
      <div className='modal-container'>
        <div className='modal-content'>
          <p className='modal-title'>{title}</p>
          {children}

          {/* 버튼 영역 */}
          {type === 'one-btn' ? (
            <div className='one-btn'>
              <Button variant='primary' size='md' fullWidth>
                {' '}
                {btnText}{' '}
              </Button>
            </div>
          ) : (
            <div className='two-btn'>
              <Button variant='outline' size='md' className='flex-1'>
                {' '}
                {cancelText}{' '}
              </Button>
              <Button variant='primary' size='md' className='flex-1'>
                {' '}
                {btnText}{' '}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
