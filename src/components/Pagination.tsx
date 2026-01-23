/**
 * @param {PaginationProps} props - 컴포넌트 props
 * @param {number} props.currentPage - 현재 페이지 번호
 * @param {number} props.totalPages - 전체 페이지 개수
 * @param {function} props.onPageChange - 페이지 변경 콜백 함수
 */

import Image from 'next/image';
import PrevArrow from '@/assets/icons/arrow-prev.svg';
import NextArrow from '@/assets/icons/arrow-next.svg';
import './Pagination.css';
import clsx from 'clsx';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='pagination-container'>
      {/* 이전 페이지 버튼 */}
      <button
        type='button'
        className={clsx(
          'pagination-arrow-icon',
          currentPage === 1 && 'pagination-item-disabled',
        )}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image src={PrevArrow} alt='이전' width={20} height={20} />
      </button>

      {/* 페이지 번호 목록 */}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          type='button'
          onClick={() => onPageChange(pageNumber)}
          className={clsx(
            'pagination-item',
            pageNumber === currentPage && 'pagination-item-active',
          )}
        >
          {pageNumber}
        </button>
      ))}

      {/* 다음 페이지 버튼 */}
      <button
        type='button'
        className={clsx(
          'pagination-arrow-icon',
          currentPage === totalPages && 'pagination-item-disabled',
        )}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image src={NextArrow} alt='다음' width={20} height={20} />
      </button>
    </div>
  );
}
