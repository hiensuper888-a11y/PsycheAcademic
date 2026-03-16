export interface LocalizedString {
  vi: string;
  en: string;
  zh: string;
  [key: string]: string;
}

export interface ChartDataPoint {
  subject: string | LocalizedString;
  A: number;
  fullMark: number;
}

export interface Brand {
  name: string;
  logoUrl: string;
  description: string | LocalizedString;
  websiteUrl?: string;
  products: {
    name: string | LocalizedString;
    description: string | LocalizedString;
    imageUrl: string;
    productUrl?: string;
    reviews?: { source: string; score: string; link: string }[];
  }[];
}

export interface PsychologyArticle {
  id: string;
  title: string | LocalizedString;
  shortDescription: string | LocalizedString;
  content: string | LocalizedString;
  imageUrl: string;
  researchSources: (string | LocalizedString)[];
  chartData?: ChartDataPoint[];
  comparison?: {
    title: string | LocalizedString;
    items: {
      name: string | LocalizedString;
      description: string | LocalizedString;
      features: (string | LocalizedString)[];
      isPremium?: boolean;
    }[];
  };
  brands?: Brand[];
  keyTakeaways?: (string | LocalizedString)[];
}

export const psychologyData: PsychologyArticle[] = [
  {
    id: "cognitive-bias",
    title: {
      vi: "Thiên kiến nhận thức",
      en: "Cognitive Bias",
      zh: "认知偏差"
    },
    shortDescription: {
      vi: "Tìm hiểu về các lối tắt tư duy khiến chúng ta đưa ra quyết định sai lầm.",
      en: "Understanding the mental shortcuts that lead us to make irrational decisions.",
      zh: "了解导致我们做出非理性决策的思维捷径。"
    },
    content: {
      vi: `
## Thiên kiến nhận thức là gì?
Thiên kiến nhận thức là những sai lệch có hệ thống trong tư duy, xảy ra khi bộ não cố gắng đơn giản hóa việc xử lý thông tin. Đây là những "lối tắt" tâm lý giúp chúng ta đưa ra quyết định nhanh chóng nhưng đôi khi không chính xác.

## Các loại thiên kiến phổ biến
- **Thiên kiến xác nhận (Confirmation Bias):** Xu hướng tìm kiếm, giải thích và ghi nhớ thông tin theo cách củng cố các niềm tin sẵn có của một người.
- **Hiệu ứng mỏ neo (Anchoring Effect):** Xu hướng dựa quá nhiều vào mẩu thông tin đầu tiên được cung cấp (mỏ neo) khi đưa ra quyết định.
- **Thiên kiến sẵn có (Availability Heuristic):** Đánh giá tầm quan trọng của thông tin dựa trên mức độ dễ dàng mà thông tin đó nảy ra trong đầu.

## Tác động đến đời sống
Thiên kiến nhận thức ảnh hưởng đến mọi khía cạnh từ tài chính cá nhân, quan hệ xã hội đến các quyết định chính trị và kinh doanh. Việc nhận diện chúng là bước đầu tiên để tư duy phản biện tốt hơn.
      `,
      en: `
## What is Cognitive Bias?
A cognitive bias is a systematic pattern of deviation from norm or rationality in judgment. Individuals create their own "subjective reality" from their perception of the input.

## Common Types
- **Confirmation Bias:** The tendency to search for, interpret, favor, and recall information in a way that confirms one's prior beliefs or values.
- **Anchoring Effect:** A cognitive bias where an individual relies too heavily on an initial piece of information offered when making decisions.
- **Availability Heuristic:** A mental shortcut that relies on immediate examples that come to a given person's mind when evaluating a specific topic.

## Impact on Life
Cognitive biases affect everything from personal finance and social relationships to political and business decisions. Recognizing them is the first step toward better critical thinking.
      `,
      zh: `
## 什么是认知偏差？
认知偏差是判断中系统性的理性偏差，当大脑试图简化信息处理时发生。

## 常见类型
- **确认偏误:** 只寻找支持既有信念的信息的倾向。
- **锚定效应:** 过分依赖收到的第一条信息。
- **易得性启发:** 依赖于脑海中立即浮现的例子。
      `
    },
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    researchSources: [
      "Tversky, A., & Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases.",
      "Kahneman, D. (2011). Thinking, Fast and Slow."
    ],
    keyTakeaways: [
      {
        vi: "Nhận diện các lối tắt tư duy hệ thống khiến chúng ta đưa ra quyết định sai lầm.",
        en: "Identify systematic thinking shortcuts that lead to irrational decisions.",
        zh: "识别导致非理性决策的系统性思维捷径。"
      },
      {
        vi: "Phân biệt giữa các loại thiên kiến phổ biến như thiên kiến xác nhận và hiệu ứng mỏ neo.",
        en: "Distinguish between common biases like confirmation bias and anchoring effect.",
        zh: "区分常见的偏见，如确认偏误和锚定效应。"
      }
    ],
    chartData: [
      { subject: { vi: "Logic", en: "Logic", zh: "逻辑" }, A: 45, fullMark: 100 },
      { subject: { vi: "Cảm xúc", en: "Emotion", zh: "情绪" }, A: 85, fullMark: 100 },
      { subject: { vi: "Tốc độ", en: "Speed", zh: "速度" }, A: 95, fullMark: 100 },
      { subject: { vi: "Chính xác", en: "Accuracy", zh: "准确性" }, A: 30, fullMark: 100 },
      { subject: { vi: "Nhớ lại", en: "Recall", zh: "回忆" }, A: 70, fullMark: 100 }
    ]
  },
  {
    id: "emotional-intelligence",
    title: {
      vi: "Trí tuệ cảm xúc (EQ)",
      en: "Emotional Intelligence (EQ)",
      zh: "情绪智力 (EQ)"
    },
    shortDescription: {
      vi: "Khả năng nhận biết, hiểu và quản lý cảm xúc để thành công trong cuộc sống.",
      en: "The ability to recognize, understand, and manage emotions for success in life.",
      zh: "识别、理解和管理情绪以取得生活成功的能力。"
    },
    content: {
      vi: `
## Trí tuệ cảm xúc là gì?
Trí tuệ cảm xúc (EQ) là khả năng nhận dạng, đánh giá và điều tiết cảm xúc của bản thân, của người khác và của các nhóm người. Nó được coi là yếu tố quan trọng hơn cả IQ trong việc dự đoán thành công cá nhân và nghề nghiệp.

## 5 thành phần cốt lõi (Daniel Goleman)
1. **Tự nhận thức (Self-awareness):** Hiểu rõ cảm xúc và động lực của bản thân.
2. **Tự điều chỉnh (Self-regulation):** Kiểm soát các xung động tiêu cực.
3. **Động lực (Motivation):** Đam mê làm việc vì những giá trị nội tại.
4. **Thấu cảm (Empathy):** Hiểu được cảm xúc của người khác.
5. **Kỹ năng xã hội (Social skills):** Quản lý các mối quan hệ hiệu quả.

## Tầm quan trọng của EQ
EQ cao giúp cải thiện giao tiếp, giảm căng thẳng, giải quyết xung đột và tăng cường sự đồng cảm trong các mối quan hệ.
      `,
      en: `
## What is Emotional Intelligence?
Emotional Intelligence (EQ) is the ability to perceive, control, and evaluate emotions. Some researchers suggest that emotional intelligence can be learned and strengthened, while others claim it is an inborn characteristic.

## The 5 Core Components (Daniel Goleman)
1. **Self-awareness:** The ability to recognize and understand your moods and emotions.
2. **Self-regulation:** The ability to control or redirect disruptive impulses.
3. **Motivation:** A passion to work for reasons that go beyond money or status.
4. **Empathy:** The ability to understand the emotional makeup of other people.
5. **Social skills:** Proficiency in managing relationships and building networks.

## Importance of EQ
High EQ leads to better communication, reduced stress, effective conflict resolution, and increased empathy in relationships.
      `,
      zh: `
## 什么是情绪智力？
情绪智力 (EQ) 是识别、评估和控制自己、他人及群体情绪的能力。

## 5 个核心组成部分
1. **自我意识:** 了解自己的情绪。
2. **自我调节:** 控制冲动。
3. **动机:** 内在动力。
4. **共情:** 理解他人。
5. **社交技巧:** 建立联系。
      `
    },
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
    researchSources: [
      "Goleman, D. (1995). Emotional Intelligence: Why It Can Matter More Than IQ.",
      "Salovey, P., & Mayer, J. D. (1990). Emotional Intelligence."
    ],
    keyTakeaways: [
      {
        vi: "Hiểu rõ 5 thành phần cốt lõi của EQ theo Daniel Goleman.",
        en: "Understand the 5 core components of EQ according to Daniel Goleman.",
        zh: "了解丹尼尔·戈尔曼提出的 EQ 的 5 个核心组成部分。"
      },
      {
        vi: "Nhận thức được tầm quan trọng của EQ trong việc quản lý mối quan hệ và sự nghiệp.",
        en: "Recognize the importance of EQ in managing relationships and career success.",
        zh: "认识到 EQ 在管理关系和职业成功中的重要性。"
      }
    ],
    chartData: [
      { subject: { vi: "Thấu cảm", en: "Empathy", zh: "共情" }, A: 90, fullMark: 100 },
      { subject: { vi: "Tự chủ", en: "Self-control", zh: "自控" }, A: 80, fullMark: 100 },
      { subject: { vi: "Động lực", en: "Motivation", zh: "动力" }, A: 85, fullMark: 100 },
      { subject: { vi: "Xã hội", en: "Social", zh: "社交" }, A: 95, fullMark: 100 },
      { subject: { vi: "Tự nhận thức", en: "Self-aware", zh: "自我意识" }, A: 88, fullMark: 100 }
    ]
  },
  {
    id: "cbt-therapy",
    title: {
      vi: "Liệu pháp Nhận thức - Hành vi (CBT)",
      en: "Cognitive Behavioral Therapy (CBT)",
      zh: "认知行为疗法 (CBT)"
    },
    shortDescription: {
      vi: "Phương pháp trị liệu tâm lý tiêu chuẩn vàng để thay đổi tư duy tiêu cực.",
      en: "The gold standard psychotherapy for changing negative thought patterns.",
      zh: "改变负面思维模式的金标准心理疗法。"
    },
    content: {
      vi: `
## Liệu pháp Nhận thức - Hành vi là gì?
CBT là một hình thức trị liệu tâm lý tập trung vào việc thay đổi các mô thức suy nghĩ và hành vi không lành mạnh. Nó dựa trên nguyên lý rằng suy nghĩ, cảm xúc và hành vi của chúng ta có mối liên hệ chặt chẽ với nhau.

## Nguyên lý cốt lõi
- **Suy nghĩ:** Những gì chúng ta nghĩ ảnh hưởng đến cảm xúc.
- **Cảm xúc:** Những gì chúng ta cảm thấy ảnh hưởng đến hành động.
- **Hành vi:** Những gì chúng ta làm ảnh hưởng đến suy nghĩ.

## Các kỹ thuật trong CBT
- **Tái cấu trúc nhận thức:** Nhận diện và thách thức các suy nghĩ sai lệch.
- **Kích hoạt hành vi:** Khuyến khích tham gia vào các hoạt động mang lại niềm vui hoặc cảm giác thành tựu.
- **Tiếp xúc (Exposure):** Đối mặt với nỗi sợ hãi một cách an toàn và có hệ thống.
      `,
      en: `
## What is Cognitive Behavioral Therapy?
Cognitive behavioral therapy (CBT) is a form of psychological treatment that has been demonstrated to be effective for a range of problems including depression, anxiety disorders, and more.

## Core Principles
- **Thoughts:** What we think affects how we feel.
- **Emotions:** How we feel affects how we act.
- **Behaviors:** What we do affects how we think.

## CBT Techniques
- **Cognitive Restructuring:** Identifying and challenging irrational or maladaptive thoughts.
- **Behavioral Activation:** Increasing engagement in positive activities.
- **Exposure Therapy:** Gradually facing fears to reduce avoidance behaviors.
      `,
      zh: `
## 什么是认知行为疗法？
CBT 是一种旨在改变不健康思维和行为模式的心理治疗形式。

## 核心原则
- **思维:** 影响感受。
- **情绪:** 影响行动。
- **行为:** 影响思维。
      `
    },
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
    researchSources: [
      "Beck, A. T. (1979). Cognitive Therapy of Depression.",
      "Hofmann, S. G., et al. (2012). The Efficacy of Cognitive Behavioral Therapy: A Review of Meta-analyses."
    ],
    keyTakeaways: [
      {
        vi: "Hiểu rõ mối liên hệ giữa Suy nghĩ, Cảm xúc và Hành vi.",
        en: "Understand the connection between Thoughts, Emotions, and Behaviors.",
        zh: "了解思维、情绪和行为之间的联系。"
      },
      {
        vi: "Nhận diện các kỹ thuật CBT phổ biến như tái cấu trúc nhận thức và kích hoạt hành vi.",
        en: "Identify common CBT techniques like cognitive restructuring and behavioral activation.",
        zh: "识别常见的 CBT 技术，如认知重组和行为激活。"
      }
    ],
    chartData: [
      { subject: { vi: "Hiệu quả", en: "Efficacy", zh: "疗效" }, A: 95, fullMark: 100 },
      { subject: { vi: "Cấu trúc", en: "Structure", zh: "结构" }, A: 90, fullMark: 100 },
      { subject: { vi: "Thực tiễn", en: "Practical", zh: "实践" }, A: 85, fullMark: 100 },
      { subject: { vi: "Bền vững", en: "Durability", zh: "持久性" }, A: 80, fullMark: 100 },
      { subject: { vi: "Tốc độ", en: "Speed", zh: "速度" }, A: 75, fullMark: 100 }
    ]
  },
  {
    id: "dark-psychology-manipulation",
    title: {
      vi: "Thuật Thao Túng | Góc Tối Ẩn Sau Mỗi Câu Nói",
      en: "The Art of Manipulation | The Dark Side Behind Every Word",
      zh: "操纵术 | 每句话背后的阴暗面"
    },
    shortDescription: {
      vi: "Phân tích chuyên sâu các phương pháp thao túng của Wladislaw Jachtchenko và ứng dụng theo nhân khẩu học.",
      en: "In-depth analysis of Wladislaw Jachtchenko's manipulation methods and demographic applications.",
      zh: "深入分析 Wladislaw Jachtchenko 的操纵方法及其人口统计学应用。"
    },
    content: {
      vi: `
## 📖 Tổng quan về Thuật Thao Túng (Wladislaw Jachtchenko)
Wladislaw Jachtchenko, chuyên gia hàng đầu về đàm phán, đã bóc tách các kỹ thuật mà những người thao túng sử dụng để kiểm soát suy nghĩ và hành động của đối phương. Ông nhấn mạnh rằng thao túng không chỉ là sự lừa dối, mà là một **"vũ khí tâm lý"** có thể được sử dụng cho mục đích tốt (Trắng) hoặc xấu (Đen).

## 🛠️ 10 Thủ thuật Thao túng "Đen" Tinh vi Nhất
Dưới đây là các kỹ thuật được Jachtchenko phân tích sâu trong tác phẩm của mình:

| Thủ thuật | Cơ chế hoạt động | Ví dụ thực tế |
| :--- | :--- | :--- |
| **Cái chân trong cửa** | Bắt đầu bằng yêu cầu nhỏ để dẫn đến yêu cầu lớn. | "Bạn có thể giúp tôi xem qua báo cáo này 5 phút không?" -> "Tiện thể bạn làm giúp tôi phần kết luận luôn nhé." |
| **Cánh cửa đập vào mặt** | Đưa ra yêu cầu vô lý để bị từ chối, sau đó đưa ra yêu cầu thực sự. | "Bạn cho tôi mượn 10 triệu được không?" -> "Vậy cho tôi mượn 500k nhé." |
| **Định khung tiêu cực** | Sử dụng nỗi sợ hãi để ép buộc quyết định. | "Nếu bạn không ký hợp đồng này ngay bây giờ, đối thủ sẽ chiếm mất thị phần của bạn." |
| **Sự khan hiếm giả tạo** | Tạo áp lực thời gian để làm tê liệt logic. | "Chỉ còn duy nhất 1 suất cuối cùng với giá ưu đãi này!" |
| **Bẫy cảm giác tội lỗi** | Đóng vai nạn nhân để khai thác lòng trắc ẩn. | "Tôi đã hy sinh cả tuổi thanh xuân cho bạn, vậy mà bạn lại đối xử với tôi như thế này sao?" |
| **Sự nhất quán** | Buộc đối phương phải giữ lời hứa từ những cam kết nhỏ. | "Bạn là người luôn coi trọng uy tín đúng không? Vậy chắc chắn bạn sẽ giúp tôi việc này." |
| **Sự thấu cảm giả tạo** | Giả vờ quan tâm để lấy thông tin hoặc lòng tin. | "Tôi rất hiểu cảm giác của bạn lúc này, tôi cũng từng như vậy..." |
| **Ngụy biện công kích cá nhân** | Tấn công vào tính cách thay vì tranh luận logic. | "Bạn thì biết gì về kinh tế mà đòi góp ý?" |
| **Sự im lặng trừng phạt** | Sử dụng sự im lặng để khiến đối phương lo lắng và phục tùng. | Không trả lời tin nhắn hoặc cuộc gọi trong nhiều ngày để "dạy cho một bài học". |
| **Gaslighting** | Khiến đối phương nghi ngờ chính trí nhớ và nhận thức của họ. | "Tôi chưa bao giờ nói thế, bạn lại tưởng tượng ra rồi đấy." |

## 🎭 Nghệ thuật Tự tin Tuyệt đối | Thao túng bằng Phong thái
<details>
<summary>Kỹ thuật "Tự tin dù không biết gì" (Fake It Till You Make It)</summary>

### 1. Cách đi đứng (Power Walking & Posture)
- **Dáng đi của kẻ dẫn đầu:** Đi chậm hơn người bình thường 10-20%. Sải bước dài, vững chãi. Khi bước đi, hãy tưởng tượng bạn đang sở hữu cả không gian đó.
- **Chiếm lĩnh không gian:** Khi ngồi, hãy mở rộng tay chân (vừa phải) để thể hiện sự thống trị. Đừng thu mình lại.
- **Điểm nhìn:** Luôn nhìn thẳng hoặc hơi hướng lên trên, không bao giờ nhìn xuống đất khi đang di chuyển.

### 2. Cách nói năng (The Voice of Authority)
- **Tông giọng trầm (The Lower Register):** Hạ thấp tông giọng ở cuối câu thay vì lên giọng (lên giọng tạo cảm giác đang hỏi hoặc thiếu tự tin).
- **Khoảng lặng quyền lực:** Khi bị hỏi một câu khó mà bạn không biết câu trả lời, hãy im lặng nhìn thẳng vào mắt đối phương trong 3 giây trước khi trả lời. Điều này khiến họ cảm thấy áp lực và nghĩ rằng bạn đang đánh giá họ thay vì bạn đang bối rối.
- **Ngôn từ khẳng định:** Thay vì nói "Tôi nghĩ là...", hãy nói "Thực tế cho thấy..." hoặc "Kinh nghiệm của tôi chỉ ra...".

### 3. Cách ăn mặc (The Halo Effect)
- **Ăn mặc vượt mức (Overdressing):** Luôn mặc đẹp hơn hoàn cảnh một chút. Nếu mọi người mặc áo thun, hãy mặc sơ mi. Nếu họ mặc sơ mi, hãy mặc vest. Trang phục là "vỏ bọc" khiến người khác mặc định bạn có năng lực dù bạn chưa nói lời nào.
- **Phụ kiện quyền lực:** Một chiếc đồng hồ hoặc một đôi giày bóng loáng là những chi tiết nhỏ nhưng tạo ra "Hiệu ứng hào quang" cực mạnh.

### 4. Cách trình bày & Thao túng thông tin (Presentation Mastery)
- **Kỹ thuật "Đánh lạc hướng" (The Pivot):** Khi gặp vấn đề không biết, hãy trả lời: "Đó là một câu hỏi thú vị, nhưng vấn đề cốt lõi mà chúng ta cần tập trung ở đây là..." sau đó lái sang chủ đề bạn am hiểu.
- **Sử dụng số liệu "Lẻ":** Thay vì nói "khoảng 50%", hãy nói "51,4%". Những con số cụ thể tạo ra ảo giác về sự nghiên cứu kỹ lưỡng và chính xác tuyệt đối.
- **Áp đặt khung (Framing):** Luôn là người đặt câu hỏi trước để dẫn dắt cuộc hội thoại theo ý mình.
</details>

## 🛡️ Tấn công cá nhân & Kỹ thuật "Bất hoại tâm trí"
<details>
<summary>Cách giữ tâm thế vững chãi trước mọi đòn công kích</summary>

### 1. Hiểu về Tấn công cá nhân (Ad Hominem)
Kẻ thao túng thường tấn công vào ngoại hình, học vấn hoặc quá khứ của bạn khi họ không thể thắng bằng lý lẽ. Mục tiêu là khiến bạn tức giận, xấu hổ và mất kiểm soát.

### 2. Kỹ thuật "Bất hoại tâm trí" (The Indestructible Mind)
- **Tâm thế Stoic (Chủ nghĩa Khắc kỷ):** Lời nhục mạ chỉ có sức mạnh khi bạn đồng ý tiếp nhận nó. Hãy coi lời tấn công như "tiếng gió thổi qua tai" - nó không thể chạm vào bản chất bên trong bạn.
- **Kỹ thuật "Hòn đá xám" (Gray Rock Method):** Khi bị tấn công, hãy phản ứng một cách tẻ nhạt nhất có thể (như một hòn đá xám). Trả lời ngắn gọn: "Ồ", "Tôi hiểu", "Đó là ý kiến của bạn". Khi không nhận được phản ứng cảm xúc, kẻ thao túng sẽ sớm bỏ cuộc.
- **Tách biệt giá trị bản thân:** Nhìn nhận lời công kích là **"dữ liệu về kẻ tấn công"** chứ không phải **"dữ liệu về bạn"**. Một người hay chửi bới chỉ đang phơi bày sự thiếu kiểm soát của chính họ.
- **Phản đòn bằng sự điềm tĩnh:** Sự bình thản của bạn là vũ khí mạnh nhất khiến kẻ tấn công cảm thấy bất lực.
</details>

## ❓ Kỹ thuật Đặt câu hỏi | Thao túng bằng Truy vấn
<details>
<summary>Cách dẫn dắt đối phương bằng những câu hỏi thông minh</summary>

### 1. Câu hỏi dẫn dắt (Leading Questions)
Đặt câu hỏi mà câu trả lời đã nằm sẵn trong đó để ép đối phương đồng thuận.
- *Ví dụ:* "Bạn cũng thấy rằng phương án này là tối ưu nhất cho chúng ta, đúng không?"

### 2. Câu hỏi lựa chọn giả (False Dilemma Questions)
Đưa ra hai lựa chọn mà cả hai đều dẫn đến kết quả bạn muốn.
- *Ví dụ:* "Chúng ta nên ký hợp đồng vào sáng mai hay chiều mai thì tiện cho bạn?" (Bỏ qua lựa chọn "không ký").

### 3. Câu hỏi "Tại sao" để gây áp lực
Sử dụng "Tại sao" liên tiếp để buộc đối phương phải giải thích và bộc lộ sơ hở.
- *Lưu ý:* Kẻ thao túng dùng điều này để khiến bạn cảm thấy phải phòng thủ.

### 4. Kỹ thuật "Câu hỏi lặp lại"
Hỏi cùng một nội dung nhưng bằng nhiều cách khác nhau để kiểm tra sự nhất quán hoặc làm đối phương kiệt sức.
</details>

## 🔬 Cơ sở Thần kinh học và Tâm lý học
Thao túng không chỉ là lời nói, nó là sự tác động vào sinh học thần kinh:
- **🧠 Hạch hạnh nhân (Amygdala):** Khi bị thao túng qua nỗi sợ, vùng não này bị kích hoạt mạnh, gây ra trạng thái "chiến hoặc chạy", làm tê liệt khả năng suy nghĩ thấu đáo của **Vỏ não trước trán**.
- **🧪 Oxytocin & Dopamine:** Những lời khen ngợi giả tạo kích thích tiết Dopamine, khiến nạn nhân cảm thấy hưng phấn và mất cảnh giác.
- **📉 Cortisol:** Sự im lặng trừng phạt hoặc bẫy tội lỗi làm tăng nồng độ Cortisol (hormone căng thẳng), gây mệt mỏi và dễ bị khuất phục.

## 👥 Ứng dụng và Nhận diện theo Đối tượng

### 🎯 Theo Độ tuổi:
- **18 - 25 tuổi:** Nhạy cảm với **Sự công nhận**. Thao túng thường qua mạng xã hội và áp lực đồng trang lứa.
- **25 - 45 tuổi:** Nhạy cảm với **Sự nghiệp & Vị thế**. Thao túng thường xảy ra nơi công sở.
- **Trên 45 tuổi:** Nhạy cảm với **Sự an toàn & Di sản**. Thao túng thường qua các vấn đề sức khỏe hoặc tài chính gia đình.

### 🚻 Theo Giới tính:
- **Nam giới:** Thường bị tác động bởi các đòn bẩy về **Cái tôi (Ego)** và **Năng lực**.
- **Nữ giới:** Thường bị tác động bởi các đòn bẩy về **Mối quan hệ** và **Trách nhiệm chăm sóc**.

## 🛡️ 3 Bước Xây dựng "Lá chắn Tâm lý"
1. **Nhận diện (Awareness):** Gọi tên được thủ thuật họ đang dùng. "À, họ đang dùng kỹ thuật 'Cánh cửa đập vào mặt' với mình."
2. **Trì hoãn (Delay):** Sử dụng câu thần chú: "Tôi cần thời gian để suy nghĩ thêm về việc này."
3. **Thiết lập ranh giới (Boundaries):** Kiên quyết nói "Không" mà không cần phải giải thích quá nhiều.

> "Kiến thức về thao túng là vũ khí tốt nhất để bảo vệ tự do cá nhân của bạn." - Wladislaw Jachtchenko
      `,
      en: `
## 📖 Overview of Manipulation (Wladislaw Jachtchenko)
Wladislaw Jachtchenko categorizes manipulation into White, Gray, and Black levels. Black manipulation is destructive and purely selfish.

## 🛠️ Common "Black" Manipulation Tactics
1. **Foot-in-the-door**: Starting with a small request to gain a larger commitment later.
2. **Door-in-the-face**: Making an extreme request followed by a smaller, intended one.
3. **Negative Framing**: Using fear-based language to control decisions.
4. **Artificial Scarcity**: Creating urgency to bypass logical thinking.
5. **The Guilt Trip**: Playing the victim to exploit empathy.

## 🎭 The Art of Absolute Confidence | Manipulating through Presence
<details>
<summary>View "Fake It Till You Make It" Techniques</summary>

### 1. Walking & Posture (Power Walking)
- **The Leader's Gait:** Walk 10-20% slower than average. Take long, steady strides. Imagine you own the space.
- **Space Dominance:** When sitting, expand your limbs slightly to show dominance. Do not shrink.
- **Eye Gaze:** Always look straight ahead or slightly upward; never look at the ground while moving.

### 2. Speaking (The Voice of Authority)
- **Lower Register:** Lower your pitch at the end of sentences instead of rising (rising indicates uncertainty).
- **The Power Pause:** When asked a difficult question you don't know the answer to, stay silent and maintain eye contact for 3 seconds. This puts pressure on the asker.
- **Assertive Language:** Use "Facts show..." or "My experience indicates..." instead of "I think...".

### 3. Dressing (The Halo Effect)
- **Overdressing:** Always dress slightly better than the occasion requires. Clothing is a "shell" that makes others default to assuming you are competent.
- **Power Accessories:** A clean watch or polished shoes are small details that create a strong "Halo Effect".

### 4. Presentation & Information Manipulation
- **The Pivot:** When facing an unknown topic, say: "That's an interesting question, but the core issue we need to focus on here is..." then pivot to what you know.
- **Odd Numbers:** Use "51.4%" instead of "about 50%". Specific numbers create an illusion of thorough research.
- **Framing:** Always be the one to ask questions first to lead the conversation.
</details>

## 🛡️ Personal Attacks & "Indestructible Mind" Techniques
<details>
<summary>How to maintain a resilient mindset against any attack</summary>

### 1. Understanding Ad Hominem Attacks
Manipulators often attack your appearance, education, or past when they cannot win with logic. The goal is to make you angry, ashamed, and lose control.

### 2. "Indestructible Mind" Techniques
- **Stoic Mindset:** Insults only have power if you agree to accept them. View an attack as "wind blowing past your ears" - it cannot touch your inner essence.
- **Gray Rock Method:** When attacked, respond as boringly as possible (like a gray rock). Use short answers: "Oh", "I see", "That's your opinion". Without emotional feedback, the manipulator will lose interest.
- **Self-Worth Detachment:** View the attack as **"data about the attacker"** rather than **"data about you"**. Someone who insults others is only exposing their own lack of control.
- **Counter with Calmness:** Your composure is the strongest weapon that makes the attacker feel powerless.
</details>

## ❓ The Art of Questioning | Manipulating through Inquiry
<details>
<summary>How to lead others using smart questioning techniques</summary>

### 1. Leading Questions
Asking questions that imply the desired answer to force agreement.
- *Example:* "You also agree that this plan is the most optimal for us, right?"

### 2. False Dilemma Questions
Offering two choices, both of which lead to your desired outcome.
- *Example:* "Should we sign the contract tomorrow morning or afternoon?" (Ignoring the option to not sign).

### 3. Pressuring with "Why"
Using consecutive "Why" questions to force the other person to over-explain and reveal weaknesses.

### 4. The Repetitive Question Technique
Asking the same thing in different ways to test consistency or wear the other person down.
</details>

## 🔬 Neurological Basis
- **Amygdala**: Hijacked to trigger fear and bypass the **Prefrontal Cortex** (logic center).
- **Oxytocin**: Exploited to build false trust.

## 🛡️ Defense Strategies
- **Delay Decisions**: Never commit under pressure.
- **Emotional Awareness**: Identify sudden guilt or fear.
- **Logical Analysis**: Separate the speaker's emotion from the actual request.
      `,
      zh: `
## 📖 操纵术概述 (Wladislaw Jachtchenko)
Wladislaw Jachtchenko 将操纵分为白色、灰色和黑色等级。黑色操纵具有破坏性且纯粹是自私的。

## 🛠️ 常见的“黑色”操纵策略
1. **登门槛效应**: 从一个小请求开始，以获得以后更大的承诺。
2. **留面子效应**: 提出极端要求，然后提出较小的、预期的要求。
3. **负面定框**: 使用基于恐惧的语言来控制决策。
4. **人为稀缺**: 制造紧迫感以绕过逻辑思维。
5. **内疚陷阱**: 扮演受害者以利用同理心。

## 🎭 绝对自信的艺术 | 通过气场操纵
<details>
<summary>查看“伪装直到成功”技术</summary>

### 1. 走姿与体态 (权力走姿)
- **领导者的步态:** 比常人慢 10-20%。步伐大而稳。走路时，想象你拥有整个空间。
- **空间占有:** 坐下时，适度扩展肢体以显示统治力。不要蜷缩。
- **视线:** 移动时始终直视前方或略微向上，绝不低头看地。

### 2. 言语表达 (权威之声)
- **低音调:** 在句尾降低音调，而不是升高（升调表示不确定）。
- **权力停顿:** 遇到不会的问题时，保持沉默并直视对方 3 秒。这会给对方压力，让他们觉得你在评估他们。
- **断言式语言:** 使用“事实表明……”或“我的经验指出……”而不是“我觉得……”。

### 3. 着装 (光环效应)
- **过度着装:** 始终比场合要求的穿得好一点。着装是一个“外壳”，让别人默认你很有能力。
- **权力配饰:** 一块干净的手表或擦亮的皮鞋是创造强大“光环效应”的小细节。

### 4. 表达与信息操操纵
- **转向技术 (The Pivot):** 面对未知话题时，说：“这是一个有趣的问题，但我们需要关注的核心问题是……”然后转向你熟悉的领域。
- **奇数数据:** 使用“51.4%”而不是“约 50%”。具体数字会产生经过深入研究的错觉。
- **定框:** 始终先提问，以引导对话。
</details>

## 🛡️ 个人攻击与“不坏心境”技术
<details>
<summary>如何在任何攻击面前保持坚韧的心态</summary>

### 1. 理解人身攻击 (Ad Hominem)
当操纵者无法通过逻辑获胜时，他们通常会攻击你的外貌、教育或过去。目标是让你愤怒、羞愧并失去控制。

### 2. “不坏心境”技术
- **斯多葛心态:** 侮辱只有在你同意接受时才有力量。将攻击视为“耳边风”——它无法触及你的内在本质。
- **灰石法 (Gray Rock Method):** 受到攻击时，尽可能无聊地回应（像一块灰色的石头）。使用简短的回答：“哦”、“我明白了”、“那是你的意见”。如果没有情绪反馈，操纵者很快就会失去兴趣。
- **自我价值剥离:** 将攻击视为**“关于攻击者的数据”**，而不是**“关于你的数据”**。辱骂他人的人只是在暴露自己缺乏控制。
- **以冷静反击:** 你的冷静是让攻击者感到无力的最强大武器。
</details>

## ❓ 提问的艺术 | 通过询问进行操纵
<details>
<summary>如何使用聪明的提问技巧引导他人</summary>

### 1. 引导性问题
提出暗示预期答案的问题以强迫对方同意。
- *例子:* “你也认为这个方案对我们来说是最优的，对吧？”

### 2. 虚假两难问题
提供两个选择，两者都会导致你预期的结果。
- *例子:* “我们应该在明天上午还是下午签合同？”（忽略不签的选项）。

### 3. 用“为什么”施压
连续使用“为什么”强迫对方过度解释并暴露弱点。

### 4. 重复提问技术
以不同的方式询问同一件事，以测试一致性或使对方疲惫。
</details>

## 🛡️ 防御策略
- **推迟决策**: 绝不在压力下做出承诺。
- **情绪意识**: 识别突然的内疚或恐惧。
- **逻辑分析**: 将说话者的情绪与实际请求分开。
      `
    },
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
    researchSources: [
      "Jachtchenko, W. (2021). Dark Psychology: The Art of Manipulation.",
      "Cialdini, R. B. (2006). Influence: The Psychology of Persuasion.",
      "Nature Neuroscience - Neural mechanisms of social influence."
    ],
    keyTakeaways: [
      {
        vi: "Nhận diện 10 thủ thuật thao túng 'Đen' phổ biến nhất.",
        en: "Identify the 10 most common 'Black' manipulation tactics.",
        zh: "识别 10 种最常见的“黑色”操纵策略。"
      },
      {
        vi: "Hiểu rõ cơ chế tác động của thao túng lên não bộ (Hạch hạnh nhân & Vỏ não trước trán).",
        en: "Understand the neurological mechanisms of manipulation (Amygdala & Prefrontal Cortex).",
        zh: "了解操纵对大脑的神经机制（杏仁核和前额叶皮层）。"
      },
      {
        vi: "Xây dựng 3 bước phòng vệ tâm lý: Nhận diện, Trì hoãn và Thiết lập ranh giới.",
        en: "Build 3 steps of psychological defense: Identification, Delay, and Setting boundaries.",
        zh: "建立心理防御的 3 个步骤：识别、推迟和设定边界。"
      }
    ],
    chartData: [
      { subject: { vi: "Logic", en: "Logic", zh: "逻辑" }, A: 20, fullMark: 100 },
      { subject: { vi: "Cảm xúc", en: "Emotion", zh: "情绪" }, A: 90, fullMark: 100 },
      { subject: { vi: "Tiềm thức", en: "Subconscious", zh: "潜意识" }, A: 95, fullMark: 100 },
      { subject: { vi: "Lòng tin", en: "Trust", zh: "信任" }, A: 85, fullMark: 100 },
      { subject: { vi: "Kiểm soát", en: "Control", zh: "控制" }, A: 90, fullMark: 100 }
    ]
  }
];
