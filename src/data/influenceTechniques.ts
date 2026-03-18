import { LocalizedString } from "./psychologyData";

export interface InfluenceTechnique {
  id: string;
  title: string | LocalizedString;
  description: string | LocalizedString;
  sourceBook?: string;
  targetDemographics: {
    ageGroups: string[];
    genders: string[];
    professions: string[];
    religions: string[];
    politicalSystems: string[];
    interests?: string[];
  };
  defensiveStrategy: string | LocalizedString;
}

export const influenceTechniques: InfluenceTechnique[] = [
  {
    id: "social-proof",
    title: {
      vi: "Bằng chứng xã hội",
      en: "Social Proof",
      zh: "社会认同"
    },
    description: {
      vi: "Con người có xu hướng làm theo hành động của đám đông khi không chắc chắn.",
      en: "People tend to follow the crowd's actions when uncertain.",
      zh: "在不确定时，人们倾向于跟随大众的行为。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["Marketing", "Sales"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Luôn tự đặt câu hỏi: 'Tôi làm điều này vì tôi thực sự muốn, hay vì thấy người khác làm?'",
      en: "Always ask yourself: 'Am I doing this because I really want to, or because I see others doing it?'",
      zh: "总是问自己：'我这样做是因为我真的想做，还是因为我看到别人在做？'"
    }
  },
  {
    id: "scarcity",
    title: {
      vi: "Sự khan hiếm",
      en: "Scarcity",
      zh: "稀缺性"
    },
    description: {
      vi: "Tạo cảm giác cấp bách bằng cách giới hạn số lượng hoặc thời gian.",
      en: "Creating a sense of urgency by limiting quantity or time.",
      zh: "通过限制数量或时间来创造紧迫感。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Retail", "Finance"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Dừng lại và đánh giá giá trị thực của sản phẩm/dịch vụ thay vì bị cuốn vào nỗi sợ bỏ lỡ (FOMO).",
      en: "Stop and evaluate the true value of the product/service instead of being caught in FOMO.",
      zh: "停下来评估产品/服务的真实价值，而不是陷入错失恐惧症（FOMO）。"
    }
  },
  {
    id: "authority",
    title: {
      vi: "Uy quyền (Authority)",
      en: "Authority",
      zh: "权威"
    },
    description: {
      vi: "Sử dụng danh xưng, bằng cấp hoặc vẻ ngoài chuyên gia để thuyết phục.",
      en: "Using titles, degrees, or expert appearance to persuade.",
      zh: "使用头衔、学位或专家外表来劝说。"
    },
    sourceBook: "48 Laws of Power - Robert Greene",
    targetDemographics: {
      ageGroups: ["Baby Boomers", "Gen X"],
      genders: ["All"],
      professions: ["Corporate", "Academic"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Kiểm chứng thông tin độc lập và không mặc định tin tưởng chỉ vì người đó có vẻ ngoài chuyên gia.",
      en: "Verify information independently and don't default to trust just because someone looks like an expert.",
      zh: "独立验证信息，不要仅仅因为某人看起来像专家就默认信任。"
    }
  },
  {
    id: "liking",
    title: {
      vi: "Sự yêu thích (Liking)",
      en: "Liking",
      zh: "喜好"
    },
    description: {
      vi: "Mọi người có xu hướng đồng ý với những yêu cầu từ những người họ yêu thích.",
      en: "People tend to agree with requests from people they like.",
      zh: "人们倾向于同意他们喜欢的人提出的请求。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Sales", "Marketing", "Customer Service", "Management"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Tách biệt cá nhân khỏi đề xuất. Hãy tập trung vào giá trị thực của yêu cầu, thay vì mức độ yêu thích của bạn đối với người đưa ra yêu cầu.",
      en: "Separate the person from the proposal. Focus on the true value of the request rather than your liking for the person.",
      zh: "将人与提议分开。关注请求的真实价值，而不是你对那个人的喜爱程度。"
    }
  },
  {
    id: "reciprocity",
    title: {
      vi: "Sự đáp trả (Reciprocity)",
      en: "Reciprocity",
      zh: "互惠"
    },
    description: {
      vi: "Mọi người cảm thấy có nghĩa vụ phải trả ơn. Việc trao đi thứ gì đó trước tiên sẽ thúc đẩy sự đáp trả.",
      en: "People feel obligated to return favors. Giving something first promotes reciprocity.",
      zh: "人们觉得有义务回报恩惠。先给予一些东西会促进互惠。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Sales", "Customer Service", "Marketing", "Management"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Nhận diện thủ thuật này. Bạn không có nghĩa vụ phải trả ơn, đặc biệt nếu món quà ban đầu là không mong muốn hoặc mang tính thao túng.",
      en: "Recognize this tactic. You are not obligated to return a favor, especially if the initial gift was unwanted or manipulative.",
      zh: "识别这种策略。你没有义务回报恩惠，特别是如果最初的礼物是不需要的或具有操纵性的。"
    }
  },
  {
    id: "respect",
    title: {
      vi: "Sự tôn trọng (Respect)",
      en: "Respect",
      zh: "尊重"
    },
    description: {
      vi: "Mọi người có xu hướng dễ bị thuyết phục bởi những cá nhân mà họ tôn trọng và coi là có thẩm quyền.",
      en: "People tend to be easily persuaded by individuals they respect and perceive as authoritative.",
      zh: "人们倾向于容易被他们尊重并认为具有权威的人所说服。"
    },
    sourceBook: "48 Laws of Power - Robert Greene",
    targetDemographics: {
      ageGroups: ["Baby Boomers", "Gen X"],
      genders: ["All"],
      professions: ["Corporate", "Academic"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Xác minh chuyên môn và bằng cấp thực tế của người đó, thay vì chỉ dựa vào địa vị được cảm nhận. Tách biệt cá nhân khỏi thông điệp của họ.",
      en: "Verify the person's actual expertise and credentials, rather than relying solely on perceived status. Separate the individual from their message.",
      zh: "验证该人的实际专业知识和资历，而不是仅仅依靠感知到的地位。将个人与其信息分开。"
    }
  },
  {
    id: "guilt-manipulation",
    title: {
      vi: "Thao túng bằng cảm giác tội lỗi",
      en: "Guilt Manipulation",
      zh: "内疚操纵"
    },
    description: {
      vi: "Lợi dụng cảm giác tội lỗi hoặc sự sợ hãi về sự trừng phạt của đấng tối cao.",
      en: "Exploiting guilt or fear of divine punishment.",
      zh: "利用内疚感或对神圣惩罚的恐惧。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["Thiên chúa giáo", "Do thái giáo", "Hồi giáo"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Nhận diện sự thao túng cảm xúc. Trả lời bằng lý trí và không để cảm giác tội lỗi chi phối quyết định.",
      en: "Identify emotional manipulation. Respond rationally and don't let guilt dominate your decisions.",
      zh: "识别情绪操纵。理性回应，不要让内疚感支配你的决定。"
    }
  },
  {
    id: "fear-of-missing-out-capitalism",
    title: {
      vi: "Thao túng bằng nỗi sợ bị tụt hậu",
      en: "Fear of Lagging Behind",
      zh: "落后恐惧操纵"
    },
    description: {
      vi: "Lợi dụng nỗi sợ thua kém về tài chính để thúc đẩy sự tham lam và cạnh tranh không lành mạnh.",
      en: "Exploiting the fear of financial inferiority to drive greed and unfair competition.",
      zh: "利用财务自卑的恐惧来驱动贪婪和不公平竞争。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: {
      vi: "Tự đánh giá nhu cầu thực tế và không để nỗi sợ bị tụt hậu ép buộc quyết định tiêu dùng.",
      en: "Self-assess actual needs and don't let the fear of lagging behind force consumption decisions.",
      zh: "自我评估实际需求，不要让落后的恐惧强迫消费决定。"
    }
  },
  {
    id: "collective-conformity",
    title: {
      vi: "Thao túng bằng sự đồng thuận tập thể",
      en: "Collective Conformity",
      zh: "集体从众操纵"
    },
    description: {
      vi: "Lợi dụng tinh thần tập thể, sự sợ hãi bị cô lập khỏi cộng đồng để ép buộc sự đồng thuận.",
      en: "Exploiting collective spirit and the fear of isolation from the community to force consensus.",
      zh: "利用集体精神和对被社区孤立的恐惧来强迫达成共识。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Xã hội chủ nghĩa"]
    },
    defensiveStrategy: {
      vi: "Giữ vững quan điểm cá nhân và không để áp lực đồng trang lứa ép buộc phải đồng thuận.",
      en: "Maintain personal views and don't let peer pressure force consensus.",
      zh: "保持个人观点，不要让同伴压力强迫达成共识。"
    }
  },
  {
    id: "spiritual-bypassing",
    title: {
      vi: "Thao túng tâm linh (Spiritual Bypassing)",
      en: "Spiritual Bypassing",
      zh: "灵性逃避操纵"
    },
    description: {
      vi: "Lợi dụng giáo lý về nghiệp quả hoặc sự buông bỏ để ép buộc nạn nhân chấp nhận sự áp bức.",
      en: "Exploiting doctrines of karma or detachment to force victims to accept oppression.",
      zh: "利用因果报应或超脱的教义来强迫受害者接受压迫。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["Phật giáo", "Đạo giáo"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Phân biệt giữa sự buông bỏ lành mạnh và việc trốn tránh thực tại. Tỉnh táo trước những kẻ nhân danh tâm linh để trục lợi.",
      en: "Distinguish between healthy detachment and escaping reality. Be alert to those using spirituality for profit.",
      zh: "区分健康的超脱和逃避现实。警惕那些以灵性之名牟利的人。"
    }
  },
  {
    id: "appeal-to-tradition",
    title: {
      vi: "Lợi dụng truyền thống (Appeal to Tradition)",
      en: "Appeal to Tradition",
      zh: "诉诸传统"
    },
    description: {
      vi: "Lợi dụng sự tôn trọng truyền thống, lòng trung thành để che đậy các lợi ích nhóm.",
      en: "Exploiting respect for tradition and loyalty to cover up group interests.",
      zh: "利用对传统和忠诚的尊重来掩盖利益集团。"
    },
    sourceBook: "48 Laws of Power - Robert Greene",
    targetDemographics: {
      ageGroups: ["Baby Boomers", "Gen X"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Quân chủ lập hiến"]
    },
    defensiveStrategy: {
      vi: "Phân tích giá trị thực tế của truyền thống thay vì mù quáng tuân theo.",
      en: "Analyze the practical value of tradition instead of blindly following it.",
      zh: "分析传统的实际价值，而不是盲目跟随。"
    }
  },
  {
    id: "fear-based-loyalty",
    title: {
      vi: "Thao túng bằng sự sợ hãi",
      en: "Fear-Based Loyalty",
      zh: "恐惧忠诚操纵"
    },
    description: {
      vi: "Lợi dụng sự sợ hãi cái chết, sự bất ổn để ép buộc sự trung thành tuyệt đối.",
      en: "Exploiting fear of death and instability to force absolute loyalty.",
      zh: "利用对死亡和不稳定的恐惧来强迫绝对忠诚。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Phiến quân/Loạn lạc"]
    },
    defensiveStrategy: {
      vi: "Tìm kiếm sự an toàn và hỗ trợ từ các nguồn tin cậy thay vì bị thao túng bởi sự sợ hãi.",
      en: "Seek safety and support from reliable sources instead of being manipulated by fear.",
      zh: "从可靠来源寻求安全和支持，而不是被恐惧所操纵。"
    }
  },
  {
    id: "gaslighting-political",
    title: {
      vi: "Thao túng thực tại (Gaslighting) trong chính trị",
      en: "Political Gaslighting",
      zh: "政治煤气灯操纵"
    },
    description: {
      vi: "Phủ nhận sự thật hiển nhiên, khiến nạn nhân nghi ngờ trí nhớ và nhận thức của bản thân để củng cố quyền lực.",
      en: "Denying obvious truths, making victims doubt their own memory and perception to consolidate power.",
      zh: "否认显而易见的事实，使受害者怀疑自己的记忆和感知，以巩固权力。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Xã hội chủ nghĩa", "Quân chủ lập hiến"]
    },
    defensiveStrategy: {
      vi: "Ghi chép lại sự kiện, tin tưởng vào trực giác và bằng chứng khách quan thay vì lời nói của kẻ thao túng.",
      en: "Record events, trust your intuition and objective evidence instead of the manipulator's words.",
      zh: "记录事件，信任你的直觉和客观证据，而不是操纵者的话。"
    }
  },
  {
    id: "consumerist-shaming",
    title: {
      vi: "Thao túng bằng sự xấu hổ tiêu dùng",
      en: "Consumerist Shaming",
      zh: "消费主义羞辱操纵"
    },
    description: {
      vi: "Tạo ra cảm giác thấp kém nếu không sở hữu sản phẩm/dịch vụ cụ thể, ép buộc người dùng phải mua để khẳng định đẳng cấp.",
      en: "Creating a sense of inferiority if one doesn't own a specific product/service, forcing users to buy to assert status.",
      zh: "如果不拥有特定的产品/服务，就会产生一种自卑感，强迫用户购买以确立地位。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: {
      vi: "Tách biệt giá trị bản thân khỏi tài sản vật chất. Nhận diện các thông điệp quảng cáo đánh vào sự tự ti.",
      en: "Separate self-worth from material possessions. Identify advertising messages that target insecurity.",
      zh: "将自我价值与物质财富分开。识别针对自卑感的广告信息。"
    }
  },
  {
    id: "nostalgia-manipulation",
    title: {
      vi: "Thao túng bằng sự hoài niệm (Nostalgia)",
      en: "Nostalgia Manipulation",
      zh: "怀旧操纵"
    },
    description: {
      vi: "Lợi dụng ký ức đẹp đẽ về quá khứ để tạo sự tin tưởng và ép buộc hành vi hiện tại.",
      en: "Exploiting beautiful memories of the past to create trust and force current behavior.",
      zh: "利用过去的美好回忆来建立信任并强迫当前的行为。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Baby Boomers", "Gen X"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Nhận diện rằng quá khứ không phải lúc nào cũng tốt đẹp hơn hiện tại. Đánh giá quyết định dựa trên thực tế hiện tại.",
      en: "Recognize that the past is not always better than the present. Evaluate decisions based on current reality.",
      zh: "认识到过去并不总是比现在更好。根据当前的现实评估决定。"
    }
  },
  {
    id: "jargon-overload",
    title: {
      vi: "Thao túng bằng ngôn ngữ kỹ thuật (Jargon Overload)",
      en: "Jargon Overload",
      zh: "术语超载操纵"
    },
    description: {
      vi: "Sử dụng thuật ngữ chuyên môn phức tạp để làm nạn nhân cảm thấy kém cỏi và buộc phải đồng ý.",
      en: "Using complex technical terminology to make victims feel inferior and forced to agree.",
      zh: "使用复杂的专业术语使受害者感到自卑并被迫同意。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Kỹ thuật", "Y tế", "Giáo dục"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Yêu cầu giải thích bằng ngôn ngữ đơn giản. Không ngại thừa nhận nếu không hiểu.",
      en: "Request explanations in simple language. Don't be afraid to admit if you don't understand.",
      zh: "要求用简单的语言解释。如果不懂，不要害怕承认。"
    }
  },
  {
    id: "community-pressure",
    title: {
      vi: "Thao túng bằng áp lực cộng đồng",
      en: "Community Pressure",
      zh: "社区压力操纵"
    },
    description: {
      vi: "Lợi dụng sự gắn kết chặt chẽ trong cộng đồng tôn giáo để ép buộc sự tuân thủ.",
      en: "Exploiting tight-knit religious community bonds to force compliance.",
      zh: "利用紧密的宗教社区纽带强迫服从。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["Hồi giáo", "Do thái giáo"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Giữ vững ranh giới cá nhân. Hiểu rằng sự thuộc về cộng đồng không đồng nghĩa với việc phải từ bỏ chính kiến.",
      en: "Maintain personal boundaries. Understand that belonging to a community doesn't mean giving up your own views.",
      zh: "保持个人界限。明白属于一个社区并不意味着放弃自己的观点。"
    }
  },
  {
    id: "nationalism-manipulation",
    title: {
      vi: "Thao túng bằng chủ nghĩa dân tộc",
      en: "Nationalism Manipulation",
      zh: "民族主义操纵"
    },
    description: {
      vi: "Lợi dụng lòng yêu nước để ép buộc sự trung thành và đồng thuận với các chính sách.",
      en: "Exploiting patriotism to force loyalty and consensus with policies.",
      zh: "利用爱国主义强迫对政策的忠诚和共识。"
    },
    sourceBook: "48 Laws of Power - Robert Greene",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Xã hội chủ nghĩa", "Tư bản"]
    },
    defensiveStrategy: {
      vi: "Phân biệt giữa lòng yêu nước chân chính và việc bị lợi dụng bởi các mục đích chính trị.",
      en: "Distinguish between genuine patriotism and being exploited for political purposes.",
      zh: "区分真正的爱国主义和被政治目的利用。"
    }
  },
  {
    id: "guilt-tripping",
    title: {
      vi: "Thao túng bằng cảm giác tội lỗi (Guilt Tripping)",
      en: "Guilt Tripping",
      zh: "内疚陷阱"
    },
    description: {
      vi: "Gây áp lực tâm lý bằng cách khiến nạn nhân cảm thấy mình là nguyên nhân gây ra nỗi đau hoặc sự thất vọng của kẻ thao túng.",
      en: "Exerting psychological pressure by making victims feel they are the cause of the manipulator's pain or disappointment.",
      zh: "通过让受害者感到自己是操纵者痛苦或失望的原因来施加心理压力。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Nhận diện hành vi thao túng. Thiết lập ranh giới cá nhân và không chịu trách nhiệm cho cảm xúc của người khác.",
      en: "Identify manipulative behavior. Set personal boundaries and don't take responsibility for others' emotions.",
      zh: "识别操纵行为。设定个人界限，不对他人的情绪负责。"
    }
  },
  {
    id: "love-bombing",
    title: {
      vi: "Thao túng bằng sự quan tâm thái quá (Love Bombing)",
      en: "Love Bombing",
      zh: "爱心炸弹"
    },
    description: {
      vi: "Tấn công nạn nhân bằng sự quan tâm, khen ngợi và tình cảm dồn dập để tạo sự phụ thuộc.",
      en: "Attacking victims with intense attention, praise, and affection to create dependency.",
      zh: "以密集的关注、赞美和情感攻击受害者以产生依赖。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Giữ sự tỉnh táo trong các mối quan hệ mới. Nếu mọi thứ tiến triển quá nhanh, hãy chậm lại và quan sát.",
      en: "Stay alert in new relationships. If things progress too quickly, slow down and observe.",
      zh: "在新的关系中保持警惕。如果事情进展太快，慢下来观察。"
    }
  },
  {
    id: "isolation",
    title: {
      vi: "Thao túng bằng sự cô lập (Isolation)",
      en: "Isolation",
      zh: "孤立操纵"
    },
    description: {
      vi: "Tách biệt nạn nhân khỏi gia đình, bạn bè và các nguồn hỗ trợ để họ chỉ còn phụ thuộc vào kẻ thao túng.",
      en: "Separating victims from family, friends, and support sources so they only depend on the manipulator.",
      zh: "将受害者与家人、朋友和支持来源分开，使他们只能依靠操纵者。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Duy trì các mối quan hệ xã hội lành mạnh. Cảnh giác khi ai đó cố gắng kiểm soát các mối quan hệ của bạn.",
      en: "Maintain healthy social relationships. Be alert when someone tries to control your relationships.",
      zh: "保持健康的社交关系。当有人试图控制你的关系时保持警惕。"
    }
  },
  {
    id: "flattery",
    title: {
      vi: "Thao túng bằng sự khen ngợi giả tạo (Flattery)",
      en: "Flattery",
      zh: "谄媚操纵"
    },
    description: {
      vi: "Sử dụng những lời khen ngợi không chân thành để làm nạn nhân mất cảnh giác và dễ dàng đồng ý với yêu cầu.",
      en: "Using insincere praise to lower victims' guard and make them easily agree to requests.",
      zh: "使用不真诚的赞美来降低受害者的警惕，使他们容易同意请求。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Tỉnh táo trước những lời khen quá mức. Đánh giá xem lời khen có dựa trên thực tế hay không.",
      en: "Stay alert to excessive praise. Evaluate whether the praise is based on reality.",
      zh: "对过度的赞美保持警惕。评估赞美是否基于现实。"
    }
  },
  {
    id: "foot-in-the-door",
    title: {
      vi: "Thao túng bằng yêu cầu nhỏ (Foot-in-the-door)",
      en: "Foot-in-the-door",
      zh: "登门槛操纵"
    },
    description: {
      vi: "Bắt đầu bằng một yêu cầu nhỏ mà nạn nhân dễ dàng đồng ý, sau đó tăng dần mức độ yêu cầu lên.",
      en: "Starting with a small request that victims easily agree to, then gradually increasing the level of requests.",
      zh: "从受害者容易同意的小请求开始，然后逐渐增加请求的级别。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Sales", "Marketing"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Nhận diện rằng việc đồng ý với yêu cầu nhỏ không có nghĩa là bạn phải đồng ý với yêu cầu lớn hơn sau đó.",
      en: "Recognize that agreeing to a small request doesn't mean you have to agree to a larger request later.",
      zh: "认识到同意一个小请求并不意味着你以后必须同意一个更大的请求。"
    }
  },
  {
    id: "door-in-the-face",
    title: {
      vi: "Thao túng bằng sự từ chối (Door-in-the-face)",
      en: "Door-in-the-face",
      zh: "留面子操纵"
    },
    description: {
      vi: "Đưa ra một yêu cầu quá lớn để bị từ chối, sau đó đưa ra yêu cầu nhỏ hơn (thực tế là mục tiêu chính) để nạn nhân cảm thấy cần phải nhượng bộ.",
      en: "Making a request too large to be rejected, then making a smaller request (the actual goal) so victims feel the need to concede.",
      zh: "提出一个大到会被拒绝的请求，然后提出一个小一点的请求（实际目标），使受害者感到需要让步。"
    },
    sourceBook: "Influence: The Psychology of Persuasion - Robert Cialdini",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Sales", "Negotiation"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Đánh giá từng yêu cầu một cách độc lập. Đừng để cảm giác tội lỗi khi từ chối yêu cầu đầu tiên chi phối quyết định của bạn.",
      en: "Evaluate each request independently. Don't let guilt from rejecting the first request dominate your decision.",
      zh: "独立评估每个请求。不要让拒绝第一个请求的内疚感支配你的决定。"
    }
  },
  {
    id: "anchoring",
    title: {
      vi: "Thao túng bằng điểm neo (Anchoring)",
      en: "Anchoring",
      zh: "锚定操纵"
    },
    description: {
      vi: "Đưa ra một con số hoặc thông tin ban đầu (điểm neo) để làm cơ sở so sánh, khiến các con số sau đó trông có vẻ hợp lý hơn.",
      en: "Providing an initial number or info (anchor) as a basis for comparison, making subsequent numbers look more reasonable.",
      zh: "提供一个初始数字或信息（锚点）作为比较基础，使随后的数字看起来更合理。"
    },
    sourceBook: "Thinking, Fast and Slow - Daniel Kahneman",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Finance", "Retail"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: {
      vi: "Tự nghiên cứu giá trị thực tế của sản phẩm/dịch vụ thay vì dựa vào con số ban đầu được đưa ra.",
      en: "Research the actual value of products/services yourself instead of relying on the initial number provided.",
      zh: "自己研究产品/服务的实际价值，而不是依赖提供的初始数字。"
    }
  },
  {
    id: "financial-gaslighting",
    title: {
      vi: "Thao túng thực tại tài chính (Financial Gaslighting)",
      en: "Financial Gaslighting",
      zh: "财务煤气灯操纵"
    },
    description: {
      vi: "Khiến nạn nhân nghi ngờ trí nhớ hoặc nhận thức của họ về các thỏa thuận, chi tiêu hoặc tình trạng tài chính chung.",
      en: "Making victims doubt their memory or perception of agreements, spending, or general financial status.",
      zh: "使受害者怀疑他们对协议、支出或一般财务状况的记忆或感知。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Millennials", "Gen X"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Luôn ghi chép lại các giao dịch tài chính và thỏa thuận bằng văn bản. Tin tưởng vào bằng chứng thực tế thay vì lời nói của đối phương.",
      en: "Always record financial transactions and agreements in writing. Trust actual evidence instead of the other person's words.",
      zh: "始终以书面形式记录财务交易和协议。信任实际证据，而不是对方的话。"
    }
  },
  {
    id: "love-bombing-financial",
    title: {
      vi: "Dội bom tình cảm bằng vật chất (Love Bombing Financial)",
      en: "Love Bombing Financial",
      zh: "财务爱心炸弹"
    },
    description: {
      vi: "Tặng những món quà đắt tiền dồn dập ngay từ đầu để tạo ra cảm giác nợ nần và nghĩa vụ phải đáp lại.",
      en: "Giving expensive gifts intensely from the start to create a sense of debt and obligation to reciprocate.",
      zh: "从一开始就密集赠送昂贵的礼物，以产生债务感和回报义务。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: {
      vi: "Cảnh giác với những món quà quá lớn so với mức độ thân thiết của mối quan hệ. Hiểu rằng quà tặng không đồng nghĩa với việc bạn phải từ bỏ quyền tự chủ.",
      en: "Be alert to gifts that are too large compared to the relationship's intimacy. Understand that gifts don't mean giving up autonomy.",
      zh: "警惕与关系亲密度相比过大的礼物。明白礼物并不意味着放弃自主权。"
    }
  },
  {
    id: "expert-trap",
    title: {
      vi: "Bẫy chuyên gia tài chính (The Expert Trap)",
      en: "The Expert Trap",
      zh: "专家陷阱"
    },
    description: {
      vi: "Sử dụng thuật ngữ tài chính cực kỳ phức tạp để làm nạn nhân cảm thấy kém cỏi và phải hoàn toàn dựa dẫm vào 'chuyên gia'.",
      en: "Using extremely complex financial terms to make victims feel inferior and completely dependent on the 'expert'.",
      zh: "使用极其复杂的财务术语使受害者感到自卑，并完全依赖于“专家”。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Finance", "Retail"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: {
      vi: "Yêu cầu giải thích bằng ngôn ngữ đơn giản. Nếu họ không thể giải thích đơn giản, có thể họ đang cố tình làm khó bạn.",
      en: "Request explanations in simple language. If they can't explain simply, they might be intentionally making it difficult for you.",
      zh: "要求用简单的语言解释。如果他们不能简单地解释，他们可能是故意让你感到困难。"
    }
  },
  {
    id: "sunk-cost-emotional",
    title: {
      vi: "Bẫy chi phí chìm trong tình cảm (Sunk Cost Emotional)",
      en: "Emotional Sunk Cost",
      zh: "情感沉没成本陷阱"
    },
    description: {
      vi: "Nhắc nhở nạn nhân về số năm hoặc nỗ lực đã đầu tư vào mối quan hệ để ngăn họ rời bỏ, dù mối quan hệ đó đã độc hại.",
      en: "Reminding victims of the years or effort invested in a relationship to prevent them from leaving, even if it's toxic.",
      zh: "提醒受害者在关系中投入的年限或努力，以防止他们离开，即使关系是有毒的。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Millennials", "Gen X", "Baby Boomers"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Đánh giá mối quan hệ dựa trên giá trị hiện tại và tương lai, thay vì tiếc nuối những gì đã mất trong quá khứ.",
      en: "Evaluate the relationship based on current and future value, rather than regretting what was lost in the past.",
      zh: "根据当前和未来的价值评估关系，而不是遗憾过去失去的东西。"
    }
  },
  {
    id: "soulmate-illusion",
    title: {
      vi: "Ảo tưởng về người bạn tâm giao (Soulmate Illusion)",
      en: "Soulmate Illusion",
      zh: "灵魂伴侣幻觉"
    },
    description: {
      vi: "Phản chiếu hoàn hảo những khao khát và giá trị sâu kín nhất của nạn nhân để tạo ra một sự kết nối tức thì và mãnh liệt.",
      en: "Perfectly mirroring the victim's deepest desires and values to create an instant and intense connection.",
      zh: "完美地反映受害者最深层的欲望和价值观，以建立即时且强烈的联系。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Dành thời gian để tìm hiểu đối phương thực sự thay vì bị cuốn vào cảm giác 'định mệnh' quá sớm.",
      en: "Take time to truly get to know the other person instead of being swept up in a 'destiny' feeling too early.",
      zh: "花时间真正了解对方，而不是过早地陷入“命运”的感觉。"
    }
  },
  {
    id: "triangulation",
    title: {
      vi: "Kỹ thuật tam giác hóa (Triangulation)",
      en: "Triangulation",
      zh: "三角测量"
    },
    description: {
      vi: "Đưa một người thứ ba vào động lực mối quan hệ để tạo ra sự ghen tuông và cạnh tranh nhằm giành lấy sự chú ý của kẻ thao túng.",
      en: "Bringing a third person into the relationship dynamic to create jealousy and competition for the manipulator's attention.",
      zh: "将第三个人引入关系动态中，以产生嫉妒和竞争，从而争取操纵者的注意。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Nhận diện rằng sự ghen tuông là một công cụ kiểm soát. Giao tiếp trực tiếp với các bên liên quan thay vì thông qua kẻ thao túng.",
      en: "Recognize that jealousy is a control tool. Communicate directly with the parties involved instead of through the manipulator.",
      zh: "认识到嫉妒是一种控制工具。直接与相关各方沟通，而不是通过操纵者。"
    }
  },
  {
    id: "intermittent-reinforcement",
    title: {
      vi: "Củng cố gián đoạn (Intermittent Reinforcement)",
      en: "Intermittent Reinforcement",
      zh: "间歇性强化"
    },
    description: {
      vi: "Cung cấp tình cảm hoặc phần thưởng một cách không thể đoán trước để tạo ra một chu kỳ gây nghiện trong việc tìm kiếm sự chấp thuận.",
      en: "Providing affection or rewards unpredictably to create an addictive cycle of seeking approval.",
      zh: "不可预测地提供情感或奖励，以建立寻求认可的成瘾循环。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Nhận diện mô thức 'nóng - lạnh'. Đánh giá mối quan hệ dựa trên sự ổn định và tôn trọng nhất quán.",
      en: "Identify the 'hot-cold' pattern. Evaluate the relationship based on stability and consistent respect.",
      zh: "识别“忽冷忽热”的模式。根据稳定性和一致的尊重评估关系。"
    }
  },
  {
    id: "damsel-in-distress-financial",
    title: {
      vi: "Kịch bản 'Nạn nhân tài chính' (Damsel in Distress)",
      en: "Financial 'Damsel in Distress'",
      zh: "财务“受难少女”"
    },
    description: {
      vi: "Đóng vai nạn nhân của sự không may mắn về tài chính để yêu cầu các khoản vay hoặc sự hỗ trợ mà không bao giờ có ý định trả lại.",
      en: "Playing the victim of financial misfortune to request loans or support with no intention of paying back.",
      zh: "扮演财务不幸的受害者，请求贷款或支持，却从未打算偿还。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Chỉ cho vay số tiền mà bạn sẵn sàng mất. Kiểm chứng các câu chuyện về sự khó khăn trước khi hỗ trợ tài chính lớn.",
      en: "Only lend money you're willing to lose. Verify stories of hardship before providing large financial support.",
      zh: "只借出你愿意损失的钱。在提供重大财务支持之前核实困难故事。"
    }
  },
  {
    id: "bait-and-switch-relationship",
    title: {
      vi: "Mồi nhử và hoán đổi trong tình cảm (Bait and Switch)",
      en: "Emotional Bait and Switch",
      zh: "情感诱导转向"
    },
    description: {
      vi: "Thể hiện một nhân cách hoàn hảo ban đầu, sau đó từ từ bộc lộ bản chất kiểm soát hoặc lạm dụng khi nạn nhân đã cam kết.",
      en: "Showing a perfect personality initially, then slowly revealing a controlling or abusive nature once the victim is committed.",
      zh: "最初表现出完美的人格，一旦受害者做出承诺，就慢慢暴露出控制或虐待的本质。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Chú ý đến những thay đổi nhỏ trong hành vi. Đừng phớt lờ những 'cờ đỏ' (red flags) chỉ vì những ấn tượng tốt ban đầu.",
      en: "Pay attention to small changes in behavior. Don't ignore 'red flags' just because of good initial impressions.",
      zh: "注意行为的微小变化。不要仅仅因为最初的好印象就忽视“红旗”（警告信号）。"
    }
  },
  {
    id: "future-faking",
    title: {
      vi: "Vẽ ra tương lai ảo (Future Faking)",
      en: "Future Faking",
      zh: "虚假未来"
    },
    description: {
      vi: "Lập ra những kế hoạch chi tiết cho tương lai (kết hôn, du lịch, kinh doanh) để giữ nạn nhân đầu tư vào hiện tại dù không có ý định thực hiện.",
      en: "Making detailed plans for the future (marriage, travel, business) to keep the victim invested in the present despite no intention of following through.",
      zh: "制定详细的未来计划（结婚、旅行、商务），以使受害者在目前保持投入，尽管没有打算付诸实施。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Đánh giá đối phương dựa trên hành động hiện tại thay vì những lời hứa hẹn xa vời.",
      en: "Evaluate the other person based on current actions instead of distant promises.",
      zh: "根据当前的行动而不是遥远的承诺来评估对方。"
    }
  },
  {
    id: "digital-isolation",
    title: {
      vi: "Cô lập kỹ thuật số (Digital Isolation)",
      en: "Digital Isolation",
      zh: "数字孤立"
    },
    description: {
      vi: "Kiểm soát các tương tác trên mạng xã hội và dấu chân kỹ thuật số của nạn nhân để hạn chế ảnh hưởng từ bên ngoài.",
      en: "Controlling the victim's social media interactions and digital footprint to limit outside influence.",
      zh: "控制受害者的社交媒体互动和数字足迹，以限制外部影响。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Giữ quyền kiểm soát mật khẩu và tài khoản cá nhân. Duy trì các kết nối trực tuyến độc lập với đối phương.",
      en: "Maintain control of passwords and personal accounts. Keep independent online connections from the other person.",
      zh: "保持对密码和个人账户的控制。保持与对方独立的在线连接。"
    }
  },
  {
    id: "inheritance-guilt",
    title: {
      vi: "Thao túng bằng quyền thừa kế (Inheritance Guilt)",
      en: "Inheritance Guilt",
      zh: "继承权内疚操纵"
    },
    description: {
      vi: "Sử dụng di sản gia đình hoặc quyền thừa kế như một công cụ để kiểm soát hành vi và lựa chọn của thế hệ trẻ.",
      en: "Using family legacy or inheritance rights as a tool to control the behavior and choices of the younger generation.",
      zh: "利用家族遗产或继承权作为控制年轻一代行为和选择的工具。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Xây dựng sự độc lập tài chính. Hiểu rằng quyền tự do cá nhân quan trọng hơn các lời hứa về tài sản tương lai.",
      en: "Build financial independence. Understand that personal freedom is more important than promises of future assets.",
      zh: "建立财务独立。明白个人自由比未来资产的承诺更重要。"
    }
  },
  {
    id: "charity-manipulation",
    title: {
      vi: "Thao túng bằng lòng trắc ẩn (Charity Manipulation)",
      en: "Charity Manipulation",
      zh: "慈善操纵"
    },
    description: {
      vi: "Lợi dụng lòng vị tha của nạn nhân để kêu gọi quyên góp cho các mục đích giả tạo hoặc tự phục vụ.",
      en: "Exploiting the victim's altruism to call for donations for fake or self-serving purposes.",
      zh: "利用受害者的利他主义，为虚假或自私的目的呼吁捐款。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Kiểm tra tính minh bạch của các tổ chức từ thiện. Đừng để cảm xúc nhất thời ép buộc việc quyên góp.",
      en: "Check the transparency of charitable organizations. Don't let temporary emotions force donations.",
      zh: "检查慈善机构的透明度。不要让暂时的情绪强迫捐款。"
    }
  },
  {
    id: "exclusive-club",
    title: {
      vi: "Bẫy 'Câu lạc bộ đặc quyền' (Exclusive Club)",
      en: "Exclusive Club Trap",
      zh: "“特权俱乐部”陷阱"
    },
    description: {
      vi: "Tạo ra cảm giác thuộc về một nhóm tinh hoa yêu cầu sự hy sinh về tài chính hoặc cá nhân để duy trì vị thế.",
      en: "Creating a sense of belonging to an elite group that requires financial or personal sacrifice to maintain status.",
      zh: "建立一种属于精英阶层的归属感，这种归属感需要财务或个人牺牲来维持地位。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Millennials", "Gen X"],
      genders: ["All"],
      professions: ["Management", "Finance"],
      religions: ["All"],
      politicalSystems: ["Tư bản"]
    },
    defensiveStrategy: {
      vi: "Đánh giá giá trị thực sự của nhóm so với những gì bạn phải đánh đổi. Đừng để cái tôi bị thao túng bởi sự 'đặc quyền'.",
      en: "Evaluate the group's real value compared to what you have to trade off. Don't let your ego be manipulated by 'privilege'.",
      zh: "评估该群体的真实价值与你必须付出的代价。不要让你的自尊被“特权”所操纵。"
    }
  },
  {
    id: "induced-poverty-fear",
    title: {
      vi: "Gieo rắc nỗi sợ nghèo đói (Induced Poverty Fear)",
      en: "Induced Poverty Fear",
      zh: "贫困恐惧操纵"
    },
    description: {
      vi: "Phóng đại sự bất ổn kinh tế để ép buộc nạn nhân đưa ra các quyết định tài chính rủi ro cao hoặc bị bóc lột.",
      en: "Exaggerating economic instability to force victims to make high-risk financial decisions or be exploited.",
      zh: "夸大经济不稳定，强迫受害者做出高风险的财务决定或被剥削。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["Tư bản", "Xã hội chủ nghĩa"]
    },
    defensiveStrategy: {
      vi: "Tìm kiếm thông tin kinh tế từ nhiều nguồn khách quan. Xây dựng quỹ dự phòng để giảm bớt nỗi sợ hãi.",
      en: "Seek economic info from multiple objective sources. Build a reserve fund to reduce fear.",
      zh: "从多个客观来源寻求经济信息。建立储备基金以减少恐惧。"
    }
  },
  {
    id: "hero-complex",
    title: {
      vi: "Phức cảm anh hùng (Hero Complex)",
      en: "Hero Complex",
      zh: "英雄情结"
    },
    description: {
      vi: "Tự định vị mình là người duy nhất có thể cứu nạn nhân khỏi các vấn đề của họ, tạo ra sự phụ thuộc tuyệt đối.",
      en: "Positioning oneself as the only person who can save the victim from their problems, creating absolute dependency.",
      zh: "将自己定位为唯一能将受害者从问题中解救出来的人，从而产生绝对的依赖。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Phát triển kỹ năng giải quyết vấn đề cá nhân. Nhận diện rằng không ai có thể là 'vị cứu tinh' duy nhất của bạn.",
      en: "Develop personal problem-solving skills. Recognize that no one can be your only 'savior'.",
      zh: "培养个人解决问题的能力。认识到没有人能成为你唯一的“救世主”。"
    }
  },
  {
    id: "emotional-blackmail-love",
    title: {
      vi: "Tống tiền cảm ứng trong tình yêu (Emotional Blackmail)",
      en: "Emotional Blackmail",
      zh: "情感勒索"
    },
    description: {
      vi: "Đe dọa chấm dứt mối quan hệ hoặc tự làm hại bản thân nếu nạn nhân không tuân theo các yêu cầu.",
      en: "Threatening to end the relationship or self-harm if the victim doesn't comply with requests.",
      zh: "如果受害者不遵守要求，就威胁要结束关系或自残。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Không nhượng bộ trước các lời đe dọa. Khuyến khích đối phương tìm kiếm sự trợ giúp chuyên môn nếu họ đe dọa tự hại.",
      en: "Don't give in to threats. Encourage the other person to seek professional help if they threaten self-harm.",
      zh: "不要屈服于威胁。如果对方威胁要自残，鼓励他们寻求专业帮助。"
    }
  },
  {
    id: "shadow-influence",
    title: {
      vi: "Ảnh hưởng bóng tối (Shadow Influence)",
      en: "Shadow Influence",
      zh: "影子影响"
    },
    description: {
      vi: "Sử dụng các gợi ý tinh tế, gián tiếp và thao túng môi trường để thay đổi hành vi của nạn nhân mà họ không hề hay biết.",
      en: "Using subtle, indirect suggestions and environment manipulation to change the victim's behavior without them knowing.",
      zh: "使用微妙、间接的建议和环境操纵，在受害者不知情的情况下改变其行为。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Marketing", "Management"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Nâng cao sự tự nhận thức về các mô thức hành vi của bản thân. Đặt câu hỏi khi thấy mình thay đổi thói quen một cách đột ngột.",
      en: "Increase self-awareness of your own behavior patterns. Ask questions when you see yourself suddenly changing habits.",
      zh: "增加对自身行为模式的自我意识。当你发现自己突然改变习惯时，提出问题。"
    }
  },
  {
    id: "information-asymmetry-money",
    title: {
      vi: "Bất đối xứng thông tin tài chính (Information Asymmetry)",
      en: "Financial Information Asymmetry",
      zh: "财务信息不对称"
    },
    description: {
      vi: "Cố tình giữ kín hoặc làm phức tạp hóa thông tin tài chính để duy trì quyền lực trong mối quan hệ đối tác hoặc gia đình.",
      en: "Intentionally keeping financial info secret or complicated to maintain power in partnerships or families.",
      zh: "故意保持财务信息秘密或复杂化，以维持在合伙关系或家庭中的权力。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["Finance", "Management"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Yêu cầu sự minh bạch tuyệt đối trong các vấn đề tài chính chung. Tự học các kiến thức cơ bản về quản lý tài chính.",
      en: "Request absolute transparency in joint financial matters. Self-study basic financial management knowledge.",
      zh: "要求在共同财务事项中绝对透明。自学基本的财务管理知识。"
    }
  },
  {
    id: "legacy-trap",
    title: {
      vi: "Bẫy di sản (Legacy Trap)",
      en: "Legacy Trap",
      zh: "遗产陷阱"
    },
    description: {
      vi: "Gây áp lực buộc ai đó phải tuân theo một con đường hoặc sự nghiệp cụ thể để 'tôn vinh' truyền thống hoặc kỳ vọng của gia đình.",
      en: "Pressuring someone to follow a specific path or career to 'honor' family traditions or expectations.",
      zh: "施加压力，迫使某人遵循特定的道路或职业，以“纪念”家庭传统或期望。"
    },
    sourceBook: "Dark Psychology - Various",
    targetDemographics: {
      ageGroups: ["Gen Z", "Millennials"],
      genders: ["All"],
      professions: ["Academic", "Corporate"],
      religions: ["All"],
      politicalSystems: ["All"]
    },
    defensiveStrategy: {
      vi: "Xác định giá trị và đam mê cá nhân. Hiểu rằng cuộc đời bạn thuộc về bạn, không phải là phần mở rộng của thế hệ trước.",
      en: "Identify personal values and passions. Understand that your life belongs to you, not an extension of the previous generation.",
      zh: "确定个人价值和激情。明白你的生活属于你，而不是上一代的延伸。"
    }
  },
  {
    id: "new-technique-1",
    title: { vi: "Kỹ thuật 1", en: "Technique 1", zh: "技术 1" },
    description: { vi: "Mô tả 1", en: "Description 1", zh: "描述 1" },
    sourceBook: "Source 1",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Tech"]
    },
    defensiveStrategy: { vi: "Chiến lược 1", en: "Strategy 1", zh: "策略 1" }
  },
  {
    id: "new-technique-2",
    title: { vi: "Kỹ thuật 2", en: "Technique 2", zh: "技术 2" },
    description: { vi: "Mô tả 2", en: "Description 2", zh: "描述 2" },
    sourceBook: "Source 2",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Art"]
    },
    defensiveStrategy: { vi: "Chiến lược 2", en: "Strategy 2", zh: "策略 2" }
  },
  {
    id: "new-technique-3",
    title: { vi: "Kỹ thuật 3", en: "Technique 3", zh: "技术 3" },
    description: { vi: "Mô tả 3", en: "Description 3", zh: "描述 3" },
    sourceBook: "Source 3",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Sport"]
    },
    defensiveStrategy: { vi: "Chiến lược 3", en: "Strategy 3", zh: "策略 3" }
  },
  {
    id: "new-technique-4",
    title: { vi: "Kỹ thuật 4", en: "Technique 4", zh: "技术 4" },
    description: { vi: "Mô tả 4", en: "Description 4", zh: "描述 4" },
    sourceBook: "Source 4",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Music"]
    },
    defensiveStrategy: { vi: "Chiến lược 4", en: "Strategy 4", zh: "策略 4" }
  },
  {
    id: "new-technique-5",
    title: { vi: "Kỹ thuật 5", en: "Technique 5", zh: "技术 5" },
    description: { vi: "Mô tả 5", en: "Description 5", zh: "描述 5" },
    sourceBook: "Source 5",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Food"]
    },
    defensiveStrategy: { vi: "Chiến lược 5", en: "Strategy 5", zh: "策略 5" }
  },
  {
    id: "new-technique-6",
    title: { vi: "Kỹ thuật 6", en: "Technique 6", zh: "技术 6" },
    description: { vi: "Mô tả 6", en: "Description 6", zh: "描述 6" },
    sourceBook: "Source 6",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Gaming"]
    },
    defensiveStrategy: { vi: "Chiến lược 6", en: "Strategy 6", zh: "策略 6" }
  },
  {
    id: "new-technique-7",
    title: { vi: "Kỹ thuật 7", en: "Technique 7", zh: "技术 7" },
    description: { vi: "Mô tả 7", en: "Description 7", zh: "描述 7" },
    sourceBook: "Source 7",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Science"]
    },
    defensiveStrategy: { vi: "Chiến lược 7", en: "Strategy 7", zh: "策略 7" }
  },
  {
    id: "new-technique-8",
    title: { vi: "Kỹ thuật 8", en: "Technique 8", zh: "技术 8" },
    description: { vi: "Mô tả 8", en: "Description 8", zh: "描述 8" },
    sourceBook: "Source 8",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["History"]
    },
    defensiveStrategy: { vi: "Chiến lược 8", en: "Strategy 8", zh: "策略 8" }
  },
  {
    id: "new-technique-9",
    title: { vi: "Kỹ thuật 9", en: "Technique 9", zh: "技术 9" },
    description: { vi: "Mô tả 9", en: "Description 9", zh: "描述 9" },
    sourceBook: "Source 9",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Politics"]
    },
    defensiveStrategy: { vi: "Chiến lược 9", en: "Strategy 9", zh: "策略 9" }
  },
  {
    id: "new-technique-10",
    title: { vi: "Kỹ thuật 10", en: "Technique 10", zh: "技术 10" },
    description: { vi: "Mô tả 10", en: "Description 10", zh: "描述 10" },
    sourceBook: "Source 10",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Business"]
    },
    defensiveStrategy: { vi: "Chiến lược 10", en: "Strategy 10", zh: "策略 10" }
  },
  {
    id: "new-technique-11",
    title: { vi: "Kỹ thuật 11", en: "Technique 11", zh: "技术 11" },
    description: { vi: "Mô tả 11", en: "Description 11", zh: "描述 11" },
    sourceBook: "Source 11",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Movies"]
    },
    defensiveStrategy: { vi: "Chiến lược 11", en: "Strategy 11", zh: "策略 11" }
  },
  {
    id: "new-technique-12",
    title: { vi: "Kỹ thuật 12", en: "Technique 12", zh: "技术 12" },
    description: { vi: "Mô tả 12", en: "Description 12", zh: "描述 12" },
    sourceBook: "Source 12",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Books"]
    },
    defensiveStrategy: { vi: "Chiến lược 12", en: "Strategy 12", zh: "策略 12" }
  },
  {
    id: "new-technique-13",
    title: { vi: "Kỹ thuật 13", en: "Technique 13", zh: "技术 13" },
    description: { vi: "Mô tả 13", en: "Description 13", zh: "描述 13" },
    sourceBook: "Source 13",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Nature"]
    },
    defensiveStrategy: { vi: "Chiến lược 13", en: "Strategy 13", zh: "策略 13" }
  },
  {
    id: "new-technique-14",
    title: { vi: "Kỹ thuật 14", en: "Technique 14", zh: "技术 14" },
    description: { vi: "Mô tả 14", en: "Description 14", zh: "描述 14" },
    sourceBook: "Source 14",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Fashion"]
    },
    defensiveStrategy: { vi: "Chiến lược 14", en: "Strategy 14", zh: "策略 14" }
  },
  {
    id: "new-technique-15",
    title: { vi: "Kỹ thuật 15", en: "Technique 15", zh: "技术 15" },
    description: { vi: "Mô tả 15", en: "Description 15", zh: "描述 15" },
    sourceBook: "Source 15",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Pets"]
    },
    defensiveStrategy: { vi: "Chiến lược 15", en: "Strategy 15", zh: "策略 15" }
  },
  {
    id: "new-technique-16",
    title: { vi: "Kỹ thuật 16", en: "Technique 16", zh: "技术 16" },
    description: { vi: "Mô tả 16", en: "Description 16", zh: "描述 16" },
    sourceBook: "Source 16",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Health"]
    },
    defensiveStrategy: { vi: "Chiến lược 16", en: "Strategy 16", zh: "策略 16" }
  },
  {
    id: "new-technique-17",
    title: { vi: "Kỹ thuật 17", en: "Technique 17", zh: "技术 17" },
    description: { vi: "Mô tả 17", en: "Description 17", zh: "描述 17" },
    sourceBook: "Source 17",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Finance"]
    },
    defensiveStrategy: { vi: "Chiến lược 17", en: "Strategy 17", zh: "策略 17" }
  },
  {
    id: "new-technique-18",
    title: { vi: "Kỹ thuật 18", en: "Technique 18", zh: "技术 18" },
    description: { vi: "Mô tả 18", en: "Description 18", zh: "描述 18" },
    sourceBook: "Source 18",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Travel"]
    },
    defensiveStrategy: { vi: "Chiến lược 18", en: "Strategy 18", zh: "策略 18" }
  },
  {
    id: "new-technique-19",
    title: { vi: "Kỹ thuật 19", en: "Technique 19", zh: "技术 19" },
    description: { vi: "Mô tả 19", en: "Description 19", zh: "描述 19" },
    sourceBook: "Source 19",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Coding"]
    },
    defensiveStrategy: { vi: "Chiến lược 19", en: "Strategy 19", zh: "策略 19" }
  },
  {
    id: "new-technique-20",
    title: { vi: "Kỹ thuật 20", en: "Technique 20", zh: "技术 20" },
    description: { vi: "Mô tả 20", en: "Description 20", zh: "描述 20" },
    sourceBook: "Source 20",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Photography"]
    },
    defensiveStrategy: { vi: "Chiến lược 20", en: "Strategy 20", zh: "策略 20" }
  },
  {
    id: "technique-21",
    title: { vi: "Kỹ thuật 21", en: "Technique 21", zh: "技术 21" },
    description: { vi: "Mô tả 21", en: "Description 21", zh: "描述 21" },
    sourceBook: "Source 21",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Reading"]
    },
    defensiveStrategy: { vi: "Chiến lược 21", en: "Strategy 21", zh: "策略 21" }
  },
  {
    id: "technique-22",
    title: { vi: "Kỹ thuật 22", en: "Technique 22", zh: "技术 22" },
    description: { vi: "Mô tả 22", en: "Description 22", zh: "描述 22" },
    sourceBook: "Source 22",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Music"]
    },
    defensiveStrategy: { vi: "Chiến lược 22", en: "Strategy 22", zh: "策略 22" }
  },
  {
    id: "technique-23",
    title: { vi: "Kỹ thuật 23", en: "Technique 23", zh: "技术 23" },
    description: { vi: "Mô tả 23", en: "Description 23", zh: "描述 23" },
    sourceBook: "Source 23",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Sports"]
    },
    defensiveStrategy: { vi: "Chiến lược 23", en: "Strategy 23", zh: "策略 23" }
  },
  {
    id: "technique-24",
    title: { vi: "Kỹ thuật 24", en: "Technique 24", zh: "技术 24" },
    description: { vi: "Mô tả 24", en: "Description 24", zh: "描述 24" },
    sourceBook: "Source 24",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Art"]
    },
    defensiveStrategy: { vi: "Chiến lược 24", en: "Strategy 24", zh: "策略 24" }
  },
  {
    id: "technique-25",
    title: { vi: "Kỹ thuật 25", en: "Technique 25", zh: "技术 25" },
    description: { vi: "Mô tả 25", en: "Description 25", zh: "描述 25" },
    sourceBook: "Source 25",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Cooking"]
    },
    defensiveStrategy: { vi: "Chiến lược 25", en: "Strategy 25", zh: "策略 25" }
  },
  {
    id: "technique-26",
    title: { vi: "Kỹ thuật 26", en: "Technique 26", zh: "技术 26" },
    description: { vi: "Mô tả 26", en: "Description 26", zh: "描述 26" },
    sourceBook: "Source 26",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Travel"]
    },
    defensiveStrategy: { vi: "Chiến lược 26", en: "Strategy 26", zh: "策略 26" }
  },
  {
    id: "technique-27",
    title: { vi: "Kỹ thuật 27", en: "Technique 27", zh: "技术 27" },
    description: { vi: "Mô tả 27", en: "Description 27", zh: "描述 27" },
    sourceBook: "Source 27",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Gaming"]
    },
    defensiveStrategy: { vi: "Chiến lược 27", en: "Strategy 27", zh: "策略 27" }
  },
  {
    id: "technique-28",
    title: { vi: "Kỹ thuật 28", en: "Technique 28", zh: "技术 28" },
    description: { vi: "Mô tả 28", en: "Description 28", zh: "描述 28" },
    sourceBook: "Source 28",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Technology"]
    },
    defensiveStrategy: { vi: "Chiến lược 28", en: "Strategy 28", zh: "策略 28" }
  },
  {
    id: "technique-29",
    title: { vi: "Kỹ thuật 29", en: "Technique 29", zh: "技术 29" },
    description: { vi: "Mô tả 29", en: "Description 29", zh: "描述 29" },
    sourceBook: "Source 29",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Science"]
    },
    defensiveStrategy: { vi: "Chiến lược 29", en: "Strategy 29", zh: "策略 29" }
  },
  {
    id: "technique-30",
    title: { vi: "Kỹ thuật 30", en: "Technique 30", zh: "技术 30" },
    description: { vi: "Mô tả 30", en: "Description 30", zh: "描述 30" },
    sourceBook: "Source 30",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["History"]
    },
    defensiveStrategy: { vi: "Chiến lược 30", en: "Strategy 30", zh: "策略 30" }
  },
  {
    id: "technique-31",
    title: { vi: "Kỹ thuật 31", en: "Technique 31", zh: "技术 31" },
    description: { vi: "Mô tả 31", en: "Description 31", zh: "描述 31" },
    sourceBook: "Source 31",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Writing"]
    },
    defensiveStrategy: { vi: "Chiến lược 31", en: "Strategy 31", zh: "策略 31" }
  },
  {
    id: "technique-32",
    title: { vi: "Kỹ thuật 32", en: "Technique 32", zh: "技术 32" },
    description: { vi: "Mô tả 32", en: "Description 32", zh: "描述 32" },
    sourceBook: "Source 32",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Painting"]
    },
    defensiveStrategy: { vi: "Chiến lược 32", en: "Strategy 32", zh: "策略 32" }
  },
  {
    id: "technique-33",
    title: { vi: "Kỹ thuật 33", en: "Technique 33", zh: "技术 33" },
    description: { vi: "Mô tả 33", en: "Description 33", zh: "描述 33" },
    sourceBook: "Source 33",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Dancing"]
    },
    defensiveStrategy: { vi: "Chiến lược 33", en: "Strategy 33", zh: "策略 33" }
  },
  {
    id: "technique-34",
    title: { vi: "Kỹ thuật 34", en: "Technique 34", zh: "技术 34" },
    description: { vi: "Mô tả 34", en: "Description 34", zh: "描述 34" },
    sourceBook: "Source 34",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Yoga"]
    },
    defensiveStrategy: { vi: "Chiến lược 34", en: "Strategy 34", zh: "策略 34" }
  },
  {
    id: "technique-35",
    title: { vi: "Kỹ thuật 35", en: "Technique 35", zh: "技术 35" },
    description: { vi: "Mô tả 35", en: "Description 35", zh: "描述 35" },
    sourceBook: "Source 35",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Gardening"]
    },
    defensiveStrategy: { vi: "Chiến lược 35", en: "Strategy 35", zh: "策略 35" }
  },
  {
    id: "technique-36",
    title: { vi: "Kỹ thuật 36", en: "Technique 36", zh: "技术 36" },
    description: { vi: "Mô tả 36", en: "Description 36", zh: "描述 36" },
    sourceBook: "Source 36",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Fishing"]
    },
    defensiveStrategy: { vi: "Chiến lược 36", en: "Strategy 36", zh: "策略 36" }
  },
  {
    id: "technique-37",
    title: { vi: "Kỹ thuật 37", en: "Technique 37", zh: "技术 37" },
    description: { vi: "Mô tả 37", en: "Description 37", zh: "描述 37" },
    sourceBook: "Source 37",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Hiking"]
    },
    defensiveStrategy: { vi: "Chiến lược 37", en: "Strategy 37", zh: "策略 37" }
  },
  {
    id: "technique-38",
    title: { vi: "Kỹ thuật 38", en: "Technique 38", zh: "技术 38" },
    description: { vi: "Mô tả 38", en: "Description 38", zh: "描述 38" },
    sourceBook: "Source 38",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Swimming"]
    },
    defensiveStrategy: { vi: "Chiến lược 38", en: "Strategy 38", zh: "策略 38" }
  },
  {
    id: "technique-39",
    title: { vi: "Kỹ thuật 39", en: "Technique 39", zh: "技术 39" },
    description: { vi: "Mô tả 39", en: "Description 39", zh: "描述 39" },
    sourceBook: "Source 39",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Cycling"]
    },
    defensiveStrategy: { vi: "Chiến lược 39", en: "Strategy 39", zh: "策略 39" }
  },
  {
    id: "technique-40",
    title: { vi: "Kỹ thuật 40", en: "Technique 40", zh: "技术 40" },
    description: { vi: "Mô tả 40", en: "Description 40", zh: "描述 40" },
    sourceBook: "Source 40",
    targetDemographics: {
      ageGroups: ["All"],
      genders: ["All"],
      professions: ["All"],
      religions: ["All"],
      politicalSystems: ["All"],
      interests: ["Running"]
    },
    defensiveStrategy: { vi: "Chiến lược 40", en: "Strategy 40", zh: "策略 40" }
  },
  {
    id: "technique-41",
    title: { vi: "Kỹ thuật 41: Khai thác sự tự ti", en: "Technique 41: Exploiting Self-Doubt", zh: "技术 41: 利用自卑" },
    description: { vi: "Mô tả 41", en: "Description 41", zh: "描述 41" },
    sourceBook: "Source 41",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Reading"] },
    defensiveStrategy: { vi: "Chiến lược 41", en: "Strategy 41", zh: "策略 41" }
  },
  {
    id: "technique-42",
    title: { vi: "Kỹ thuật 42: Tâng bốc trí tuệ", en: "Technique 42: Flattering Intellect", zh: "技术 42: 奉承智慧" },
    description: { vi: "Mô tả 42", en: "Description 42", zh: "描述 42" },
    sourceBook: "Source 42",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Music"] },
    defensiveStrategy: { vi: "Chiến lược 42", en: "Strategy 42", zh: "策略 42" }
  },
  {
    id: "technique-43",
    title: { vi: "Kỹ thuật 43: Xây dựng hình ảnh hào quang", en: "Technique 43: Building Halo Image", zh: "技术 43: 建立光环形象" },
    description: { vi: "Mô tả 43", en: "Description 43", zh: "描述 43" },
    sourceBook: "Source 43",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Sports"] },
    defensiveStrategy: { vi: "Chiến lược 43", en: "Strategy 43", zh: "策略 43" }
  },
  {
    id: "technique-44",
    title: { vi: "Kỹ thuật 44: Cung cấp thông tin thiên kiến", en: "Technique 44: Providing Biased Info", zh: "技术 44: 提供偏见信息" },
    description: { vi: "Mô tả 44", en: "Description 44", zh: "描述 44" },
    sourceBook: "Source 44",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Art"] },
    defensiveStrategy: { vi: "Chiến lược 44", en: "Strategy 44", zh: "策略 44" }
  },
  {
    id: "technique-45",
    title: { vi: "Kỹ thuật 45: Thiết lập mỏ neo", en: "Technique 45: Establishing Anchor", zh: "技术 45: 建立锚点" },
    description: { vi: "Mô tả 45", en: "Description 45", zh: "描述 45" },
    sourceBook: "Source 45",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Cooking"] },
    defensiveStrategy: { vi: "Chiến lược 45", en: "Strategy 45", zh: "策略 45" }
  },
  {
    id: "technique-46",
    title: { vi: "Kỹ thuật 46: Tạo sự khan hiếm", en: "Technique 46: Creating Scarcity", zh: "技术 46: 创造稀缺性" },
    description: { vi: "Mô tả 46", en: "Description 46", zh: "描述 46" },
    sourceBook: "Source 46",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Travel"] },
    defensiveStrategy: { vi: "Chiến lược 46", en: "Strategy 46", zh: "策略 46" }
  },
  {
    id: "technique-47",
    title: { vi: "Kỹ thuật 47: Tạo sự phụ thuộc cảm xúc", en: "Technique 47: Creating Emotional Dependency", zh: "技术 47: 创造情感依赖" },
    description: { vi: "Mô tả 47", en: "Description 47", zh: "描述 47" },
    sourceBook: "Source 47",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Gaming"] },
    defensiveStrategy: { vi: "Chiến lược 47", en: "Strategy 47", zh: "策略 47" }
  },
  {
    id: "technique-48",
    title: { vi: "Kỹ thuật 48", en: "Technique 48", zh: "技术 48" },
    description: { vi: "Mô tả 48", en: "Description 48", zh: "描述 48" },
    sourceBook: "Source 48",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Technology"] },
    defensiveStrategy: { vi: "Chiến lược 48", en: "Strategy 48", zh: "策略 48" }
  },
  {
    id: "technique-49",
    title: { vi: "Kỹ thuật 49", en: "Technique 49", zh: "技术 49" },
    description: { vi: "Mô tả 49", en: "Description 49", zh: "描述 49" },
    sourceBook: "Source 49",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Science"] },
    defensiveStrategy: { vi: "Chiến lược 49", en: "Strategy 49", zh: "策略 49" }
  },
  {
    id: "technique-50",
    title: { vi: "Kỹ thuật 50", en: "Technique 50", zh: "技术 50" },
    description: { vi: "Mô tả 50", en: "Description 50", zh: "描述 50" },
    sourceBook: "Source 50",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["History"] },
    defensiveStrategy: { vi: "Chiến lược 50", en: "Strategy 50", zh: "策略 50" }
  },
  {
    id: "technique-51",
    title: { vi: "Kỹ thuật 51", en: "Technique 51", zh: "技术 51" },
    description: { vi: "Mô tả 51", en: "Description 51", zh: "描述 51" },
    sourceBook: "Source 51",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Writing"] },
    defensiveStrategy: { vi: "Chiến lược 51", en: "Strategy 51", zh: "策略 51" }
  },
  {
    id: "technique-52",
    title: { vi: "Kỹ thuật 52", en: "Technique 52", zh: "技术 52" },
    description: { vi: "Mô tả 52", en: "Description 52", zh: "描述 52" },
    sourceBook: "Source 52",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Painting"] },
    defensiveStrategy: { vi: "Chiến lược 52", en: "Strategy 52", zh: "策略 52" }
  },
  {
    id: "technique-53",
    title: { vi: "Kỹ thuật 53", en: "Technique 53", zh: "技术 53" },
    description: { vi: "Mô tả 53", en: "Description 53", zh: "描述 53" },
    sourceBook: "Source 53",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Dancing"] },
    defensiveStrategy: { vi: "Chiến lược 53", en: "Strategy 53", zh: "策略 53" }
  },
  {
    id: "technique-54",
    title: { vi: "Kỹ thuật 54", en: "Technique 54", zh: "技术 54" },
    description: { vi: "Mô tả 54", en: "Description 54", zh: "描述 54" },
    sourceBook: "Source 54",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Yoga"] },
    defensiveStrategy: { vi: "Chiến lược 54", en: "Strategy 54", zh: "策略 54" }
  },
  {
    id: "technique-55",
    title: { vi: "Kỹ thuật 55", en: "Technique 55", zh: "技术 55" },
    description: { vi: "Mô tả 55", en: "Description 55", zh: "描述 55" },
    sourceBook: "Source 55",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Gardening"] },
    defensiveStrategy: { vi: "Chiến lược 55", en: "Strategy 55", zh: "策略 55" }
  },
  {
    id: "technique-56",
    title: { vi: "Kỹ thuật 56", en: "Technique 56", zh: "技术 56" },
    description: { vi: "Mô tả 56", en: "Description 56", zh: "描述 56" },
    sourceBook: "Source 56",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Fishing"] },
    defensiveStrategy: { vi: "Chiến lược 56", en: "Strategy 56", zh: "策略 56" }
  },
  {
    id: "technique-57",
    title: { vi: "Kỹ thuật 57", en: "Technique 57", zh: "技术 57" },
    description: { vi: "Mô tả 57", en: "Description 57", zh: "描述 57" },
    sourceBook: "Source 57",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Hiking"] },
    defensiveStrategy: { vi: "Chiến lược 57", en: "Strategy 57", zh: "策略 57" }
  },
  {
    id: "technique-58",
    title: { vi: "Kỹ thuật 58", en: "Technique 58", zh: "技术 58" },
    description: { vi: "Mô tả 58", en: "Description 58", zh: "描述 58" },
    sourceBook: "Source 58",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Swimming"] },
    defensiveStrategy: { vi: "Chiến lược 58", en: "Strategy 58", zh: "策略 58" }
  },
  {
    id: "technique-59",
    title: { vi: "Kỹ thuật 59", en: "Technique 59", zh: "技术 59" },
    description: { vi: "Mô tả 59", en: "Description 59", zh: "描述 59" },
    sourceBook: "Source 59",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["All"], religions: ["All"], politicalSystems: ["All"], interests: ["Cycling"] },
    defensiveStrategy: { vi: "Chiến lược 59", en: "Strategy 59", zh: "策略 59" }
  },
  {
    id: "technique-61",
    title: { vi: "Kỹ thuật 61", en: "Technique 61", zh: "技术 61" },
    description: { vi: "Mô tả 61", en: "Description 61", zh: "描述 61" },
    sourceBook: "Source 61",
    targetDemographics: { ageGroups: ["18-25"], genders: ["All"], professions: ["Student"], religions: ["None"], politicalSystems: ["Capitalism"], interests: ["Gaming"] },
    defensiveStrategy: { vi: "Chiến lược 61", en: "Strategy 61", zh: "策略 61" }
  },
  {
    id: "technique-62",
    title: { vi: "Kỹ thuật 62", en: "Technique 62", zh: "技术 62" },
    description: { vi: "Mô tả 62", en: "Description 62", zh: "描述 62" },
    sourceBook: "Source 62",
    targetDemographics: { ageGroups: ["26-40"], genders: ["Female"], professions: ["Marketing"], religions: ["Buddhism"], politicalSystems: ["Socialism"], interests: ["Yoga"] },
    defensiveStrategy: { vi: "Chiến lược 62", en: "Strategy 62", zh: "策略 62" }
  },
  {
    id: "technique-63",
    title: { vi: "Kỹ thuật 63", en: "Technique 63", zh: "技术 63" },
    description: { vi: "Mô tả 63", en: "Description 63", zh: "描述 63" },
    sourceBook: "Source 63",
    targetDemographics: { ageGroups: ["41-60"], genders: ["Male"], professions: ["Management"], religions: ["Christianity"], politicalSystems: ["Capitalism"], interests: ["Investing"] },
    defensiveStrategy: { vi: "Chiến lược 63", en: "Strategy 63", zh: "策略 63" }
  },
  {
    id: "technique-64",
    title: { vi: "Kỹ thuật 64", en: "Technique 64", zh: "技术 64" },
    description: { vi: "Mô tả 64", en: "Description 64", zh: "描述 64" },
    sourceBook: "Source 64",
    targetDemographics: { ageGroups: ["All"], genders: ["All"], professions: ["Tech"], religions: ["None"], politicalSystems: ["Capitalism"], interests: ["Tech"] },
    defensiveStrategy: { vi: "Chiến lược 64", en: "Strategy 64", zh: "策略 64" }
  },
  {
    id: "technique-65",
    title: { vi: "Kỹ thuật 65", en: "Technique 65", zh: "技术 65" },
    description: { vi: "Mô tả 65", en: "Description 65", zh: "描述 65" },
    sourceBook: "Source 65",
    targetDemographics: { ageGroups: ["18-25"], genders: ["All"], professions: ["Student"], religions: ["None"], politicalSystems: ["Socialism"], interests: ["Social Media"] },
    defensiveStrategy: { vi: "Chiến lược 65", en: "Strategy 65", zh: "策略 65" }
  },
  {
    id: 't-11',
    title: { vi: 'Kỹ thuật "Mỏ neo" (Anchoring)', en: 'Anchoring Technique', zh: '锚定技术' },
    description: { 
      vi: 'Đưa ra một con số hoặc thông tin đầu tiên để làm mốc so sánh cho các thông tin sau.', 
      en: 'Providing the first piece of information to serve as a reference point for subsequent info.', 
      zh: '提供第一条信息作为后续信息的参考点。' 
    },
    sourceBook: 'Thinking, Fast and Slow',
    targetDemographics: {
      ageGroups: ['25-60'],
      genders: ['All'],
      professions: ['sales', 'management', 'tech'],
      religions: ['All'],
      politicalSystems: ['capitalism'],
      interests: ['finance', 'shopping']
    },
    defensiveStrategy: { vi: 'Luôn tự hỏi giá trị thực tế của vật phẩm trước khi nghe giá đề xuất.', en: 'Always ask yourself the actual value of the item before hearing the proposed price.', zh: '在听到建议价格之前，始终询问自己物品的实际价值。' }
  },
  {
    id: 't-12',
    title: { vi: 'Kỹ thuật "Mưa dầm thấm lâu"', en: 'Drip Feed Technique', zh: '滴灌技术' },
    description: { 
      vi: 'Lặp đi lặp lại một thông điệp nhỏ trong thời gian dài để thay đổi tư duy.', 
      en: 'Repeating a small message over a long period to change mindset.', 
      zh: '长期重复一条小信息以改变心态。' 
    },
    sourceBook: 'Propaganda',
    targetDemographics: {
      ageGroups: ['All'],
      genders: ['All'],
      professions: ['All'],
      religions: ['All'],
      politicalSystems: ['socialism', 'capitalism'],
      interests: ['social media', 'news']
    },
    defensiveStrategy: { vi: 'Đa dạng hóa nguồn tin và kiểm chứng thông tin độc lập.', en: 'Diversify news sources and verify information independently.', zh: '多元化新闻来源并独立验证信息。' }
  },
  {
    id: 't-13',
    title: { vi: 'Kỹ thuật "Tạo sự khan hiếm giả"', en: 'Artificial Scarcity', zh: '人为稀缺' },
    description: { 
      vi: 'Tạo ra cảm giác hàng hóa hoặc cơ hội sắp hết để thúc đẩy quyết định nhanh.', 
      en: 'Creating a sense that goods or opportunities are running out to prompt quick decisions.', 
      zh: '营造商品或机会即将耗尽的感觉，以促使快速做出决定。' 
    },
    sourceBook: 'Influence: The Psychology of Persuasion',
    targetDemographics: {
      ageGroups: ['18-45'],
      genders: ['All'],
      professions: ['sales', 'marketing'],
      religions: ['All'],
      politicalSystems: ['capitalism'],
      interests: ['shopping', 'fashion', 'tech']
    },
    defensiveStrategy: { vi: 'Dừng lại 5 phút để suy nghĩ xem mình có thực sự cần nó không.', en: 'Stop for 5 minutes to think if you really need it.', zh: '停下来 5 分钟，想想你是否真的需要它。' }
  },
  {
    id: 't-14',
    title: { vi: 'Kỹ thuật "Đánh vào lòng trắc ẩn"', en: 'Appeal to Compassion', zh: '诉诸同情' },
    description: { 
      vi: 'Sử dụng những câu chuyện cảm động để làm yếu đi sự phòng thủ logic.', 
      en: 'Using touching stories to weaken logical defenses.', 
      zh: '利用感人的故事来削弱逻辑防御。' 
    },
    sourceBook: 'The Art of Seduction',
    targetDemographics: {
      ageGroups: ['All'],
      genders: ['female'],
      professions: ['education', 'medical', 'customerService'],
      religions: ['christianity', 'buddhism'],
      politicalSystems: ['All'],
      interests: ['charity', 'family']
    },
    defensiveStrategy: { vi: 'Tách biệt cảm xúc và hành động thực tế cần thực hiện.', en: 'Separate emotions from the actual actions that need to be taken.', zh: '将情绪与需要采取的实际行动分开。' }
  },
  {
    id: 't-15',
    title: { vi: 'Kỹ thuật "Gây nhiễu thông tin"', en: 'Information Overload', zh: '信息过载' },
    description: { 
      vi: 'Cung cấp quá nhiều thông tin khiến đối tượng mệt mỏi và dễ chấp nhận đề nghị.', 
      en: 'Providing too much information makes the subject tired and more likely to accept the offer.', 
      zh: '提供过多的信息会使受试者感到疲倦，并更有可能接受提议。' 
    },
    sourceBook: 'The 48 Laws of Power',
    targetDemographics: {
      ageGroups: ['25-60'],
      genders: ['All'],
      professions: ['tech', 'management', 'finance'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['news', 'business']
    },
    defensiveStrategy: { vi: 'Yêu cầu tóm tắt các điểm chính và xin thêm thời gian suy nghĩ.', en: 'Ask for a summary of key points and request more time to think.', zh: '要求总结要点并请求更多时间思考。' }
  },
  {
    id: 't-16',
    title: { vi: 'Kỹ thuật "Tự thú giả"', en: 'False Confession', zh: '虚假自白' },
    description: { 
      vi: 'Chia sẻ một bí mật nhỏ (giả) để tạo sự tin tưởng và yêu cầu đối phương đáp lại.', 
      en: 'Sharing a small (false) secret to build trust and ask the other party to reciprocate.', 
      zh: '分享一个小的（虚假的）秘密以建立信任，并要求对方给予回报。' 
    },
    sourceBook: 'Spy the Lie',
    targetDemographics: {
      ageGroups: ['18-45'],
      genders: ['All'],
      professions: ['All'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['socializing', 'dating']
    },
    defensiveStrategy: { vi: 'Cẩn thận với những thông tin cá nhân quá sớm trong mối quan hệ.', en: 'Be careful with personal information too early in a relationship.', zh: '在一段关系中过早地注意个人信息。' }
  },
  {
    id: 't-17',
    title: { vi: 'Kỹ thuật "Đóng vai nạn nhân"', en: 'Playing the Victim', zh: '扮演受害者' },
    description: { 
      vi: 'Tự nhận mình là nạn nhân để khơi gợi sự bảo vệ và nhượng bộ từ đối phương.', 
      en: 'Claiming to be a victim to evoke protection and concessions from the other party.', 
      zh: '声称自己是受害者，以引起对方的保护和让步。' 
    },
    sourceBook: 'Emotional Blackmail',
    targetDemographics: {
      ageGroups: ['All'],
      genders: ['All'],
      professions: ['All'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['family', 'relationships']
    },
    defensiveStrategy: { vi: 'Đánh giá sự việc dựa trên bằng chứng khách quan thay vì cảm xúc.', en: 'Evaluate the situation based on objective evidence rather than emotions.', zh: '根据客观证据而非情绪评估情况。' }
  },
  {
    id: 't-18',
    title: { vi: 'Kỹ thuật "Khen ngợi thái quá"', en: 'Love Bombing', zh: '爱心轰炸' },
    description: { 
      vi: 'Dồn dập khen ngợi và quan tâm để làm đối tượng mất cảnh giác.', 
      en: 'Overwhelming praise and attention to make the subject lower their guard.', 
      zh: '压倒性的赞美和关注，使受试者放松警惕。' 
    },
    sourceBook: 'Cults in Our Midst',
    targetDemographics: {
      ageGroups: ['15-30'],
      genders: ['All'],
      professions: ['All'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['socializing', 'spirituality']
    },
    defensiveStrategy: { vi: 'Giữ khoảng cách an toàn và quan sát hành động thực tế thay vì lời nói.', en: 'Keep a safe distance and observe actual actions instead of words.', zh: '保持安全距离，观察实际行动而非言语。' }
  },
  {
    id: 't-19',
    title: { vi: 'Kỹ thuật "Sử dụng uy tín giả"', en: 'Appeal to False Authority', zh: '诉诸虚假权威' },
    description: { 
      vi: 'Mượn danh nghĩa các chuyên gia hoặc tổ chức không liên quan để tăng sức thuyết phục.', 
      en: 'Borrowing the names of unrelated experts or organizations to increase persuasiveness.', 
      zh: '借用无关专家或组织的名字来增加说服力。' 
    },
    sourceBook: 'Bad Science',
    targetDemographics: {
      ageGroups: ['35-70'],
      genders: ['All'],
      professions: ['All'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['health', 'investment']
    },
    defensiveStrategy: { vi: 'Kiểm tra trình độ chuyên môn thực tế của người được trích dẫn.', en: 'Check the actual professional qualifications of the person cited.', zh: '检查被引用者的实际专业资格。' }
  },
  {
    id: 't-20',
    title: { vi: 'Kỹ thuật "Đe dọa ngầm"', en: 'Implicit Threat', zh: '隐性威胁' },
    description: { 
      vi: 'Gợi ý về những hậu quả xấu nếu không đồng ý mà không nói thẳng ra.', 
      en: 'Suggesting bad consequences if one does not agree without saying it directly.', 
      zh: '暗示如果不达成一致会产生不良后果，而不直接说明。' 
    },
    sourceBook: 'The Art of War',
    targetDemographics: {
      ageGroups: ['25-60'],
      genders: ['male'],
      professions: ['management', 'business'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['power', 'competition']
    },
    defensiveStrategy: { vi: 'Yêu cầu làm rõ các hậu quả và chuẩn bị phương án dự phòng.', en: 'Ask for clarification of consequences and prepare backup plans.', zh: '要求澄清后果并准备备份计划。' }
  },
  {
    id: 't-21',
    title: { vi: 'Kỹ thuật "Mồi nhử" (Decoy Effect)', en: 'Decoy Effect', zh: '诱饵效应' },
    description: { 
      vi: 'Đưa ra một lựa chọn thứ ba kém hấp dẫn để làm cho một trong hai lựa chọn ban đầu trở nên nổi bật hơn.', 
      en: 'Presenting a third, less attractive option to make one of the original two options stand out more.', 
      zh: '提供第三个不太吸引人的选项，使原来的两个选项之一更加突出。' 
    },
    defensiveStrategy: { 
      vi: 'So sánh trực tiếp các giá trị cốt lõi của hai lựa chọn chính, bỏ qua mồi nhử.', 
      en: 'Directly compare the core values of the two main options, ignoring the decoy.', 
      zh: '直接比较两个主要选项的核心价值，忽略诱饵。' 
    },
    targetDemographics: {
      ageGroups: ['All'],
      genders: ['All'],
      professions: ['sales', 'marketing'],
      religions: ['All'],
      politicalSystems: ['capitalism'],
      interests: ['shopping', 'finance']
    }
  },
  {
    id: 't-22',
    title: { vi: 'Kỹ thuật "Đóng khung" (Framing)', en: 'Framing', zh: '框架效应' },
    description: { 
      vi: 'Trình bày thông tin theo cách nhấn mạnh vào lợi ích hoặc mất mát để thay đổi nhận thức.', 
      en: 'Presenting information in a way that emphasizes gains or losses to change perception.', 
      zh: '以强调收益或损失的方式呈现信息，以改变认知。' 
    },
    defensiveStrategy: { 
      vi: 'Thử diễn đạt lại thông tin theo cách ngược lại để xem cảm xúc có thay đổi không.', 
      en: 'Try rephrasing the information in the opposite way to see if emotions change.', 
      zh: '尝试以相反的方式重新表述信息，看看情绪是否会发生变化。' 
    },
    targetDemographics: {
      ageGroups: ['All'],
      genders: ['All'],
      professions: ['media', 'legal', 'management'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['politics', 'news']
    }
  },
  {
    id: 't-23',
    title: { vi: 'Kỹ thuật "Sự khan hiếm giả tạo" (Artificial Scarcity)', en: 'Artificial Scarcity', zh: '人为稀缺' },
    description: { 
      vi: 'Tạo ra cảm giác rằng một thứ gì đó sắp hết hoặc chỉ có trong thời gian ngắn để thúc đẩy hành động nhanh.', 
      en: 'Creating a sense that something is running out or only available for a short time to prompt quick action.', 
      zh: '营造出某种东西即将耗尽或仅在短时间内可用的感觉，以促使快速行动。' 
    },
    defensiveStrategy: { 
      vi: 'Tự hỏi: "Nếu thứ này có sẵn mãi mãi, mình có thực sự cần nó ngay bây giờ không?"', 
      en: 'Ask yourself: "If this were available forever, would I really need it right now?"', 
      zh: '问问自己：“如果这个东西永远可用，我现在真的需要它吗？”' 
    },
    targetDemographics: {
      ageGroups: ['18-45'],
      genders: ['All'],
      professions: ['sales', 'marketing'],
      religions: ['All'],
      politicalSystems: ['capitalism'],
      interests: ['shopping', 'tech']
    }
  },
  {
    id: 't-24',
    title: { vi: 'Kỹ thuật "Thẩm quyền giả" (False Authority)', en: 'False Authority', zh: '虚假权威' },
    description: { 
      vi: 'Sử dụng hình ảnh hoặc danh xưng có vẻ uy tín (nhưng không liên quan) để thuyết phục.', 
      en: 'Using images or titles that seem prestigious (but are irrelevant) to persuade.', 
      zh: '使用看起来很有声望（但无关紧要）的图像或头衔来劝说。' 
    },
    defensiveStrategy: { 
      vi: 'Kiểm tra chuyên môn thực sự của người đó trong lĩnh vực họ đang nói.', 
      en: 'Check the person\'s actual expertise in the field they are talking about.', 
      zh: '检查该人在其所谈论领域的实际专业知识。' 
    },
    targetDemographics: {
      ageGroups: ['45-100'],
      genders: ['All'],
      professions: ['All'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['health', 'finance']
    }
  },
  {
    id: 't-25',
    title: { vi: 'Kỹ thuật "Gây nhiễu" (Information Overload)', en: 'Information Overload', zh: '信息过载' },
    description: { 
      vi: 'Cung cấp quá nhiều thông tin phức tạp để làm đối phương mệt mỏi và dễ dàng chấp nhận đề nghị.', 
      en: 'Providing too much complex information to tire the opponent and make them easily accept the offer.', 
      zh: '提供过多的复杂信息，使对方感到疲劳，从而轻易接受提议。' 
    },
    defensiveStrategy: { 
      vi: 'Yêu cầu tóm tắt các điểm chính và xin thêm thời gian để nghiên cứu kỹ.', 
      en: 'Ask for a summary of the main points and request more time to study carefully.', 
      zh: '要求总结要点，并请求更多时间仔细研究。' 
    },
    targetDemographics: {
      ageGroups: ['25-60'],
      genders: ['All'],
      professions: ['legal', 'finance', 'tech'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['All']
    }
  },
  {
    id: 't-26',
    title: { vi: 'Kỹ thuật "Tình bạn giả tạo" (False Friendship)', en: 'False Friendship', zh: '虚假友谊' },
    description: { 
      vi: 'Cố tình tìm điểm chung hoặc khen ngợi quá mức để tạo lòng tin nhanh chóng.', 
      en: 'Intentionally finding common ground or over-praising to build trust quickly.', 
      zh: '故意寻找共同点或过度称赞，以快速建立信任。' 
    },
    defensiveStrategy: { 
      vi: 'Phân biệt giữa sự lịch thiệp và ý đồ thực sự đằng sau những lời khen.', 
      en: 'Distinguish between politeness and the real intent behind the compliments.', 
      zh: '区分礼貌和赞美背后的真实意图。' 
    },
    targetDemographics: {
      ageGroups: ['All'],
      genders: ['All'],
      professions: ['service', 'sales'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['socializing']
    }
  },
  {
    id: 't-27',
    title: { vi: 'Kỹ thuật "Hào quang" (Halo Effect)', en: 'Halo Effect', zh: '光环效应' },
    description: { 
      vi: 'Sử dụng một đặc điểm tích cực (như vẻ ngoài đẹp) để làm lu mờ các khuyết điểm khác.', 
      en: 'Using a positive trait (like good looks) to overshadow other flaws.', 
      zh: '利用一个积极的特征（如长得好看）来掩盖其他缺陷。' 
    },
    defensiveStrategy: { 
      vi: 'Đánh giá từng khía cạnh của vấn đề một cách độc lập, không để vẻ ngoài đánh lừa.', 
      en: 'Evaluate each aspect of the issue independently, don\'t let looks deceive you.', 
      zh: '独立评估问题的各个方面，不要让外表欺骗你。' 
    },
    targetDemographics: {
      ageGroups: ['15-35'],
      genders: ['All'],
      professions: ['media', 'creative'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['fashion', 'entertainment']
    }
  },
  {
    id: 't-28',
    title: { vi: 'Kỹ thuật "Lời tiên tri tự ứng nghiệm" (Self-Fulfilling Prophecy)', en: 'Self-Fulfilling Prophecy', zh: '自我实现预言' },
    description: { 
      vi: 'Gieo rắc một niềm tin vào tâm trí đối phương cho đến khi họ tự hành động để biến nó thành sự thật.', 
      en: 'Planting a belief in the opponent\'s mind until they act to make it come true.', 
      zh: '在对方心中播下一种信念，直到他们采取行动使其成真。' 
    },
    defensiveStrategy: { 
      vi: 'Luôn giữ tư duy phản biện về những nhận xét mang tính định kiến của người khác.', 
      en: 'Always maintain critical thinking about the biased comments of others.', 
      zh: '始终对他人的偏见言论保持批判性思维。' 
    },
    targetDemographics: {
      ageGroups: ['All'],
      genders: ['All'],
      professions: ['education', 'management'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['psychology']
    }
  },
  {
    id: 't-29',
    title: { vi: 'Kỹ thuật "Sự im lặng đáng sợ" (Strategic Silence)', en: 'Strategic Silence', zh: '战略性沉默' },
    description: { 
      vi: 'Im lặng sau khi đưa ra một đề nghị để đối phương cảm thấy lúng túng và tự đưa ra nhượng bộ.', 
      en: 'Remaining silent after making an offer to make the opponent feel awkward and offer concessions.', 
      zh: '在提出提议后保持沉默，使对方感到尴尬并做出让步。' 
    },
    defensiveStrategy: { 
      vi: 'Học cách chấp nhận sự im lặng và chờ đợi đối phương nói trước.', 
      en: 'Learn to accept silence and wait for the other person to speak first.', 
      zh: '学会接受沉默，等待对方先开口。' 
    },
    targetDemographics: {
      ageGroups: ['25-60'],
      genders: ['All'],
      professions: ['legal', 'management', 'sales'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['business']
    }
  },
  {
    id: 't-30',
    title: { vi: 'Kỹ thuật "Gây hấn thụ động" (Passive Aggression)', en: 'Passive Aggression', zh: '被动攻击' },
    description: { 
      vi: 'Sử dụng sự im lặng, trì hoãn hoặc mỉa mai để trừng phạt đối phương mà không cần đối đầu trực tiếp.', 
      en: 'Using silence, delay, or sarcasm to punish the opponent without direct confrontation.', 
      zh: '利用沉默、延迟或讽刺来惩罚对方，而无需直接对抗。' 
    },
    defensiveStrategy: { 
      vi: 'Yêu cầu đối thoại trực tiếp và rõ ràng về những gì đang xảy ra.', 
      en: 'Request direct and clear dialogue about what is happening.', 
      zh: '要求就正在发生的事情进行直接而清晰的对话。' 
    },
    targetDemographics: {
      ageGroups: ['All'],
      genders: ['All'],
      professions: ['office', 'hr'],
      religions: ['All'],
      politicalSystems: ['All'],
      interests: ['All']
    }
  }
];
