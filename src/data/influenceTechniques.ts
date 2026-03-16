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
    politicalSystems: string[];
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
      religions: ["All"],
      politicalSystems: ["All"]
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
      religions: ["All"],
      politicalSystems: ["All"]
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
      religions: ["All"],
      politicalSystems: ["All"]
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
      religions: ["All"],
      politicalSystems: ["All"]
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
      religions: ["All"],
      politicalSystems: ["All"]
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
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Xác minh chuyên môn và bằng cấp thực tế của người đó, thay vì chỉ dựa vào địa vị được cảm nhận. Tách biệt cá nhân khỏi thông điệp của họ."
  },
  {
    id: "guilt-manipulation",
    title: "Thao túng bằng cảm giác tội lỗi",
    description: "Lợi dụng cảm giác tội lỗi hoặc sự sợ hãi về sự trừng phạt của đấng tối cao.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["Thiên chúa giáo", "Do thái giáo", "Hồi giáo"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Nhận diện sự thao túng cảm xúc. Trả lời bằng lý trí và không để cảm giác tội lỗi chi phối quyết định."
  },
  {
    id: "fear-of-missing-out-capitalism",
    title: "Thao túng bằng nỗi sợ bị tụt hậu",
    description: "Lợi dụng nỗi sợ thua kém về tài chính để thúc đẩy sự tham lam và cạnh tranh không lành mạnh.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: "Tự đánh giá nhu cầu thực tế và không để nỗi sợ bị tụt hậu ép buộc quyết định tiêu dùng."
  },
  {
    id: "collective-conformity",
    title: "Thao túng bằng sự đồng thuận tập thể",
    description: "Lợi dụng tinh thần tập thể, sự sợ hãi bị cô lập khỏi cộng đồng để ép buộc sự đồng thuận.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Xã hội chủ nghĩa"]
    },
    defensiveStrategy: "Giữ vững quan điểm cá nhân và không để áp lực đồng trang lứa ép buộc phải đồng thuận."
  },
  {
    id: "spiritual-bypassing",
    title: "Thao túng tâm linh (Spiritual Bypassing)",
    description: "Lợi dụng giáo lý về nghiệp quả hoặc sự buông bỏ để ép buộc nạn nhân chấp nhận sự áp bức.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["Phật giáo", "Đạo giáo"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Phân biệt giữa sự buông bỏ lành mạnh và việc trốn tránh thực tại. Tỉnh táo trước những kẻ nhân danh tâm linh để trục lợi."
  },
  {
    id: "appeal-to-tradition",
    title: "Lợi dụng truyền thống (Appeal to Tradition)",
    description: "Lợi dụng sự tôn trọng truyền thống, lòng trung thành để che đậy các lợi ích nhóm.",
    sourceBook: "48 Laws of Power - Robert Greene",
    targetDemographics: {
      ageGroups: ["Baby Boomers", "Gen X"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Quân chủ lập hiến"]
    },
    defensiveStrategy: "Phân tích giá trị thực tế của truyền thống thay vì mù quáng tuân theo."
  },
  {
    id: "fear-based-loyalty",
    title: "Thao túng bằng sự sợ hãi",
    description: "Lợi dụng sự sợ hãi cái chết, sự bất ổn để ép buộc sự trung thành tuyệt đối.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Phiến quân/Loạn lạc"]
    },
    defensiveStrategy: "Tìm kiếm sự an toàn và hỗ trợ từ các nguồn tin cậy thay vì bị thao túng bởi sự sợ hãi."
  },
  {
    id: "gaslighting-political",
    title: "Thao túng thực tại (Gaslighting) trong chính trị",
    description: "Phủ nhận sự thật hiển nhiên, khiến nạn nhân nghi ngờ trí nhớ và nhận thức của bản thân để củng cố quyền lực.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Xã hội chủ nghĩa", "Quân chủ lập hiến"]
    },
    defensiveStrategy: "Ghi chép lại sự kiện, tin tưởng vào trực giác và bằng chứng khách quan thay vì lời nói của kẻ thao túng."
  },
  {
    id: "consumerist-shaming",
    title: "Thao túng bằng sự xấu hổ tiêu dùng",
    description: "Tạo ra cảm giác thấp kém nếu không sở hữu sản phẩm/dịch vụ cụ thể, ép buộc người dùng phải mua để khẳng định đẳng cấp.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: "Tách biệt giá trị bản thân khỏi tài sản vật chất. Nhận diện các thông điệp quảng cáo đánh vào sự tự ti."
  },
  {
    id: "nostalgia-manipulation",
    title: "Thao túng bằng sự hoài niệm (Nostalgia)",
    description: "Lợi dụng ký ức đẹp đẽ về quá khứ để tạo sự tin tưởng và ép buộc hành vi hiện tại.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Baby Boomers", "Gen X"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Nhận diện rằng quá khứ không phải lúc nào cũng tốt đẹp hơn hiện tại. Đánh giá quyết định dựa trên thực tế hiện tại."
  },
  {
    id: "jargon-overload",
    title: "Thao túng bằng ngôn ngữ kỹ thuật (Jargon Overload)",
    description: "Sử dụng thuật ngữ chuyên môn phức tạp để làm nạn nhân cảm thấy kém cỏi và buộc phải đồng ý.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Kỹ thuật", "Y tế", "Giáo dục"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Yêu cầu giải thích bằng ngôn ngữ đơn giản. Không ngại thừa nhận nếu không hiểu."
  },
  {
    id: "community-pressure",
    title: "Thao túng bằng áp lực cộng đồng",
    description: "Lợi dụng sự gắn kết chặt chẽ trong cộng đồng tôn giáo để ép buộc sự tuân thủ.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["Hồi giáo", "Do thái giáo"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Giữ vững ranh giới cá nhân. Hiểu rằng sự thuộc về cộng đồng không đồng nghĩa với việc phải từ bỏ chính kiến."
  },
  {
    id: "nationalism-manipulation",
    title: "Thao túng bằng chủ nghĩa dân tộc",
    description: "Lợi dụng lòng yêu nước để ép buộc sự trung thành và đồng thuận với các chính sách.",
    sourceBook: "48 Laws of Power - Robert Greene",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Xã hội chủ nghĩa", "Tư bản"]
    },
    defensiveStrategy: "Phân biệt giữa lòng yêu nước chân chính và việc bị lợi dụng bởi các mục đích chính trị."
  },
  {
    id: "guilt-tripping",
    title: "Thao túng bằng cảm giác tội lỗi (Guilt Tripping)",
    description: "Gây áp lực tâm lý bằng cách khiến nạn nhân cảm thấy mình là nguyên nhân gây ra nỗi đau hoặc sự thất vọng của kẻ thao túng.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Nhận diện hành vi thao túng. Thiết lập ranh giới cá nhân và không chịu trách nhiệm cho cảm xúc của người khác."
  },
  {
    id: "love-bombing",
    title: "Thao túng bằng sự quan tâm thái quá (Love Bombing)",
    description: "Tấn công nạn nhân bằng sự quan tâm, khen ngợi và tình cảm dồn dập để tạo sự phụ thuộc.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Giữ sự tỉnh táo trong các mối quan hệ mới. Nếu mọi thứ tiến triển quá nhanh, hãy chậm lại và quan sát."
  },
  {
    id: "isolation",
    title: "Thao túng bằng sự cô lập (Isolation)",
    description: "Tách biệt nạn nhân khỏi gia đình, bạn bè và các nguồn hỗ trợ để họ chỉ còn phụ thuộc vào kẻ thao túng.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Duy trì các mối quan hệ xã hội lành mạnh. Cảnh giác khi ai đó cố gắng kiểm soát các mối quan hệ của bạn."
  },
  {
    id: "flattery",
    title: "Thao túng bằng sự khen ngợi giả tạo (Flattery)",
    description: "Sử dụng những lời khen ngợi không chân thành để làm nạn nhân mất cảnh giác và dễ dàng đồng ý với yêu cầu.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Tỉnh táo trước những lời khen quá mức. Đánh giá xem lời khen có dựa trên thực tế hay không."
  },
  {
    id: "foot-in-the-door",
    title: "Thao túng bằng yêu cầu nhỏ (Foot-in-the-door)",
    description: "Bắt đầu bằng một yêu cầu nhỏ mà nạn nhân dễ dàng đồng ý, sau đó tăng dần mức độ yêu cầu lên.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Sales", "Marketing"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Nhận diện rằng việc đồng ý với yêu cầu nhỏ không có nghĩa là bạn phải đồng ý với yêu cầu lớn hơn sau đó."
  },
  {
    id: "door-in-the-face",
    title: "Thao túng bằng sự từ chối (Door-in-the-face)",
    description: "Đưa ra một yêu cầu quá lớn để bị từ chối, sau đó đưa ra yêu cầu nhỏ hơn (thực tế là mục tiêu chính) để nạn nhân cảm thấy cần phải nhượng bộ.",
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Sales", "Negotiation"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Đánh giá từng yêu cầu một cách độc lập. Đừng để cảm giác tội lỗi khi từ chối yêu cầu đầu tiên chi phối quyết định của bạn."
  },
  {
    id: "anchoring",
    title: "Thao túng bằng điểm neo (Anchoring)",
    description: "Đưa ra một con số hoặc thông tin ban đầu (điểm neo) để làm cơ sở so sánh, khiến các con số sau đó trông có vẻ hợp lý hơn.",
    sourceBook: "Thinking, Fast and Slow - Daniel Kahneman",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Finance", "Retail"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: "Tự nghiên cứu giá trị thực tế của sản phẩm/dịch vụ thay vì dựa vào con số ban đầu được đưa ra."
  }
];
