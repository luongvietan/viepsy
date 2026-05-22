export const coreValues = [
  {
    title: "Lắng nghe tích cực",
    description:
      "Viepsy tin rằng mỗi cảm xúc đều xứng đáng được lắng nghe và tôn trọng, dù là vui, buồn, áp lực hay những điều khó gọi tên.",
  },
  {
    title: "Đời thường & gần gũi",
    description:
      "Tâm lý không phải điều xa vời hay chỉ xuất hiện khi có vấn đề nghiêm trọng. Viepsy lựa chọn cách tiếp cận nhẹ nhàng, dễ hiểu và gắn với đời sống hằng ngày.",
  },
  {
    title: "Đồng hành cá nhân hóa",
    description:
      "Mỗi người có trải nghiệm, cảm xúc và nhịp sống khác nhau. Viepsy hướng đến sự đồng hành phù hợp với từng cá nhân thay vì áp dụng một khuôn mẫu chung.",
  },
  {
    title: "Không gian an toàn & bảo mật",
    description:
      "Viepsy mong muốn tạo ra một không gian nơi mọi người có thể chia sẻ cảm xúc và câu chuyện của mình một cách an toàn, riêng tư và được tôn trọng.",
  },
  {
    title: "Cảm, rồi hiểu",
    description:
      "Tin rằng đôi khi, chỉ cần được nhìn thấy và hiểu đúng cảm xúc của mình, con người đã có thể nhẹ hơn một chút trong cuộc sống.",
  },
] as const;

export type AudienceItem = {
  title: string;
  description: string;
  icon: "anxiety" | "burnout" | "self-esteem" | "transitions" | "relationships" | "stuck";
};

export const audienceItems: readonly AudienceItem[] = [
  {
    title: "Lo lắng & Căng thẳng",
    description:
      "Khi lo âu, căng thẳng hoặc khó gọi tên cảm xúc trở thành thói quen hàng ngày và khiến bạn mệt mỏi.",
    icon: "anxiety",
  },
  {
    title: "Kiệt sức cảm xúc",
    description:
      "Khi áp lực công việc, học tập hoặc cuộc sống khiến bạn cảm thấy quá tải và cạn kiệt năng lượng.",
    icon: "burnout",
  },
  {
    title: "Thiếu tự tin",
    description:
      "Khi bạn muốn hiểu rõ hơn về bản thân và xây dựng lòng tin vào chính mình một cách bền vững.",
    icon: "self-esteem",
  },
  {
    title: "Chuyển giao cuộc sống",
    description:
      "Khi đang trải qua những thay đổi lớn và cần sự định hướng, hỗ trợ tinh thần phù hợp với bản thân.",
    icon: "transitions",
  },
  {
    title: "Mối quan hệ & Ranh giới",
    description:
      "Khi bạn muốn cải thiện các mối quan hệ cá nhân và học cách đặt ranh giới lành mạnh.",
    icon: "relationships",
  },
  {
    title: "Cảm giác bế tắc",
    description:
      "Khi bạn cần được lắng nghe, chia sẻ và đồng hành một cách chân thành trong những lúc khó khăn.",
    icon: "stuck",
  },
] as const;
export const miniHighlights = [
  "Lắng nghe chân thành",
  "Cá nhân hóa",
  "Không gian an toàn",
  "Cảm, rồi hiểu!",
] as const;
