import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, Heart, Activity, Target, ShieldAlert, Sparkles, Save, Trash2, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TargetProfile {
  id: string;
  name: string;
  age: string;
  gender: string;
  job: string;
  hobbies: string;
  habits: string;
}

export const TargetAnalysis: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [targets, setTargets] = useState<TargetProfile[]>([]);
  const [currentTarget, setCurrentTarget] = useState<TargetProfile>({
    id: '',
    name: '',
    age: '',
    gender: '',
    job: '',
    hobbies: '',
    habits: ''
  });
  const [showPlan, setShowPlan] = useState<string | null>(null);

  const handleSaveTarget = () => {
    if (!currentTarget.name) return;
    const newTarget = { ...currentTarget, id: Date.now().toString() };
    setTargets([...targets, newTarget]);
    setCurrentTarget({ id: '', name: '', age: '', gender: '', job: '', hobbies: '', habits: '' });
  };

  const handleDeleteTarget = (id: string) => {
    setTargets(targets.filter(t => t.id !== id));
    if (showPlan === id) setShowPlan(null);
  };

  const getInfluenceStrategy = (target: Partial<TargetProfile>) => {
    const age = parseInt(target.age || '0');
    const gender = target.gender;
    const job = (target.job || '').toLowerCase();
    const hobbies = (target.hobbies || '').toLowerCase();
    
    let strategy = {
      vulnerability: "Chưa đủ thông tin",
      technique: "Chưa xác định",
      plan: [] as string[]
    };

    if (!age && !gender && !job && !hobbies) return strategy;

    // Age & Gender based logic
    if (age > 0 && age < 25) {
      strategy.vulnerability = gender === 'female' 
        ? "Nhu cầu thuộc về nhóm và sự thấu cảm cao." 
        : "Cái tôi mới lớn và nhu cầu khẳng định vị thế.";
      strategy.technique = "Bằng chứng xã hội (Social Proof) & FOMO.";
      strategy.plan.push("Sử dụng áp lực đồng lứa: 'Mọi người trong nhóm đều đang làm vậy'.");
    } else if (age >= 25 && age <= 50) {
      strategy.vulnerability = gender === 'female'
        ? "Cân bằng giữa gia đình/sự nghiệp và nỗi sợ không hoàn hảo."
        : "Áp lực thành công tài chính và sự công nhận chuyên môn.";
      strategy.technique = "Sự nhất quán (Consistency) & Định khung (Framing).";
      strategy.plan.push("Gắn kết yêu cầu với giá trị cốt lõi hoặc mục tiêu dài hạn của họ.");
    } else if (age > 50) {
      strategy.vulnerability = "Sự an toàn, sức khỏe và tôn trọng kinh nghiệm cá nhân.";
      strategy.technique = "Uy tín (Authority) & Sự thấu cảm giả tạo.";
      strategy.plan.push("Sử dụng các dẫn chứng từ chuyên gia hoặc số liệu lịch sử.");
    }

    // Job-based logic integration (20 jobs)
    if (job) {
      const jobMap = [
        { keys: ['kinh doanh', 'bán hàng', 'sales', 'marketing'], tech: "Cánh cửa đập vào mặt & Sự khan hiếm", plan: ["Đưa ra đề nghị cực đoan trước để họ từ chối, sau đó đưa ra yêu cầu thực sự.", "Tạo cảm giác 'cơ hội cuối cùng' để kích hoạt bản năng săn đón."] },
        { keys: ['kỹ thuật', 'it', 'lập trình', 'kỹ sư'], tech: "Con đường trung tâm (ELM) & Dữ liệu định khung", plan: ["Sử dụng dữ liệu logic, biểu đồ và phân tích sâu để thuyết phục.", "Cung cấp các số liệu đã được chọn lọc (cherry-picking) để họ tự đưa ra kết luận."] },
        { keys: ['giáo dục', 'giáo viên', 'giảng viên'], tech: "Sự thấu cảm & Trách nhiệm đạo đức", plan: ["Khai thác lòng trắc ẩn và tinh thần trách nhiệm cộng đồng.", "Định khung yêu cầu như một hành động giúp đỡ học sinh hoặc xã hội."] },
        { keys: ['y tế', 'bác sĩ', 'điều dưỡng', 'nha sĩ'], tech: "Hội chứng đấng cứu thế & Áp lực thời gian", plan: ["Tạo ra tình huống khẩn cấp giả tạo để họ không kịp suy nghĩ logic.", "Đóng vai nạn nhân cần sự cứu rỗi khẩn thiết từ chuyên môn của họ."] },
        { keys: ['quản lý', 'lãnh đạo', 'giám đốc', 'ceo'], tech: "Sự nhất quán & Tôn vinh quyền lực", plan: ["Để họ tự đưa ra kết luận: 'Với tầm nhìn của bạn, tôi tin bạn đã thấy...'.", "Gắn kết yêu cầu với việc duy trì hình ảnh quyền lực và sự nhất quán của họ."] },
        { keys: ['nghệ thuật', 'sáng tạo', 'thiết kế', 'họa sĩ'], tech: "Cảm xúc quá tải & Neo tâm lý", plan: ["Sử dụng ngôn từ giàu hình ảnh và tác động mạnh vào cảm giác.", "Tạo ra một không gian trải nghiệm độc đáo để làm suy yếu khả năng phòng vệ logic."] },
        { keys: ['tài chính', 'kế toán', 'ngân hàng', 'kiểm toán'], tech: "Nỗi sợ mất mát (Loss Aversion) & Mỏ neo con số", plan: ["Nhấn mạnh vào những gì họ sẽ 'mất' (tiền bạc, cơ hội) nếu không thực hiện.", "Đưa ra một con số mỏ neo cực cao ban đầu để làm các con số sau có vẻ hợp lý."] },
        { keys: ['nhân sự', 'hr', 'tuyển dụng'], tech: "Sự thấu cảm giả tạo", plan: ["Chia sẻ một bí mật giả tạo để kích hoạt nguyên tắc 'Có qua có lại' trong giao tiếp.", "Đóng vai người đang tìm kiếm sự định hướng nghề nghiệp."] },
        { keys: ['luật sư', 'pháp lý', 'công chứng'], tech: "Chi tiết vụn vặt (Red Herring) & Kiệt sức nhận thức", plan: ["Cung cấp quá nhiều thông tin nhiễu để làm cạn kiệt tài nguyên nhận thức của họ.", "Đánh lạc hướng khỏi vấn đề chính bằng các tiểu tiết không quan trọng."] },
        { keys: ['dịch vụ', 'cskh', 'nhà hàng', 'khách sạn'], tech: "Bạo hành tâm lý (Gaslighting) & Kiệt sức cảm xúc", plan: ["Lợi dụng lúc họ đang mệt mỏi vì khách hàng để đưa ra yêu cầu.", "Tỏ ra là một khách hàng VIP hoặc đe dọa đánh giá xấu để ép buộc."] },
        { keys: ['xây dựng', 'kiến trúc', 'thầu'], tech: "Chi phí chìm (Sunk Cost Fallacy)", plan: ["Nhắc nhở về những công sức và tiền bạc họ đã đổ vào dự án.", "Thuyết phục rằng chỉ cần 'cố thêm một chút nữa' là sẽ thành công."] },
        { keys: ['nghiên cứu', 'khoa học', 'nhà khoa học'], tech: "Lời kêu gọi từ uy tín (Appeal to Authority)", plan: ["Trích dẫn các nguồn tài liệu, giáo sư hoặc viện nghiên cứu (có thể giả mạo hoặc bóp méo).", "Sử dụng thuật ngữ chuyên ngành phức tạp để tạo vỏ bọc chuyên gia."] },
        { keys: ['hành chính', 'văn phòng', 'thư ký'], tech: "Sự vâng lời mù quáng & Hiệu ứng hào quang", plan: ["Ăn mặc sang trọng, sử dụng giọng điệu ra lệnh của cấp trên.", "Tạo ra cảm giác rằng yêu cầu này đã được 'sếp lớn' thông qua."] },
        { keys: ['tự do', 'freelancer', 'mmo'], tech: "Ảo tưởng kiểm soát & Bằng chứng xã hội", plan: ["Vẽ ra viễn cảnh tự do tài chính và làm chủ hoàn toàn thời gian.", "Cho thấy những freelancer khác đang kiếm được rất nhiều tiền từ việc này."] },
        { keys: ['nông nghiệp', 'nông dân', 'chăn nuôi'], tech: "Tâm lý bầy đàn & Truyền thống", plan: ["Nhấn mạnh rằng 'cả làng/cả xóm đều đã làm thế này rồi'.", "Gắn kết yêu cầu với các giá trị truyền thống gia đình."] },
        { keys: ['vận tải', 'lái xe', 'logistics'], tech: "Mệt mỏi nhận thức & Quyết định bốc đồng", plan: ["Đưa ra yêu cầu vào cuối ca làm việc hoặc lúc họ đang căng thẳng trên đường.", "Tạo áp lực thời gian: 'Phải quyết định ngay trong 1 phút'."] },
        { keys: ['báo chí', 'phóng viên', 'truyền thông'], tech: "Tính độc quyền & Thiên kiến giật gân", plan: ["Hứa hẹn cung cấp 'thông tin độc quyền chưa ai biết'.", "Đóng gói thông tin theo hướng drama, giật gân để kích thích sự tò mò."] },
        { keys: ['công an', 'quân đội', 'bảo vệ'], tech: "Giả mạo thẩm quyền & Tư duy trắng đen", plan: ["Sử dụng ngôn ngữ mệnh lệnh, dứt khoát.", "Đưa ra các lựa chọn cực đoan (chỉ có A hoặc B) để ép họ chọn điều bạn muốn."] },
        { keys: ['sinh viên', 'thực tập sinh', 'học sinh'], tech: "Hội chứng kẻ mạo danh & Lời khen giả tạo", plan: ["Khen ngợi họ là 'tài năng trẻ hiếm có' để bóc lột sức lao động.", "Tạo ra ảo giác rằng họ đang được trao một 'cơ hội ngàn vàng'."] },
        { keys: ['nội trợ', 'ở nhà'], tech: "FOMO & Nỗi sợ an toàn gia đình", plan: ["Đánh vào nỗi sợ con cái thua thiệt so với bạn bè (FOMO giáo dục).", "Thổi phồng các nguy cơ về sức khỏe/an ninh để bán giải pháp."] }
      ];

      let jobMatched = false;
      for (const j of jobMap) {
        if (j.keys.some(k => job.includes(k))) {
          strategy.technique += (strategy.technique === "Chưa xác định" ? "" : " + ") + j.tech;
          strategy.plan.push(...j.plan);
          jobMatched = true;
          break;
        }
      }
      if (!jobMatched && job.length > 2) {
        strategy.plan.push(`Sử dụng định kiến về nghề "${target.job}" để tạo áp lực chuyên môn.`);
      }
    }

    // Hobby-based logic integration (20 hobbies)
    if (hobbies) {
      const hobbyMap = [
        { keys: ['thể thao', 'gym', 'chạy bộ', 'bóng đá', 'cầu lông'], plan: ["Thách thức bản lĩnh: 'Tôi nghĩ việc này có thể hơi quá sức với một người có kỷ luật như bạn'."] },
        { keys: ['đọc sách', 'học', 'nghiên cứu', 'cờ vua'], plan: ["Tôn vinh trí tuệ: 'Với một người am hiểu và có tư duy chiều sâu như bạn, chắc chắn bạn sẽ thấy điểm hay ở đây'."] },
        { keys: ['du lịch', 'phượt', 'khám phá'], plan: ["Khai thác sự khan hiếm: 'Đây là trải nghiệm độc bản, hiếm khi có cơ hội thứ hai để thử'."] },
        { keys: ['game', 'trò chơi', 'esport'], plan: ["Sử dụng cơ chế phần thưởng: Chia nhỏ yêu cầu thành các 'nhiệm vụ' với phần thưởng tâm lý ngay lập tức."] },
        { keys: ['đầu tư', 'chứng khoán', 'crypto', 'coin'], plan: ["Khai thác nỗi sợ mất mát (Loss Aversion): Nhấn mạnh vào những gì họ sẽ 'mất' nếu không thực hiện ngay."] },
        { keys: ['nấu ăn', 'ẩm thực', 'làm bánh'], plan: ["Kích hoạt giác quan: Sử dụng các ẩn dụ về sự hòa quyện và quy trình tỉ mỉ để tạo thiện cảm."] },
        { keys: ['nhiếp ảnh', 'quay phim', 'chụp ảnh'], plan: ["Khai thác chủ nghĩa hoàn hảo: Chỉ ra một 'lỗi nhỏ' trong công việc của họ và đề xuất giải pháp của bạn."] },
        { keys: ['âm nhạc', 'đàn', 'hát', 'ca hát'], plan: ["Cảm xúc lây lan: Sử dụng âm nhạc nền hoặc nhịp điệu giọng nói để đồng bộ hóa nhịp tim và cảm xúc của họ."] },
        { keys: ['mua sắm', 'thời trang', 'shopping'], plan: ["Hiệu ứng Diderot: Tặng họ một món đồ nhỏ, sau đó thuyết phục họ làm theo yêu cầu lớn để 'đồng bộ' với món đồ đó."] },
        { keys: ['sưu tầm', 'đồ cổ', 'tem', 'mô hình'], plan: ["Sự khan hiếm nhân tạo: 'Tôi chỉ chia sẻ bí mật này với 3 người, và bạn là người cuối cùng'."] },
        { keys: ['tình nguyện', 'từ thiện', 'xã hội'], plan: ["Cảm giác tội lỗi (Guilt trip): 'Nếu bạn không giúp, những người kia sẽ phải chịu hậu quả rất nặng nề'."] },
        { keys: ['thú cưng', 'chó', 'mèo'], plan: ["Tình cảm gắn bó: Tỏ ra cực kỳ yêu thương động vật để ngay lập tức phá vỡ rào cản phòng vệ của họ."] },
        { keys: ['làm vườn', 'cây cảnh', 'trồng cây'], plan: ["Hiệu ứng IKEA: Nhờ họ giúp một việc nhỏ xíu ban đầu, họ sẽ tự động gắn bó với toàn bộ dự án của bạn."] },
        { keys: ['xem phim', 'cày phim', 'netflix'], plan: ["Ám thị tiềm thức: Lặp đi lặp lại một thông điệp nhiều lần khi họ đang trong trạng thái thư giãn, lơ đãng."] },
        { keys: ['mạng xã hội', 'tiktok', 'facebook', 'lướt web'], plan: ["Vòng lặp Dopamine: Cho họ những lời khen ngợi nhỏ giọt, ngẫu nhiên để họ bị nghiện sự công nhận từ bạn."] },
        { keys: ['thủ công', 'diy', 'đan len', 'handmade'], plan: ["Tâm lý tiếc của (Sunk cost): Khiến họ đầu tư thời gian vào bạn, họ sẽ không nỡ từ chối yêu cầu cuối cùng."] },
        { keys: ['yoga', 'thiền', 'tâm linh'], plan: ["Hiệu ứng hào quang (Halo Effect): Đóng vai một người có năng lượng bình an, đạo mạo để họ tin tưởng mù quáng."] },
        { keys: ['xe cộ', 'độ xe', 'mô tô', 'ô tô'], plan: ["Đánh vào cái tôi: 'Chỉ những người thực sự đẳng cấp mới hiểu được giá trị của đề nghị này'."] },
        { keys: ['công nghệ', 'đồ điện tử', 'gadget'], plan: ["Hiệu ứng nâng cấp: Thuyết phục họ rằng cách làm cũ của họ đã 'lỗi thời' và bạn có giải pháp 'thế hệ mới'."] },
        { keys: ['chiêm tinh', 'tarot', 'tử vi', 'cung hoàng đạo'], plan: ["Hiệu ứng Barnum (Cold Reading): Đưa ra những nhận xét chung chung về tính cách để họ tin rằng bạn 'đi guốc trong bụng' họ."] }
      ];

      let hobbyMatched = false;
      for (const h of hobbyMap) {
        if (h.keys.some(k => hobbies.includes(k))) {
          strategy.plan.push(...h.plan);
          hobbyMatched = true;
          break;
        }
      }
      if (!hobbyMatched && hobbies.length > 2) {
        strategy.plan.push(`Tìm hiểu sâu về sở thích "${target.hobbies}" để tạo sự tương đồng giả tạo (Mirroring).`);
      }
    }

    if (strategy.vulnerability === "Chưa đủ thông tin" && (job || hobbies)) {
        strategy.vulnerability = "Dựa trên công việc và sở thích.";
    }

    return strategy;
  };

  const liveStrategy = getInfluenceStrategy(currentTarget);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
        >
          Hệ Thống <span className="text-indigo-600">Phân Tích & Lập Kế Hoạch</span>
        </motion.h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Nhập thông tin để nhận ngay các phương pháp thao túng hữu hiệu nhất dựa trên tâm lý học hành vi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Form */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-indigo-100 rounded-xl text-indigo-600">
                <User size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Thông tin đối tượng</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Giới tính</label>
                  <select 
                    value={currentTarget.gender}
                    onChange={(e) => setCurrentTarget({...currentTarget, gender: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-500 transition-all"
                  >
                    <option value="">Chọn...</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Độ tuổi</label>
                  <input 
                    type="number"
                    value={currentTarget.age}
                    onChange={(e) => setCurrentTarget({...currentTarget, age: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-500 transition-all"
                    placeholder="Tuổi..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Công việc</label>
                  <input 
                    type="text"
                    value={currentTarget.job}
                    onChange={(e) => setCurrentTarget({...currentTarget, job: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-500 transition-all"
                    placeholder="Nghề nghiệp..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Sở thích</label>
                  <input 
                    type="text"
                    value={currentTarget.hobbies}
                    onChange={(e) => setCurrentTarget({...currentTarget, hobbies: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-500 transition-all"
                    placeholder="Sở thích..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Họ tên (Tùy chọn)</label>
                <input 
                  type="text"
                  value={currentTarget.name}
                  onChange={(e) => setCurrentTarget({...currentTarget, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-indigo-500 transition-all"
                  placeholder="Để lưu vào danh sách..."
                />
              </div>

              <button 
                onClick={handleSaveTarget}
                disabled={!currentTarget.name}
                className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Save size={20} />
                Lưu vào danh sách theo dõi
              </button>
            </div>
          </motion.div>
        </div>

        {/* Live Analysis Results */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] shadow-2xl border border-indigo-50 p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Sparkles size={120} className="text-indigo-600" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-600 rounded-xl text-white">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Kết quả phân tích tức thì</h2>
              </div>

              {(!currentTarget.age && !currentTarget.gender && !currentTarget.job && !currentTarget.hobbies) ? (
                <div className="py-12 text-center">
                  <p className="text-slate-400 italic">Vui lòng nhập thông tin để bắt đầu phân tích...</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Result Table */}
                  <div className="overflow-hidden rounded-3xl border border-slate-100">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase">Hạng mục</th>
                          <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase">Đề xuất / Phân tích</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-slate-100">
                          <td className="px-6 py-4 font-bold text-slate-700">Điểm yếu</td>
                          <td className="px-6 py-4 text-red-600 font-medium">{liveStrategy.vulnerability}</td>
                        </tr>
                        <tr className="border-t border-slate-100">
                          <td className="px-6 py-4 font-bold text-slate-700">Phương pháp</td>
                          <td className="px-6 py-4 text-indigo-600 font-bold">{liveStrategy.technique}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
                    <h4 className="font-bold text-indigo-900 mb-6 flex items-center gap-2">
                      <ShieldAlert size={20} />
                      Cách thức triển khai tích hợp:
                    </h4>
                    <ul className="space-y-4">
                      {liveStrategy.plan.map((step, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 text-indigo-800 leading-relaxed"
                        >
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                          <span className="text-lg font-medium">{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Saved Targets Section */}
      {targets.length > 0 && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 px-4">Danh sách đối tượng đã lưu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {targets.map((target) => (
                <motion.div 
                  key={target.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-[2rem] shadow-lg border border-slate-100 p-8"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 font-bold">
                        {target.name.charAt(0)}
                      </div>
                      <h3 className="font-bold text-slate-900">{target.name}</h3>
                    </div>
                    <button onClick={() => handleDeleteTarget(target.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="space-y-2 text-sm text-slate-500 mb-6">
                    <p>• {target.gender === 'male' ? 'Nam' : 'Nữ'}, {target.age} tuổi</p>
                    <p>• Việc làm: {target.job || 'N/A'}</p>
                    <p>• Sở thích: {target.hobbies || 'N/A'}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setCurrentTarget(target);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3 bg-slate-50 hover:bg-indigo-50 text-indigo-600 rounded-xl font-bold transition-colors"
                  >
                    Xem lại phân tích
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};
