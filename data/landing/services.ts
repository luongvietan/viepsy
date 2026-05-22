export type ServiceBlock = "mint" | "cream" | "lilac";

export type Service = {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  detail: string;
  suitableFor: string[];
  block: ServiceBlock;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "lang-nghe",
    title: "Lắng nghe tích cực",
    price: "150.000",
    duration: "30p",
    description:
      "Nơi để bạn được chia sẻ những cảm xúc, suy nghĩ hoặc những điều đang giữ trong lòng mà bạn khó, hoặc chưa chia sẻ với người khác.",
    detail:
      "Viepsy sẽ lắng nghe theo hướng nhẹ nhàng, tôn trọng và đồng hành cùng cảm xúc của bạn.",
    suitableFor: [
      "Bạn cần một người để nói chuyện.",
      "Đang cảm thấy áp lực, mệt hoặc quá tải.",
      "Muốn được lắng nghe mà không bị đánh giá.",
    ],
    block: "mint",
    featured: true,
  },
  {
    id: "dinh-huong",
    title: "Định hướng · Cá nhân hóa",
    price: "300.000",
    duration: "60p",
    description:
      "Dành cho những lúc bạn cảm thấy rối, mất hướng hoặc muốn hiểu rõ hơn về cảm xúc, hành vi hay các mối quan hệ của mình.",
    detail:
      "Viepsy sẽ cùng bạn nhìn lại vấn đề theo hướng phù hợp với chính tính cách, hoàn cảnh và nhịp sống của bạn.",
    suitableFor: [
      "Bạn đang cảm thấy mông lung hoặc khó hiểu chính mình.",
      "Muốn cải thiện cảm xúc hoặc các mối quan hệ xung quanh.",
      "Cần một góc nhìn rõ ràng và phù hợp hơn cho bản thân.",
    ],
    block: "cream",
  },
  {
    id: "tham-van",
    title: "Tham vấn chuyên sâu",
    price: "450.000",
    duration: "90p",
    description:
      "Hình thức đồng hành chuyên sâu hơn dành cho những người đang gặp khó khăn kéo dài về cảm xúc, tâm lý hoặc đời sống cá nhân.",
    detail:
      "Đây là quá trình cùng nhìn lại vấn đề một cách sâu hơn, an toàn hơn và có định hướng rõ ràng hơn cho sức khỏe tinh thần.",
    suitableFor: [
      "Bạn đang trải qua stress, lo âu hoặc khủng hoảng cảm xúc.",
      "Có những vấn đề lặp đi lặp lại khiến bản thân mệt mỏi.",
      "Muốn làm việc sâu hơn với cảm xúc và câu chuyện của chính mình.",
    ],
    block: "lilac",
  },
];
