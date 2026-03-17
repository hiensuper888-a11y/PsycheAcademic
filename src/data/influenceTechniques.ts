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
  },
  {
    id: "financial-gaslighting",
    title: "Thao túng thực tại tài chính (Financial Gaslighting)",
    description: "Khiến nạn nhân nghi ngờ trí nhớ hoặc nhận thức của họ về các thỏa thuận, chi tiêu hoặc tình trạng tài chính chung.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Millennials", "Gen X"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Luôn ghi chép lại các giao dịch tài chính và thỏa thuận bằng văn bản. Tin tưởng vào bằng chứng thực tế thay vì lời nói của đối phương."
  },
  {
    id: "love-bombing-financial",
    title: "Dội bom tình cảm bằng vật chất (Love Bombing Financial)",
    description: "Tặng những món quà đắt tiền dồn dập ngay từ đầu để tạo ra cảm giác nợ nần và nghĩa vụ phải đáp lại.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: "Cảnh giác với những món quà quá lớn so với mức độ thân thiết của mối quan hệ. Hiểu rằng quà tặng không đồng nghĩa với việc bạn phải từ bỏ quyền tự chủ."
  },
  {
    id: "expert-trap",
    title: "Bẫy chuyên gia tài chính (The Expert Trap)",
    description: "Sử dụng thuật ngữ tài chính cực kỳ phức tạp để làm nạn nhân cảm thấy kém cỏi và phải hoàn toàn dựa dẫm vào 'chuyên gia'.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Finance", "Retail"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: "Yêu cầu giải thích bằng ngôn ngữ đơn giản. Nếu họ không thể giải thích đơn giản, có thể họ đang cố tình làm khó bạn."
  },
  {
    id: "sunk-cost-emotional",
    title: "Bẫy chi phí chìm trong tình cảm (Sunk Cost Emotional)",
    description: "Nhắc nhở nạn nhân về số năm hoặc nỗ lực đã đầu tư vào mối quan hệ để ngăn họ rời bỏ, dù mối quan hệ đó đã độc hại.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Millennials", "Gen X", "Baby Boomers"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Đánh giá mối quan hệ dựa trên giá trị hiện tại và tương lai, thay vì tiếc nuối những gì đã mất trong quá khứ."
  },
  {
    id: "soulmate-illusion",
    title: "Ảo tưởng về người bạn tâm giao (Soulmate Illusion)",
    description: "Phản chiếu hoàn hảo những khao khát và giá trị sâu kín nhất của nạn nhân để tạo ra một sự kết nối tức thì và mãnh liệt.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Dành thời gian để tìm hiểu đối phương thực sự thay vì bị cuốn vào cảm giác 'định mệnh' quá sớm."
  },
  {
    id: "triangulation",
    title: "Kỹ thuật tam giác hóa (Triangulation)",
    description: "Đưa một người thứ ba vào động lực mối quan hệ để tạo ra sự ghen tuông và cạnh tranh nhằm giành lấy sự chú ý của kẻ thao túng.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Nhận diện rằng sự ghen tuông là một công cụ kiểm soát. Giao tiếp trực tiếp với các bên liên quan thay vì thông qua kẻ thao túng."
  },
  {
    id: "intermittent-reinforcement",
    title: "Củng cố gián đoạn (Intermittent Reinforcement)",
    description: "Cung cấp tình cảm hoặc phần thưởng một cách không thể đoán trước để tạo ra một chu kỳ gây nghiện trong việc tìm kiếm sự chấp thuận.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Nhận diện mô thức 'nóng - lạnh'. Đánh giá mối quan hệ dựa trên sự ổn định và tôn trọng nhất quán."
  },
  {
    id: "damsel-in-distress-financial",
    title: "Kịch bản 'Nạn nhân tài chính' (Damsel in Distress)",
    description: "Đóng vai nạn nhân của sự không may mắn về tài chính để yêu cầu các khoản vay hoặc sự hỗ trợ mà không bao giờ có ý định trả lại.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Chỉ cho vay số tiền mà bạn sẵn sàng mất. Kiểm chứng các câu chuyện về sự khó khăn trước khi hỗ trợ tài chính lớn."
  },
  {
    id: "bait-and-switch-relationship",
    title: "Mồi nhử và hoán đổi trong tình cảm (Bait and Switch)",
    description: "Thể hiện một nhân cách hoàn hảo ban đầu, sau đó từ từ bộc lộ bản chất kiểm soát hoặc lạm dụng khi nạn nhân đã cam kết.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Chú ý đến những thay đổi nhỏ trong hành vi. Đừng phớt lờ những 'cờ đỏ' (red flags) chỉ vì những ấn tượng tốt ban đầu."
  },
  {
    id: "future-faking",
    title: "Vẽ ra tương lai ảo (Future Faking)",
    description: "Lập ra những kế hoạch chi tiết cho tương lai (kết hôn, du lịch, kinh doanh) để giữ nạn nhân đầu tư vào hiện tại dù không có ý định thực hiện.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Đánh giá đối phương dựa trên hành động hiện tại thay vì những lời hứa hẹn xa vời."
  },
  {
    id: "digital-isolation",
    title: "Cô lập kỹ thuật số (Digital Isolation)",
    description: "Kiểm soát các tương tác trên mạng xã hội và dấu chân kỹ thuật số của nạn nhân để hạn chế ảnh hưởng từ bên ngoài.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Giữ quyền kiểm soát mật khẩu và tài khoản cá nhân. Duy trì các kết nối trực tuyến độc lập với đối phương."
  },
  {
    id: "inheritance-guilt",
    title: "Thao túng bằng quyền thừa kế (Inheritance Guilt)",
    description: "Sử dụng di sản gia đình hoặc quyền thừa kế như một công cụ để kiểm soát hành vi và lựa chọn của thế hệ trẻ.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Xây dựng sự độc lập tài chính. Hiểu rằng quyền tự do cá nhân quan trọng hơn các lời hứa về tài sản tương lai."
  },
  {
    id: "charity-manipulation",
    title: "Thao túng bằng lòng trắc ẩn (Charity Manipulation)",
    description: "Lợi dụng lòng vị tha của nạn nhân để kêu gọi quyên góp cho các mục đích giả tạo hoặc tự phục vụ.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Kiểm tra tính minh bạch của các tổ chức từ thiện. Đừng để cảm xúc nhất thời ép buộc việc quyên góp."
  },
  {
    id: "exclusive-club",
    title: "Bẫy 'Câu lạc bộ đặc quyền' (Exclusive Club)",
    description: "Tạo ra cảm giác thuộc về một nhóm tinh hoa yêu cầu sự hy sinh về tài chính hoặc cá nhân để duy trì vị thế.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Millennials", "Gen X"],
      genders: ["All"],
      professions: ["Management", "Finance"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: "Đánh giá giá trị thực sự của nhóm so với những gì bạn phải đánh đổi. Đừng để cái tôi bị thao túng bởi sự 'đặc quyền'."
  },
  {
    id: "induced-poverty-fear",
    title: "Gieo rắc nỗi sợ nghèo đói (Induced Poverty Fear)",
    description: "Phóng đại sự bất ổn kinh tế để ép buộc nạn nhân đưa ra các quyết định tài chính rủi ro cao hoặc bị bóc lột.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Tư bản", "Xã hội chủ nghĩa"]
    },
    defensiveStrategy: "Tìm kiếm thông tin kinh tế từ nhiều nguồn khách quan. Xây dựng quỹ dự phòng để giảm bớt nỗi sợ hãi."
  },
  {
    id: "hero-complex",
    title: "Phức cảm anh hùng (Hero Complex)",
    description: "Tự định vị mình là người duy nhất có thể cứu nạn nhân khỏi các vấn đề của họ, tạo ra sự phụ thuộc tuyệt đối.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Phát triển kỹ năng giải quyết vấn đề cá nhân. Nhận diện rằng không ai có thể là 'vị cứu tinh' duy nhất của bạn."
  },
  {
    id: "emotional-blackmail-love",
    title: "Tống tiền cảm ứng trong tình yêu (Emotional Blackmail)",
    description: "Đe dọa chấm dứt mối quan hệ hoặc tự làm hại bản thân nếu nạn nhân không tuân theo các yêu cầu.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Không nhượng bộ trước các lời đe dọa. Khuyến khích đối phương tìm kiếm sự trợ giúp chuyên môn nếu họ đe dọa tự hại."
  },
  {
    id: "shadow-influence",
    title: "Ảnh hưởng bóng tối (Shadow Influence)",
    description: "Sử dụng các gợi ý tinh tế, gián tiếp và thao túng môi trường để thay đổi hành vi của nạn nhân mà họ không hề hay biết.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Marketing", "Management"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Nâng cao sự tự nhận thức về các mô thức hành vi của bản thân. Đặt câu hỏi khi thấy mình thay đổi thói quen một cách đột ngột."
  },
  {
    id: "information-asymmetry-money",
    title: "Bất đối xứng thông tin tài chính (Information Asymmetry)",
    description: "Cố tình giữ kín hoặc làm phức tạp hóa thông tin tài chính để duy trì quyền lực trong mối quan hệ đối tác hoặc gia đình.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Finance", "Management"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Yêu cầu sự minh bạch tuyệt đối trong các vấn đề tài chính chung. Tự học các kiến thức cơ bản về quản lý tài chính."
  },
  {
    id: "legacy-trap",
    title: "Bẫy di sản (Legacy Trap)",
    description: "Gây áp lực buộc ai đó phải tuân theo một con đường hoặc sự nghiệp cụ thể để 'tôn vinh' truyền thống hoặc kỳ vọng của gia đình.",
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["Academic", "Corporate"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: "Xác định giá trị và đam mê cá nhân. Hiểu rằng cuộc đời bạn thuộc về bạn, không phải là phần mở rộng của thế hệ trước."
  }
];
