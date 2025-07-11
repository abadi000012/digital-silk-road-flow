
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const shippingFeatures = [
  {
    emoji: "🔍",
    title: "بحث عن أفضل المصانع",
    description: "نساعدك في العثور على المصانع الحقيقية التي تُنتج المنتجات التي تحتاجها بجودة عالية وسعر مناسب، مع التأكد من أن المصنع مرخص وموثوق."
  },
  {
    emoji: "🤝",
    title: "تفاوض مع المصانع",
    description: "فريقنا في الصين يتولى مهمة التحقق النهائي من جودة وشكل وعدد المنتجات قبل شحنها، مما يقلل من احتمالية المفاجآت عند الوصول."
  },
  {
    emoji: "🕵️‍♂️",
    title: "خدمة الشحن من الباب للباب",
    description: "نؤمن بأن الثقة لا تكفي. نقوم بفحص المنتجات قبل الشراء والتأكد من مطابقتها للمواصفات، مع التفاوض على أي تعديل أو تحسين مطلوب قبل التصنيع النهائي."
  },
  {
    emoji: "📞",
    title: "شحن جزئي",
    description: "نقدم لك توجيهًا مجانيًا عبر خبرائنا المتخصصين في السوق الصيني، يشمل توصيات للمنتجات والموردين، وتحذيرات من المخاطر المحتملة."
  },
  {
    emoji: "📦",
    title: "فحص البضاعة قبل الشحن",
    description: "نؤمن بأن الثقة لا تكفي. نقوم بفحص المنتجات قبل الشراء والتأكد من مطابقتها للمواصفات، مع التفاوض على أي تعديل أو تحسين مطلوب قبل التصنيع النهائي."
  },
  {
    emoji: "📥",
    title: "تجميع الشحنات من عدة موردين",
    description: "إذا اشتريت من أكثر من مصنع أو مورد، نقوم بتجميع الشحنات جميعها في مستودعاتنا في الصين لضمان شحن موحد وتوفير في التكاليف."
  },
  {
    emoji: "🏪",
    title: "تجميع وتخزين مؤقت في مستودعاتنا",
    description: "نمتلك مستودعات استراتيجية في الصين والسعودية لتخزين شحنتك بشكل آمن ومنظم إلى حين موعد الشحن أو التوزيع النهائي."
  },
  {
    emoji: "🚚",
    title: "فحص الجودة والتفاوض",
    description: "نتولى عملية الشحن كاملة من عنوان المصنع في الصين وحتى باب العميل في السعودية، مما يوفر عليك الوقت والتعقيد والمتابعة مع أطراف متعددة."
  },
  {
    emoji: "🧾",
    title: "التخليص الجمركي في السعودية",
    description: "فريق التخليص التابع لنا يتعامل مع الجمارك السعودية باحترافية عالية لتسريع دخول الشحنة وتقليل أي تأخير محتمل أو رسوم إضافية."
  },
  {
    emoji: "📡",
    title: "تتبع شحنتك لحظة بلحظة",
    description: "نقدم لك نظام تتبع إلكتروني حديث يتيح لك معرفة موقع شحنتك في كل لحظة، من لحظة الشحن إلى التسليم، لضمان الشفافية وراحة البال."
  },
  {
    emoji: "🛒",
    title: "حلول خدمات التجارة الإلكترونية",
    description: "ندعم المتاجر الإلكترونية في السعودية بخدمات مخصصة تشمل الشحن الجزئي، التغليف حسب الطلب، وربط مباشر بين الموردين والمتاجر."
  },
  {
    emoji: "⚙️",
    title: "استشارات مجانية",
    description: "نوفر لك أنظمة شحن مرنة (مثل الشحن الجزئي أو الموحد) باستخدام أدوات تقنية لتقليل التكاليف وتسريع العمليات."
  },
  {
    emoji: "🇸🇦",
    title: "خبرة محلية طويلة",
    description: "بخبرتنا الممتدة لأكثر من 10 سنوات في الشحن بين الصين والسعودية، نحن نعرف القوانين، التحديات، وأفضل الطرق لتوصيل شحنتك باسرع وقت وبأمان."
  }
];

const ShippingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % shippingFeatures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
            شحن موثوق من الصين
          </h2>
          <h3 className="font-playfair text-xl md:text-2xl font-semibold text-sebaaq-blue mb-4">
            شريكك في الاستيراد من الصين
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نوفر حلولاً لوجستية متكاملة للشركات والأفراد، وكيل شحن معتمد من الصين، مع ضمان أعلى معايير الأمان والاحترافية. نستلم شحنتك من مصانع الصين ونسلمها مباشرة إلى عنوانك في السعودية.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {shippingFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                activeTab === index ? 'ring-2 ring-sebaaq-blue bg-gradient-to-br from-sebaaq-blue/5 to-blue-50' : ''
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-center mb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-4xl transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gradient-to-br from-sebaaq-blue to-blue-600 shadow-lg scale-110' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 hover:from-sebaaq-blue/20 hover:to-blue-100'
                }`}>
                  {feature.emoji}
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-sebaaq-midnight mb-3 text-center leading-tight">
                {feature.title}
              </h4>
              
              <p className={`text-sm text-gray-600 leading-relaxed text-center transition-all duration-300 ${
                activeTab === index ? 'text-gray-700' : ''
              }`}>
                {feature.description}
              </p>

              {/* Selected Indicator */}
              {activeTab === index && (
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-1 bg-gradient-to-r from-sebaaq-blue to-blue-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Featured Service Display */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sebaaq-blue to-blue-600 rounded-2xl flex items-center justify-center text-5xl shadow-lg">
                {shippingFeatures[activeTab].emoji}
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-sebaaq-midnight mb-4">
              {shippingFeatures[activeTab].title}
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              {shippingFeatures[activeTab].description}
            </p>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
              {shippingFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTab
                      ? 'bg-sebaaq-blue scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-sebaaq-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            تواصل معنا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
