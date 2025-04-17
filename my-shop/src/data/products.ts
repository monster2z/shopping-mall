export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "편안한 티셔츠",
      price: 19900,
      description: "100% 면 소재로 만든 편안한 티셔츠입니다.",
      image: "https://picsum.photos/300/400",
      category: "의류"
    },
    {
      id: 2,
      name: "슬림 청바지",
      price: 39900,
      description: "모던한 디자인의 슬림핏 청바지입니다.",
      image: "https://picsum.photos/300/400",
      category: "의류"
    },
    {
      id: 3,
      name: "캐주얼 모자",
      price: 12900,
      description: "어떤 옷에도 잘 어울리는 기본 모자입니다.",
      image: "https://picsum.photos/300/400",
      category: "액세서리"
    },
    {
      id: 4,
      name: "운동화",
      price: 59900,
      description: "편안한 착용감의 스포츠 운동화입니다.",
      image: "https://picsum.photos/300/400",
      category: "신발"
    },
    {
      id: 5,
      name: "백팩",
      price: 49900,
      description: "내구성이 좋은 다용도 백팩입니다.",
      image: "https://picsum.photos/300/400",
      category: "가방"
    }
  ];