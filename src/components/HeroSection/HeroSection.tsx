import Button from '../Button/Button';

export default function HeroSection() {
  return (
    <section className='w-full h-56 md:h-[360px] relative overflow-hidden'>
      {/* 비디오 배경 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source src='/videos/hero.mp4' type='video/mp4' />
      </video>

      {/* 어두운 오버레이 */}
      <div className='absolute inset-0 bg-black/40' />

      {/* 텍스트 + 버튼 */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full gap-6'>
        <h1 className='text-2xl md:text-4xl font-bold text-center text-white leading-snug'>
          여행을 기록하고 <br />
          마음을 정리하는 작은 여행
        </h1>
        <div className='flex gap-3'>
          <Button
            variant='primaryWhite'
            size='sm'
            className='md:h-[54px] md:text-lg md:px-4 w-28 md:w-32'
          >
            기록하기
          </Button>
          <Button
            variant='outlineWhite'
            size='sm'
            className='md:h-[54px] md:text-lg md:px-4 w-28 md:w-32'
          >
            3분 명상
          </Button>
        </div>
      </div>
    </section>
  );
}
