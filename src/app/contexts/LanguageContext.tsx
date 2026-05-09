import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'أعمالنا',
    'nav.contact': 'تواصل معنا',

    // About
    'about.hero.title': 'نحن نصنع المستقبل الرقمي',
    'about.hero.subtitle': 'قصة Storm Apps هي قصة شغف بالإبداع والتميز التقني.',
    'about.mission.title': 'رسالتنا',
    'about.mission.desc': 'تمكين الشركات من خلال التكنولوجيا المبتكرة والتصاميم الاستثنائية التي تخلق قيمة حقيقية.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.desc': 'أن نكون الشريك الرقمي الأول للنخبة عالمياً، ونعيد تعريف معايير الجودة في عالم البرمجيات.',
    'about.values.title': 'قيمنا',
    'about.value.1.title': 'الجودة المطلقة',
    'about.value.1.desc': 'لا نقبل بأنصاف الحلول، كل مشروع هو تحفة فنية.',
    'about.value.2.title': 'الابتكار المستمر',
    'about.value.2.desc': 'نبحث دائماً عن أحدث التقنيات لنبقى في الصدارة.',
    'about.value.3.title': 'الشفافية والصدق',
    'about.value.3.desc': 'نبني علاقات قائمة على الثقة المتبادلة مع عملائنا.',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'دعنا نحول رؤيتك إلى واقع ملموس',
    'contact.form.name': 'الاسم بالكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'رسالتك',
    'contact.form.send': 'إرسال الرسالة',
    'contact.info.title': 'معلومات التواصل',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.phone': 'رقم الهاتف',
    'contact.info.address': 'العنوان',
    'contact.info.address.val': 'الرياض - حي ظهرة لبن، شارع نجد، الرياض، المملكة العربية السعودية، 13781',
    'contact.social.title': 'تابعنا على',

    // Hero
    'hero.title': 'نصنع العواصف الرقمية',
    'hero.subtitle': 'حيث تلتقي التكنولوجيا بالفن',
    'hero.description': 'شريك رقمي نادر لمن يرفض المألوف. نحن لا نبني تطبيقات، نخلق تجارب استثنائية تعيد تعريف المعايير.',
    'hero.cta': 'اكتشف العالم',
    'hero.scroll': 'اكتشف المزيد',

    // Services
    'services.title': 'خدماتنا الحصرية',
    'services.subtitle': 'حلول مصممة للنخبة',
    'services.1.title': 'تطبيقات الجوال النخبوية',
    'services.1.desc': 'تطبيقات iOS و Android فائقة الفخامة، مصممة بدقة لا تقبل المساومة. كل بكسل يروي قصة التميز.',
    'services.1.details': 'نحن نبني تطبيقات جوال تتجاوز مجرد الوظيفة لتصبح تجربة فنية. نركز على الأداء السلس، والواجهات الجذابة، والكود النظيف الذي يضمن استدامة التطبيق وقابليته للتوسع.',
    'services.mobile.f1.title': 'تطبيقات iOS و Android أصلية',
    'services.mobile.f1.desc': 'نستخدم لغات البرمجة الأصلية لضمان أعلى مستويات الأداء والتوافق مع أنظمة التشغيل.',
    'services.mobile.f2.title': 'تصميم UI/UX مذهل',
    'services.mobile.f2.desc': 'واجهات مستخدم تدمج بين الجمال والسهولة لتوفير تجربة لا تُنسى.',
    'services.mobile.f3.title': 'تكامل الأنظمة المعقدة',
    'services.mobile.f3.desc': 'ربط التطبيقات بقواعد البيانات وبوابات الدفع والخدمات السحابية بأمان تام.',

    'services.2.title': 'منصات الويب الراقية',
    'services.2.desc': 'مواقع وتطبيقات ويب تجمع بين الأداء الصاروخي والتصميم الذي يخطف الأنفاس. تجارب رقمية تليق بعلامتك.',
    'services.2.details': 'منصاتنا الويب مصممة لتكون سريعة، متجاوبة، ومحسنة لمحركات البحث. نحن نؤمن أن موقعك هو واجهة عملك، لذا نجعله يعكس الرقي والاحترافية في كل تفصيلة.',
    'services.web.f1.title': 'تطبيقات الويب التقدمية (PWA)',
    'services.web.f1.desc': 'تطبيقات ويب تعمل مثل تطبيقات الجوال، مع ميزات العمل بدون اتصال وإشعارات التنبيه.',
    'services.web.f2.title': 'لوحات تحكم ذكية',
    'services.web.f2.desc': 'أنظمة إدارة متكاملة تمنحك السيطرة الكاملة على بياناتك وعملياتك بسهولة.',
    'services.web.f3.title': 'تحسين الأداء و SEO',
    'services.web.f3.desc': 'نضمن تصدر موقعك لنتائج البحث مع سرعة تحميل فائقة تزيد من معدلات التحويل.',

    'services.3.title': 'الذكاء الاصطناعي المتقدم',
    'services.3.desc': 'حلول AI و ML مبتكرة تضع مؤسستك في طليعة المستقبل. ذكاء حقيقي، نتائج استثنائية.',
    'services.3.details': 'نحول البيانات إلى قرارات. حلول الذكاء الاصطناعي لدينا تساعدك على أتمتة العمليات، وتوقع سلوك العملاء، وتقديم خدمات مخصصة ترفع من كفاءة أعمالك.',
    'services.ai.f1.title': 'تعلم الآلة (Machine Learning)',
    'services.ai.f1.desc': 'بناء نماذج قادرة على التعلم من البيانات وتقديم توقعات دقيقة.',
    'services.ai.f2.title': 'معالجة اللغات الطبيعية (NLP)',
    'services.ai.f2.desc': 'أنظمة قادرة على فهم وتحليل اللغة البشرية، مثل روبوتات المحادثة الذكية.',
    'services.ai.f3.title': 'رؤية الكمبيوتر (Computer Vision)',
    'services.ai.f3.desc': 'تطوير أنظمة قادرة على تحليل الصور والفيديو بدقة متناهية.',

    'services.4.title': 'الهوية البصرية الفاخرة',
    'services.4.desc': 'تصميم UI/UX يتجاوز التوقعات. نخلق هويات بصرية تحفر في الذاكرة وتترك أثراً لا يُمحى.',
    'services.4.details': 'الهوية البصرية هي روح العلامة التجارية. نحن لا نصمم شعارات فقط، بل نبني لغة بصرية متكاملة تعبر عن قيمك وتتواصل بعمق مع جمهورك المستهدف.',
    'services.design.f1.title': 'تصميم واجهات المستخدم (UI)',
    'services.design.f1.desc': 'جماليات رقمية فريدة تجذب الانتباه وتعزز قيمة علامتك التجارية.',
    'services.design.f2.title': 'تجربة المستخدم (UX)',
    'services.design.f2.desc': 'دراسة متعمقة لسلوك المستخدم لضمان رحلة سلسة ومنطقية داخل المنصة.',
    'services.design.f3.title': 'بناء الهوية المتكاملة',
    'services.design.f3.desc': 'تطوير دليل كامل للهوية البصرية يضمن الاتساق عبر جميع المنصات.',

    // Projects
    'projects.title': 'مشاريع ملهمة',
    'projects.subtitle': 'قصص نجاح حققناها معاً',
    'projects.1.title': 'Nejoum Al-Alam (NALGRP)',
    'projects.1.category': 'تطبيق جوال • منصة ويب • لوحة تحكم',
    'projects.1.description': 'Nejoum Al-Alam (NALGRP) موقع تجاري لخدمات استيراد السيارات من المزادات الأمريكية وتسهيل نقلها إلى الموانئ، مع واجهة عرض خدمات واضحة للمستخدمين.',
    'projects.1.challenge': 'كانت NALGRP بحاجة إلى منصة حديثة وموثوقة لتسهيل عملية استيراد السيارات من المزادات الأمريكية ونقلها إلى الموانئ، مع توفير واجهة مستخدم سلسة وواضحة تضمن ثقة العملاء وتسريع العمليات.',
    'projects.1.solution': 'قمنا بتطوير منصة شاملة تتضمن تطبيق جوال، منصة ويب، ولوحة تحكم إدارية متكاملة. تم تصميم واجهة المستخدم لتكون بديهية وعصرية، مع دمج أنظمة تتبع قوية وحماية بيانات متقدمة.',
    'projects.1.results': 'أصبحت العمليات أكثر كفاءة بنسبة 40%، وازداد رضا العملاء عن شفافية تتبع السيارات وتسهيل إجراءات الشحن والنقل بشكل ملحوظ.',
    'projects.1.role': 'تطوير شامل للمنصة، تصميم UI/UX',
    'projects.1.timeline': '4 أشهر',
    'projects.1.client': 'مجموعة النجوم (NALGRP)',
    
    'projects.2.title': 'Zalameh.app',
    'projects.2.category': 'منصة ويب • تجارة إلكترونية',
    'projects.2.description': 'Zalameh.app هو موقع/منصة رقمية بتجمع متاجر محلية وعروض منتجات وخدمات في فئات مختلفة (ألبسة، أكل، إلكترونيات، خدمات، إلخ) علشان المستخدم يقدر يتصفح المتاجر بسهولة ويلاقي اللي يحتاجه.',
    'projects.2.challenge': 'احتاج تطبيق Zalameh إلى واجهة مبتكرة تجمع مختلف المتاجر المحلية في مكان واحد لتوفير تجربة تسوق إلكتروني مرنة ومتعددة الفئات، بحيث تلبي احتياجات المستخدمين بسرعة وكفاءة عالية.',
    'projects.2.solution': 'أطلقنا منصة ويب وتجارة إلكترونية تعتمد على تصنيفات ذكية وواجهة مستخدم تفاعلية لتسهيل التصفح بين الأقسام المختلفة من ملابس، مأكولات، إلكترونيات، وخدمات.',
    'projects.2.results': 'زيادة في المبيعات للمتاجر المحلية وتحسين تجربة المستخدم بفضل التصفح السريع والأداء القوي للمنصة، مما أدى إلى نمو قاعدة المستخدمين.',
    'projects.2.role': 'تطوير ويب، تجارة إلكترونية',
    'projects.2.timeline': '3 أشهر',
    'projects.2.client': 'Zalameh.app',
    
    'projects.3.title': 'Tigara Jordan',
    'projects.3.category': 'منصة ويب • تجارة إلكترونية',
    'projects.3.description': 'منصة تجارة إلكترونية متكاملة تتيح لك عرض منتجاتك باحترافية، إدارة الطلبات بسهولة، وتقديم تجربة شراء سلسة تزيد من مبيعاتك.',
    'projects.3.challenge': 'تحدي منصة Tigara Jordan كان يكمن في توفير نظام متكامل وسلس لإدارة وعرض المنتجات باحترافية، وتسهيل عملية الطلب وإدارة المبيعات للتجار والعملاء على حد سواء.',
    'projects.3.solution': 'صممنا منصة تجارة إلكترونية متطورة بواجهات تفاعلية وسريعة تعتمد على تقنيات حديثة لتوفير تجربة شراء سلسة تساهم في مضاعفة المبيعات وتوسيع نطاق الأعمال.',
    'projects.3.results': 'تحقيق زيادة ملحوظة في حجم الطلبات وتقديم تجربة مستخدم خالية من العيوب، مما عزز ثقة العملاء وزاد من ولاء المتسوقين.',
    'projects.3.role': 'واجهات ويب، تفاعلات UI/UX',
    'projects.3.timeline': 'شهرين',
    'projects.3.client': 'Tigara Jordan',
    
    'projects.4.title': 'Mawthoq',
    'projects.4.category': 'منصة ويب • تجارة إلكترونية',
    'projects.4.description': 'منصة ذكية بتربط المدارس بالموردين في مكان واحد، علشان تسهّل إدارة الطلبات، مقارنة العروض، واتخاذ قرارات أسرع وأدق.',
    'projects.4.challenge': 'كانت منصة موثوق بحاجة لربط المدارس مع الموردين في مكان واحد، لتسهيل وتبسيط عملية إدارة الطلبات ومقارنة العروض لاتخاذ قرارات أسرع وأدق.',
    'projects.4.solution': 'بناء منصة ذكية مخصصة للـ B2B تتضمن أدوات متقدمة لمقارنة الأسعار، تتبع الطلبات، وتوفير بيئة تواصل آمنة وموثوقة بين الأطراف لضمان سير العمليات بشفافية.',
    'projects.4.results': 'تقليص وقت اتخاذ القرار للمدارس بنسبة 50%، وتسريع تلبية الطلبات من قبل الموردين مع ضمان أعلى معايير الجودة والموثوقية.',
    'projects.4.role': 'منصة ذكية B2B، تصميم UI/UX',
    'projects.4.timeline': '4 أشهر',
    'projects.4.client': 'Mawthoq',

    'projects.5.title': 'Thawani',
    'projects.5.category': 'تطبيق جوال • توصيل طلبات',
    'projects.5.description': 'ثواني أكثر من مجرد تطبيق توصيل — نحن منصة تمكّن الشركات المحلية، وتوفر فرص دخل مرنة، وتجلب الراحة للملايين.',
    'projects.5.challenge': 'تطبيق توصيل مثل ثواني يواجه تحديات لوجستية وتقنية كبيرة تتعلق بسرعة التوصيل، وإدارة أسطول كبير من الكباتن، ومعالجة ملايين الطلبات بمرونة، وضمان تجربة سهلة وسريعة للعملاء مع الحفاظ على أمان بياناتهم.',
    'projects.5.solution': 'بناء تطبيق توصيل ذكي يجمع بين السرعة والكفاءة، باستخدام خوارزميات توجيه ذكية، وتتبع مباشر، وتصميم يسهّل الطلبات ويضمن تجربة سلسة للمستخدمين والكباتن.',
    'projects.5.results': 'وصول سريع وفعّال للعملاء، إدارة مرنة للطلبات، تجربة سهلة للمستخدمين والكباتن، مع الحفاظ على أمان البيانات.',
    'projects.5.role': 'تطبيق توصيل ذكي، تصميم UI/UX',
    'projects.5.timeline': '6 أشهر',
    'projects.5.client': 'Thawani',

    'projects.6.title': 'Delevoeg',
    'projects.6.category': 'تطبيق جوال • توصيل طلبات',
    'projects.6.description': 'تطبيق Delevo Captain هو التطبيق الرسمي للمندوبين العاملين مع منصة Delevo للتوصيل. يوفر التطبيق كل ما يحتاجه المندوب لإدارة الطلبات بشكل منظم وسهل. من خلال التطبيق يمكن للمندوب استقبال الطلبات الجديدة مباشرة والاطلاع على تفاصيلها مع تحديد موقع الاستلام والتسليم على الخريطة خطوة بخطوة. يتيح التطبيق متابعة حالة الطلبات في الوقت الفعلي مع إشعارات فورية لضمان سرعة التنفيذ.',
    'projects.6.challenge': 'كان التحدي الأساسي هو بناء واجهة مرنة وعالية الأداء يمكنها التعامل مع آلاف الطلبات المتزامنة مع توفير تجربة سلسة لكل من الكباتن والعملاء، مع تتبع في الوقت الفعلي وتكامل آمن للدفع.',
    'projects.6.solution': 'تم بناء تطبيق توصيل ذكي يجمع بين السرعة والكفاءة باستخدام أحدث تقنيات Flutter. يتميز بواجهة سهلة الاستخدام، وأنظمة خرائط وتتبع متقدمة، وتكامل آمن لبوابة الدفع لضمان تجربة سلسة للمستخدمين والكباتن.',
    'projects.6.results': 'تم تحقيق وصول سريع وفعّال للعملاء، وإدارة مرنة للطلبات، وتجربة سهلة للمستخدمين والكباتن، مع الحفاظ على أمان البيانات.',
    'projects.6.role': 'تطبيق توصيل ذكي، تصميم UI/UX',
    'projects.6.timeline': '6 أشهر',
    'projects.6.client': 'Delevoeg',

    'projects.7.title': 'Distinqt',
    'projects.7.category': 'منصة ويب',
    'projects.7.description': "هي منصة تأجير سيارات حديثة وفعالة، تهدف لتوفير تجربة تأجير سيارات سلسة ومريحة للعملاء. تتيح المنصة للعملاء استعراض أسطول واسع من السيارات المختلفة واختيار السيارة التي تناسب احتياجاتهم، مع توفير خيارات مرنة للاستلام والتسليم. تم تصميم المنصة بواجهة بسيطة وجذابة، وتعتمد على تقنيات حديثة لضمان تجربة مستخدم سلسة ومميزة.",
    'projects.7.challenge': "كان التحدي الأكبر هو بناء منصة عالية الأداء وسهلة الاستخدام، قادرة على التعامل مع مخزون كبير من المركبات وتتبع التوافر في الوقت الفعلي، وتوفير عملية حجز سلسة. يجب أن تكون المنصة متجاوبة وتعمل بشكل مثالي عبر جميع الأجهزة، من سطح المكتب إلى الهاتف المحمول.",
    'projects.7.solution': "لقد قمنا بتطوير منصة ويب حديثة باستخدام React و Vite و Tailwind CSS، مدمجة مع Laravel backend. تتميز المنصة بنظام حجز سلس وتحديثات توافر في الوقت الفعلي وتصميم متجاوب يضمن تجربة سلسة للمستخدمين على أي جهاز. تتيح لوحة التحكم سهولة إدارة المركبات والحجوزات ومعلومات العملاء.",
    'projects.7.results': 'تم إطلاق منصة Distinqt Car Hire بنجاح بواجهة حديثة وسهلة الاستخدام تتيح للعملاء تصفح وحجز المركبات بسهولة. تلقت المنصة ردود فعل إيجابية لسرعتها واستجابتها وسهولة استخدامها.',
    'projects.7.role': 'منصة ويب، تصميم UI/UX',
    'projects.7.timeline': '3 أشهر',
    'projects.7.client': 'Distinqt Car Hire',
    
    'projects.8.title': 'Bokja',
    'projects.8.category': 'منصة ويب',
    'projects.8.description': "في بقجة، نؤمن أن التسوق عبر الإنترنت يجب أن يكون سهلًا ومربحًا للجميع. لذلك، نقدم لك فرصة لاسترجاع جزء من قيمة مشترياتك من المتاجر العالمية وتحويله إلى نقاط في محفظتك الشخصية. هذه النقاط يمكنك استخدامها للحصول على خدمات حصرية مثل التوصيل الآمن إلى منطقتك أو استلام المنتجات عبر عناوين بديلة في حال كانت هناك قيود على الشحن بسبب الظروف المحيطة. ببساطة، مع بقجة، نحن نساعدك على تجاوز أي عوائق تواجهها أثناء التسوق عبر الإنترنت،",
    'projects.8.challenge': "التحدي الرئيسي في مشروع بقجة كان تصميم نظام استرجاع نقدي (Cashback) يعتمد على نقاط يكتسبها المستخدمون عند الشراء من متاجر دولية. يتوجب على المنصة تتبع مشتريات المستخدمين بدقة، وحساب نسبة الاسترجاع المحددة لكل متجر، وتحويلها إلى نقاط يمكن استبدالها لاحقًا بخدمات مثل التوصيل الآمن أو استلام المنتجات عبر عناوين بديلة. يجب أن تعمل المنصة بسلاسة عبر الأجهزة المختلفة، وتوفر تجربة مستخدم سهلة وموثوقة، مع نظام إدارة محتوى (CMS) يتيح للشركاء إدارة عروضهم وحساباتهم بسهولة. كما يتطلب الأمر واجهة خلفية (Backend) قوية وآمنة لإدارة المستخدمين، المعاملات، النقاط، والمتاجر الشريكة.",
    'projects.8.solution': "لقد قمنا بتطوير منصة بقجة باستخدام Next.js و Tailwind CSS مع واجهة خلفية مبنية على Laravel و MySQL. تتيح المنصة للمستخدمين استعراض المتاجر الشريكة، الشراء منها، والحصول على نقاط استرجاع نقدية بناءً على نسبة محددة لكل متجر. تم تصميم نظام النقاط بحيث يمكن استبداله بسهولة بخدمات مثل التوصيل الآمن أو استلام المنتجات عبر عناوين بديلة. تم توفير واجهة خلفية كاملة للمتاجر الشريكة لإدارة حساباتهم وعروضهم بسهولة. كما تم توفير واجهة خلفية شاملة لإدارة المستخدمين، النقاط، المعاملات، والمتاجر الشريكة، مما يضمن تجربة مستخدم سلسة وموثوقة.",
    'projects.8.results': "تم إطلاق منصة بقجة بنجاح بواجهة حديثة وسهلة الاستخدام تتيح للعملاء تصفح وحجز المركبات بسهولة. تلقت المنصة ردود فعل إيجابية لسرعتها واستجابتها وسهولة استخدامها.",
    'projects.8.role': "منصة ويب، تصميم UI/UX",
    'projects.8.timeline': "6 أشهر",
    'projects.8.client': "Bokja",



    'projects.9.title': "Heliid",
    'projects.9.category': "منصة ويب",
    'projects.9.description': " منصة متكاملة لخدمات الهندسة الميكانيكية والتصنيع. تم تصميم الموقع ليعكس احترافية الشركة وقدراتها العالية في تقديم حلول مبتكرة ومستدامة لمختلف القطاعات الصناعية. يتيح الموقع للعملاء استعراض خدمات الشركة ومنتجاتها بسهولة، بالإضافة إلى توفير نظام تواصل فعال لإدارة المشاريع وتقديم الدعم الفني.",
    'projects.9.challenge': " يمثل إنشاء منصة رقمية فعالة وسهلة الاستخدام لهيلي تحديًا رئيسيًا، حيث يتطلب ضمان تفاعل سلس بين الإدارة والعملاء مع الحفاظ على الموثوقية والسرعة وتصميم واجهة بديهية تعزز تجربة المستخدم عبر جميع الأجهزة والخدمات المتاحة. ",
    'projects.9.solution': "لقد قمنا بتطوير موقع ويب عصري ومتجاوب لهيلي باستخدام Vue.js و Laravel، مع واجهة خلفية مدمجة مبنية على Laravel. تتميز المنصة بواجهة سهلة الاستخدام، وأنظمة إدارة متقدمة، وتقديم خدمات سلس، مما يضمن تجربة سلسة لكل من الإدارة والعملاء.",
    'projects.9.results': "تم إطلاق منصة هيليد بنجاح بواجهة حديثة وسهلة الاستخدام تتيح للعملاء استعراض خدمات الشركة ومنتجاتها بسهولة. تلقت المنصة ردود فعل إيجابية لسرعتها واستجابتها وسهولة استخدامها.",
    'projects.9.role': "منصة ويب، تصميم UI/UX",
    'projects.9.timeline': "3 أشهر",
    'projects.9.client': "Heliid",

    'projects.10.title': "Noor Alwahdah",
    'projects.10.category': "تطبيق جوال",
    'projects.10.description': "Noor Alwahdah هو تطبيق جوال يهدف إلى توفير حلول شاملة وفعالة لعمليات النقل وتأجير السيارات. تم تصميم التطبيق لخدمة مختلف احتياجات العملاء سواء في السفر أو التنقل الداخلي، مع توفير تجربة سلسة ومريحة من خلال واجهة حديثة وسهلة الاستخدام. يتيح التطبيق للعملاء استعراض السيارات المتاحة، الحجز، وإدارة رحلاتهم بكل سهولة.",
    'projects.10.challenge': "تمثل مهمة إنشاء منصة رقمية فعالة وسهلة الاستخدام لنور الوحدة تحديًا رئيسيًا، حيث يتوجب ضمان تفاعل سلس بين الإدارة والعملاء مع الحفاظ على الموثوقية، السرعة، وتصميم واجهة بديهية تعزز تجربة المستخدم عبر جميع الأجهزة والخدمات المتاحة.",
    'projects.10.solution': "لقد قمنا بتطوير منصة ويب حديثة ومتجاوبة لنور الوحدة باستخدام Laravel، مع واجهة خلفية مدمجة تعتمد على Laravel. تتميز المنصة بواجهة سهلة الاستخدام، وأنظمة إدارة متقدمة، وتقديم خدمات سلسة، مما يضمن تجربة سلسة لكل من الإدارة والعملاء.",
    'projects.10.results': "تم إطلاق منصة نور الوحدة بنجاح بواجهة حديثة وسهلة الاستخدام تتيح للعملاء تصفح وحجز السيارات بسهولة. تلقت المنصة ردود فعل إيجابية لسرعتها واستجابتها وسهولة استخدامها.",
    'projects.10.role': "تطبيق جوال، تصميم UI/UX",
    'projects.10.timeline': "6 Months",
    'projects.10.client': "Noor Alwahdah",

    'projects.11.title': "Elbeltagy",
    'projects.11.category': "تطبيق جوال",
    'projects.11.description': "منصه تعليميه متكامله لعرض الكورسات والدروس والامتحانات والكويزات بشكل تفاعلي ",
    'projects.11.challenge': "التحدي الرئيسي تمثل في إنشاء بيئة تعليمية تفاعلية وجذابة تدعم مختلف أنواع المحتوى التعليمي، مع توفير أدوات تقييم فعالة ونظام تتبع تقدم شامل للطلاب. بالإضافة إلى ضمان تجربة سلسة وموثوقة عبر مختلف الأجهزة، مع الحفاظ على الأمان والخصوصية لبيانات المستخدمين.",
    'projects.11.solution': "تم تطوير تطبيق جوال باستخدام Flutter بواجهة مستخدم حديثة وجذابة، تدعم عرض مختلف أنواع المحتوى التعليمي مثل الفيديوهات، الكتب، الكويزات، والملخصات. تم دمج نظام إدارة محتوى متقدم يسمح للمدرسين بإضافة وتعديل المحتوى بسهولة، ونظام تتبع تقدم تفاعلي يتيح للطلاب متابعة تقدمهم في كل مادة، مع توفير إشعارات فورية وتذكيرات للمهام والامتحانات.",
    'projects.11.results': "تم إطلاق منصة نور الوحدة بنجاح بواجهة حديثة وسهلة الاستخدام تتيح للعملاء تصفح وحجز السيارات بسهولة. تلقت المنصة ردود فعل إيجابية لسرعتها واستجابتها وسهولة استخدامها.",
    'projects.11.role': "تطبيق جوال، تصميم UI/UX",
    'projects.11.timeline': "6 Months",
    'projects.11.client': "Noor Alwahdah",

    'projects.showAll': 'عرض كل المشاريع',
    'projects.filter.all': 'الكل',
    'projects.filter.ecommerce': 'تجارة إلكترونية',
    'projects.filter.web': 'منصة ويب',
    'projects.filter.app': 'تطبيق جوال',
    'projects.filter.crm': 'نظام CRM',
    'projects.filter.portfolio': 'موقع تعريفي',
    'projects.exploreCaseStudy': 'استكشف دراسة الحالة',
    'projects.viewLive': 'زيارة الموقع',

    // Process
    'process.title': 'رحلة التميز',
    'process.subtitle': 'منهجية مصممة للكمال',
    'process.1.title': 'الاكتشاف',
    'process.1.desc': 'نغوص عميقاً في رؤيتك، نفهم جوهر علامتك، ونرسم خريطة النجاح.',
    'process.2.title': 'التصميم',
    'process.2.desc': 'نحول الأفكار إلى تجارب بصرية خلابة، كل تفصيل مدروس بعناية فائقة.',
    'process.3.title': 'التطوير',
    'process.3.desc': 'نبني بأرقى التقنيات، كل سطر كود يعكس التزامنا بالجودة المطلقة.',
    'process.4.title': 'الإطلاق',
    'process.4.desc': 'ننطلق بقوة، ونواصل الدعم والتطوير لنضمن نجاحاً مستداماً.',

    // About
    'about.title': 'فلسفتنا',
    'about.quote': 'نحن لا نتبع الاتجاهات. نحن نصنعها.',
    'about.text1': 'Storm Apps ليست مجرد شركة برمجيات. نحن مختبر للابتكار، استوديو للإبداع، وشريك لمن يطمح للمستحيل.',
    'about.text2': 'نجمع بين الهندسة المعمارية الرقمية الفائقة، التصميم الذي يلهم، والتكنولوجيا التي تغير قواعد اللعبة.',
    'about.text3': 'كل مشروع هو تحفة فنية. كل تطبيق قصة نجاح. نحن لا نعمل مع الجميع، فقط مع من يشاركنا شغف التميز.',

    // Tech
    'tech.title': 'قدراتنا التقنية',
    'tech.subtitle': 'نتقن أحدث ما وصلت إليه التكنولوجيا',

    // CTA
    'cta.title': 'مستعد لبناء شيء استثنائي؟',
    'cta.subtitle': 'انضم لنخبة عملائنا',
    'cta.button': 'ابدأ مشروعك',
    'cta.note': 'نتعاون فقط مع عدد محدود من المشاريع سنوياً للحفاظ على التميز',

    // Footer
    'footer.tagline': 'نصنع العواصف الرقمية',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.email': 'emad@stoormapps.com',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact Us',

    // About
    'about.hero.title': 'We Craft the Digital Future',
    'about.hero.subtitle': 'The story of Storm Apps is a story of passion for creativity and technical excellence.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'Empowering companies through innovative technology and exceptional designs that create real value.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be the first digital partner for the elite globally, redefining quality standards in the software world.',
    'about.values.title': 'Our Values',
    'about.value.1.title': 'Absolute Quality',
    'about.value.1.desc': 'We don\'t accept halfway solutions, every project is a masterpiece.',
    'about.value.2.title': 'Constant Innovation',
    'about.value.2.desc': 'We always look for the latest technologies to stay ahead.',
    'about.value.3.title': 'Transparency & Honesty',
    'about.value.3.desc': 'We build relationships based on mutual trust with our clients.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s turn your vision into reality',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Info',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.info.address.val': 'Riyadh - Dhahrat Laban district, Najd Street , Riyadh, Saudi Arabia, 13781',
    'contact.social.title': 'Follow Us',

    // Hero
    'hero.title': 'We Craft Digital Storms',
    'hero.subtitle': 'Where Technology Meets Art',
    'hero.description': 'An exclusive digital partner for those who refuse the ordinary. We don\'t build apps, we create exceptional experiences that redefine standards.',
    'hero.cta': 'Discover The World',
    'hero.scroll': 'Explore More',

    // Services
    'services.title': 'Exclusive Services',
    'services.subtitle': 'Solutions Crafted for the Elite',
    'services.1.title': 'Elite Mobile Applications',
    'services.1.desc': 'Ultra-premium iOS & Android applications, designed with uncompromising precision. Every pixel tells a story of excellence.',
    'services.1.details': 'We build mobile applications that go beyond mere functionality to become an artistic experience. We focus on seamless performance, attractive interfaces, and clean code that ensures the app\'s sustainability and scalability.',
    'services.mobile.f1.title': 'Native iOS & Android Apps',
    'services.mobile.f1.desc': 'We use native programming languages to ensure the highest levels of performance and compatibility with operating systems.',
    'services.mobile.f2.title': 'Stunning UI/UX Design',
    'services.mobile.f2.desc': 'User interfaces that merge beauty and ease to provide an unforgettable experience.',
    'services.mobile.f3.title': 'Complex System Integration',
    'services.mobile.f3.desc': 'Linking applications with databases, payment gateways, and cloud services with complete security.',

    'services.2.title': 'Premium Web Platforms',
    'services.2.desc': 'Websites and web apps that combine rocket performance with breathtaking design. Digital experiences worthy of your brand.',
    'services.2.details': 'Our web platforms are designed to be fast, responsive, and optimized for search engines. We believe your website is your business storefront, so we make it reflect sophistication and professionalism in every detail.',
    'services.web.f1.title': 'Progressive Web Apps (PWA)',
    'services.web.f1.desc': 'Web applications that work like mobile apps, with offline features and push notifications.',
    'services.web.f2.title': 'Smart Dashboards',
    'services.web.f2.desc': 'Integrated management systems that give you full control over your data and operations easily.',
    'services.web.f3.title': 'Performance & SEO Optimization',
    'services.web.f3.desc': 'We ensure your site leads search results with super-fast loading speeds that increase conversion rates.',

    'services.3.title': 'Advanced AI Solutions',
    'services.3.desc': 'Innovative AI & ML solutions that place your organization at the forefront of the future. True intelligence, exceptional results.',
    'services.3.details': 'We turn data into decisions. Our AI solutions help you automate operations, predict customer behavior, and provide personalized services that raise your business efficiency.',
    'services.ai.f1.title': 'Machine Learning',
    'services.ai.f1.desc': 'Building models capable of learning from data and providing accurate predictions.',
    'services.ai.f2.title': 'Natural Language Processing (NLP)',
    'services.ai.f2.desc': 'Systems capable of understanding and analyzing human language, such as smart chatbots.',
    'services.ai.f3.title': 'Computer Vision',
    'services.ai.f3.desc': 'Developing systems capable of analyzing images and videos with extreme precision.',

    'services.4.title': 'Luxury Visual Identity',
    'services.4.desc': 'UI/UX design that exceeds expectations. We create visual identities that engrave in memory and leave an indelible mark.',
    'services.4.details': 'Visual identity is the soul of the brand. We don\'t just design logos, we build an integrated visual language that expresses your values and communicates deeply with your target audience.',
    'services.design.f1.title': 'User Interface (UI) Design',
    'services.design.f1.desc': 'Unique digital aesthetics that attract attention and enhance your brand value.',
    'services.design.f2.title': 'User Experience (UX)',
    'services.design.f2.desc': 'In-depth study of user behavior to ensure a smooth and logical journey within the platform.',
    'services.design.f3.title': 'Integrated Identity Building',
    'services.design.f3.desc': 'Developing a complete visual identity manual that ensures consistency across all platforms.',

    // Projects
    'projects.title': 'Inspiring Projects',
    'projects.subtitle': 'Success Stories We Built Together',
    'projects.1.title': 'Nejoum Al-Alam (NALGRP)',
    'projects.1.category': 'Mobile App • Web Platform • Admin Dashboard',
    'projects.1.description': 'Nejoum Al-Alam (NALGRP) is a commercial website for importing cars from American auctions and facilitating their transfer to ports, with a clear service display interface for users.',
    'projects.1.challenge': 'NALGRP needed a modern, reliable platform to facilitate the process of importing cars from US auctions and transferring them to ports, while providing a seamless user interface to build customer trust and accelerate operations.',
    'projects.1.solution': 'We developed a comprehensive platform including a mobile app, web platform, and an integrated admin dashboard. The UI was designed to be intuitive and modern, incorporating robust tracking systems and advanced data protection.',
    'projects.1.results': 'Operations became 40% more efficient, and customer satisfaction significantly increased due to the transparent car tracking and simplified shipping procedures.',
    'projects.1.role': 'Full-stack Development, UI/UX Design',
    'projects.1.timeline': '4 Months',
    'projects.1.client': 'Nejoum Al-Alam (NALGRP)',

    'projects.2.title': 'Zalameh.app',
    'projects.2.category': 'Web Platform • E-commerce',
    'projects.2.description': 'Zalameh.app is a digital platform that brings local stores and product and service offers in different categories (clothing, food, electronics, services, etc.) so that the user can easily browse the stores and find what he needs.',
    'projects.2.challenge': 'The Zalameh app required an innovative interface bringing together various local stores in one place to provide a flexible, multi-category e-commerce experience, meeting user needs quickly and efficiently.',
    'projects.2.solution': 'We launched a web and e-commerce platform relying on smart categorization and an interactive UI to facilitate browsing across different sections like clothing, food, electronics, and services.',
    'projects.2.results': 'Increased sales for local stores and an enhanced user experience thanks to fast browsing and strong platform performance, leading to a growing user base.',
    'projects.2.role': 'Web Development, E-commerce',
    'projects.2.timeline': '3 Months',
    'projects.2.client': 'Zalameh.app',

    'projects.3.title': 'Tigara Jordan',
    'projects.3.category': 'Web Platform • E-commerce',
    'projects.3.description': 'An integrated e-commerce platform that allows you to display your products professionally, manage orders easily, and provide a seamless shopping experience that increases your sales.',
    'projects.3.challenge': 'The challenge for Tigara Jordan was providing an integrated, seamless system to professionally manage and display products, facilitating the ordering process and sales management for both merchants and customers.',
    'projects.3.solution': 'We designed an advanced e-commerce platform with fast, interactive interfaces relying on modern technologies to provide a smooth shopping experience that helps double sales and expand business reach.',
    'projects.3.results': 'Achieved a noticeable increase in order volume and delivered a flawless user experience, strengthening customer trust and increasing shopper loyalty.',
    'projects.3.role': 'Web Interfaces, UI/UX Interactions',
    'projects.3.timeline': '2 Months',
    'projects.3.client': 'Tigara Jordan',

    'projects.4.title': 'Mawthoq',
    'projects.4.category': 'Web Platform • E-commerce',
    'projects.4.description': 'A smart platform that connects schools with suppliers in one place, to facilitate order management, compare offers, and make faster, more accurate decisions.',
    'projects.4.challenge': 'Mawthoq platform needed to connect schools with suppliers in one place, to simplify and facilitate order management and compare offers for faster, more accurate decision-making.',
    'projects.4.solution': 'Building a smart B2B custom platform containing advanced tools for price comparison, order tracking, and providing a secure, reliable communication environment to ensure operations run transparently.',
    'projects.4.results': 'Reduced decision-making time for schools by 50%, and accelerated order fulfillment by suppliers while ensuring the highest standards of quality and reliability.',
    'projects.4.role': 'Smart B2B Platform, UI/UX Design',
    'projects.4.timeline': '4 Months',
    'projects.4.client': 'Mawthoq',

    'projects.5.title': 'Thawani',
    'projects.5.category': 'Mobile App • Delivery',
    'projects.5.description': 'Thawani is more than just a delivery app—it\'s a platform that empowers local businesses, provides flexible income opportunities, and brings convenience to millions.',
    'projects.5.challenge': 'A delivery app like Thawani faces major logistical and technical challenges related to delivery speed, managing a large fleet of drivers, processing millions of orders flexibly, and ensuring a simple, fast experience for customers while maintaining data security.',
    'projects.5.solution': 'Building a smart delivery app that combines speed and efficiency, using smart routing algorithms, live tracking, and a design that simplifies orders and ensures a seamless experience for users and drivers.',
    'projects.5.results': 'Fast and efficient access for customers, flexible order management, easy experience for users and drivers, while maintaining data security.',
    'projects.5.role': 'Smart Delivery App, UI/UX Design',
    'projects.5.timeline': '6 Months',
    'projects.5.client': 'Thawani',

    'projects.6.title': 'Delevoeg',
    'projects.6.category': 'Mobile App • Delivery',
    'projects.6.description': 'Delevo Captain app is the official app for drivers working with the Delevo delivery platform. The app provides everything the driver needs to manage orders in an organized and easy way. Through the app, the driver can receive new orders directly and view their details with specified pick-up and delivery locations on the map step-by-step. The app allows monitoring order status in real-time with instant notifications to ensure fast execution.',
    'projects.6.challenge': 'The main challenge was building a flexible, high-performance interface that could handle thousands of simultaneous requests while providing a seamless experience for both drivers and customers, with real-time tracking and secure payment integration.',
    'projects.6.solution': 'We built a smart delivery app that combines speed and efficiency using the latest Flutter technologies. It features an intuitive interface, advanced mapping and tracking systems, and secure payment gateway integration to ensure a seamless experience for users and drivers.',
    'projects.6.results': 'Fast and efficient access for customers, flexible order management, easy experience for users and drivers, while maintaining data security.',
    'projects.6.role': 'Smart Delivery App, UI/UX Design',
    'projects.6.timeline': '6 Months',
    'projects.6.client': 'Delevoeg',

    'projects.7.title': 'Distinqt',
    'projects.7.category': 'Car Hire Platform • Website',
    'projects.7.description': "Your go-to choice for car rental in St. Mary's, NSW. Experience the best road trips from Sydney with our diverse and distinct fleet. Choose from a variety of vehicles for a unique road trip adventure. Enjoy easy pick-up, flexible hours, and seamless vehicle selection. At Distinct Car Hire, we redefine car rental in St. Mary's, ensuring your journey is as distinct as our services",
    'projects.7.challenge': "The main challenge was to build a high-performance, user-friendly platform that could handle a large inventory of vehicles, real-time availability tracking, and a seamless booking process. The platform needed to be responsive and work flawlessly across all devices, from desktop to mobile.",
    'projects.7.solution': "We developed a modern web platform using React, Vite, and Tailwind CSS, integrated with a Laravel backend. The platform features a seamless booking system, real-time availability updates, and a responsive design that ensures a smooth experience for users on any device. The admin panel allows for easy management of vehicles, bookings, and customer information.",
    'projects.7.results': 'Distinqt Car Hire platform has been successfully launched with a modern, user-friendly interface that allows customers to easily browse and book vehicles. The platform has received positive feedback for its speed, responsiveness, and ease of use.',
    'projects.7.role': 'Car Hire Platform, UI/UX Design',
    'projects.7.timeline': '3 Months',
    'projects.7.client': 'Distinqt Car Hire',


    'projects.8.title': 'Bokja',
    'projects.8.category': 'Web Platform',
    'projects.8.description': "In Bokja, we believe that online shopping should be easy and profitable for everyone. That’s why we offer you the opportunity to get a portion of your purchases back from international stores and convert it into points in your personal wallet. These points can be used to get exclusive services like secure delivery to your region or to receive products through alternative addresses if there are shipping restrictions due to surrounding circumstances. Simply, with Bokja, we help you overcome any obstacles you face while shopping online,",
    'projects.8.challenge': "The main challenge in Bokja project was to design a cashback system based on points that users earn when shopping from international stores. The platform must accurately track user purchases, calculate the specified cashback percentage for each store, and convert it into points that can be redeemed later for services such as secure delivery or receiving products through alternative addresses. The platform must work seamlessly across different devices and provide an easy and reliable user experience, with a content management system (CMS) that allows partners to easily manage their offers and accounts. It also requires a robust and secure backend to manage users, transactions, points, and partner stores.",
    'projects.8.solution': "We have developed the Bokja platform using Next.js and Tailwind CSS with a backend built on Laravel and MySQL. The platform allows users to browse partner stores, shop from them, and earn cashback points based on a specific percentage for each store. The points system is designed to be easily redeemable for services such as secure delivery or receiving products through alternative addresses. A complete backend has been provided for partner stores to easily manage their accounts and offers. A comprehensive backend has also been provided to manage users, points, transactions, and partner stores, ensuring a smooth and reliable user experience.",
    'projects.8.results': "The Bokja platform has been successfully launched with a modern, user-friendly interface that allows customers to easily browse and book vehicles. The platform has received positive feedback for its speed, responsiveness, and ease of use.",
    'projects.8.role': "Web Platform, UI/UX Design",
    'projects.8.timeline': "6 Months",
    'projects.8.client': "Bokja",

    'projects.9.title': "Heliid",
    'projects.9.category': "Web Platform",
    'projects.9.description': "HELI is an innovative company committed to transforming the construction and manufacturing sectors through cutting-edge technology and sustainable solutions. As a leader in these industries, HELI consistently delivers high-quality products and services that meet the dynamic needs of its clients.",
    'projects.9.challenge': "The main challenge was to create an efficient and user-friendly digital platform for HELI, ensuring seamless interaction for both administrators and clients. The system required reliability, speed, and an intuitive interface that would enhance the user experience across all devices and services.",
    'projects.9.solution': "We developed a modern and responsive website for HELI using Vue.js and Laravel, integrated with a Laravel backend. The platform features an intuitive interface, advanced management systems, and seamless service delivery, providing a smooth experience for both administrators and clients.",
    'projects.9.results': "The HELI platform has been successfully launched with a modern, user-friendly interface that allows customers to easily browse and book vehicles. The platform has received positive feedback for its speed, responsiveness, and ease of use.",
    'projects.9.role': "Web Platform, UI/UX Design",
    'projects.9.timeline': "3 Months",
    'projects.9.client': "Heliid",


    'projects.10.title': "Noor Alwahdah",
    'projects.10.category': "App Platform",
    'projects.10.description': "Noor Alwahdah specializes in shipping cars from auctions in the USA and Canada to destinations such as the UAE, Iraq, and beyond. Our company is renowned for its expertise in managing the entire process of dispatching and shipping vehicles won by customers at auctions.",
    'projects.10.challenge': "The main challenge was to create an efficient and user-friendly digital platform for Noor Alwahdah, ensuring seamless interaction for both administrators and clients. The system required reliability, speed, and an intuitive interface that would enhance the user experience across all devices and services.",
    'projects.10.solution': "We developed a modern and responsive website for Noor Alwahdah using Flutter, integrated with a Laravel backend. The platform features an intuitive interface, advanced management systems, and seamless service delivery, providing a smooth experience for both administrators and clients.",
    'projects.10.results': "The Noor Alwahdah platform has been successfully launched with a modern, user-friendly interface that allows customers to easily browse and book vehicles. The platform has received positive feedback for its speed, responsiveness, and ease of use.",
    'projects.10.role': "App Platform, UI/UX Design",
    'projects.10.timeline': "6 Months",
    'projects.10.client': "Noor Alwahdah",

    'projects.11.title': "Elbeltagy",
    'projects.11.category': "App Platform",
    'projects.11.description': "Elbeltagy is an integrated educational platform designed to showcase courses, lessons, exams, and quizzes in an interactive and engaging manner.",
    'projects.11.challenge': "The main challenge was to create an interactive and engaging educational environment that supports various types of educational content, with effective assessment tools and a comprehensive progress tracking system for students. Additionally, ensuring a seamless and reliable experience across different devices while maintaining the security and privacy of user data.",
    'projects.11.solution': "We developed a mobile application using Flutter with a modern and attractive user interface that supports the display of various types of educational content such as videos, books, quizzes, and summaries. An advanced content management system was integrated, allowing teachers to easily add and edit content, and an interactive progress tracking system enables students to monitor their progress in each subject, with immediate notifications and reminders for assignments and exams.",
    'projects.11.results': "The Elbeltagy platform was successfully launched with a modern, user-friendly interface that allows students to easily browse and access educational content. The platform has received positive feedback for its engaging interface, comprehensive content, and effective progress tracking system.",
    'projects.11.role': "Mobile App, UI/UX Design",
    'projects.11.timeline': "6 Months",
    'projects.11.client': "Elbeltagy",

    'projects.showAll': 'Show All Projects',
    'projects.filter.all': 'All',
    'projects.filter.ecommerce': 'E-commerce',
    'projects.filter.web': 'Web Platform',
    'projects.filter.app': 'Mobile App',
    'projects.filter.crm': 'CRM System',
    'projects.filter.portfolio': 'Portfolio',
    'projects.exploreCaseStudy': 'Explore Case Study',
    'projects.viewLive': 'Visit Website',

    // Process
    'process.title': 'Journey to Excellence',
    'process.subtitle': 'A methodology designed for perfection',
    'process.1.title': 'Discovery',
    'process.1.desc': 'We dive deep into your vision, understand your brand\'s essence, and map the path to success.',
    'process.2.title': 'Design',
    'process.2.desc': 'We transform ideas into stunning visual experiences, every detail crafted with supreme care.',
    'process.3.title': 'Development',
    'process.3.desc': 'We build with the finest technologies, every line of code reflects our commitment to absolute quality.',
    'process.4.title': 'Launch',
    'process.4.desc': 'We launch powerfully and continue support and development to ensure sustainable success.',

    // About
    'about.title': 'Our Philosophy',
    'about.quote': 'We don\'t follow trends. We create them.',
    'about.text1': 'Storm Apps is not just a software company. We are an innovation lab, a creativity studio, and a partner for those who aspire to the impossible.',
    'about.text2': 'We combine supreme digital architecture, inspiring design, and game-changing technology.',
    'about.text3': 'Every project is a masterpiece. Every application is a success story. We don\'t work with everyone, only with those who share our passion for excellence.',

    // Tech
    'tech.title': 'Technical Capabilities',
    'tech.subtitle': 'We master the latest in technology',

    // CTA
    'cta.title': 'Ready to Build Something Exceptional?',
    'cta.subtitle': 'Join Our Elite Clientele',
    'cta.button': 'Start Your Project',
    'cta.note': 'We collaborate on a limited number of projects annually to maintain excellence',

    // Footer
    'footer.tagline': 'We craft digital storms',
    'footer.rights': 'All rights reserved',
    'footer.email': 'emad@stoormapps.com',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
