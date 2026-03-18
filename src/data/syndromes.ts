export interface Syndrome {
  id: string;
  name: { vi: string; en: string; zh: string };
  description: { vi: string; en: string; zh: string };
  example: { vi: string; en: string; zh: string };
  target: { vi: string; en: string; zh: string };
}

export const syndromes: Syndrome[] = [
  {
    id: "imposter-syndrome",
    name: { vi: "Hội chứng kẻ mạo danh", en: "Imposter Syndrome", zh: "冒充者综合症" },
    description: {
      vi: "Cảm giác rằng thành công của bản thân là do may mắn chứ không phải năng lực, luôn sợ bị phát hiện là 'kẻ lừa dối'.",
      en: "A psychological pattern in which an individual doubts their skills, talents, or accomplishments and has a persistent internalized fear of being exposed as a 'fraud'.",
      zh: "一种心理模式，个体怀疑自己的技能、天赋或成就，并持久地内化对被揭露为“骗子”的恐惧。"
    },
    example: {
      vi: "Một lập trình viên giỏi luôn nghĩ rằng mình chỉ gặp may khi giải quyết được các vấn đề khó.",
      en: "A high-achieving developer who believes they only solved a complex bug by luck.",
      zh: "一位成就卓著的开发人员认为他们只是凭运气解决了一个复杂的漏洞。"
    },
    target: {
      vi: "Những người thành đạt, sinh viên giỏi, người mới bắt đầu sự nghiệp.",
      en: "High achievers, students, early-career professionals.",
      zh: "高成就者、学生、职业生涯早期的专业人士。"
    }
  },
  {
    id: "dunning-kruger",
    name: { vi: "Hiệu ứng Dunning-Kruger", en: "Dunning-Kruger Effect", zh: "达克效应" },
    description: {
      vi: "Người có năng lực kém thường tự đánh giá quá cao khả năng của mình, trong khi người giỏi lại khiêm tốn.",
      en: "A cognitive bias in which people with limited competence in a particular domain overestimate their abilities.",
      zh: "一种认知偏差，即在特定领域能力有限的人会高估自己的能力。"
    },
    example: {
      vi: "Một người mới học lái xe nghĩ rằng mình đã có thể đua xe chuyên nghiệp.",
      en: "A beginner driver who thinks they are ready for professional racing.",
      zh: "一个刚学开车的人认为自己已经准备好参加职业赛车了。"
    },
    target: {
      vi: "Người mới bắt đầu, người thiếu kiến thức chuyên sâu nhưng tự tin thái quá.",
      en: "Beginners, individuals lacking deep knowledge but overly confident.",
      zh: "初学者，缺乏深度知识但过度自信的人。"
    }
  },
  {
    id: "halo-effect",
    name: { vi: "Hiệu ứng hào quang", en: "Halo Effect", zh: "光环效应" },
    description: {
      vi: "Xu hướng đánh giá tốt toàn bộ một người chỉ dựa trên một đặc điểm tích cực nổi bật (như ngoại hình).",
      en: "A cognitive bias where our overall impression of a person influences how we feel and think about their character.",
      zh: "一种认知偏差，我们对一个人的整体印象会影响我们对其性格的感受和看法。"
    },
    example: {
      vi: "Tin rằng một người đẹp trai thì chắc chắn là người tốt và thông minh.",
      en: "Believing that a handsome person must also be kind and intelligent.",
      zh: "相信一个英俊的人也一定善良和聪明。"
    },
    target: {
      vi: "Nhà tuyển dụng, người đang hẹn hò, công chúng nói chung.",
      en: "Recruiters, people in dating, the general public.",
      zh: "招聘人员、约会中的人、普通大众。"
    }
  },
  {
    id: "confirmation-bias",
    name: { vi: "Thiên kiến xác nhận", en: "Confirmation Bias", zh: "确认偏误" },
    description: {
      vi: "Chỉ chú ý và tin vào những thông tin củng cố cho quan điểm sẵn có của mình.",
      en: "The tendency to search for, interpret, favor, and recall information in a way that confirms one's prior beliefs.",
      zh: "倾向于以确认自己先前信念的方式搜索、解释、偏爱和回忆信息。"
    },
    example: {
      vi: "Chỉ đọc những tờ báo ủng hộ đảng phái chính trị mà mình yêu thích.",
      en: "Only reading news sources that support your preferred political party.",
      zh: "只阅读支持你喜欢的政党的报纸。"
    },
    target: {
      vi: "Tất cả mọi người, đặc biệt là trong các cuộc tranh luận chính trị hoặc tôn giáo.",
      en: "Everyone, especially in political or religious debates.",
      zh: "所有人，特别是在政治或宗教辩论中。"
    }
  },
  {
    id: "fomo",
    name: { vi: "Hội chứng sợ bỏ lỡ (FOMO)", en: "Fear of Missing Out", zh: "错失恐惧症" },
    description: {
      vi: "Nỗi lo sợ rằng người khác đang có những trải nghiệm thú vị mà mình không có.",
      en: "A pervasive apprehension that others might be having rewarding experiences from which one is absent.",
      zh: "一种普遍的忧虑，担心他人可能正在经历自己缺席的有益体验。"
    },
    example: {
      vi: "Luôn kiểm tra mạng xã hội vì sợ bỏ lỡ một tin tức hoặc sự kiện hot.",
      en: "Constantly checking social media for fear of missing a hot news item or event.",
      zh: "不断查看社交媒体，担心错过热门新闻或活动。"
    },
    target: {
      vi: "Người trẻ, người dùng mạng xã hội thường xuyên, nhà đầu tư tài chính.",
      en: "Young people, frequent social media users, financial investors.",
      zh: "年轻人、频繁使用社交媒体的人、金融投资者。"
    }
  },
  {
    id: "stockholm-syndrome",
    name: { vi: "Hội chứng Stockholm", en: "Stockholm Syndrome", zh: "斯德哥尔摩综合症" },
    description: {
      vi: "Nạn nhân nảy sinh tình cảm hoặc sự đồng cảm với kẻ bắt cóc hoặc kẻ ngược đãi mình.",
      en: "A psychological response where hostages or abuse victims develop an emotional bond with their captors or abusers.",
      zh: "一种心理反应，人质或虐待受害者与绑架者或虐待者建立情感纽带。"
    },
    example: {
      vi: "Một con tin bắt đầu bảo vệ và bào chữa cho hành động của kẻ bắt cóc.",
      en: "A hostage starts defending and justifying the actions of their kidnapper.",
      zh: "一名人质开始为绑架者的行为辩护和辩解。"
    },
    target: {
      vi: "Nạn nhân bị bắt cóc, người trong mối quan hệ độc hại bị kiểm soát.",
      en: "Kidnapping victims, individuals in controlling toxic relationships.",
      zh: "绑架受害者、处于受控有毒关系中的个体。"
    }
  },
  {
    id: "barnum-effect",
    name: { vi: "Hiệu ứng Barnum", en: "Barnum Effect", zh: "巴纳姆效应" },
    description: {
      vi: "Tin rằng những mô tả tính cách chung chung là dành riêng cho mình (thường thấy trong bói toán, tử vi).",
      en: "The phenomenon that occurs when individuals believe that personality descriptions apply specifically to them, despite the fact that the description is actually filled with information that applies to everyone.",
      zh: "当个人认为人格描述专门适用于他们时发生的现象，尽管该描述实际上充满了适用于每个人的信息。"
    },
    example: {
      vi: "Đọc tử vi thấy nói 'Bạn là người có lòng tốt nhưng đôi khi nóng nảy' và thấy rất đúng.",
      en: "Reading a horoscope that says 'You are kind but sometimes hot-tempered' and finding it very accurate.",
      zh: "阅读一份占星报告，上面写着“你很善良，但有时脾气暴躁”，并觉得非常准确。"
    },
    target: {
      vi: "Người tin vào chiêm tinh, bói toán, các bài trắc nghiệm tính cách trực tuyến.",
      en: "Believers in astrology, fortune-telling, online personality tests.",
      zh: "占星术、算命、在线人格测试的信徒。"
    }
  },
  {
    id: "zeigarnik-effect",
    name: { vi: "Hiệu ứng Zeigarnik", en: "Zeigarnik Effect", zh: "蔡加尼克效应" },
    description: {
      vi: "Xu hướng nhớ những việc chưa hoàn thành tốt hơn những việc đã xong.",
      en: "The tendency to remember uncompleted or interrupted tasks better than completed ones.",
      zh: "倾向于比完成的任务更好地记住未完成或中断的任务。"
    },
    example: {
      vi: "Luôn cảm thấy bứt rứt và nhớ mãi về một bộ phim bị cắt ngang giữa chừng.",
      en: "Feeling restless and constantly remembering a movie that was interrupted halfway.",
      zh: "感到不安并不断想起一部中途被打断的电影。"
    },
    target: {
      vi: "Học sinh, người làm việc theo dự án, người hay trì hoãn.",
      en: "Students, project-based workers, procrastinators.",
      zh: "学生、以项目为基础的工作者、拖延者。"
    }
  },
  {
    id: "spotlight-effect",
    name: { vi: "Hiệu ứng Spotlight", en: "Spotlight Effect", zh: "聚光灯效应" },
    description: {
      vi: "Tin rằng mọi người đang chú ý đến mình nhiều hơn thực tế.",
      en: "The tendency to overestimate how much others notice our appearance or behavior.",
      zh: "倾向于高估他人注意到我们的外表或行为的程度。"
    },
    example: {
      vi: "Lo lắng cả ngày vì một vết bẩn nhỏ trên áo mà thực ra chẳng ai để ý.",
      en: "Worrying all day about a small stain on your shirt that no one actually noticed.",
      zh: "整天担心衬衫上的一个小污点，而实际上没人在意。"
    },
    target: {
      vi: "Người có xu hướng lo âu xã hội, thanh thiếu niên.",
      en: "Individuals with social anxiety, teenagers.",
      zh: "有社交焦虑倾向的人、青少年。"
    }
  },
  {
    id: "ikea-effect",
    name: { vi: "Hiệu ứng IKEA", en: "IKEA Effect", zh: "宜家效应" },
    description: {
      vi: "Xu hướng đánh giá cao những thứ mà mình tự tay làm ra hoặc lắp ráp.",
      en: "A cognitive bias in which consumers place a disproportionately high value on products they partially created.",
      zh: "一种认知偏差，消费者对他们部分创造的产品赋予不成比例的高价值。"
    },
    example: {
      vi: "Thấy chiếc bàn mình tự lắp ráp đẹp và bền hơn hẳn những chiếc bàn mua sẵn.",
      en: "Finding the table you assembled yourself much more beautiful and durable than pre-made ones.",
      zh: "觉得你自己组装的桌子比现成的桌子更漂亮、更耐用。"
    },
    target: {
      vi: "Người thích làm đồ thủ công (DIY), khách hàng của các hãng đồ tự lắp ráp.",
      en: "DIY enthusiasts, customers of self-assembly brands.",
      zh: "DIY 爱好者、自行组装品牌的客户。"
    }
  },
  {
    id: "sunk-cost-fallacy",
    name: { vi: "Thiên kiến chi phí chìm", en: "Sunk Cost Fallacy", zh: "沉没成本谬误" },
    description: {
      vi: "Tiếp tục đầu tư vào một việc gì đó chỉ vì đã bỏ ra quá nhiều công sức/tiền bạc trước đó, dù biết nó không còn hiệu quả.",
      en: "The phenomenon where a person is reluctant to abandon a strategy or course of action because they have invested heavily in it, even when it is clear that abandonment would be more beneficial.",
      zh: "当一个人不愿放弃某种策略或行动方案时发生的现象，因为他们已经在其中投入了大量资金，即使很明显放弃会更有利。"
    },
    example: {
      vi: "Cố xem hết một bộ phim dở tệ chỉ vì đã lỡ mua vé.",
      en: "Forcing yourself to finish a terrible movie just because you already bought the ticket.",
      zh: "仅仅因为你已经买了票就强迫自己看完一部糟糕的电影。"
    },
    target: {
      vi: "Nhà đầu tư, người trong các mối quan hệ lâu năm nhưng không hạnh phúc.",
      en: "Investors, individuals in long-term but unhappy relationships.",
      zh: "投资者、处于长期但不幸福关系中的个人。"
    }
  },
  {
    id: "bystander-effect",
    name: { vi: "Hiệu ứng người ngoài cuộc", en: "Bystander Effect", zh: "旁观者效应" },
    description: {
      vi: "Càng có nhiều người chứng kiến một vụ tai nạn thì khả năng có người giúp đỡ càng thấp.",
      en: "A social psychological theory that states that individuals are less likely to offer help to a victim when there are other people present.",
      zh: "一种社会心理学理论，指出当有其他人在场时，个人不太可能向受害者提供帮助。"
    },
    example: {
      vi: "Thấy một người bị ngã xe trên phố đông đúc nhưng ai cũng nghĩ 'chắc sẽ có người khác giúp'.",
      en: "Seeing someone fall off their bike on a busy street but everyone thinking 'someone else will help'.",
      zh: "在繁忙的街道上看到有人从自行车上摔下来，但每个人都想“会有别人帮忙的”。"
    },
    target: {
      vi: "Đám đông ở nơi công cộng.",
      en: "Crowds in public places.",
      zh: "公共场所的人群。"
    }
  },
  {
    id: "anchoring-effect",
    name: { vi: "Hiệu ứng mỏ neo", en: "Anchoring Effect", zh: "锚定效应" },
    description: {
      vi: "Dựa quá nhiều vào mẩu thông tin đầu tiên nhận được khi đưa ra quyết định.",
      en: "A cognitive bias where an individual relies too heavily on an initial piece of information offered (the 'anchor') when making decisions.",
      zh: "一种认知偏差，个人在做决定时过分依赖所提供的第一条信息（“锚”）。"
    },
    example: {
      vi: "Một món đồ giá 1 triệu giảm còn 500k khiến bạn thấy rẻ, dù giá trị thực chỉ 200k.",
      en: "An item priced at $100 reduced to $50 makes you feel it's cheap, even if its real value is only $20.",
      zh: "一件原价 100 美元的商品降价到 50 美元会让你觉得它很便宜，即使它的真实价值只有 20 美元。"
    },
    target: {
      vi: "Người mua sắm, người đàm phán lương.",
      en: "Shoppers, salary negotiators.",
      zh: "购物者、薪资谈判者。"
    }
  },
  {
    id: "availability-heuristic",
    name: { vi: "Thiên kiến sẵn có", en: "Availability Heuristic", zh: "可得性启发" },
    description: {
      vi: "Đánh giá xác suất của một sự kiện dựa trên mức độ dễ dàng nhớ lại các ví dụ tương tự.",
      en: "A mental shortcut that relies on immediate examples that come to a given person's mind when evaluating a specific topic.",
      zh: "一种心理捷径，在评估特定主题时依赖于特定人脑海中立即浮现的例子。"
    },
    example: {
      vi: "Sợ đi máy bay vì vừa xem tin tức về một vụ tai nạn máy bay, dù tỷ lệ tai nạn rất thấp.",
      en: "Being afraid to fly because you just saw news about a plane crash, even though the accident rate is very low.",
      zh: "因为刚看到有关飞机失事的新闻而不敢坐飞机，尽管事故率非常低。"
    },
    target: {
      vi: "Người hay xem tin tức giật gân, người hay lo âu.",
      en: "Consumers of sensational news, anxious individuals.",
      zh: "煽动性新闻的消费者、焦虑的人。"
    }
  },
  {
    id: "self-serving-bias",
    name: { vi: "Thiên kiến tự phục vụ", en: "Self-serving Bias", zh: "自利偏误" },
    description: {
      vi: "Vơ lấy thành công là do mình, nhưng đổ lỗi thất bại là do hoàn cảnh.",
      en: "The tendency to attribute positive events to one's own character but attribute negative events to external factors.",
      zh: "倾向于将积极事件归因于自己的性格，而将消极事件归因于外部因素。"
    },
    example: {
      vi: "Thi đậu thì bảo do mình giỏi, thi rớt thì bảo do đề khó hoặc thầy cô chấm gắt.",
      en: "Passing an exam and saying it's because you're smart, but failing and saying the test was too hard or the teacher was unfair.",
      zh: "考试通过了就说是自己聪明，考试没通过就说是题目太难或老师不公平。"
    },
    target: {
      vi: "Học sinh, vận động viên, nhân viên văn phòng.",
      en: "Students, athletes, office workers.",
      zh: "学生、运动员、办公室职员。"
    }
  },
  {
    id: "placebo-effect",
    name: { vi: "Hiệu ứng giả dược", en: "Placebo Effect", zh: "安慰剂效应" },
    description: {
      vi: "Sức khỏe cải thiện chỉ vì tin rằng mình đang được điều trị, dù phương thuốc không có tác dụng thực sự.",
      en: "A beneficial effect produced by a placebo drug or treatment, which cannot be attributed to the properties of the placebo itself, and must therefore be due to the patient's belief in that treatment.",
      zh: "由安慰剂药物或治疗产生的有益效果，不能归因于安慰剂本身的特性，因此必须归因于患者对该治疗的信念。"
    },
    example: {
      vi: "Uống một viên đường nhưng nghĩ là thuốc giảm đau và thấy hết đau đầu.",
      en: "Taking a sugar pill but thinking it's a painkiller and finding your headache gone.",
      zh: "吃了一颗糖丸，但以为是止痛药，发现头痛消失了。"
    },
    target: {
      vi: "Bệnh nhân, người tham gia thử nghiệm lâm sàng.",
      en: "Patients, participants in clinical trials.",
      zh: "患者、临床试验参与者。"
    }
  },
  {
    id: "nocebo-effect",
    name: { vi: "Hiệu ứng nocebo", en: "Nocebo Effect", zh: "反安慰剂效应" },
    description: {
      vi: "Gặp tác dụng phụ tiêu cực chỉ vì tin rằng phương thuốc đó có hại.",
      en: "A detrimental effect on health produced by psychological factors such as negative expectations of treatment or prognosis.",
      zh: "由心理因素（如对治疗或预后的负面预期）产生的对健康的有害影响。"
    },
    example: {
      vi: "Đọc tờ hướng dẫn thấy nói thuốc có thể gây buồn nôn và lập tức thấy buồn nôn dù chưa uống.",
      en: "Reading the instruction leaflet that says a drug can cause nausea and immediately feeling nauseous even before taking it.",
      zh: "阅读说明书，上面写着某种药物会导致恶心，甚至在服用之前就立即感到恶心。"
    },
    target: {
      vi: "Người hay lo lắng về sức khỏe (hypochondriacs).",
      en: "Individuals anxious about health (hypochondriacs).",
      zh: "对健康感到焦虑的人（疑病症患者）。"
    }
  },
  {
    id: "framing-effect",
    name: { vi: "Hiệu ứng khung", en: "Framing Effect", zh: "框架效应" },
    description: {
      vi: "Quyết định bị ảnh hưởng bởi cách thông tin được trình bày (tích cực hay tiêu cực).",
      en: "A cognitive bias where people decide on options based on whether the options are presented with positive or negative connotations.",
      zh: "一种认知偏差，人们根据选项是带有正面还是负面含义来决定选项。"
    },
    example: {
      vi: "Thích mua thịt '90% nạc' hơn là thịt '10% mỡ'.",
      en: "Preferring to buy '90% lean' meat over '10% fat' meat.",
      zh: "比起“10% 脂肪”的肉，更喜欢买“90% 瘦肉”的肉。"
    },
    target: {
      vi: "Người tiêu dùng, cử tri.",
      en: "Consumers, voters.",
      zh: "消费者、选民。"
    }
  },
  {
    id: "bandwagon-effect",
    name: { vi: "Hiệu ứng đám đông", en: "Bandwagon Effect", zh: "从众效应" },
    description: {
      vi: "Làm theo một việc gì đó chỉ vì thấy nhiều người khác cũng làm vậy.",
      en: "A phenomenon whereby the rate of uptake of beliefs, ideas, fads and trends increases the more that they have already been adopted by others.",
      zh: "一种现象，即信念、想法、时尚和趋势被他人采纳得越多，其采纳率就越高。"
    },
    example: {
      vi: "Mua một loại quần áo kỳ dị chỉ vì thấy nó đang là 'trend' trên mạng.",
      en: "Buying a weird piece of clothing just because it's a 'trend' online.",
      zh: "仅仅因为网上流行就买一件奇怪的衣服。"
    },
    target: {
      vi: "Thanh thiếu niên, người dùng mạng xã hội, nhà đầu tư.",
      en: "Teenagers, social media users, investors.",
      zh: "青少年、社交媒体用户、投资者。"
    }
  },
  {
    id: "pygmalion-effect",
    name: { vi: "Hiệu ứng Pygmalion", en: "Pygmalion Effect", zh: "皮格马利翁效应" },
    description: {
      vi: "Kỳ vọng cao dẫn đến kết quả tốt hơn (lời tiên tri tự ứng nghiệm).",
      en: "The phenomenon whereby higher expectations lead to an increase in performance.",
      zh: "高期望导致绩效提高的现象。"
    },
    example: {
      vi: "Thầy giáo tin học sinh này thông minh và quan tâm nhiều hơn, khiến học sinh đó thực sự giỏi lên.",
      en: "A teacher believes a student is smart and gives them more attention, causing the student to actually improve.",
      zh: "老师相信一个学生很聪明并给予他们更多关注，导致该学生实际上有所进步。"
    },
    target: {
      vi: "Giáo viên, quản lý, cha mẹ.",
      en: "Teachers, managers, parents.",
      zh: "教师、经理、父母。"
    }
  },
  {
    id: "golem-effect",
    name: { vi: "Hiệu ứng Golem", en: "Golem Effect", zh: "戈莱姆效应" },
    description: {
      vi: "Kỳ vọng thấp dẫn đến kết quả tồi tệ hơn.",
      en: "A psychological phenomenon in which lower expectations placed upon an individual lead to poorer performance.",
      zh: "一种心理现象，对个人的期望较低会导致绩效较差。"
    },
    example: {
      vi: "Sếp luôn nghĩ nhân viên này lười biếng, khiến nhân viên đó mất động lực và lười thật.",
      en: "A boss always thinks an employee is lazy, causing the employee to lose motivation and actually become lazy.",
      zh: "老板总是认为员工很懒，导致员工失去动力并真的变得很懒。"
    },
    target: {
      vi: "Nhân viên, học sinh bị gắn mác 'cá biệt'.",
      en: "Employees, students labeled as 'troublemakers'.",
      zh: "员工、被贴上“捣蛋鬼”标签的学生。"
    }
  },
  {
    id: "pratfall-effect",
    name: { vi: "Hiệu ứng Pratfall", en: "Pratfall Effect", zh: "糗事效应" },
    description: {
      vi: "Người giỏi mà mắc một lỗi nhỏ thì lại càng được yêu mến hơn.",
      en: "The tendency for interpersonal appeal to increase or decrease after an individual makes a mistake, depending on their perceived competence.",
      zh: "个人犯错后人际吸引力增加或减少的倾向，取决于他们被感知的胜任能力。"
    },
    example: {
      vi: "Một diễn giả cực giỏi lỡ làm đổ ly nước và mọi người thấy họ gần gũi, đáng yêu hơn.",
      en: "A brilliant speaker accidentally spills a glass of water and people find them more relatable and likable.",
      zh: "一位才华横溢的演讲者不小心洒了一杯水，人们觉得他们更亲切、更讨人喜欢。"
    },
    target: {
      vi: "Người nổi tiếng, lãnh đạo, người có năng lực cao.",
      en: "Celebrities, leaders, high-competence individuals.",
      zh: "名人、领导者、高能力人士。"
    }
  },
  {
    id: "ben-franklin-effect",
    name: { vi: "Hiệu ứng Ben Franklin", en: "Ben Franklin Effect", zh: "本·富兰克林效应" },
    description: {
      vi: "Người ta sẽ thích bạn hơn sau khi họ làm cho bạn một đặc ân.",
      en: "A proposed psychological phenomenon: a person who has already performed a favor for another is more likely to do another favor for the other than if they had received a favor from that person.",
      zh: "一种提议的心理现象：已经为另一个人提供过帮助的人比从那个人那里得到过帮助的人更有可能再次为另一个人提供帮助。"
    },
    example: {
      vi: "Nhờ một người không thích mình cho mượn một cuốn sách, sau đó họ bắt đầu có thiện cảm với mình.",
      en: "Asking someone who dislikes you to lend you a book; afterwards, they start to feel more positively toward you.",
      zh: "请一个不喜欢你的人借给你一本书；之后，他们开始对你产生更积极的感觉。"
    },
    target: {
      vi: "Người muốn cải thiện các mối quan hệ xã hội.",
      en: "Individuals looking to improve social relationships.",
      zh: "希望改善社交关系的个人。"
    }
  },
  {
    id: "just-world-hypothesis",
    name: { vi: "Giả thuyết thế giới công bằng", en: "Just-World Hypothesis", zh: "公正世界假设" },
    description: {
      vi: "Tin rằng thế giới luôn công bằng, 'ở hiền gặp lành', dẫn đến việc đổ lỗi cho nạn nhân.",
      en: "The cognitive bias that a person's actions are inherently inclined to bring morally fair and fitting consequences to them.",
      zh: "一种认知偏差，认为一个人的行为本质上倾向于给他们带来道德上公平和适当的后果。"
    },
    example: {
      vi: "Nghĩ rằng người nghèo là do họ lười biếng, hoặc nạn nhân bị trộm là do họ không cẩn thận.",
      en: "Thinking poor people are poor because they are lazy, or a theft victim was robbed because they were careless.",
      zh: "认为穷人之所以穷是因为他们懒惰，或者盗窃受害者被抢是因为他们粗心大意。"
    },
    target: {
      vi: "Công chúng, người hay phán xét.",
      en: "The general public, judgmental individuals.",
      zh: "公众、爱评判的人。"
    }
  },
  {
    id: "gamblers-fallacy",
    name: { vi: "Sai lầm của con bạc", en: "Gambler's Fallacy", zh: "赌徒谬误" },
    description: {
      vi: "Tin rằng nếu một sự kiện xảy ra nhiều lần trong quá khứ thì nó sẽ ít xảy ra hơn trong tương lai (và ngược lại).",
      en: "The mistaken belief that, if something happens more frequently than normal during a given period, it will happen less frequently in the future.",
      zh: "一种错误的信念，即如果某件事在特定时期内发生的频率高于正常水平，那么它在未来的发生频率就会降低。"
    },
    example: {
      vi: "Tung đồng xu ra mặt ngửa 5 lần liên tiếp và tin rằng lần thứ 6 chắc chắn phải là mặt sấp.",
      en: "Flipping a coin and getting heads 5 times in a row, then believing the 6th time must be tails.",
      zh: "掷硬币连续 5 次正面朝上，然后相信第 6 次一定是反面朝上。"
    },
    target: {
      vi: "Người chơi cờ bạc, nhà đầu tư tài chính.",
      en: "Gamblers, financial investors.",
      zh: "赌徒、金融投资者。"
    }
  },
  {
    id: "loss-aversion",
    name: { vi: "Tâm lý sợ mất mát", en: "Loss Aversion", zh: "损失厌恶" },
    description: {
      vi: "Nỗi đau khi mất 1 triệu đồng lớn hơn nhiều so với niềm vui khi nhặt được 1 triệu đồng.",
      en: "The tendency to prefer avoiding losses to acquiring equivalent gains.",
      zh: "倾向于避免损失而不是获得同等的收益。"
    },
    example: {
      vi: "Không dám đầu tư vì sợ lỗ, dù cơ hội sinh lời rất cao.",
      en: "Afraid to invest for fear of loss, even if the chance of profit is very high.",
      zh: "因为害怕损失而不敢投资，即使获利的机会很高。"
    },
    target: {
      vi: "Nhà đầu tư, người tiêu dùng.",
      en: "Investors, consumers.",
      zh: "投资者、消费者。"
    }
  },
  {
    id: "overconfidence-effect",
    name: { vi: "Hiệu ứng tự tin thái quá", en: "Overconfidence Effect", zh: "过度自信效应" },
    description: {
      vi: "Đánh giá quá cao độ chính xác của các kiến thức và phán đoán của bản thân.",
      en: "A bias in which a person's subjective confidence in his or her judgements is reliably greater than the objective accuracy of those judgements.",
      zh: "一种偏差，即一个人对其判断的主观信心可靠地大于这些判断的客观准确性。"
    },
    example: {
      vi: "80% tài xế tin rằng mình lái xe giỏi hơn mức trung bình (điều này là bất khả thi về mặt thống kê).",
      en: "80% of drivers believe they are better than average (which is statistically impossible).",
      zh: "80% 的司机相信他们比平均水平更好（这在统计上是不可能的）。"
    },
    target: {
      vi: "Chuyên gia, nhà quản lý, tài xế.",
      en: "Experts, managers, drivers.",
      zh: "专家、经理、司机。"
    }
  },
  {
    id: "hindsight-bias",
    name: { vi: "Thiên kiến nhận thức muộn", en: "Hindsight Bias", zh: "事后聪明偏误" },
    description: {
      vi: "Xu hướng tin rằng mình đã dự đoán đúng một sự kiện sau khi nó đã xảy ra ('Biết ngay mà!').",
      en: "The common tendency for people to perceive past events as having been more predictable than they actually were.",
      zh: "人们普遍倾向于认为过去的事件比实际情况更具可预测性。"
    },
    example: {
      vi: "Sau khi một đội bóng thắng, bạn nói 'Tôi đã biết chắc họ sẽ thắng' dù trước đó bạn rất phân vân.",
      en: "After a team wins, you say 'I knew they would win' even though you were uncertain before.",
      zh: "在一支球队获胜后，你会说“我早就知道他们会赢”，尽管你之前并不确定。"
    },
    target: {
      vi: "Nhà phân tích, người hâm mộ thể thao, nhà đầu tư.",
      en: "Analysts, sports fans, investors.",
      zh: "分析师、体育迷、投资者。"
    }
  },
  {
    id: "negativity-bias",
    name: { vi: "Thiên kiến tiêu cực", en: "Negativity Bias", zh: "负面偏误" },
    description: {
      vi: "Xu hướng chú ý và ghi nhớ những trải nghiệm tiêu cực nhiều hơn những trải nghiệm tích cực.",
      en: "The phenomenon by which humans have a greater recall of unpleasant memories compared with positive ones.",
      zh: "人类对不愉快记忆的回忆多于积极记忆的现象。"
    },
    example: {
      vi: "Nhận được 10 lời khen và 1 lời chê, bạn sẽ chỉ suy nghĩ mãi về lời chê đó.",
      en: "Receiving 10 compliments and 1 criticism, you will only think about that criticism.",
      zh: "收到 10 个赞美和 1 个批评，你只会一直想着那个批评。"
    },
    target: {
      vi: "Tất cả mọi người, đặc biệt là người nhạy cảm.",
      en: "Everyone, especially sensitive individuals.",
      zh: "所有人，特别是敏感的人。"
    }
  },
  {
    id: "spotlight-effect",
    name: { vi: "Hiệu ứng tiêu điểm", en: "Spotlight Effect", zh: "焦点效应" },
    description: {
      vi: "Tin rằng mọi người đang chú ý đến mình nhiều hơn thực tế.",
      en: "The phenomenon in which people tend to believe they are being noticed more than they really are.",
      zh: "人们倾向于相信自己受到的关注比实际受到的关注更多的现象。"
    },
    example: {
      vi: "Bạn lỡ làm đổ một chút cà phê lên áo và nghĩ rằng cả ngày hôm đó ai cũng nhìn vào vết bẩn đó.",
      en: "You accidentally spill a little coffee on your shirt and think everyone is staring at that stain all day.",
      zh: "你不小心在衬衫上洒了一点咖啡，然后觉得整天每个人都在盯着那个污渍看。"
    },
    target: {
      vi: "Người hay lo âu xã hội, thanh thiếu niên.",
      en: "Socially anxious individuals, teenagers.",
      zh: "社交焦虑者、青少年。"
    }
  },
  {
    id: "planning-fallacy",
    name: { vi: "Ngụy biện lập kế hoạch", en: "Planning Fallacy", zh: "规划谬误" },
    description: {
      vi: "Xu hướng đánh giá thấp thời gian cần thiết để hoàn thành một nhiệm vụ.",
      en: "A phenomenon in which predictions about how much time will be needed to complete a future task display an optimism bias and underestimate the time needed.",
      zh: "一种现象，即对完成未来任务所需时间的预测显示出乐观偏差，并低估了所需时间。"
    },
    example: {
      vi: "Nghĩ rằng viết xong báo cáo chỉ mất 2 tiếng nhưng thực tế mất cả ngày.",
      en: "Thinking it will only take 2 hours to write a report but it actually takes all day.",
      zh: "认为写一份报告只需要 2 小时，但实际上花了一整天。"
    },
    target: {
      vi: "Sinh viên, người đi làm, quản lý dự án.",
      en: "Students, employees, project managers.",
      zh: "学生、员工、项目经理。"
    }
  },
  {
    id: "optimism-bias",
    name: { vi: "Thiên kiến lạc quan", en: "Optimism Bias", zh: "乐观偏差" },
    description: {
      vi: "Tin rằng mình ít có nguy cơ gặp xui xẻo hơn người khác.",
      en: "A cognitive bias that causes someone to believe that they themselves are less likely to experience a negative event.",
      zh: "一种认知偏差，导致某人相信自己不太可能经历负面事件。"
    },
    example: {
      vi: "Hút thuốc nhưng nghĩ rằng mình sẽ không bị ung thư phổi như những người khác.",
      en: "Smoking but thinking you won't get lung cancer like others.",
      zh: "吸烟但认为自己不会像别人一样得肺癌。"
    },
    target: {
      vi: "Người trẻ tuổi, người hay mạo hiểm.",
      en: "Young people, risk-takers.",
      zh: "年轻人、冒险者。"
    }
  },
  {
    id: "pessimism-bias",
    name: { vi: "Thiên kiến bi quan", en: "Pessimism Bias", zh: "悲观偏差" },
    description: {
      vi: "Đánh giá quá cao khả năng xảy ra các sự kiện tiêu cực.",
      en: "A cognitive bias that causes people to overestimate the probability of negative things happening to them.",
      zh: "一种认知偏差，导致人们高估负面事件发生在自己身上的可能性。"
    },
    example: {
      vi: "Luôn nghĩ rằng dự án mới chắc chắn sẽ thất bại dù có chuẩn bị kỹ đến đâu.",
      en: "Always thinking a new project will definitely fail no matter how well prepared it is.",
      zh: "总是认为一个新项目肯定会失败，无论准备得多么充分。"
    },
    target: {
      vi: "Người bị trầm cảm, người hay lo âu.",
      en: "Depressed individuals, anxious individuals.",
      zh: "抑郁症患者、焦虑症患者。"
    }
  },
  {
    id: "declinism",
    name: { vi: "Thuyết suy đồi", en: "Declinism", zh: "衰落论" },
    description: {
      vi: "Tin rằng quá khứ luôn tốt đẹp hơn và tương lai đang ngày càng tệ đi.",
      en: "The belief that a society or institution is tending towards decline.",
      zh: "相信社会或机构正趋于衰落。"
    },
    example: {
      vi: "Luôn nói 'Thời của tôi ngày xưa tốt hơn bây giờ nhiều'.",
      en: "Always saying 'My time back then was much better than now'.",
      zh: "总是说“我那时的时光比现在好多了”。"
    },
    target: {
      vi: "Người lớn tuổi, người hoài cổ.",
      en: "Older people, nostalgic individuals.",
      zh: "老年人、怀旧的人。"
    }
  },
  {
    id: "justification-of-effort",
    name: { vi: "Biện minh cho nỗ lực", en: "Justification of Effort", zh: "努力正当化" },
    description: {
      vi: "Đánh giá cao một mục tiêu chỉ vì mình đã phải nỗ lực rất nhiều để đạt được nó.",
      en: "A person's tendency to attribute a value to an outcome, which they had to put effort into achieving, greater than the objective value of the outcome.",
      zh: "一个人倾向于将他们必须投入努力才能实现的结果赋予一个大于该结果客观价值的价值。"
    },
    example: {
      vi: "Vượt qua một kỳ thi tuyển cực kỳ khắc nghiệt khiến bạn thấy công ty đó tuyệt vời hơn thực tế.",
      en: "Passing an extremely tough entrance exam makes you feel the company is much better than it actually is.",
      zh: "通过极其严苛的人学考试会让你觉得那家公司比实际情况好得多。"
    },
    target: {
      vi: "Thành viên các tổ chức có quy trình tuyển chọn gắt gao.",
      en: "Members of organizations with strict selection processes.",
      zh: "具有严格选拔流程的组织的成员。"
    }
  },
  {
    id: "reactance",
    name: { vi: "Phản ứng ngược", en: "Reactance", zh: "逆反心理" },
    description: {
      vi: "Làm ngược lại những gì được bảo chỉ để bảo vệ quyền tự do lựa chọn của mình.",
      en: "An unpleasant motivational arousal that emerges when people experience a threat to or loss of their free behaviors.",
      zh: "当人们感到自由行为受到威胁或丧失时，产生的一种令人不快的动机唤醒。"
    },
    example: {
      vi: "Càng bị cấm yêu đương, các bạn trẻ càng muốn đến với nhau.",
      en: "The more young people are forbidden from dating, the more they want to be together.",
      zh: "年轻人越是被禁止约会，他们就越想在一起。"
    },
    target: {
      vi: "Thanh thiếu niên, người có cá tính mạnh.",
      en: "Teenagers, strong personalities.",
      zh: "青少年、个性强的人。"
    }
  },
  {
    id: "curse-of-knowledge",
    name: { vi: "Lời nguyền kiến thức", en: "Curse of Knowledge", zh: "知识的诅咒" },
    description: {
      vi: "Khi đã biết một điều gì đó, bạn rất khó tưởng tượng được cảm giác của người chưa biết nó.",
      en: "A cognitive bias that occurs when an individual, communicating with other individuals, unknowingly assumes that the others have the background to understand.",
      zh: "一种认知偏差，当一个人与其他个人交流时，不自觉地假设其他人具有理解的背景。"
    },
    example: {
      vi: "Một chuyên gia giải thích vấn đề chuyên môn bằng những từ ngữ quá khó hiểu cho người mới.",
      en: "An expert explaining a technical issue using terms that are too difficult for a beginner to understand.",
      zh: "专家使用对于初学者来说太难理解的术语来解释技术问题。"
    },
    target: {
      vi: "Giáo viên, chuyên gia, lãnh đạo.",
      en: "Teachers, experts, leaders.",
      zh: "教师、专家、领导者。"
    }
  },
  {
    id: "false-consensus-effect",
    name: { vi: "Hiệu ứng đồng thuận giả", en: "False Consensus Effect", zh: "虚假共识效应" },
    description: {
      vi: "Đánh giá quá cao mức độ mà người khác đồng ý với quan điểm của mình.",
      en: "An attributional type of cognitive bias whereby people tend to overestimate the extent to which their opinions, beliefs, preferences, values, and habits are normal and typical of those of others.",
      zh: "一种归因类型的认知偏差，人们倾向于高估自己的观点、信念、偏好、价值观和习惯在多大程度上是正常的，并且是他人典型的。"
    },
    example: {
      vi: "Bạn thích ăn cay và nghĩ rằng hầu hết mọi người cũng thích ăn cay giống mình.",
      en: "You like spicy food and think most people also like spicy food like you.",
      zh: "你喜欢吃辣，并认为大多数人也像你一样喜欢吃辣。"
    },
    target: {
      vi: "Người có quan điểm cực đoan, người ít giao tiếp xã hội.",
      en: "Individuals with extreme views, socially isolated individuals.",
      zh: "观点极端的人、社交孤立的人。"
    }
  },
  {
    id: "hostile-attribution-bias",
    name: { vi: "Thiên kiến quy kết thù địch", en: "Hostile Attribution Bias", zh: "敌对归因偏误" },
    description: {
      vi: "Giải thích những hành vi mơ hồ của người khác là có ý thù địch với mình.",
      en: "The tendency to interpret others' ambiguous behaviors as having hostile intent.",
      zh: "倾向于将他人模糊的行为解释为具有敌对意图。"
    },
    example: {
      vi: "Ai đó vô tình va vào bạn trên đường và bạn nghĩ họ đang cố tình gây sự.",
      en: "Someone accidentally bumps into you on the street and you think they are intentionally picking a fight.",
      zh: "有人在街上不小心撞到了你，你认为他们是故意挑衅。"
    },
    target: {
      vi: "Người hay gây gổ, người có tuổi thơ không hạnh phúc.",
      en: "Aggressive individuals, individuals with unhappy childhoods.",
      zh: "好斗的人、童年不快乐的人。"
    }
  },
  {
    id: "in-group-bias",
    name: { vi: "Thiên kiến nhóm trong", en: "In-group Bias", zh: "内群体偏好" },
    description: {
      vi: "Ưu tiên và đánh giá cao những người thuộc cùng nhóm với mình.",
      en: "A pattern of favoring members of one's own in-group over out-group members.",
      zh: "一种偏爱自己内群体成员而非外群体成员的模式。"
    },
    example: {
      vi: "Luôn cho rằng fan của đội bóng mình yêu thích là những người văn minh hơn fan đội khác.",
      en: "Always thinking fans of your favorite team are more civilized than fans of other teams.",
      zh: "总是认为你最喜欢的球队的球迷比其他球队的球迷更文明。"
    },
    target: {
      vi: "Người hâm mộ thể thao, thành viên các đảng phái, tôn giáo.",
      en: "Sports fans, members of political parties, religions.",
      zh: "体育迷、政党成员、宗教成员。"
    }
  },
  {
    id: "out-group-homogeneity-effect",
    name: { vi: "Hiệu ứng đồng nhất nhóm ngoài", en: "Out-group Homogeneity Effect", zh: "外群体同质性效应" },
    description: {
      vi: "Coi những người thuộc nhóm khác là 'tất cả đều giống nhau', trong khi nhóm mình thì đa dạng.",
      en: "One's perception of out-group members as more similar to one another than are in-group members.",
      zh: "一个人认为外群体成员比内群体成员彼此之间更相似。"
    },
    example: {
      vi: "Nghĩ rằng 'Tất cả những người nước X đều thô lỗ', nhưng thấy người nước mình có người này người kia.",
      en: "Thinking 'All people from country X are rude', but seeing people from your own country as diverse.",
      zh: "认为“X 国的人都很粗鲁”，但认为自己国家的人是多样化的。"
    },
    target: {
      vi: "Người có định kiến chủng tộc, quốc gia.",
      en: "Individuals with racial or national prejudices.",
      zh: "有种族或国家偏见的人。"
    }
  },
  {
    id: "fundamental-attribution-error",
    name: { vi: "Lỗi quy kết cơ bản", en: "Fundamental Attribution Error", zh: "基本归因错误" },
    description: {
      vi: "Giải thích hành vi của người khác là do tính cách của họ, mà lờ đi hoàn cảnh.",
      en: "The tendency for people to under-emphasize situational explanations for an individual's observed behavior while over-emphasizing dispositional and personality-based explanations.",
      zh: "人们倾向于低估对个人观察到的行为的情境解释，而过度强调基于性格和个性的解释。"
    },
    example: {
      vi: "Thấy một người đi muộn và nghĩ họ là kẻ lười biếng, mà không biết họ vừa gặp tai nạn.",
      en: "Seeing someone arrive late and thinking they are lazy, without knowing they just had an accident.",
      zh: "看到有人迟到就认为他们很懒，却不知道他们刚刚发生了意外。"
    },
    target: {
      vi: "Tất cả mọi người trong giao tiếp hàng ngày.",
      en: "Everyone in daily communication.",
      zh: "日常交流中的每个人。"
    }
  },
  {
    id: "actor-observer-bias",
    name: { vi: "Thiên kiến người thực hiện - người quan sát", en: "Actor-Observer Bias", zh: "行动者-观察者偏误" },
    description: {
      vi: "Giải thích lỗi của mình là do hoàn cảnh, nhưng lỗi của người khác là do tính cách.",
      en: "A tendency to attribute one's own actions to external causes while attributing other people's behaviors to internal causes.",
      zh: "倾向于将自己的行为归因于外部原因，而将他人的行为归因于内部原因。"
    },
    example: {
      vi: "Mình đi muộn là do tắc đường, người khác đi muộn là do họ không kỷ luật.",
      en: "I'm late because of traffic, others are late because they lack discipline.",
      zh: "我迟到是因为堵车，别人迟到是因为他们缺乏纪律。"
    },
    target: {
      vi: "Mọi người trong các tình huống mâu thuẫn.",
      en: "Everyone in conflict situations.",
      zh: "冲突局势中的每个人。"
    }
  },
  {
    id: "not-invented-here",
    name: { vi: "Hội chứng không phải do chúng ta tạo ra", en: "Not Invented Here", zh: "非我所创综合征" },
    description: {
      vi: "Từ chối sử dụng các ý tưởng hoặc sản phẩm từ bên ngoài chỉ vì nó không do mình làm ra.",
      en: "A stance adopted by social, corporate, or institutional cultures that avoid using or buying already existing products, research, standards, or knowledge because of their external origins.",
      zh: "社会、公司或机构文化采取的一种立场，即避免使用或购买已经存在的产品、研究、标准或知识，因为它们源自外部。"
    },
    example: {
      vi: "Một công ty phần mềm tự viết lại một thư viện có sẵn chỉ vì họ không tin tưởng code của người khác.",
      en: "A software company rewrites an existing library just because they don't trust others' code.",
      zh: "一家软件公司仅仅因为不信任别人的代码就重写了一个现有的库。"
    },
    target: {
      vi: "Lãnh đạo doanh nghiệp, kỹ sư.",
      en: "Business leaders, engineers.",
      zh: "业务领导者、工程师。"
    }
  },
  {
    id: "rosy-retrospection",
    name: { vi: "Hồi tưởng màu hồng", en: "Rosy Retrospection", zh: "美好回忆偏误" },
    description: {
      vi: "Nhớ về quá khứ một cách tích cực hơn thực tế.",
      en: "The psychological phenomenon of people sometimes judging the past disproportionately more positively than they judged the same event when it happened.",
      zh: "人们有时对过去的评价比事件发生时的评价更积极的心理现象。"
    },
    example: {
      vi: "Nhớ về kỳ nghỉ hè năm ngoái là 'tuyệt vời' dù lúc đó bạn đã phàn nàn rất nhiều về thời tiết.",
      en: "Remembering last summer's vacation as 'wonderful' even though you complained a lot about the weather at the time.",
      zh: "记得去年的暑假是“美好的”，尽管你当时对天气抱怨很多。"
    },
    target: {
      vi: "Người hay hoài niệm.",
      en: "Nostalgic individuals.",
      zh: "怀旧的人。"
    }
  },
  {
    id: "trolley-problem-bias",
    name: { vi: "Thiên kiến bài toán xe goòng", en: "Trolley Problem Bias", zh: "电车难题偏误" },
    description: {
      vi: "Xu hướng đưa ra các quyết định đạo đức khác nhau dựa trên mức độ trực tiếp của hành động.",
      en: "The tendency to make different moral judgments based on the directness of the action involved in a moral dilemma.",
      zh: "在道德困境中，根据所涉及行动的直接性做出不同道德判断的倾向。"
    },
    example: {
      vi: "Sẵn sàng gạt cần gạt để cứu 5 người, nhưng không sẵn sàng đẩy 1 người xuống để cứu 5 người.",
      en: "Willing to pull a lever to save 5 people, but unwilling to push 1 person to save 5 people.",
      zh: "愿意拉动杠杆救 5 个人，但不愿意推 1 个人救 5 个人。"
    },
    target: {
      vi: "Người nghiên cứu đạo đức, triết học.",
      en: "Ethics and philosophy researchers.",
      zh: "伦理学和哲学研究人员。"
    }
  },
  {
    id: "moral-luck",
    name: { vi: "May mắn đạo đức", en: "Moral Luck", zh: "道德运气" },
    description: {
      vi: "Đánh giá đạo đức của một người dựa trên kết quả của hành động, dù kết quả đó nằm ngoài tầm kiểm soát của họ.",
      en: "A situation in which a moral agent is assigned moral blame or praise for an action or its consequences even if it is clear that said agent did not have full control over either the action or its consequences.",
      zh: "道德主体因某项行动或其后果而被赋予道德谴责或赞扬的情况，即使很明显该主体并未完全控制该行动或其后果。"
    },
    example: {
      vi: "Hai người say rượu lái xe, một người về nhà an toàn, một người đâm chết người. Chúng ta chửi rủa người thứ hai thậm tệ hơn dù hành vi là như nhau.",
      en: "Two drunk drivers: one gets home safely, one kills someone. We condemn the second one much more harshly even though the behavior was the same.",
      zh: "两个醉酒司机：一个安全回家，一个撞死了人。尽管行为相同，我们对第二个人的谴责要严厉得多。"
    },
    target: {
      vi: "Hệ thống pháp luật, công chúng.",
      en: "Legal systems, the general public.",
      zh: "法律体系、公众。"
    }
  },
  {
    id: "survivorship-bias",
    name: { vi: "Thiên kiến người sống sót", en: "Survivorship Bias", zh: "幸存者偏差" },
    description: {
      vi: "Chỉ tập trung vào những người/vật đã 'sống sót' qua một quá trình và bỏ qua những người đã thất bại.",
      en: "The logical error of concentrating on the people or things that made it past some selection process and overlooking those that did not, typically because of their lack of visibility.",
      zh: "逻辑错误，即专注于通过某些选拔过程的人或事物，而忽视那些没有通过的人或事物，通常是因为他们缺乏可见性。"
    },
    example: {
      vi: "Nghe lời khuyên của các tỷ phú bỏ học mà quên rằng hàng triệu người bỏ học khác đang thất nghiệp.",
      en: "Listening to advice from billionaires who dropped out of school while forgetting that millions of other dropouts are unemployed.",
      zh: "听取辍学亿万富翁的建议，却忘记了数百万其他辍学者正在失业。"
    },
    target: {
      vi: "Doanh nhân, học sinh, nhà đầu tư.",
      en: "Entrepreneurs, students, investors.",
      zh: "企业家、学生、投资者。"
    }
  },
  {
    id: "zeigarnik-effect-2",
    name: { vi: "Hiệu ứng Zeigarnik (Nhắc lại)", en: "Zeigarnik Effect (Revisited)", zh: "蔡加尼克效应（重温）" },
    description: {
      vi: "Chúng ta nhớ những việc chưa hoàn thành tốt hơn những việc đã xong.",
      en: "The tendency to remember uncompleted or interrupted tasks better than completed ones.",
      zh: "倾向于记住未完成或中断的任务，而不是已完成的任务。"
    },
    example: {
      vi: "Bạn không thể quên được một công việc đang làm dở dù đã hết giờ làm.",
      en: "You can't forget a task you're halfway through even after work hours.",
      zh: "即使在下班后，你也无法忘记完成了一半的任务。"
    },
    target: {
      vi: "Người tham công tiếc việc, học sinh.",
      en: "Workaholics, students.",
      zh: "工作狂、学生。"
    }
  },
  {
    id: "ostrich-effect",
    name: { vi: "Hiệu ứng đà điểu", en: "Ostrich Effect", zh: "鸵鸟效应" },
    description: {
      vi: "Tránh né những thông tin tiêu cực bằng cách 'vùi đầu vào cát'.",
      en: "The attempt to avoid negative financial information by 'burying' one's head in the sand.",
      zh: "试图通过将头“埋”在沙子里来避免负面的财务信息。"
    },
    example: {
      vi: "Không dám mở xem sao kê ngân hàng vì biết mình đã tiêu quá nhiều tiền.",
      en: "Afraid to open your bank statement because you know you've spent too much money.",
      zh: "不敢打开银行对账单，因为你知道你花了太多的钱。"
    },
    target: {
      vi: "Người nợ nần, nhà đầu tư đang thua lỗ.",
      en: "People in debt, losing investors.",
      zh: "负债的人、亏损的投资者。"
    }
  },
  {
    id: "rhyme-as-reason-effect",
    name: { vi: "Hiệu ứng vần điệu", en: "Rhyme-as-reason Effect", zh: "韵律作为理由效应" },
    description: {
      vi: "Tin rằng một câu nói là đúng chỉ vì nó có vần điệu.",
      en: "A cognitive bias where a saying or aphorism is judged as more accurate or truthful when it is rewritten to rhyme.",
      zh: "一种认知偏差，当格言或警句被改写为押韵时，会被认为更准确或更真实。"
    },
    example: {
      vi: "Các câu tục ngữ có vần thường được tin tưởng tuyệt đối dù không có cơ sở khoa học.",
      en: "Rhyming proverbs are often trusted implicitly even without scientific basis.",
      zh: "押韵的谚语即使没有科学依据也常常被含蓄地信任。"
    },
    target: {
      vi: "Công chúng, người nghe quảng cáo.",
      en: "The general public, advertisement listeners.",
      zh: "公众、广告听众。"
    }
  },
  {
    id: "spacing-effect",
    name: { vi: "Hiệu ứng giãn cách", en: "Spacing Effect", zh: "间隔效应" },
    description: {
      vi: "Học tập hiệu quả hơn khi chia nhỏ thời gian và có khoảng nghỉ.",
      en: "The phenomenon whereby learning is greater when studying is spread out over time, as opposed to studying the same amount of content in a single session.",
      zh: "一种现象，即当学习在一段时间内分散进行时，学习效果会更好，而不是在一次会议中学习相同数量的内容。"
    },
    example: {
      vi: "Học mỗi ngày 30 phút trong 1 tuần tốt hơn học liên tục 5 tiếng trước kỳ thi.",
      en: "Studying 30 minutes a day for a week is better than studying 5 hours straight before an exam.",
      zh: "一周每天学习 30 分钟比在考试前连续学习 5 小时要好。"
    },
    target: {
      vi: "Học sinh, sinh viên.",
      en: "Students.",
      zh: "学生。"
    }
  },
  {
    id: "von-restorff-effect",
    name: { vi: "Hiệu ứng Von Restorff", en: "Von Restorff Effect", zh: "冯·雷斯托夫效应" },
    description: {
      vi: "Một vật nổi bật giữa đám đông sẽ dễ được ghi nhớ nhất.",
      en: "Also known as the 'isolation effect', it predicts that when multiple homogeneous stimuli are presented, the stimulus that differs from the rest is more likely to be remembered.",
      zh: "也称为“孤立效应”，它预测当呈现多个同质刺激时，与其他刺激不同的刺激更有可能被记住。"
    },
    example: {
      vi: "Trong một danh sách các từ màu đen, từ duy nhất màu đỏ sẽ được nhớ lâu nhất.",
      en: "In a list of black words, the only red word will be remembered the longest.",
      zh: "在一份黑色单词列表中，唯一的红色单词将被记住最久。"
    },
    target: {
      vi: "Nhà thiết kế, người làm marketing.",
      en: "Designers, marketers.",
      zh: "设计师、营销人员。"
    }
  },
  {
    id: "peak-end-rule",
    name: { vi: "Quy tắc đỉnh - kết", en: "Peak-End Rule", zh: "峰终法则" },
    description: {
      vi: "Đánh giá một trải nghiệm dựa trên cảm xúc lúc cao trào nhất và lúc kết thúc.",
      en: "A psychological heuristic in which people judge an experience largely based on how they felt at its peak and at its end.",
      zh: "一种心理启发法，人们主要根据他们在体验高峰和结束时的感受来评价体验。"
    },
    example: {
      vi: "Một chuyến du lịch có nhiều rắc rối nhưng có một bữa tối tuyệt vời cuối cùng sẽ được nhớ là 'khá tốt'.",
      en: "A trip with many troubles but a wonderful final dinner will be remembered as 'pretty good'.",
      zh: "一次有很多麻烦但最后有一顿美妙晚餐的旅行将被记住为“相当不错”。"
    },
    target: {
      vi: "Người làm dịch vụ khách hàng, du khách.",
      en: "Customer service providers, travelers.",
      zh: "客户服务提供商、旅行者。"
    }
  },
  {
    id: "google-effect",
    name: { vi: "Hiệu ứng Google", en: "Google Effect", zh: "谷歌效应" },
    description: {
      vi: "Xu hướng quên những thông tin có thể dễ dàng tìm thấy trên mạng.",
      en: "The tendency to forget information that can be found readily online by using Internet search engines.",
      zh: "倾向于忘记通过使用互联网搜索引擎可以轻松在线找到的信息。"
    },
    example: {
      vi: "Không nhớ số điện thoại của người thân vì nó đã có sẵn trong danh bạ.",
      en: "Not remembering a relative's phone number because it's already in the contacts.",
      zh: "不记得亲戚的电话号码，因为它已经在联系人中了。"
    },
    target: {
      vi: "Người dùng internet, thế hệ trẻ.",
      en: "Internet users, younger generations.",
      zh: "互联网用户、年轻一代。"
    }
  },
  {
    id: "turing-trap",
    name: { vi: "Bẫy Turing", en: "Turing Trap", zh: "图灵陷阱" },
    description: {
      vi: "Xu hướng coi máy móc là con người khi chúng có khả năng giao tiếp thông minh.",
      en: "The tendency to anthropomorphize machines when they exhibit intelligent communication.",
      zh: "当机器表现出智能交流时，倾向于将其人格化。"
    },
    example: {
      vi: "Cảm thấy có lỗi khi quát mắng một trợ lý ảo như Siri hay Alexa.",
      en: "Feeling guilty when shouting at a virtual assistant like Siri or Alexa.",
      zh: "对着 Siri 或 Alexa 等虚拟助手大喊大叫时感到内疚。"
    },
    target: {
      vi: "Người dùng công nghệ AI.",
      en: "AI technology users.",
      zh: "人工智能技术用户。"
    }
  },
  {
    id: "decoy-effect",
    name: { vi: "Hiệu ứng chim mồi", en: "Decoy Effect", zh: "诱饵效应" },
    description: {
      vi: "Thay đổi sự lựa chọn giữa 2 món đồ khi có thêm món thứ 3 (chim mồi) xuất hiện.",
      en: "The phenomenon whereby consumers will tend to have a specific change in preference between two options when also presented with a third option that is asymmetrically dominated.",
      zh: "一种现象，即当消费者面前出现第三个非对称占优的选项时，他们往往会在两个选项之间产生特定的偏好变化。"
    },
    example: {
      vi: "Bắp rang bơ size nhỏ 30k, size lớn 70k. Thêm size vừa 65k khiến mọi người chọn size lớn.",
      en: "Small popcorn $3, large $7. Adding a medium for $6.50 makes everyone choose the large.",
      zh: "小爆米花 3 美元，大爆米花 7 美元。增加一个 6.5 美元的中号会让每个人都选择大号。"
    },
    target: {
      vi: "Người tiêu dùng.",
      en: "Consumers.",
      zh: "消费者。"
    }
  },
  {
    id: "cheerleader-effect",
    name: { vi: "Hiệu ứng đội cổ vũ", en: "Cheerleader Effect", zh: "啦啦队效应" },
    description: {
      vi: "Con người trông hấp dẫn hơn khi đứng trong một nhóm so với khi đứng một mình.",
      en: "The cognitive bias which causes people to think individuals are more attractive when they are in a group.",
      zh: "一种认知偏差，导致人们认为个人在群体中时更有吸引力。"
    },
    example: {
      vi: "Thấy một nhóm bạn trông rất xinh đẹp, nhưng nhìn kỹ từng người thì thấy bình thường.",
      en: "Seeing a group of friends looking very beautiful, but looking closely at each individual, they look average.",
      zh: "看到一群朋友看起来很漂亮，但仔细看每一个人，他们看起来很普通。"
    },
    target: {
      vi: "Người tham gia các sự kiện xã hội.",
      en: "Participants in social events.",
      zh: "社交活动的参与者。"
    }
  },
  {
    id: "mere-exposure-effect",
    name: { vi: "Hiệu ứng tiếp xúc thường xuyên", en: "Mere-exposure Effect", zh: "单纯接触效应" },
    description: {
      vi: "Xu hướng thích một thứ gì đó chỉ vì mình đã gặp nó nhiều lần.",
      en: "A psychological phenomenon by which people tend to develop a preference for things merely because they are familiar with them.",
      zh: "一种心理现象，人们往往仅仅因为熟悉某些事物就对其产生偏好。"
    },
    example: {
      vi: "Ban đầu thấy một bài hát dở, nhưng nghe đi nghe lại trên radio thì lại thấy hay.",
      en: "Initially finding a song bad, but after hearing it repeatedly on the radio, you find it good.",
      zh: "最初觉得一首歌不好听，但在收音机里反复听到后，你觉得它很好听。"
    },
    target: {
      vi: "Khán giả quảng cáo, người mới quen.",
      en: "Ad audiences, new acquaintances.",
      zh: "广告受众、新结识的人。"
    }
  },
  {
    id: "illusion-of-truth-effect",
    name: { vi: "Hiệu ứng ảo giác sự thật", en: "Illusion of Truth Effect", zh: "真理幻觉效应" },
    description: {
      vi: "Tin rằng một thông tin là đúng chỉ vì nó được lặp đi lặp lại nhiều lần.",
      en: "The tendency to believe false information to be correct after repeated exposure.",
      zh: "在反复接触后倾向于相信错误信息是正确的。"
    },
    example: {
      vi: "Các tin đồn thất thiệt nếu được chia sẻ quá nhiều sẽ khiến mọi người tin là thật.",
      en: "False rumors, if shared too much, will make people believe they are true.",
      zh: "虚假谣言如果被分享太多，会让人们相信它们是真的。"
    },
    target: {
      vi: "Người dùng mạng xã hội, cử tri.",
      en: "Social media users, voters.",
      zh: "社交媒体用户、选民。"
    }
  },
  {
    id: "benjamin-button-syndrome",
    name: { vi: "Hội chứng Benjamin Button (Tâm lý)", en: "Benjamin Button Syndrome (Psychological)", zh: "本杰明·巴顿综合征（心理）" },
    description: {
      vi: "Càng lớn tuổi càng có xu hướng hành xử trẻ con hoặc muốn quay lại tuổi thơ.",
      en: "The tendency to act more childish or desire to return to childhood as one gets older.",
      zh: "随着年龄的增长，倾向于表现得更幼稚或渴望回到童年。"
    },
    example: {
      vi: "Một người trung niên đột nhiên thích sưu tầm đồ chơi và hành động nũng nịu.",
      en: "A middle-aged person suddenly likes collecting toys and acting pampered.",
      zh: "一个中年人突然喜欢收集玩具，表现得很受宠。"
    },
    target: {
      vi: "Người trung niên gặp khủng hoảng tuổi trung niên.",
      en: "Middle-aged people experiencing mid-life crisis.",
      zh: "经历中年危机的中年人。"
    }
  },
  {
    id: "peter-pan-syndrome",
    name: { vi: "Hội chứng Peter Pan", en: "Peter Pan Syndrome", zh: "彼得潘综合征" },
    description: {
      vi: "Người trưởng thành nhưng không muốn lớn, né tránh trách nhiệm.",
      en: "A term used to describe an adult who is socially immature.",
      zh: "一个用于描述社交不成熟的成年人的术语。"
    },
    example: {
      vi: "30 tuổi vẫn sống dựa vào cha mẹ và không muốn đi làm hay lập gia đình.",
      en: "Still living off parents at 30 and not wanting to work or start a family.",
      zh: "30 岁仍然依靠父母生活，不想工作或组建家庭。"
    },
    target: {
      vi: "Nam giới trẻ tuổi, người được nuông chiều.",
      en: "Young men, pampered individuals.",
      zh: "年轻男性、受宠的个人。"
    }
  },
  {
    id: "wendy-syndrome",
    name: { vi: "Hội chứng Wendy", en: "Wendy Syndrome", zh: "温迪综合征" },
    description: {
      vi: "Luôn muốn chăm sóc, bảo bọc người khác quá mức để cảm thấy mình có giá trị.",
      en: "The tendency to make decisions for others, compensate for their mistakes, and provide excessive care.",
      zh: "倾向于为他人做决定，弥补他们的错误，并提供过度的照顾。"
    },
    example: {
      vi: "Người vợ làm hết mọi việc cho chồng, từ việc nhỏ nhất, khiến chồng trở nên thụ động.",
      en: "A wife doing everything for her husband, even the smallest things, making him passive.",
      zh: "妻子为丈夫做一切事情，甚至是最小的事情，使他变得被动。"
    },
    target: {
      vi: "Phụ nữ, người có nhu cầu được cần đến.",
      en: "Women, individuals with a need to be needed.",
      zh: "女性、有被需要需求的个人。"
    }
  },
  {
    id: "cinderella-complex",
    name: { vi: "Phức cảm Cinderella", en: "Cinderella Complex", zh: "灰姑娘情结" },
    description: {
      vi: "Nỗi sợ vô thức về sự độc lập, luôn mong chờ một 'hoàng tử' đến cứu giúp.",
      en: "A woman's unconscious desire to be taken care of by others.",
      zh: "女性潜意识里渴望被他人照顾。"
    },
    example: {
      vi: "Luôn tìm kiếm một người chồng giàu có để thay đổi cuộc đời thay vì tự nỗ lực.",
      en: "Always looking for a wealthy husband to change their life instead of making their own efforts.",
      zh: "总是寻找一个富有的丈夫来改变他们的生活，而不是自己努力。"
    },
    target: {
      vi: "Phụ nữ trẻ.",
      en: "Young women.",
      zh: "年轻女性。"
    }
  },
  {
    id: "sleeping-beauty-syndrome",
    name: { vi: "Hội chứng Công chúa ngủ trong rừng", en: "Sleeping Beauty Syndrome", zh: "睡美人综合征" },
    description: {
      vi: "Tình trạng ngủ quá nhiều, có thể kéo dài nhiều ngày hoặc tuần (Kleine-Levin).",
      en: "A rare sleep disorder characterized by persistent episodic hypersomnia and cognitive or mood changes.",
      zh: "一种罕见的睡眠障碍，其特征是持续的发作性嗜睡以及认知或情绪变化。"
    },
    example: {
      vi: "Một thiếu niên ngủ liền 20 tiếng mỗi ngày và thức dậy trong trạng thái lờ đờ.",
      en: "A teenager sleeping 20 hours a day and waking up in a daze.",
      zh: "一个青少年每天睡 20 小时，醒来时昏昏沉沉。"
    },
    target: {
      vi: "Thanh thiếu niên nam giới (hiếm gặp).",
      en: "Adolescent males (rare).",
      zh: "青春期男性（罕见）。"
    }
  },
  {
    id: "alice-in-wonderland-syndrome",
    name: { vi: "Hội chứng Alice ở xứ sở thần tiên", en: "Alice in Wonderland Syndrome", zh: "爱丽丝梦游仙境综合征" },
    description: {
      vi: "Rối loạn nhận thức về không gian và thời gian, thấy vật thể quá to hoặc quá nhỏ.",
      en: "A neuropsychological condition in which a person's sense of vision, self, and time are distorted.",
      zh: "一种神经心理状况，其中一个人的视觉、自我和时间感发生扭曲。"
    },
    example: {
      vi: "Cảm thấy bàn tay mình to bằng cả căn phòng hoặc chiếc TV nhỏ như bao diêm.",
      en: "Feeling your hand is as big as the room or the TV is as small as a matchbox.",
      zh: "感觉你的手和房间一样大，或者电视和火柴盒一样小。"
    },
    target: {
      vi: "Trẻ em, người bị đau nửa đầu (migraine).",
      en: "Children, individuals with migraines.",
      zh: "儿童、偏头痛患者。"
    }
  },
  {
    id: "munchausen-syndrome",
    name: { vi: "Hội chứng Munchausen", en: "Munchausen Syndrome", zh: "孟乔森综合征" },
    description: {
      vi: "Giả vờ bị bệnh để nhận được sự chú ý và thương hại từ người khác.",
      en: "A psychological disorder where someone pretends to be ill or deliberately produces symptoms of illness in themselves.",
      zh: "一种心理障碍，某人假装生病或故意在自己身上产生疾病症状。"
    },
    example: {
      vi: "Tự làm mình bị thương hoặc uống thuốc để gây ra các triệu chứng bệnh giả.",
      en: "Self-harming or taking medication to cause fake illness symptoms.",
      zh: "自残或服药以引起虚假的疾病症状。"
    },
    target: {
      vi: "Người thiếu thốn tình cảm, muốn được chú ý.",
      en: "Individuals lacking affection, seeking attention.",
      zh: "缺乏感情、寻求关注的个人。"
    }
  },
  {
    id: "munchausen-by-proxy",
    name: { vi: "Hội chứng Munchausen qua trung gian", en: "Munchausen by Proxy", zh: "代理型孟乔森综合征" },
    description: {
      vi: "Làm cho người khác (thường là con cái) bị bệnh để mình đóng vai người chăm sóc tận tụy.",
      en: "A mental health problem in which a caregiver makes up or causes an illness or injury in a person under their care.",
      zh: "一种心理健康问题，护理人员在他们照顾的人身上编造或引起疾病或伤害。"
    },
    example: {
      vi: "Người mẹ lén cho con uống thuốc độc để con phải đi cấp cứu liên tục.",
      en: "A mother secretly gives her child poison so the child has to go to the emergency room repeatedly.",
      zh: "一位母亲偷偷给孩子下毒，导致孩子不得不反复去急诊室。"
    },
    target: {
      vi: "Cha mẹ, người chăm sóc.",
      en: "Parents, caregivers.",
      zh: "父母、护理人员。"
    }
  },
  {
    id: "stockholm-syndrome-2",
    name: { vi: "Hội chứng Stockholm (Nhắc lại)", en: "Stockholm Syndrome (Revisited)", zh: "斯德哥尔摩综合征（重温）" },
    description: {
      vi: "Nạn nhân nảy sinh tình cảm và bảo vệ kẻ bắt cóc mình.",
      en: "A psychological response where a hostage or victim of abuse identifies with and feels empathy for their captor or abuser.",
      zh: "一种心理反应，人质或虐待受害者认同并同情他们的绑架者或虐待者。"
    },
    example: {
      vi: "Con tin từ chối làm chứng chống lại kẻ bắt cóc vì cho rằng họ 'thực ra rất tốt'.",
      en: "A hostage refusing to testify against their captor because they think they are 'actually very good'.",
      zh: "人质拒绝指证绑架者，因为他们认为绑架者“其实很好”。"
    },
    target: {
      vi: "Nạn nhân bị bắt cóc, lạm dụng.",
      en: "Victims of kidnapping, abuse.",
      zh: "绑架、虐待的受害者。"
    }
  },
  {
    id: "lima-syndrome",
    name: { vi: "Hội chứng Lima", en: "Lima Syndrome", zh: "利马综合征" },
    description: {
      vi: "Kẻ bắt cóc nảy sinh tình cảm và sự đồng cảm với nạn nhân.",
      en: "The phenomenon in which abductors develop sympathy for their hostages.",
      zh: "绑架者对人质产生同情的现象。"
    },
    example: {
      vi: "Kẻ bắt cóc thả tự do cho nạn nhân vì thấy thương xót hoàn cảnh của họ.",
      en: "An abductor releases a hostage because they feel pity for their situation.",
      zh: "绑架者释放人质，因为他们同情对方的处境。"
    },
    target: {
      vi: "Kẻ bắt cóc, tội phạm.",
      en: "Abductors, criminals.",
      zh: "绑架者、罪犯。"
    }
  },
  {
    id: "stendhal-syndrome",
    name: { vi: "Hội chứng Stendhal", en: "Stendhal Syndrome", zh: "司汤达综合征" },
    description: {
      vi: "Choáng váng, tim đập nhanh khi đứng trước những tác phẩm nghệ thuật quá đẹp.",
      en: "A psychosomatic disorder that causes rapid heartbeat, dizziness, fainting, confusion and even hallucinations when an individual is exposed to an experience of great personal significance, particularly viewing art.",
      zh: "一种身心障碍，当个人接触到具有重大个人意义的体验（尤其是观看艺术品）时，会导致心跳加速、头晕、昏厥、混乱甚至幻觉。"
    },
    example: {
      vi: "Ngất xỉu khi đứng trước bức tượng David của Michelangelo.",
      en: "Fainting while standing in front of Michelangelo's David statue.",
      zh: "站在米开朗基罗的大卫像前昏倒。"
    },
    target: {
      vi: "Người yêu nghệ thuật, khách du lịch.",
      en: "Art lovers, tourists.",
      zh: "艺术爱好者、游客。"
    }
  },
  {
    id: "paris-syndrome",
    name: { vi: "Hội chứng Paris", en: "Paris Syndrome", zh: "巴黎综合征" },
    description: {
      vi: "Thất vọng tột độ khi thấy Paris không đẹp như trong phim ảnh, mơ mộng.",
      en: "A sense of extreme disappointment exhibited by some individuals when visiting Paris, who feel that the city was not what they had expected.",
      zh: "一些人在访问巴黎时表现出的极端失望感，他们觉得这座城市不是他们所期望的样子。"
    },
    example: {
      vi: "Khách du lịch Nhật Bản bị sốc tâm lý khi thấy đường phố Paris có rác và người vô gia cư.",
      en: "Japanese tourists experiencing psychological shock seeing Paris streets with trash and homeless people.",
      zh: "日本游客看到巴黎街道上有垃圾和流浪汉，感到心理冲击。"
    },
    target: {
      vi: "Khách du lịch (đặc biệt là người Nhật).",
      en: "Tourists (especially Japanese).",
      zh: "游客（尤其是日本人）。"
    }
  },
  {
    id: "jerusalem-syndrome",
    name: { vi: "Hội chứng Jerusalem", en: "Jerusalem Syndrome", zh: "耶路撒冷综合征" },
    description: {
      vi: "Ảo tưởng mình là một nhân vật trong Kinh Thánh khi đến thăm Jerusalem.",
      en: "A group of mental phenomena involving religiously themed obsessive ideas, delusions, or other psychosis-like experiences that are triggered by a visit to the city of Jerusalem.",
      zh: "一组心理现象，涉及宗教主题的强迫观念、妄想或其他类似精神病的经历，这些经历是由访问耶路撒冷市引发的。"
    },
    example: {
      vi: "Một du khách quấn khăn trắng và đứng giữa phố tuyên bố mình là Chúa Jesus.",
      en: "A tourist wrapping themselves in a white cloth and standing in the street declaring they are Jesus.",
      zh: "一名游客裹着白布站在街上宣布自己是耶稣。"
    },
    target: {
      vi: "Khách du lịch đến Jerusalem.",
      en: "Tourists visiting Jerusalem.",
      zh: "访问耶路撒冷的游客。"
    }
  },
  {
    id: "capgras-delusion",
    name: { vi: "Ảo tưởng Capgras", en: "Capgras Delusion", zh: "卡普格拉妄想" },
    description: {
      vi: "Tin rằng người thân của mình đã bị thay thế bởi một kẻ mạo danh có ngoại hình giống hệt.",
      en: "A psychiatric disorder in which a person holds a delusion that a friend, spouse, parent, or other close family member has been replaced by an identical impostor.",
      zh: "一种精神障碍，一个人妄想朋友、配偶、父母或其他近亲已被一个完全相同的冒充者所取代。"
    },
    example: {
      vi: "Nhìn vợ mình và khăng khăng: 'Cô trông giống vợ tôi nhưng cô không phải là cô ấy'.",
      en: "Looking at your wife and insisting: 'You look like my wife but you are not her'.",
      zh: "看着你的妻子并坚持说：“你看起来像我的妻子，但你不是她。”"
    },
    target: {
      vi: "Người bị tâm thần phân liệt, chấn thương não.",
      en: "Individuals with schizophrenia, brain injury.",
      zh: "精神分裂症、脑损伤患者。"
    }
  },
  {
    id: "fregoli-delusion",
    name: { vi: "Ảo tưởng Fregoli", en: "Fregoli Delusion", zh: "弗雷格利妄想" },
    description: {
      vi: "Tin rằng những người khác nhau thực chất chỉ là một người đang cải trang.",
      en: "A rare disorder in which a person holds a delusional belief that different people are in fact a single person who changes appearance or is in disguise.",
      zh: "一种罕见的疾病，一个人妄想认为不同的人实际上是同一个人，他改变了外貌或进行了伪装。"
    },
    example: {
      vi: "Nghĩ rằng ông hàng xóm và người đưa thư là cùng một người đang theo dõi mình.",
      en: "Thinking the neighbor and the mailman are the same person spying on you.",
      zh: "认为邻居和邮递员是同一个人在监视你。"
    },
    target: {
      vi: "Người bị rối loạn tâm thần.",
      en: "Individuals with psychotic disorders.",
      zh: "患有精神病的人。"
    }
  },
  {
    id: "cotard-delusion",
    name: { vi: "Ảo tưởng Cotard (Hội chứng xác sống)", en: "Cotard Delusion (Walking Corpse Syndrome)", zh: "科塔德妄想（行尸走肉综合征）" },
    description: {
      vi: "Tin rằng mình đã chết, không tồn tại hoặc cơ thể đang thối rữa.",
      en: "A rare mental illness in which the affected person holds the delusional belief that they are already dead, do not exist, are putrefying, or have lost their blood or internal organs.",
      zh: "一种罕见的精神疾病，受影响的人妄想认为自己已经死了、不存在、正在腐烂，或者失去了血液或内脏。"
    },
    example: {
      vi: "Từ chối ăn uống vì nghĩ rằng mình là một cái xác không cần năng lượng.",
      en: "Refusing to eat because you think you are a corpse that doesn't need energy.",
      zh: "拒绝进食，因为你认为自己是一具不需要能量的尸体。"
    },
    target: {
      vi: "Người bị trầm cảm nặng, tâm thần phân liệt.",
      en: "Individuals with severe depression, schizophrenia.",
      zh: "患有严重抑郁症、精神分裂症的人。"
    }
  },
  {
    id: "ekbom-syndrome",
    name: { vi: "Hội chứng Ekbom", en: "Ekbom Syndrome", zh: "埃克博姆综合征" },
    description: {
      vi: "Ảo tưởng rằng có côn trùng đang bò dưới da mình.",
      en: "A form of psychosis in which victims acquire a strong delusional belief that they are infested with parasites.",
      zh: "一种精神病形式，受害者产生一种强烈的妄想，认为自己感染了寄生虫。"
    },
    example: {
      vi: "Liên tục gãi đến chảy máu vì cảm thấy có bọ đang bò trong người.",
      en: "Constantly scratching until bleeding because of feeling bugs crawling inside.",
      zh: "因为感觉有虫子在里面爬而不断抓挠直到流血。"
    },
    target: {
      vi: "Người lớn tuổi, người lạm dụng chất kích thích.",
      en: "Older people, substance abusers.",
      zh: "老年人、滥用药物者。"
    }
  },
  {
    id: "diogenes-syndrome",
    name: { vi: "Hội chứng Diogenes", en: "Diogenes Syndrome", zh: "第欧根尼综合征" },
    description: {
      vi: "Sống trong điều kiện cực kỳ bẩn thỉu, bỏ bê bản thân và tích trữ rác.",
      en: "A disorder characterized by extreme self-neglect, domestic squalor, social withdrawal, apathy, compulsive hoarding of garbage or animals, and lack of shame.",
      zh: "一种以极端自我忽视、家庭肮脏、社交退缩、冷漠、强迫性囤积垃圾或动物以及缺乏羞耻感为特征的疾病。"
    },
    example: {
      vi: "Một cụ già sống trong căn nhà ngập rác nhưng từ chối mọi sự giúp đỡ.",
      en: "An elderly person living in a house full of trash but refusing all help.",
      zh: "一位老人住在充满垃圾的房子里，但拒绝一切帮助。"
    },
    target: {
      vi: "Người già sống cô độc.",
      en: "Isolated elderly people.",
      zh: "孤立的老年人。"
    }
  },
  {
    id: "savant-syndrome",
    name: { vi: "Hội chứng bác học", en: "Savant Syndrome", zh: "学者综合征" },
    description: {
      vi: "Người bị khuyết tật trí tuệ nhưng lại có khả năng thiên tài trong một lĩnh vực hẹp.",
      en: "A condition in which someone with significant mental disabilities demonstrates certain abilities far in excess of average.",
      zh: "一种情况，即具有重大精神障碍的人表现出远超平均水平的某些能力。"
    },
    example: {
      vi: "Một người tự kỷ có thể vẽ lại chính xác toàn bộ thành phố sau khi chỉ nhìn qua một lần.",
      en: "An autistic person who can accurately redraw an entire city after seeing it just once.",
      zh: "一个自闭症患者在看过一次后就能准确地画出整个城市。"
    },
    target: {
      vi: "Người tự kỷ, người bị tổn thương não.",
      en: "Autistic individuals, individuals with brain damage.",
      zh: "自闭症患者、脑损伤患者。"
    }
  },
  {
    id: "asperger-syndrome",
    name: { vi: "Hội chứng Asperger", en: "Asperger Syndrome", zh: "阿斯伯格综合征" },
    description: {
      vi: "Một dạng tự kỷ nhẹ, gặp khó khăn trong giao tiếp xã hội nhưng thường thông minh.",
      en: "A neurodevelopmental disorder characterized by significant difficulties in social interaction and nonverbal communication, along with restricted and repetitive patterns of behavior and interests.",
      zh: "一种神经发育障碍，其特征是社交互动和非语言交流存在重大困难，以及受限且重复的行为和兴趣模式。"
    },
    example: {
      vi: "Rất giỏi toán học nhưng không biết cách bắt chuyện hoặc hiểu những lời nói đùa.",
      en: "Very good at math but doesn't know how to start a conversation or understand jokes.",
      zh: "数学很好，但不知道如何开始对话或理解笑话。"
    },
    target: {
      vi: "Trẻ em và người lớn có bộ não 'khác biệt'.",
      en: "Children and adults with 'different' brains.",
      zh: "大脑“不同”的儿童和成人。"
    }
  },
  {
    id: "tourette-syndrome",
    name: { vi: "Hội chứng Tourette", en: "Tourette Syndrome", zh: "妥瑞氏综合征" },
    description: {
      vi: "Rối loạn hệ thần kinh gây ra các cử động hoặc âm thanh lặp đi lặp lại không kiểm soát được (tics).",
      en: "A neurological disorder characterized by repetitive, stereotyped, involuntary movements and vocalizations called tics.",
      zh: "一种神经系统疾病，其特征是重复的、刻板的、不自主的动作和发声，称为抽动。"
    },
    example: {
      vi: "Liên tục nháy mắt hoặc thốt ra những từ ngữ không phù hợp một cách vô thức.",
      en: "Constantly blinking or unconsciously uttering inappropriate words.",
      zh: "不断眨眼或无意识地吐出不恰当的话。"
    },
    target: {
      vi: "Trẻ em (thường bắt đầu từ 2-15 tuổi).",
      en: "Children (usually starting between ages 2 and 15).",
      zh: "儿童（通常始于 2 至 15 岁之间）。"
    }
  },
  {
    id: "adhd",
    name: { vi: "Rối loạn tăng động giảm chú ý", en: "ADHD", zh: "注意力缺陷多动障碍" },
    description: {
      vi: "Khó tập trung, bốc đồng và hoạt động quá mức.",
      en: "A mental health disorder that can cause above-normal levels of hyperactive and impulsive behaviors.",
      zh: "一种心理健康障碍，可导致高于正常水平的多动和冲动行为。"
    },
    example: {
      vi: "Không thể ngồi yên trong lớp và thường xuyên làm mất đồ dùng cá nhân.",
      en: "Can't sit still in class and frequently loses personal belongings.",
      zh: "在课堂上坐不住，经常丢失个人物品。"
    },
    target: {
      vi: "Trẻ em, người lớn gặp khó khăn trong quản lý thời gian.",
      en: "Children, adults struggling with time management.",
      zh: "儿童、在时间管理方面挣扎的成人。"
    }
  },
  {
    id: "ocd",
    name: { vi: "Rối loạn ám ảnh cưỡng chế", en: "OCD", zh: "强迫症" },
    description: {
      vi: "Có những ý nghĩ ám ảnh và phải thực hiện các hành động lặp lại để giảm lo âu.",
      en: "A mental disorder in which a person has certain thoughts repeatedly or feels the need to perform certain routines repeatedly to an extent which generates distress or impairs general functioning.",
      zh: "一种精神障碍，一个人反复产生某些想法，或感到需要反复执行某些程序，达到产生痛苦或损害一般功能的程度。"
    },
    example: {
      vi: "Phải rửa tay đúng 10 lần hoặc kiểm tra khóa cửa liên tục mới thấy yên tâm.",
      en: "Having to wash hands exactly 10 times or checking the door lock repeatedly to feel at ease.",
      zh: "必须洗手正好 10 次或反复检查门锁才能感到安心。"
    },
    target: {
      vi: "Người hay lo âu, cầu toàn.",
      en: "Anxious, perfectionist individuals.",
      zh: "焦虑、完美主义的人。"
    }
  },
  {
    id: "ptsd",
    name: { vi: "Rối loạn căng thẳng sau sang chấn", en: "PTSD", zh: "创伤后应激障碍" },
    description: {
      vi: "Lo âu kéo dài sau khi trải qua một sự kiện kinh hoàng.",
      en: "A mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it.",
      zh: "一种由可怕事件（经历或目睹）引发的心理健康状况。"
    },
    example: {
      vi: "Cựu chiến binh giật mình hoảng loạn khi nghe tiếng pháo hoa vì tưởng là tiếng súng.",
      en: "A veteran panicking at the sound of fireworks, mistaking them for gunfire.",
      zh: "一名退伍军人在听到烟花声时感到恐慌，误以为是枪声。"
    },
    target: {
      vi: "Người sống sót sau tai nạn, chiến tranh, thiên tai.",
      en: "Survivors of accidents, war, natural disasters.",
      zh: "事故、战争、自然灾害的幸存者。"
    }
  },
  {
    id: "bipolar-disorder",
    name: { vi: "Rối loạn lưỡng cực", en: "Bipolar Disorder", zh: "双相情感障碍" },
    description: {
      vi: "Tâm trạng thay đổi thất thường giữa hưng cảm (quá vui) và trầm cảm (quá buồn).",
      en: "A mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).",
      zh: "一种导致极端情绪波动的心理健康状况，包括情绪高涨（躁狂或轻躁狂）和低落（抑郁）。"
    },
    example: {
      vi: "Tuần trước tiêu tiền hoang phí và đầy năng lượng, tuần này lại nằm lì trong phòng không muốn gặp ai.",
      en: "Last week spending money recklessly and full of energy, this week staying in the room not wanting to see anyone.",
      zh: "上周挥霍无度、精力充沛，这周待在房间里不想见任何人。"
    },
    target: {
      vi: "Người gặp biến cố tâm lý, di truyền.",
      en: "Individuals with psychological events, genetics.",
      zh: "有心理事件、遗传因素的人。"
    }
  },
  {
    id: "borderline-personality-disorder",
    name: { vi: "Rối loạn nhân cách ranh giới", en: "Borderline Personality Disorder", zh: "边缘型人格障碍" },
    description: {
      vi: "Cảm xúc không ổn định, sợ bị bỏ rơi và có các mối quan hệ mãnh liệt nhưng ngắn ngủi.",
      en: "A mental health disorder that impacts the way you think and feel about yourself and others, causing problems functioning in everyday life.",
      zh: "一种心理健康障碍，会影响你对自己和他人的思考和感受方式，导致日常生活功能出现问题。"
    },
    example: {
      vi: "Vừa mới yêu say đắm nhưng chỉ vì một lỗi nhỏ của đối phương mà lập tức ghét bỏ thậm tệ.",
      en: "Just fell deeply in love but because of a small mistake by the partner, immediately hating them intensely.",
      zh: "刚刚坠入爱河，但因为对方的一个小错误，立即强烈地讨厌他们。"
    },
    target: {
      vi: "Người có tuổi thơ không ổn định.",
      en: "Individuals with unstable childhoods.",
      zh: "童年不稳定的人。"
    }
  },
  {
    id: "narcissistic-personality-disorder",
    name: { vi: "Rối loạn nhân cách yêu mình thái quá", en: "Narcissistic Personality Disorder", zh: "自恋型人格障碍" },
    description: {
      vi: "Luôn cho mình là trung tâm, thiếu sự đồng cảm và cần được ngưỡng mộ.",
      en: "A mental condition in which people have an inflated sense of their own importance, a deep need for excessive attention and admiration, troubled relationships, and a lack of empathy for others.",
      zh: "一种心理状态，人们过分夸大自己的重要性，深切需要过度的关注和赞美，人际关系困扰，并且对他人的同情心缺乏。"
    },
    example: {
      vi: "Luôn khoe khoang về thành tích của mình và coi thường ý kiến của người khác.",
      en: "Always boasting about achievements and disregarding others' opinions.",
      zh: "总是吹嘘自己的成就，无视他人的意见。"
    },
    target: {
      vi: "Người có lòng tự trọng thấp ẩn giấu.",
      en: "Individuals with hidden low self-esteem.",
      zh: "内心自卑的人。"
    }
  },
  {
    id: "antisocial-personality-disorder",
    name: { vi: "Rối loạn nhân cách chống đối xã hội", en: "Antisocial Personality Disorder", zh: "反社会型人格障碍" },
    description: {
      vi: "Coi thường các chuẩn mực xã hội, không có cảm giác tội lỗi khi làm hại người khác.",
      en: "A mental disorder in which a person consistently shows no regard for right and wrong and ignores the rights and feelings of others.",
      zh: "一种精神障碍，一个人始终不分是非，忽视他人的权利和感受。"
    },
    example: {
      vi: "Lừa đảo tiền của người già mà không hề thấy hối hận.",
      en: "Scamming money from the elderly without feeling any remorse.",
      zh: "诈骗老人的钱却没有任何悔意。"
    },
    target: {
      vi: "Tội phạm, người có hành vi bạo lực.",
      en: "Criminals, individuals with violent behavior.",
      zh: "罪犯、有暴力行为的人。"
    }
  },
  {
    id: "avoidant-personality-disorder",
    name: { vi: "Rối loạn nhân cách tránh né", en: "Avoidant Personality Disorder", zh: "回避型人格障碍" },
    description: {
      vi: "Cực kỳ nhạy cảm với những lời chỉ trích, né tránh các hoạt động xã hội vì sợ bị từ chối.",
      en: "A mental health condition in which a person has a lifelong pattern of feeling very shy, inadequate, and sensitive to rejection.",
      zh: "一种心理健康状况，一个人终生表现出非常害羞、不足以及对拒绝敏感的模式。"
    },
    example: {
      vi: "Từ chối một công việc tốt chỉ vì sợ phải giao tiếp với đồng nghiệp mới.",
      en: "Refusing a good job just for fear of having to communicate with new colleagues.",
      zh: "仅仅因为害怕与新同事交流而拒绝一份好工作。"
    },
    target: {
      vi: "Người có lòng tự trọng thấp.",
      en: "Individuals with low self-esteem.",
      zh: "自尊心低的人。"
    }
  },
  {
    id: "dependent-personality-disorder",
    name: { vi: "Rối loạn nhân cách phụ thuộc", en: "Dependent Personality Disorder", zh: "依赖型人格障碍" },
    description: {
      vi: "Nhu cầu quá mức được chăm sóc, dẫn đến hành vi phục tùng và bám víu.",
      en: "A mental health condition in which people depend too much on others to meet their emotional and physical needs.",
      zh: "一种心理健康状况，人们过度依赖他人来满足他们的情感和身体需求。"
    },
    example: {
      vi: "Không thể tự đưa ra quyết định đơn giản như mặc gì nếu không hỏi ý kiến người khác.",
      en: "Can't make simple decisions like what to wear without asking others' opinions.",
      zh: "如果不征求别人的意见，就无法做出简单的决定，比如穿什么。"
    },
    target: {
      vi: "Người sợ cô độc.",
      en: "Individuals afraid of loneliness.",
      zh: "害怕孤独的人。"
    }
  },
  {
    id: "schizoid-personality-disorder",
    name: { vi: "Rối loạn nhân cách dạng phân liệt", en: "Schizoid Personality Disorder", zh: "分裂样人格障碍" },
    description: {
      vi: "Thờ ơ với các mối quan hệ xã hội, thích ở một mình và ít biểu lộ cảm xúc.",
      en: "A condition in which people avoid social activities and consistently shy away from interaction with others.",
      zh: "一种人们逃避社交活动并始终回避与他人互动的状况。"
    },
    example: {
      vi: "Sống cô độc cả đời, không có bạn bè và cũng không cảm thấy buồn vì điều đó.",
      en: "Living alone for a lifetime, having no friends and not feeling sad about it.",
      zh: "一辈子独自生活，没有朋友，也不为此感到难过。"
    },
    target: {
      vi: "Người có xu hướng hướng nội cực đoan.",
      en: "Individuals with extreme introverted tendencies.",
      zh: "有极端内向倾向的人。"
    }
  },
  {
    id: "histrionic-personality-disorder",
    name: { vi: "Rối loạn nhân cách kịch tính", en: "Histrionic Personality Disorder", zh: "表演型人格障碍" },
    description: {
      vi: "Luôn muốn là trung tâm của sự chú ý, biểu lộ cảm xúc thái quá và nông cạn.",
      en: "A mental health condition that affects the way a person thinks, perceives, and relates to others.",
      zh: "一种影响一个人思考、感知以及与他人建立联系的方式的心理健康状况。"
    },
    example: {
      vi: "Ăn mặc cực kỳ hở hang hoặc khóc lóc thảm thiết ở nơi công cộng để mọi người chú ý.",
      en: "Dressing extremely provocatively or crying bitterly in public to get attention.",
      zh: "在公共场合穿着极其暴露或痛哭流涕以引起注意。"
    },
    target: {
      vi: "Người có nhu cầu khẳng định bản thân cao.",
      en: "Individuals with a high need for self-affirmation.",
      zh: "自我肯定需求高的人。"
    }
  },
  {
    id: "paranoia",
    name: { vi: "Chứng hoang tưởng", en: "Paranoia", zh: "偏执狂" },
    description: {
      vi: "Luôn nghi ngờ người khác đang âm mưu hại mình mà không có bằng chứng.",
      en: "An instinct or thought process believed to be heavily influenced by anxiety or fear, often to the point of delusion and irrationality.",
      zh: "一种被认为受焦虑或恐惧严重影响的本能或思维过程，通常达到妄想和非理性的程度。"
    },
    example: {
      vi: "Nghĩ rằng hàng xóm lắp camera để theo dõi mọi hành động của mình.",
      en: "Thinking the neighbor installed cameras to monitor your every move.",
      zh: "认为邻居安装了摄像头来监视你的一举一动。"
    },
    target: {
      vi: "Người bị căng thẳng kéo dài, người lạm dụng chất.",
      en: "Individuals with chronic stress, substance abusers.",
      zh: "长期压力大的人、滥用药物者。"
    }
  },
  {
    id: "agoraphobia",
    name: { vi: "Chứng sợ khoảng trống", en: "Agoraphobia", zh: "广场恐惧症" },
    description: {
      vi: "Sợ những nơi hoặc tình huống khó có thể thoát ra hoặc nhận được sự giúp đỡ.",
      en: "A type of anxiety disorder in which you fear and avoid places or situations that might cause you to panic and make you feel trapped, helpless or embarrassed.",
      zh: "一种焦虑症，你害怕并逃避可能导致你恐慌并让你感到被困、无助或尴尬的地方或情况。"
    },
    example: {
      vi: "Không dám ra khỏi nhà trong nhiều năm vì sợ đám đông hoặc không gian mở.",
      en: "Not daring to leave the house for years for fear of crowds or open spaces.",
      zh: "因为害怕人群或开放空间而多年不敢出门。"
    },
    target: {
      vi: "Người từng bị tấn công hoảng loạn (panic attacks).",
      en: "Individuals who have had panic attacks.",
      zh: "经历过惊恐发作的人。"
    }
  },
  {
    id: "social-anxiety-disorder",
    name: { vi: "Rối loạn lo âu xã hội", en: "Social Anxiety Disorder", zh: "社交焦虑障碍" },
    description: {
      vi: "Nỗi sợ mãnh liệt bị người khác phán xét hoặc làm nhục trong các tình huống xã hội.",
      en: "A chronic mental health condition in which social interactions cause irrational anxiety.",
      zh: "一种慢性心理健康状况，社交互动会导致非理性的焦虑。"
    },
    example: {
      vi: "Đổ mồ hôi, run rẩy và không nói nên lời khi phải phát biểu trước đám đông.",
      en: "Sweating, trembling, and being speechless when having to speak in front of a crowd.",
      zh: "在人群面前讲话时出汗、发抖、说不出话来。"
    },
    target: {
      vi: "Học sinh, người đi làm.",
      en: "Students, employees.",
      zh: "学生、员工。"
    }
  },
  {
    id: "panic-disorder",
    name: { vi: "Rối loạn hoảng sợ", en: "Panic Disorder", zh: "惊恐障碍" },
    description: {
      vi: "Đột ngột xuất hiện các cơn hoảng loạn dữ dội kèm theo triệu chứng thể chất (nghẹt thở, đau ngực).",
      en: "An anxiety disorder where you regularly have sudden attacks of panic or fear.",
      zh: "一种焦虑症，你会定期突然发作恐慌或恐惧。"
    },
    example: {
      vi: "Đang đi siêu thị bỗng thấy tim đập thình thịch, khó thở và nghĩ mình sắp chết.",
      en: "While at the supermarket, suddenly feeling your heart pounding, difficulty breathing, and thinking you're about to die.",
      zh: "在超市时，突然感到心跳加速、呼吸困难，并认为自己快要死了。"
    },
    target: {
      vi: "Người bị áp lực công việc, gia đình.",
      en: "Individuals under work or family pressure.",
      zh: "工作或家庭压力大的人。"
    }
  },
  {
    id: "generalized-anxiety-disorder",
    name: { vi: "Rối loạn lo âu lan tỏa", en: "Generalized Anxiety Disorder", zh: "广泛性焦虑障碍" },
    description: {
      vi: "Lo lắng quá mức về mọi thứ trong cuộc sống mà không có lý do cụ thể.",
      en: "A mental health disorder characterized by excessive, uncontrollable and often irrational worry about events or activities.",
      zh: "一种心理健康障碍，其特征是对事件或活动过度、无法控制且通常是非理性的担忧。"
    },
    example: {
      vi: "Luôn lo sợ con cái gặp tai nạn, lo hết tiền, lo bị đuổi việc dù mọi thứ vẫn ổn.",
      en: "Always fearing children will have accidents, running out of money, or being fired even though everything is fine.",
      zh: "总是担心孩子会发生意外、钱花光了或者被解雇，尽管一切都很好。"
    },
    target: {
      vi: "Phụ nữ (phổ biến hơn nam giới).",
      en: "Women (more common than men).",
      zh: "女性（比男性更常见）。"
    }
  },
  {
    id: "peter-pan-syndrome",
    name: { vi: "Hội chứng Peter Pan", en: "Peter Pan Syndrome", zh: "彼得潘综合症" },
    description: {
      vi: "Những người trưởng thành nhưng không muốn lớn lên, trốn tránh trách nhiệm và luôn hành xử như trẻ con.",
      en: "A term used to describe an adult who is socially immature and avoids adult responsibilities.",
      zh: "一个术语，用于描述社交不成熟并逃避成年责任的成年人。"
    },
    example: {
      vi: "Một người đàn ông 30 tuổi vẫn sống dựa vào cha mẹ và dành cả ngày để chơi game, không muốn đi làm.",
      en: "A 30-year-old man who still lives with his parents, plays games all day, and refuses to get a job.",
      zh: "一个 30 岁的男人仍然和父母住在一起，整天玩游戏，拒绝找工作。"
    },
    target: {
      vi: "Nam giới trẻ tuổi, người được bao bọc quá mức.",
      en: "Young men, overprotected individuals.",
      zh: "年轻男性、受过度保护的人。"
    }
  },
  {
    id: "alice-in-wonderland-syndrome",
    name: { vi: "Hội chứng Alice ở xứ sở thần tiên", en: "Alice in Wonderland Syndrome", zh: "爱丽丝梦游仙境综合症" },
    description: {
      vi: "Rối loạn nhận thức về không gian và thời gian, khiến người bệnh thấy vật thể to ra hoặc nhỏ lại bất thường.",
      en: "A neuropsychological condition that causes a disorienting distortion of perception, such as seeing objects as much smaller or larger than they actually are.",
      zh: "一种神经心理状况，会导致感知的定向障碍扭曲，例如看到物体比实际小得多或大得多。"
    },
    example: {
      vi: "Đột nhiên thấy bàn tay mình to như cái nhà hoặc chiếc xe hơi nhỏ như hộp diêm.",
      en: "Suddenly seeing your hand as big as a house or a car as small as a matchbox.",
      zh: "突然看到你的手像房子一样大，或者汽车像火柴盒一样小。"
    },
    target: {
      vi: "Trẻ em, người bị đau nửa đầu (migraine).",
      en: "Children, individuals with migraines.",
      zh: "儿童、偏头痛患者。"
    }
  },
  {
    id: "paris-syndrome",
    name: { vi: "Hội chứng Paris", en: "Paris Syndrome", zh: "巴黎综合症" },
    description: { vi: "Cảm giác thất vọng cực độ khi thực tế ở Paris không giống như kỳ vọng lãng mạn.", en: "Extreme disappointment when reality in Paris doesn't match romantic expectations.", zh: "当巴黎的现实与浪漫期望不符时产生的极端失望感。" },
    example: { vi: "Khách du lịch bị sốc tâm lý vì Paris không đẹp như phim.", en: "Tourist experiencing psychological shock because Paris isn't as beautiful as in movies.", zh: "游客因巴黎不像电影中那样美丽而遭受心理冲击。" },
    target: { vi: "Tuổi: 20-40, Giới tính: Nữ, Sở thích: Du lịch, Nghề nghiệp: Văn phòng, Tôn giáo: Không, Chế độ: Tư bản", en: "Age: 20-40, Gender: Female, Interests: Travel, Profession: Office, Religion: None, Regime: Capitalist", zh: "年龄: 20-40, 性别: 女, 兴趣: 旅游, 职业: 办公室, 宗教: 无, 制度: 资本主义" }
  },
  {
    id: "stendhal-syndrome",
    name: { vi: "Hội chứng Stendhal", en: "Stendhal Syndrome", zh: "司汤达综合症" },
    description: { vi: "Phản ứng tâm lý khi tiếp xúc với quá nhiều tác phẩm nghệ thuật đẹp.", en: "Psychological reaction when exposed to too many beautiful artworks.", zh: "接触过多美丽艺术品时的心理反应。" },
    example: { vi: "Ngất xỉu khi thăm bảo tàng nghệ thuật.", en: "Fainting when visiting an art museum.", zh: "参观艺术博物馆时昏倒。" },
    target: { vi: "Tuổi: 30-50, Giới tính: Tất cả, Sở thích: Nghệ thuật, Nghề nghiệp: Nghệ sĩ, Tôn giáo: Không, Chế độ: Tư bản", en: "Age: 30-50, Gender: All, Interests: Art, Profession: Artist, Religion: None, Regime: Capitalist", zh: "年龄: 30-50, 性别: 全部, 兴趣: 艺术, 职业: 艺术家, 宗教: 无, 制度: 资本主义" }
  },
  {
    id: "jerusalem-syndrome",
    name: { vi: "Hội chứng Jerusalem", en: "Jerusalem Syndrome", zh: "耶路撒冷综合症" },
    description: { vi: "Ảo tưởng tôn giáo khi thăm Jerusalem.", en: "Religious delusions when visiting Jerusalem.", zh: "访问耶路撒冷时的宗教幻觉。" },
    example: { vi: "Tin rằng mình là nhân vật trong Kinh thánh.", en: "Believing oneself to be a biblical character.", zh: "相信自己是圣经中的人物。" },
    target: { vi: "Tuổi: 40-60, Giới tính: Tất cả, Sở thích: Tôn giáo, Nghề nghiệp: Tất cả, Tôn giáo: Thiên chúa giáo, Chế độ: Tất cả", en: "Age: 40-60, Gender: All, Interests: Religion, Profession: All, Religion: Christianity, Regime: All", zh: "年龄: 40-60, 性别: 全部, 兴趣: 宗教, 职业: 全部, 宗教: 基督教, 制度: 全部" }
  },
  {
    id: "diogenes-syndrome",
    name: { vi: "Hội chứng Diogenes", en: "Diogenes Syndrome", zh: "第欧根尼综合症" },
    description: { vi: "Tự bỏ bê bản thân và tích trữ đồ đạc.", en: "Self-neglect and hoarding.", zh: "自我忽视和囤积。" },
    example: { vi: "Sống trong căn nhà đầy rác.", en: "Living in a house full of trash.", zh: "住在满是垃圾的房子里。" },
    target: { vi: "Tuổi: >60, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Không, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: >60, Gender: All, Interests: None, Profession: None, Religion: None, Regime: All", zh: "年龄: >60, 性别: 全部, 兴趣: 无, 职业: 无, 宗教: 无, 制度: 全部" }
  },
  {
    id: "capgras-syndrome",
    name: { vi: "Hội chứng Capgras", en: "Capgras Syndrome", zh: "卡普格拉综合症" },
    description: { vi: "Tin rằng người thân đã bị thay thế bởi kẻ mạo danh.", en: "Believing loved ones have been replaced by imposters.", zh: "相信亲人已被冒名顶替者取代。" },
    example: { vi: "Nói mẹ mình là người lạ.", en: "Saying their mother is a stranger.", zh: "说他们的母亲是陌生人。" },
    target: { vi: "Tuổi: 40-70, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 40-70, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 40-70, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "fregoli-syndrome",
    name: { vi: "Hội chứng Fregoli", en: "Fregoli Syndrome", zh: "弗雷戈里综合症" },
    description: { vi: "Tin rằng những người lạ là người quen đang cải trang.", en: "Believing strangers are acquaintances in disguise.", zh: "相信陌生人是伪装的熟人。" },
    example: { vi: "Nghĩ bác sĩ là người thân cũ.", en: "Thinking the doctor is an old relative.", zh: "认为医生是旧亲戚。" },
    target: { vi: "Tuổi: 30-60, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 30-60, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 30-60, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "cotard-syndrome",
    name: { vi: "Hội chứng Cotard", en: "Cotard Syndrome", zh: "科塔尔综合症" },
    description: { vi: "Tin rằng mình đã chết hoặc mất bộ phận cơ thể.", en: "Believing one is dead or missing body parts.", zh: "相信自己已经死亡或缺少身体部位。" },
    example: { vi: "Nói mình không có máu.", en: "Saying they have no blood.", zh: "说他们没有血。" },
    target: { vi: "Tuổi: 30-60, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 30-60, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 30-60, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "alice-in-wonderland-syndrome",
    name: { vi: "Hội chứng Alice ở xứ sở thần tiên", en: "Alice in Wonderland Syndrome", zh: "爱丽丝梦游仙境综合症" },
    description: { vi: "Rối loạn nhận thức về kích thước vật thể.", en: "Perceptual distortion of object size.", zh: "物体大小的感知扭曲。" },
    example: { vi: "Thấy mình nhỏ bé hoặc khổng lồ.", en: "Feeling tiny or gigantic.", zh: "感觉自己很小或巨大。" },
    target: { vi: "Tuổi: 5-15, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Không, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 5-15, Gender: All, Interests: None, Profession: None, Religion: None, Regime: All", zh: "年龄: 5-15, 性别: 全部, 兴趣: 无, 职业: 无, 宗教: 无, 制度: 全部" }
  },
  {
    id: "ekbom-syndrome",
    name: { vi: "Hội chứng Ekbom", en: "Ekbom Syndrome", zh: "埃克博姆综合症" },
    description: { vi: "Ảo tưởng bị côn trùng bò dưới da.", en: "Delusion of insects crawling under the skin.", zh: "皮肤下有昆虫爬行的幻觉。" },
    example: { vi: "Cố gắng lấy côn trùng ra khỏi da.", en: "Trying to remove insects from skin.", zh: "试图从皮肤中取出昆虫。" },
    target: { vi: "Tuổi: 40-70, Giới tính: Nữ, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 40-70, Gender: Female, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 40-70, 性别: 女, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "othello-syndrome",
    name: { vi: "Hội chứng Othello", en: "Othello Syndrome", zh: "奥赛罗综合症" },
    description: { vi: "Ghen tuông bệnh hoạn.", en: "Pathological jealousy.", zh: "病态嫉妒。" },
    example: { vi: "Theo dõi vợ/chồng vì nghi ngoại tình.", en: "Tracking spouse due to suspicion of infidelity.", zh: "因怀疑不忠而跟踪配偶。" },
    target: { vi: "Tuổi: 30-60, Giới tính: Nam, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 30-60, Gender: Male, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 30-60, 性别: 男, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "munchausen-syndrome",
    name: { vi: "Hội chứng Munchausen", en: "Munchausen Syndrome", zh: "孟乔森综合症" },
    description: { vi: "Giả bệnh để được chăm sóc.", en: "Faking illness to get care.", zh: "装病以获得照顾。" },
    example: { vi: "Tự làm mình bị thương để nhập viện.", en: "Self-harming to be hospitalized.", zh: "自残以住院。" },
    target: { vi: "Tuổi: 20-40, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Y tế, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-40, Gender: All, Interests: None, Profession: Medical, Religion: None, Regime: All", zh: "年龄: 20-40, 性别: 全部, 兴趣: 无, 职业: 医疗, 宗教: 无, 制度: 全部" }
  },
  {
    id: "munchausen-by-proxy",
    name: { vi: "Hội chứng Munchausen do người khác gây ra", en: "Munchausen Syndrome by Proxy", zh: "代理性孟乔森综合症" },
    description: { vi: "Làm người khác bị bệnh để được chăm sóc.", en: "Making others sick to get care.", zh: "使他人患病以获得照顾。" },
    example: { vi: "Mẹ làm con bị bệnh.", en: "Mother making child sick.", zh: "母亲使孩子患病。" },
    target: { vi: "Tuổi: 20-40, Giới tính: Nữ, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-40, Gender: Female, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 20-40, 性别: 女, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "alien-hand-syndrome",
    name: { vi: "Hội chứng bàn tay người ngoài hành tinh", en: "Alien Hand Syndrome", zh: "外星人手综合症" },
    description: { vi: "Một tay tự hoạt động không theo ý muốn.", en: "One hand acting on its own.", zh: "一只手不受控制地行动。" },
    example: { vi: "Tay tự cài cúc áo.", en: "Hand buttoning shirt on its own.", zh: "手自己扣上衬衫扣子。" },
    target: { vi: "Tuổi: >50, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: >50, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: >50, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "koro-syndrome",
    name: { vi: "Hội chứng Koro", en: "Koro Syndrome", zh: "缩阳症" },
    description: { vi: "Ảo tưởng cơ quan sinh dục bị co rút.", en: "Delusion of genital shrinkage.", zh: "生殖器收缩的幻觉。" },
    example: { vi: "Sợ bộ phận sinh dục biến mất.", en: "Fear of genitals disappearing.", zh: "害怕生殖器消失。" },
    target: { vi: "Tuổi: 20-40, Giới tính: Nam, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-40, Gender: Male, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 20-40, 性别: 男, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "wendigo-psychosis",
    name: { vi: "Hội chứng Wendigo", en: "Wendigo Psychosis", zh: "温迪戈精神病" },
    description: { vi: "Ảo tưởng muốn ăn thịt người.", en: "Delusion of wanting to eat human flesh.", zh: "想要吃人肉的幻觉。" },
    example: { vi: "Nghĩ mình là quái vật ăn thịt.", en: "Thinking one is a flesh-eating monster.", zh: "认为自己是吃肉的怪物。" },
    target: { vi: "Tuổi: 20-50, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Không, Tôn giáo: Không, Chế độ: Bộ lạc", en: "Age: 20-50, Gender: All, Interests: None, Profession: None, Religion: None, Regime: Tribal", zh: "年龄: 20-50, 性别: 全部, 兴趣: 无, 职业: 无, 宗教: 无, 制度: 部落" }
  },
  {
    id: "latah-syndrome",
    name: { vi: "Hội chứng Latah", en: "Latah Syndrome", zh: "拉塔综合症" },
    description: { vi: "Phản ứng thái quá khi bị giật mình.", en: "Exaggerated reaction when startled.", zh: "受惊时的夸张反应。" },
    example: { vi: "Lặp lại từ ngữ khi bị giật mình.", en: "Repeating words when startled.", zh: "受惊时重复词语。" },
    target: { vi: "Tuổi: 30-50, Giới tính: Nữ, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 30-50, Gender: Female, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 30-50, 性别: 女, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "hikikomori",
    name: { vi: "Hội chứng Hikikomori", en: "Hikikomori", zh: "蛰居族" },
    description: { vi: "Tự cô lập bản thân trong thời gian dài.", en: "Self-isolation for a long time.", zh: "长期自我隔离。" },
    example: { vi: "Không ra khỏi phòng trong nhiều năm.", en: "Not leaving the room for years.", zh: "多年不出房间。" },
    target: { vi: "Tuổi: 15-30, Giới tính: Tất cả, Sở thích: Công nghệ, Nghề nghiệp: Không, Tôn giáo: Không, Chế độ: Tư bản", en: "Age: 15-30, Gender: All, Interests: Tech, Profession: None, Religion: None, Regime: Capitalist", zh: "年龄: 15-30, 性别: 全部, 兴趣: 科技, 职业: 无, 宗教: 无, 制度: 资本主义" }
  },
  {
    id: "taijin-kyofusho",
    name: { vi: "Hội chứng Taijin Kyofusho", en: "Taijin Kyofusho", zh: "对人恐怖症" },
    description: { vi: "Sợ làm người khác khó chịu.", en: "Fear of offending others.", zh: "害怕冒犯他人。" },
    example: { vi: "Sợ hơi thở mình làm người khác khó chịu.", en: "Fear of one's breath offending others.", zh: "害怕自己的呼吸冒犯他人。" },
    target: { vi: "Tuổi: 20-40, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-40, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 20-40, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "dissociative-identity-disorder",
    name: { vi: "Hội chứng Đa nhân cách", en: "Dissociative Identity Disorder", zh: "多重人格障碍" },
    description: { vi: "Có nhiều nhân cách trong một cơ thể.", en: "Having multiple personalities in one body.", zh: "一个身体内有多种人格。" },
    example: { vi: "Thay đổi nhân cách hoàn toàn.", en: "Changing personalities completely.", zh: "完全改变人格。" },
    target: { vi: "Tuổi: 20-40, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-40, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 20-40, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "trypophobia",
    name: { vi: "Hội chứng Sợ lỗ", en: "Trypophobia", zh: "密集恐惧症" },
    description: { vi: "Sợ các lỗ nhỏ li ti.", en: "Fear of small holes.", zh: "对小孔的恐惧。" },
    example: { vi: "Sợ tổ ong.", en: "Fear of beehives.", zh: "害怕蜂巢。" },
    target: { vi: "Tuổi: 10-50, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 10-50, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 10-50, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "peter-pan-syndrome",
    name: { vi: "Hội chứng Peter Pan", en: "Peter Pan Syndrome", zh: "彼得潘综合症" },
    description: { vi: "Người trưởng thành nhưng không muốn lớn, luôn muốn được chăm sóc.", en: "Adults who do not want to grow up, always want to be taken care of.", zh: "成年但不想长大，总是想被照顾。" },
    example: { vi: "Luôn dựa dẫm vào cha mẹ dù đã đi làm.", en: "Always relying on parents even when working.", zh: "即使工作了也总是依赖父母。" },
    target: { vi: "Tuổi: 20-40, Giới tính: Tất cả, Sở thích: Game, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-40, Gender: All, Interests: Games, Profession: All, Religion: None, Regime: All", zh: "年龄: 20-40, 性别: 全部, 兴趣: 游戏, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "paris-syndrome",
    name: { vi: "Hội chứng Paris", en: "Paris Syndrome", zh: "巴黎综合症" },
    description: { vi: "Sốc văn hóa cực độ khi đến Paris.", en: "Extreme culture shock when visiting Paris.", zh: "访问巴黎时极度的文化冲击。" },
    example: { vi: "Thất vọng vì Paris không giống như trong phim.", en: "Disappointed because Paris is not like in the movies.", zh: "因为巴黎不像电影里那样而感到失望。" },
    target: { vi: "Tuổi: 18-60, Giới tính: Tất cả, Sở thích: Du lịch, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 18-60, Gender: All, Interests: Travel, Profession: All, Religion: None, Regime: All", zh: "年龄: 18-60, 性别: 全部, 兴趣: 旅游, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "stendhal-syndrome",
    name: { vi: "Hội chứng Stendhal", en: "Stendhal Syndrome", zh: "司汤达综合症" },
    description: { vi: "Choáng ngợp trước vẻ đẹp nghệ thuật.", en: "Overwhelmed by artistic beauty.", zh: "被艺术之美所震撼。" },
    example: { vi: "Ngất xỉu khi xem tranh trong bảo tàng.", en: "Fainting while viewing paintings in a museum.", zh: "在博物馆看画时晕倒。" },
    target: { vi: "Tuổi: 20-60, Giới tính: Tất cả, Sở thích: Nghệ thuật, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-60, Gender: All, Interests: Art, Profession: All, Religion: None, Regime: All", zh: "年龄: 20-60, 性别: 全部, 兴趣: 艺术, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "cotard-delusion",
    name: { vi: "Hội chứng Cotard", en: "Cotard Delusion", zh: "科塔尔综合症" },
    description: { vi: "Tin rằng mình đã chết hoặc không tồn tại.", en: "Believing that one is dead or does not exist.", zh: "相信自己已经死亡或不存在。" },
    example: { vi: "Khăng khăng mình là xác sống.", en: "Insisting one is a zombie.", zh: "坚持认为自己是丧尸。" },
    target: { vi: "Tuổi: 30-60, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 30-60, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 30-60, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "capgras-delusion",
    name: { vi: "Hội chứng Capgras", en: "Capgras Delusion", zh: "卡普格拉综合症" },
    description: { vi: "Tin rằng người thân đã bị thay thế bởi kẻ mạo danh.", en: "Believing that loved ones have been replaced by imposters.", zh: "相信亲人已被冒名顶替者取代。" },
    example: { vi: "Không nhận ra mẹ mình.", en: "Not recognizing one's mother.", zh: "不认得自己的母亲。" },
    target: { vi: "Tuổi: 30-60, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 30-60, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 30-60, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "fregoli-delusion",
    name: { vi: "Hội chứng Fregoli", en: "Fregoli Delusion", zh: "弗雷戈里综合症" },
    description: { vi: "Tin rằng nhiều người khác nhau thực chất là một người.", en: "Believing that many different people are actually one person.", zh: "相信许多不同的人实际上是同一个人。" },
    example: { vi: "Nghĩ rằng tất cả mọi người là kẻ thù của mình.", en: "Thinking everyone is one's enemy.", zh: "认为每个人都是自己的敌人。" },
    target: { vi: "Tuổi: 30-60, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 30-60, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 30-60, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "alice-in-wonderland-syndrome",
    name: { vi: "Hội chứng Alice ở xứ sở thần tiên", en: "Alice in Wonderland Syndrome", zh: "爱丽丝梦游仙境综合症" },
    description: { vi: "Rối loạn nhận thức về kích thước và khoảng cách.", en: "Distorted perception of size and distance.", zh: "对大小和距离的感知扭曲。" },
    example: { vi: "Thấy đồ vật to lên hoặc nhỏ đi.", en: "Seeing objects grow larger or smaller.", zh: "看到物体变大或变小。" },
    target: { vi: "Tuổi: 5-20, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 5-20, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 5-20, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "jerusalem-syndrome",
    name: { vi: "Hội chứng Jerusalem", en: "Jerusalem Syndrome", zh: "耶路撒冷综合症" },
    description: { vi: "Ảo tưởng tôn giáo khi đến Jerusalem.", en: "Religious delusions when visiting Jerusalem.", zh: "访问耶路撒冷时的宗教幻觉。" },
    example: { vi: "Tự nhận mình là đấng cứu thế.", en: "Claiming to be the savior.", zh: "声称自己是救世主。" },
    target: { vi: "Tuổi: 20-60, Giới tính: Tất cả, Sở thích: Tôn giáo, Nghề nghiệp: Tất cả, Tôn giáo: Tất cả, Chế độ: Tất cả", en: "Age: 20-60, Gender: All, Interests: Religion, Profession: All, Religion: All, Regime: All", zh: "年龄: 20-60, 性别: 全部, 兴趣: 宗教, 职业: 全部, 宗教: 全部, 制度: 全部" }
  },
  {
    id: "diogenes-syndrome",
    name: { vi: "Hội chứng Diogenes", en: "Diogenes Syndrome", zh: "第欧根尼综合症" },
    description: { vi: "Tự bỏ bê bản thân và tích trữ rác.", en: "Self-neglect and hoarding trash.", zh: "自我忽视和囤积垃圾。" },
    example: { vi: "Sống trong nhà đầy rác.", en: "Living in a house full of trash.", zh: "生活在满是垃圾的房子里。" },
    target: { vi: "Tuổi: 60+, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 60+, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 60+, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "munchausen-syndrome",
    name: { vi: "Hội chứng Munchausen", en: "Munchausen Syndrome", zh: "孟乔森综合症" },
    description: { vi: "Giả bệnh để được chú ý.", en: "Faking illness to get attention.", zh: "假装生病以获得关注。" },
    example: { vi: "Tự làm mình bị thương để vào viện.", en: "Injuring oneself to get hospitalized.", zh: "伤害自己以住院。" },
    target: { vi: "Tuổi: 20-50, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-50, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 20-50, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "stockholm-syndrome",
    name: { vi: "Hội chứng Stockholm", en: "Stockholm Syndrome", zh: "斯德哥尔摩综合症" },
    description: { vi: "Nạn nhân nảy sinh tình cảm với kẻ bắt giữ mình.", en: "Victims develop feelings for their captors.", zh: "受害者对绑架者产生感情。" },
    example: { vi: "Con tin bênh vực kẻ bắt cóc.", en: "Hostages defending the kidnapper.", zh: "人质为绑架者辩护。" },
    target: { vi: "Tuổi: 18-60, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 18-60, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 18-60, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "lima-syndrome",
    name: { vi: "Hội chứng Lima", en: "Lima Syndrome", zh: "利马综合症" },
    description: { vi: "Kẻ bắt giữ nảy sinh tình cảm với nạn nhân.", en: "Captors develop feelings for their victims.", zh: "绑架者对受害者产生感情。" },
    example: { vi: "Kẻ bắt cóc thả tự do cho con tin.", en: "Kidnapper releasing the hostage.", zh: "绑架者释放人质。" },
    target: { vi: "Tuổi: 18-60, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 18-60, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 18-60, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "imposter-syndrome",
    name: { vi: "Hội chứng Imposter", en: "Imposter Syndrome", zh: "冒名顶替综合症" },
    description: { vi: "Luôn cảm thấy mình không xứng đáng với thành công.", en: "Always feeling unworthy of success.", zh: "总是觉得不配获得成功。" },
    example: { vi: "Nghĩ rằng mình chỉ là may mắn.", en: "Thinking one is just lucky.", zh: "认为自己只是运气好。" },
    target: { vi: "Tuổi: 20-50, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-50, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 20-50, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "burnout-syndrome",
    name: { vi: "Hội chứng Burnout", en: "Burnout Syndrome", zh: "职业倦怠综合症" },
    description: { vi: "Kiệt sức do áp lực công việc kéo dài.", en: "Exhaustion due to prolonged work pressure.", zh: "因长期工作压力而精疲力竭。" },
    example: { vi: "Mất động lực làm việc.", en: "Losing motivation to work.", zh: "失去工作动力。" },
    target: { vi: "Tuổi: 25-60, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 25-60, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 25-60, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "fomo-syndrome",
    name: { vi: "Hội chứng FOMO", en: "FOMO Syndrome", zh: "错失恐惧症" },
    description: { vi: "Sợ bỏ lỡ những trải nghiệm thú vị.", en: "Fear of missing out on interesting experiences.", zh: "害怕错过有趣的体验。" },
    example: { vi: "Luôn kiểm tra mạng xã hội.", en: "Always checking social media.", zh: "总是查看社交媒体。" },
    target: { vi: "Tuổi: 15-40, Giới tính: Tất cả, Sở thích: Mạng xã hội, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 15-40, Gender: All, Interests: Social Media, Profession: All, Religion: None, Regime: All", zh: "年龄: 15-40, 性别: 全部, 兴趣: 社交媒体, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "jomo-syndrome",
    name: { vi: "Hội chứng JOMO", en: "JOMO Syndrome", zh: "错失快乐症" },
    description: { vi: "Niềm vui khi bỏ lỡ những trải nghiệm không cần thiết.", en: "Joy of missing out on unnecessary experiences.", zh: "错过不必要体验的快乐。" },
    example: { vi: "Tận hưởng thời gian một mình.", en: "Enjoying time alone.", zh: "享受独处时光。" },
    target: { vi: "Tuổi: 20-60, Giới tính: Tất cả, Sở thích: Đọc sách, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 20-60, Gender: All, Interests: Reading, Profession: All, Religion: None, Regime: All", zh: "年龄: 20-60, 性别: 全部, 兴趣: 阅读, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "hikikomori-syndrome",
    name: { vi: "Hội chứng Hikikomori", en: "Hikikomori Syndrome", zh: "蛰居族综合症" },
    description: { vi: "Tự cô lập bản thân trong thời gian dài.", en: "Self-isolation for a long time.", zh: "长期自我隔离。" },
    example: { vi: "Không ra khỏi nhà trong nhiều năm.", en: "Not leaving the house for years.", zh: "多年不出门。" },
    target: { vi: "Tuổi: 15-40, Giới tính: Tất cả, Sở thích: Game, Nghề nghiệp: Không, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 15-40, Gender: All, Interests: Games, Profession: None, Religion: None, Regime: All", zh: "年龄: 15-40, 性别: 全部, 兴趣: 游戏, 职业: 无, 宗教: 无, 制度: 全部" }
  },
  {
    id: "savant-syndrome",
    name: { vi: "Hội chứng Savant", en: "Savant Syndrome", zh: "学者综合症" },
    description: { vi: "Khả năng đặc biệt trong một lĩnh vực cụ thể.", en: "Special ability in a specific field.", zh: "在特定领域具有特殊能力。" },
    example: { vi: "Tính toán siêu tốc.", en: "Super fast calculation.", zh: "超高速计算。" },
    target: { vi: "Tuổi: 5-60, Giới tính: Tất cả, Sở thích: Toán học, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 5-60, Gender: All, Interests: Mathematics, Profession: All, Religion: None, Regime: All", zh: "年龄: 5-60, 性别: 全部, 兴趣: 数学, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "tourette-syndrome",
    name: { vi: "Hội chứng Tourette", en: "Tourette Syndrome", zh: "妥瑞氏综合症" },
    description: { vi: "Các cử động hoặc âm thanh không tự chủ.", en: "Involuntary movements or sounds.", zh: "不自主的动作或声音。" },
    example: { vi: "Nháy mắt liên tục.", en: "Blinking constantly.", zh: "不断眨眼。" },
    target: { vi: "Tuổi: 5-30, Giới tính: Tất cả, Sở thích: Không, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 5-30, Gender: All, Interests: None, Profession: All, Religion: None, Regime: All", zh: "年龄: 5-30, 性别: 全部, 兴趣: 无, 职业: 全部, 宗教: 无, 制度: 全部" }
  },
  {
    id: "asperger-syndrome",
    name: { vi: "Hội chứng Asperger", en: "Asperger Syndrome", zh: "阿斯伯格综合症" },
    description: { vi: "Khó khăn trong tương tác xã hội.", en: "Difficulty in social interaction.", zh: "社交互动困难。" },
    example: { vi: "Khó hiểu cảm xúc người khác.", en: "Hard to understand others' emotions.", zh: "难以理解他人的情绪。" },
    target: { vi: "Tuổi: 5-60, Giới tính: Tất cả, Sở thích: Khoa học, Nghề nghiệp: Tất cả, Tôn giáo: Không, Chế độ: Tất cả", en: "Age: 5-60, Gender: All, Interests: Science, Profession: All, Religion: None, Regime: All", zh: "年龄: 5-60, 性别: 全部, 兴趣: 科学, 职业: 全部, 宗教: 无, 制度: 全部" }
  }
];
