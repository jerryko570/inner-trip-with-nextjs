/**
 * 카드 컴포넌트
 * @param {Object} props - Card 컴포넌트 props
 * @param {("sm" | "md" | "lg")} [props.size="lg"] - 카드 크기 (기본값: lg)
 * @param {string} props.address - 상점 주소
 * @param {number} props.hourlyPay - 상점 시급
 * @param {React.ReactNode} [props.children] - 카드에 표시될 추가 내용 (선택사항)
 */

'use client';

import './Card.css';
import Image from 'next/image';

/* 카드 사이즈 타입 */
type CardSize = 'sm' | 'md' | 'lg';

/* 카드 컴포넌트 Props 타입 정의 */
type CardProps = {
  title: string;
  img?: string;
  address: string;
  hourlyPay: number;
  size?: CardSize;
  //children: React.ReactNode;
};

export default function Card({
  title,
  img,
  address,
  hourlyPay,
  size = 'lg',
}: CardProps) {
  return (
    <div className={`card-container card-${size}`}>
      <div className='card-img'>
        {/* 이미지 영역 */}
        {img ? (
          <Image src={img} alt={title} fill className='card-img' />
        ) : (
          <div className='card-img-bg'></div>
        )}
      </div>

      {/* 타이틀 영역 */}
      <p className='card-title pt-3'>{title}</p>

      {/* 정보 영역 */}
      <div className='pt-1'>
        <p className='card-info'>{address}</p>
      </div>

      {/* 시급 금액 영역 */}
      <p className='card-hourlyPay pt-1'>{hourlyPay.toLocaleString()}원</p>
    </div>
  );
}
