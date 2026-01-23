import Card from './Card';
import './CardList.css';

/**
 * @param {Object} props - CardList 컴포넌트 props
 * @param {CardData[]} [props.cards=defaultCardData] - 표시할 카드 데이터 배열 (기본값: defaultCardData)
 * @param {("sm" | "md" | "lg")} [props.cardSize="lg"] - 카드 크기 (기본값: "lg")
 */

/* 카드 데이터 타입 정의 */
type CardData = {
  id: number;
  title: string;
  img?: string;
  address: string;
  hourlyPay: number;
};

/* 더미 카드 데이터 */
const cardData: CardData[] = [
  {
    id: 1,
    title: 'Jerry Coffee',
    address: '경기도 수동면',
    hourlyPay: 17000,
  },
  {
    id: 2,
    title: '헤르몽 Cafe',
    address: '서울 강남구',
    hourlyPay: 15000,
  },
  {
    id: 3,
    title: '카페 오늘의온도',
    address: '부산 수영구',
    hourlyPay: 18000,
  },
  {
    id: 4,
    title: '포레스트 브루잉',
    address: '강원도 평창군',
    hourlyPay: 20000,
  },
  {
    id: 5,
    title: '로스터리 마마',
    address: '제주 서귀포시',
    hourlyPay: 16000,
  },
];

/* 카드 리스트 컴포넌트 */
export default function CardList() {
  return (
    <div className='card-grid'>
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          img={card.img}
          address={card.address}
          hourlyPay={card.hourlyPay}
          size='lg'
        />
      ))}
    </div>
  );
}
