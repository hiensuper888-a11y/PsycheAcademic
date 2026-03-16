export interface InfluenceTechnique {
  id: string;
  title: string;
  description: string;
  sourceBook: string;
  targetDemographics: {
    ageGroups: string[];
    genders: string[];
    professions: string[];
    religions: string[];
  };
  defensiveStrategy: string;
}

export const influenceTechniques: InfluenceTechnique[] = [
  {
    id: "social-proof",
    title: "Bằng chứng xã hội (Social Proof)",
    description: "Con người có xu hướng làm theo hành động của đám đông khi không chắc chắn.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["Marketing", "Sales"],
      religions: ["All"]
    },
    defensiveStrategy: "Luôn tự đặt câu hỏi: 'Tôi làm điều này vì tôi thực sự muốn, hay vì thấy người khác làm?'"
  },
  {
    id: "scarcity",
    title: "Sự khan hiếm (Scarcity)",
    description: "Tạo cảm giác cấp bách bằng cách giới hạn số lượng hoặc thời gian.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Retail", "Finance"],
      religions: ["All"]
    },
    defensiveStrategy: "Dừng lại và đánh giá giá trị thực của sản phẩm/dịch vụ thay vì bị cuốn vào nỗi sợ bỏ lỡ (FOMO)."
  },
  {
    id: "authority",
    title: "Uy quyền (Authority)",
    description: "Sử dụng danh xưng, bằng cấp hoặc vẻ ngoài chuyên gia để thuyết phục.",
    sourceBook: "48 Laws of Power - Robert Greene",
    targetDemographics: {
      ageGroups: ["Baby Boomers", "Gen X"],
      genders: ["All"],
      professions: ["Corporate", "Academic"],
      religions: ["All"]
    },
    defensiveStrategy: "Kiểm chứng thông tin độc lập và không mặc định tin tưởng chỉ vì người đó có vẻ ngoài chuyên gia."
  },
  {
    id: "liking",
    title: "Sự yêu thích (Liking)",
    description: "Mọi người có xu hướng đồng ý với những yêu cầu từ những người họ yêu thích.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Sales", "Marketing", "Customer Service", "Management"],
      religions: ["All"]
    },
    defensiveStrategy: "Tách biệt cá nhân khỏi đề xuất. Hãy tập trung vào giá trị thực của yêu cầu, thay vì mức độ yêu thích của bạn đối với người đưa ra yêu cầu."
  },
  {
    id: "reciprocity",
    title: "Sự đáp trả (Reciprocity)",
    description: "Mọi người cảm thấy có nghĩa vụ phải trả ơn. Việc trao đi thứ gì đó trước tiên sẽ thúc đẩy sự đáp trả.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Sales", "Customer Service", "Marketing", "Management"],
      religions: ["All"]
    },
    defensiveStrategy: "Nhận diện thủ thuật này. Bạn không có nghĩa vụ phải trả ơn, đặc biệt nếu món quà ban đầu là không mong muốn hoặc mang tính thao túng."
  },
  {
    id: "respect",
    title: "Sự tôn trọng (Respect)",
    description: "Mọi người có xu hướng dễ bị thuyết phục bởi những cá nhân mà họ tôn trọng và coi là có thẩm quyền.",
    sourceBook: "48 Laws of Power - Robert Greene",
    targetDemographics: {
      ageGroups: ["Baby Boomers", "Gen X"],
      genders: ["All"],
      professions: ["Corporate", "Academic"],
      religions: ["All"]
    },
    defensiveStrategy: "Xác minh chuyên môn và bằng cấp thực tế của người đó, thay vì chỉ dựa vào địa vị được cảm nhận. Tách biệt cá nhân khỏi thông điệp của họ."
  }
];
