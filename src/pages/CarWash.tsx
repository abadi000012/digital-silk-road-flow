
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Droplets, Wind, Sparkles, Clock, Users, Shield, Star, Gauge, Target, ArrowLeft, Timer, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarWash = () => {
  const technicalFeatures = [
    {
      title: "أنظمة التجفيف المدمجة",
      description: "تجفيف سريع وفعال للسيارات"
    },
    {
      title: "المستشعرات الذكية",
      description: "تحكم دقيق وآمن في عملية الغسيل"
    },
    {
      title: "أنظمة التحكم PLC",
      description: "تحكم متقدم وموثوق في العمليات"
    },
    {
      title: "أنظمة رش الشمع والكريستال",
      description: "حماية وتلميع فائق للسيارات"
    },
    {
      title: "نظم إعادة تدوير المياه",
      description: "التزام بالاستدامة البيئية"
    },
    {
      title: "شاشات اللمس البديهية",
      description: "واجهات سهلة الاستخدام"
    },
    {
      title: "نظم الدفع المتعددة",
      description: "عملات، بطاقات، QR Code، دفع إلكتروني"
    }
  ];

  const benefits = [
    {
      title: "عائد سريع على الاستثمار",
      description: "استرداد سريع لتكلفة الاستثمار",
      icon: Target
    },
    {
      title: "تشغيل مستمر",
      description: "عمل على مدار الساعة بكفاءة عالية",
      icon: Clock
    },
    {
      title: "صيانة قليلة",
      description: "تكلفة صيانة منخفضة وموثوقية عالية",
      icon: Shield
    },
    {
      title: "جودة عالية",
      description: "نتائج تنظيف ممتازة في كل مرة",
      icon: Star
    }
  ];

  const availableProducts = [
    {
      id: "bt900",
      title: "BT900",
      subtitle: "نظام الذكاء الاصطناعي المتطور",
      description: "أحدث تقنيات الغسيل الأوتوماتيكي مع نظام 2 في 1: غسيل بدون لمس + غسيل بالفرش. تقنيات متطورة مع الذكاء الاصطناعي تضمن أداءً فائق الكفاءة.",
      capacity: "60 سيارة/ساعة",
      washTime: "1 دقيقة",
      warranty: "10 سنوات",
      features: [
        "نظام ذكي ضد الاصطدام",
        "تشخيص ذاتي للأخطاء", 
        "9 فرش ناعمة جداً",
        "نسبة تجفيف 99%",
        "مضخة ألمانية 100 بار",
        "دعم فني مدى الحياة"
      ],
      route: "/car-wash/bt900",
      featured: true
    },
    {
      id: "bt500",
      title: "BT500",
      subtitle: "نظام الغسيل الاحترافي",
      description: "مغسلة أوتوماتيكية متطورة تجمع بين تقنية الغسيل بالفرش والغسيل بدون لمس في نظام واحد متكامل. مصممة للاستخدام التجاري المكثف.",
      capacity: "45 سيارة/ساعة",
      washTime: "1.5 دقيقة",
      warranty: "5 سنوات",
      features: [
        "نظام مزدوج (فرش + بدون لمس)",
        "فرش عالية الجودة",
        "نظام تجفيف متطور",
        "استهلاك مياه محسّن",
        "واجهة تحكم ذكية",
        "صيانة سهلة"
      ],
      route: "/car-wash/bt500",
      featured: false
    },
    {
      id: "tl500",
      title: "TL500",
      subtitle: "غسيل بدون لمس متقدم",
      description: "نظام غسيل بدون لمس عالي الأداء مع ذراع روبوتي متحرك 360 درجة. يوفر تنظيف شامل للمركبة دون أي تلامس مع الطلاء.",
      capacity: "40 سيارة/ساعة",
      washTime: "2 دقيقة",
      warranty: "3 سنوات",
      features: [
        "ذراع روبوتي 360 درجة",
        "ضغط ماء عالي 80 بار",
        "نظام استشعار ذكي",
        "تنظيف بدون خدوش",
        "برامج غسيل متنوعة",
        "تجفيف هوائي قوي"
      ],
      route: "/car-wash/products",
      featured: false
    },
    {
      id: "tl400",
      title: "TL400",
      subtitle: "غسيل بدون لمس متوسط",
      description: "حل اقتصادي للغسيل بدون لمس مع أداء موثوق. مناسب للمحطات متوسطة الحجم والأعمال الناشئة في مجال غسيل السيارات.",
      capacity: "30 سيارة/ساعة",
      washTime: "2.5 دقيقة",
      warranty: "3 سنوات",
      features: [
        "ذراع واحد متحرك",
        "ضغط ماء 60 بار",
        "نظام استشعار أساسي",
        "تشغيل اقتصادي",
        "برامج غسيل أساسية",
        "تجفيف هوائي"
      ],
      route: "/car-wash/products",
      featured: false
    },
    {
      id: "tl300",
      title: "TL300",
      subtitle: "غسيل بدون لمس اقتصادي",
      description: "الحل المثالي للمشاريع الصغيرة والمتوسطة. نظام غسيل بدون لمس بسيط وفعال يقدم نتائج ممتازة بتكلفة معقولة.",
      capacity: "25 سيارة/ساعة",
      washTime: "3 دقائق",
      warranty: "2 سنة",
      features: [
        "تصميم مدمج",
        "ضغط ماء 50 بار",
        "تشغيل بسيط",
        "استهلاك طاقة منخفض",
        "صيانة سهلة",
        "مناسب للمساحات الصغيرة"
      ],
      route: "/car-wash/products",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/c2ca66ed-2350-48cc-bd82-dbe45200dae6.png')`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-midnight/80 to-sebaaq-charcoal/80"></div>
        
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            مغاسل السيارات الأوتوماتيكية
            <span className="gradient-text block mt-2">نظافة فائقة، كفاءة لا تضاهى</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            ارتقوا بتجربة غسيل السيارات مع أحدث أنظمة المغاسل الأوتوماتيكية التي نقدمها. سواء كنتم تبحثون عن السرعة، الكفاءة، أو الحماية الفائقة لطلاء المركبات، فإن حلولنا تلبي جميع احتياجاتكم وتفوق توقعاتكم. آلاتنا مصممة لتقديم أداء استثنائي وموثوقية عالية، مما يضمن لكم تدفقًا مستمرًا للعملاء وعائدًا مجزيًا على استثماركم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold">
              احصل على عرض سعر
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 rounded-lg font-semibold">
              جولة افتراضية
            </Button>
          </div>
        </div>
      </section>

      {/* Available Products Section */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            المنتجات المتاحة
            <span className="gradient-text block">أحدث أنظمة الغسيل</span>
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {availableProducts.map((product, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-2 border-sebaaq-blue/20">
                <div className="flex flex-col h-full">
                  {/* Product Header */}
                  <div className="flex items-center mb-4">
                    {product.featured && (
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold ml-2">
                        مميز
                      </div>
                    )}
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-sebaaq-blue font-medium text-sm">{product.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Product Image */}
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-sebaaq-blue/20 mb-4">
                    {product.id === 'bt900' && (
                      <img
                        src="/lovable-uploads/c5375e9e-6274-4fe3-ace0-0c5f793ff6d0.png"
                        alt={`${product.title} - نظام غسيل السيارات`}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {product.id === 'bt500' && (
                      <img
                        src="/lovable-uploads/28144a1c-943b-408f-ad5d-00076e8779ae.png"
                        alt={`${product.title} - نظام غسيل السيارات`}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {(product.id === 'tl500' || product.id === 'tl400' || product.id === 'tl300') && (
                      <img
                        src="/lovable-uploads/3ccf25e5-f98e-46f9-be3c-88ad951e5499.png"
                        alt={`${product.title} - نظام غسيل السيارات`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="bg-gradient-to-r from-sebaaq-blue/10 to-blue-400/10 p-2 rounded text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Gauge className="w-3 h-3 text-sebaaq-blue ml-1" />
                        <span className="font-semibold text-sebaaq-midnight text-xs">السرعة</span>
                      </div>
                      <p className="text-sebaaq-blue font-bold text-xs">{product.capacity}</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-400/10 p-2 rounded text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Timer className="w-3 h-3 text-green-600 ml-1" />
                        <span className="font-semibold text-sebaaq-midnight text-xs">الوقت</span>
                      </div>
                      <p className="text-green-600 font-bold text-xs">{product.washTime}</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/10 to-violet-400/10 p-2 rounded text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Shield className="w-3 h-3 text-purple-600 ml-1" />
                        <span className="font-semibold text-sebaaq-midnight text-xs">الضمان</span>
                      </div>
                      <p className="text-purple-600 font-bold text-xs">{product.warranty}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-bold text-sebaaq-midnight mb-2 text-sm">المميزات الرئيسية:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-500 ml-2 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 3 && (
                        <div className="text-xs text-gray-500">
                          +{product.features.length - 3} مميزات أخرى
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link to={product.route}>
                      <Button className="w-full bg-gradient-to-r from-sebaaq-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm group transition-all duration-300">
                        تفاصيل أكثر
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            مزايا الاستثمار
            <span className="gradient-text block">في مغاسل السيارات</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Statistics */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-12">
            أداء متميز ونتائج مؤكدة
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">800</div>
              <div className="text-white font-medium">حد أقصى يومي</div>
              <div className="text-gray-400 text-sm mt-2">سيارة في اليوم</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">3</div>
              <div className="text-white font-medium">دقائق فقط</div>
              <div className="text-gray-400 text-sm mt-2">متوسط وقت الغسيل</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">95%</div>
              <div className="text-white font-medium">توفير المياه</div>
              <div className="text-gray-400 text-sm mt-2">مع نظام إعادة التدوير</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">24/7</div>
              <div className="text-white font-medium">تشغيل مستمر</div>
              <div className="text-gray-400 text-sm mt-2">بدون توقف</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-sebaaq-midnight mb-8">
            ابدأ مشروع مغسلة السيارات معنا
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            تواصل معنا للحصول على دراسة جدوى مجانية وعرض سعر شامل لمشروع مغسلة السيارات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg">
              تواصل معنا
            </Button>
            <Button variant="outline" className="border-2 border-sebaaq-blue text-sebaaq-blue hover:bg-sebaaq-blue hover:text-white px-12 py-4 rounded-lg font-semibold text-lg">
              دراسة جدوى مجانية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarWash;
