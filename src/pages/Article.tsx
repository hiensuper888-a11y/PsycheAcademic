import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { psychologyData } from '../data/psychologyData';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TableOfContents } from '../components/TableOfContents';
import { CollapsibleList } from '../components/CollapsibleList';

export const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'vi' | 'en' | 'zh';
  
  const article = psychologyData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <Navigate to="/" />;
  }

  const getLocalized = (field: any) => {
    if (typeof field === 'string') return field;
    if (field && typeof field === 'object') {
      return field[currentLang] || field['vi'] || field['en'] || '';
    }
    return '';
  };

  const title = getLocalized(article.title);
  const shortDescription = getLocalized(article.shortDescription);
  const content = getLocalized(article.content);
  // Split content by '## ' but keep the '## ' in the resulting string
  const sections = content.split(/(?=^##\s)/m).filter((s: string) => s.trim().length > 0);

  const tocItems = sections.map((section: string) => {
    const titleMatch = section.match(/^##\s+(.*)/m);
    const title = titleMatch ? titleMatch[1].replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u, '') : 'Section';
    const id = title.toLowerCase().replace(/\s+/g, '-');
    return { title, id };
  });

  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-slate-200">
        <motion.div 
          className="h-full bg-indigo-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-slate-900">
        <img 
          src={article.imageUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-between max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-all font-medium w-fit bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg">
            <ArrowLeft size={18} className="mr-2" />
            {t('article.back')}
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed drop-shadow-md">
              {shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* TOC Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <TableOfContents items={tocItems} />
        </div>

        {/* Markdown Sections */}
        <div className="lg:col-span-3 space-y-8 lg:space-y-12">
          {/* Key Takeaways */}
          {article.keyTakeaways && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-indigo-900 rounded-[2.5rem] shadow-2xl shadow-indigo-200/40 p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                    <BookOpen size={24} className="text-indigo-200" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {t('article.keyTakeaways') || 'Điểm cốt lõi'}
                  </h2>
                </div>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {article.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform duration-300" />
                      <p className="text-indigo-100 text-lg leading-relaxed font-medium">
                        {getLocalized(takeaway)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {sections.map((section: string, index: number) => {
            const id = tocItems[index].id;
            return (
              <motion.div 
                key={`section-${index}`}
                id={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index === 0 ? 0.1 : 0 }}
                className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12 lg:p-16 overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-slate-200/60"
              >
                <div className="prose prose-slate prose-lg md:prose-xl max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4 prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12 prose-table:w-full prose-table:border-collapse prose-table:my-10 prose-table:text-base prose-th:bg-slate-50 prose-th:p-5 prose-th:text-left prose-th:border-b-2 prose-th:border-slate-200 prose-th:font-bold prose-th:text-slate-800 prose-td:p-5 prose-td:border-b prose-td:border-slate-100 hover:prose-tr:bg-slate-50/50 prose-hr:hidden transition-colors">
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({node, children, ...props}) => {
                        const text = React.Children.toArray(children).join('');
                        const titleText = text.replace(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u, '');
                        return (
                          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-6" {...props}>
                            {titleText}
                          </h2>
                        );
                      },
                      h3: ({node, children, ...props}) => {
                        const text = React.Children.toArray(children).join('');
                        const titleText = text.replace(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u, '');
                        return (
                          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4" {...props}>
                            {titleText}
                          </h3>
                        );
                      },
                      ul: ({node, children, ...props}) => {
                        const hasNestedList = React.Children.toArray(children).some(child => React.isValidElement(child) && child.type === 'ul');
                        if (hasNestedList) {
                          return <CollapsibleList title="Chi tiết">{children}</CollapsibleList>;
                        }
                        return <ul className="space-y-3 my-6 list-disc list-inside text-slate-700" {...props}>{children}</ul>;
                      },
                      li: ({node, children, ...props}) => (
                        <li className="leading-relaxed" {...props}>{children}</li>
                      ),
                      details: ({node, children, ...props}) => (
                        <div className="my-6 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/30">
                          {children}
                        </div>
                      ),
                      summary: ({node, children, ...props}) => (
                        <summary className="p-4 font-bold text-lg cursor-pointer hover:bg-slate-100 transition-colors flex items-center gap-2 list-none outline-none">
                          <div className="w-2 h-2 rounded-full bg-indigo-500" />
                          {children}
                        </summary>
                      ),
                      blockquote: ({node, ...props}) => (
                        <blockquote className="relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50/30 border-l-4 border-indigo-500 rounded-r-2xl p-6 my-8 shadow-sm" {...props}>
                          <div className="relative z-10 text-indigo-900 font-medium text-lg italic">
                            {props.children}
                          </div>
                        </blockquote>
                      )
                    }}
                  >
                    {section}
                  </Markdown>
                </div>
              </motion.div>
            );
          })}
          
          {/* Chart Section */}
          {article.chartData && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12 lg:p-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {t('article.chartTitle')}
                </h2>
              </div>
              <div className="w-full h-[450px] bg-gradient-to-b from-slate-50 to-white rounded-[2rem] border border-slate-100 p-6 shadow-inner">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={article.chartData.map(d => ({ ...d, subject: getLocalized(d.subject) }))}>
                    <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 14, fontWeight: 600 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8' }} />
                    <Radar name={title} dataKey="A" stroke="#4f46e5" strokeWidth={3} fill="#4f46e5" fillOpacity={0.4} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', padding: '12px 20px' }}
                      itemStyle={{ color: '#0f172a', fontWeight: 'bold', fontSize: '16px' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}

          {/* Comparison Section */}
          {article.comparison && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12 lg:p-16"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {getLocalized(article.comparison.title)}
                </h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">Hiểu rõ sự khác biệt để đưa ra lựa chọn phù hợp nhất với nhu cầu và ngân sách của bạn.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {article.comparison.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`relative rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 ${
                      item.isPremium 
                        ? 'bg-gradient-to-br from-amber-50 via-white to-amber-50/50 border-2 border-amber-200 shadow-2xl shadow-amber-100/50' 
                        : 'bg-slate-50 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl'
                    }`}
                  >
                    {item.isPremium && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-amber-500/30">
                        {t('article.premium')}
                      </div>
                    )}
                    <h3 className={`text-3xl font-extrabold mb-4 tracking-tight ${item.isPremium ? 'text-amber-900' : 'text-slate-900'}`}>
                      {getLocalized(item.name)}
                    </h3>
                    <p className="text-slate-600 mb-8 min-h-[48px] text-lg leading-relaxed">{getLocalized(item.description)}</p>
                    <ul className="space-y-5">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start">
                          <span className="text-slate-700 font-medium leading-relaxed">{getLocalized(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Brands Section */}
          {article.brands && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12 lg:p-16"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {t('article.brands')}
                </h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('article.brandsDesc')}</p>
              </div>

              <div className="space-y-12">
                {article.brands.map((brand, idx) => (
                  <div key={idx} className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div className="p-8 md:p-10 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-8">
                      <div className="p-4 bg-white rounded-3xl shadow-sm border border-slate-100">
                        <img src={brand.logoUrl} alt={`${brand.name} logo`} className="w-24 h-24 object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                          <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{brand.name}</h3>
                          {brand.websiteUrl && (
                            <a href={brand.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-colors">
                              {t('article.brandWebsite')}
                            </a>
                          )}
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">{getLocalized(brand.description)}</p>
                      </div>
                    </div>
                    
                    <div className="p-8 md:p-10">
                      <h4 className="text-xl font-bold text-slate-900 mb-8">
                        {t('article.products')}
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {brand.products.map((product, pIdx) => (
                          <div key={pIdx} className="group flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all duration-300">
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 flex-shrink-0">
                              <img 
                                src={product.imageUrl} 
                                alt={getLocalized(product.name)} 
                                className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="text-center sm:text-left flex-1 flex flex-col h-full">
                              <h5 className="font-bold text-slate-900 mb-3 text-xl">{getLocalized(product.name)}</h5>
                              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{getLocalized(product.description)}</p>
                              
                              <div className="mt-auto space-y-4">
                                {product.reviews && product.reviews.length > 0 && (
                                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                    {product.reviews.map((review, rIdx) => (
                                      <a key={rIdx} href={review.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-amber-50 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-xl border border-amber-200 hover:bg-amber-100 transition-colors shadow-sm">
                                        {review.source}: {review.score}
                                      </a>
                                    ))}
                                  </div>
                                )}
                                
                                {product.productUrl && (
                                  <a href={product.productUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors group-hover:translate-x-1 duration-300">
                                    {t('article.productDetail')}
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Research Sources */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-800 p-8 md:p-12 lg:p-16"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-10">
              {t('article.sources')}
            </h3>
            <ul className="space-y-6">
              {article.researchSources.map((source, index) => (
                <li key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="text-slate-300 prose prose-invert max-w-none prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-white prose-p:leading-relaxed">
                    <Markdown>{getLocalized(source)}</Markdown>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
