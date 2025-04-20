import {
    Button,
    Card,
    CardContent,
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    Separator,
  } from "@/components/ui/";
  import {
    ChevronDown,
    Facebook,
    Instagram,
    Mail,
    Phone,
    Twitter,
  } from "lucide-react";
  import React from "react";
  
  const Screen = () => {
    // Navigation items data
    const navItems = [
      { text: "خانه", href: "#" },
      { text: "من کیام؟", href: "#about" },
      { text: "تواناییها", href: "#skills" },
      { text: "پروژهها", href: "#projects" },
      { text: "ارتباط با من", href: "#contact" },
    ];
  
    // Skills data
    const skillsData = [
      {
        title: "پروداکت",
        skills: [
          "طراحی، هدایت و توسعهی مسیر محصول از ایده تا لانچ",
          "تحلیل نیاز کاربران و تبدیل به ویژگیهای قابل توسعه",
          "هماهنگی بین تیمهای طراحی، توسعه و بازاریابی",
        ],
      },
      {
        title: "برندینگ",
        skills: [
          "خلق هویت برند از صفر: از اسم، لحن، تا رنگ و فرم",
          "طراحی هویتبصری منسجم",
          "روایت برند بر اساس روانشناسی مخاطب، نه صرفا زیبایی",
        ],
      },
      {
        title: "مارکتینگ و تبلیغات",
        skills: [
          "تدوین مسیر جذب و تعامل کاربر",
          "اجرای کمپینهای تبلیغاتی مؤثر با تمرکز بر نرخ تبدیل",
          "خلق پیامهایی که میمونن، نه فقط دیده میشن",
        ],
      },
    ];
  
    // Projects data
    const projectsData = [
      { name: "نام پروژه", image: "" },
      { name: "نام پروژه", image: "" },
      { name: "نام پروژه", image: "" },
    ];
  
    // Contact data
    const contactData = [
      { icon: <Mail className="w-11 h-[29px]" />, text: "vidarr.co@gmail.com" },
      { icon: <Phone className="w-[30px] h-[30px]" />, text: "0935-3481581" },
      { icon: <Instagram className="w-[35px] h-[35px]" />, text: "@vidaaarrr" },
    ];
  
    return (
      <div className="bg-[#000942] flex flex-row justify-center w-full">
        <div className="bg-[#000942] overflow-hidden w-full max-w-[1440px] relative">
          {/* Header Navigation */}
          <header className="w-full h-[125px] pt-10 px-6 relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-12">
                <div className="flex gap-6">
                  <Facebook className="w-2.5 h-5" />
                  <Twitter className="w-[22px] h-[18px]" />
                  <div className="w-[22px] h-[22px] relative">
                    <Instagram className="w-[22px] h-[22px]" />
                  </div>
                </div>
  
                <NavigationMenu dir="rtl" className="hidden md:flex">
                  <NavigationMenuList className="flex gap-8">
                    {navItems.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          href={item.href}
                          className="[font-family:'Peyda-Medium',Helvetica] font-medium text-[28px] text-white tracking-[-0.56px]"
                        >
                          {item.text}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
  
              <div className="flex flex-col items-end">
                <div className="[font-family:'Peyda-Black',Helvetica] font-black text-2xl text-white tracking-[0]">
                  ویــــــــــــــــدار
                </div>
                <div className="[font-family:'Peyda-Medium',Helvetica] font-medium text-[17px] text-white tracking-[0] mt-2">
                  خالق&nbsp;&nbsp;دنیاهای دیجیتال
                </div>
              </div>
            </div>
            <Separator className="w-full h-px mt-4" />
          </header>
  
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center mt-24 px-4">
            <h1 className="[font-family:'Peyda-Black',Helvetica] font-black text-4xl md:text-[70px] text-center text-white tracking-[0.70px] leading-normal">
              من برندها رو با رنگ، دیتا و<br />
              خلاقیت، خلق میکنم!
            </h1>
  
            <Button className="mt-16 w-[216px] h-[88px] bg-[#0b02c1] rounded-2xl hover:bg-[#0b02c1]/90">
              <span className="[font-family:'Peyda-ExtraBold',Helvetica] font-extrabold text-white text-3xl tracking-[-0.60px]">
                بزن بریم!
              </span>
            </Button>
  
            <ChevronDown className="w-11 h-12 mt-8 text-white" />
          </section>
  
          {/* About Me Section */}
          <section
            id="about"
            className="mt-24 px-6 flex flex-col md:flex-row gap-12 justify-between"
          >
            <div className="flex flex-col">
              <h2 className="[font-family:'Peyda-Black',Helvetica] font-black text-6xl text-center md:text-right text-white tracking-[0.60px] mb-12">
                من کیام؟
              </h2>
              <div className="[font-family:'Peyda-SemiBold',Helvetica] font-semibold text-[32px] text-white tracking-[0.32px] max-w-[541px]">
                یه پروداکتمنیجر که کد میزنه، دیتا رو میفهمه و میدونه چطوری یه برند
                رو از &quot;بیهویت&quot; به &quot;با مخاطب&quot; تبدیل کنه. <br />{" "}
                <br />
                سالهاست بین خطوط کد، الگوریتمهای تبلیغات و رفتار کاربرها زندگی
                میکنم. <br />
                کارم اینه که بفهمم کی، کجا و چرا یه آدم تصمیم میگیره روی یه دکمه
                کلیک کنه.
              </div>
            </div>
  
            <Card className="bg-[#001254] rounded-[48px] w-full max-w-[566px] h-[376px] mt-[156px] relative">
              <CardContent className="flex flex-col items-center pt-[153px]">
                <h3 className="[font-family:'Peyda-Black',Helvetica] font-black text-[40px] text-center text-white tracking-[0.40px]">
                  سلام من ویدار هستم
                </h3>
                <p className="[font-family:'Peyda-SemiBold',Helvetica] font-semibold text-[32px] text-center text-white tracking-[0.32px] mt-6 max-w-[428px]">
                  پروداکت منیجر، دیجیتال مارکتر، برند استراتژیست و ایدهپرداز
                </p>
              </CardContent>
              <img
                className="w-[237px] h-[276px] absolute -top-[156px] left-1/2 transform -translate-x-1/2"
                alt="Vidar Avatar"
                src=""
              />
            </Card>
          </section>
  
          {/* Skills Section */}
          <section id="skills" className="mt-24 bg-[#001254] py-20 px-6">
            <div className="max-w-[1138px] mx-auto">
              <h2 className="[font-family:'Peyda-Black',Helvetica] font-black text-6xl text-white tracking-[0.60px] text-right mb-16">
                تواناییها
              </h2>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {skillsData.map((skillGroup, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="[font-family:'Peyda-Bold',Helvetica] font-bold text-[38px] text-white tracking-[0.38px] mb-8">
                      {skillGroup.title}
                    </h3>
  
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-start mb-8 gap-4"
                      >
                        <div className="w-[17px] h-[18px] bg-[#0b02c1] rounded-[8.5px/9px] mt-2 flex-shrink-0" />
                        <p className="[font-family:'Peyda-Regular',Helvetica] font-normal text-[27px] text-white tracking-[0.27px]">
                          {skill}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          {/* Projects Section */}
          <section id="projects" className="mt-24 px-6">
            <h2 className="[font-family:'Peyda-Black',Helvetica] font-black text-6xl text-white tracking-[0.60px] text-right mb-16">
              پروژهها
            </h2>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <Card
                  key={index}
                  className="bg-[#001254] rounded-[48px] overflow-hidden"
                >
                  <div className="w-full h-[253px] bg-[#9ca0ad]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="flex flex-col items-center pt-6">
                    <h3 className="[font-family:'Peyda-Bold',Helvetica] font-bold text-[38px] text-white tracking-[0.38px] mb-6">
                      {project.name}
                    </h3>
                    <Button className="w-[172px] h-[72px] bg-[#0b02c1] rounded-2xl hover:bg-[#0b02c1]/90 mb-6">
                      <span className="[font-family:'Peyda-ExtraBold',Helvetica] font-extrabold text-white text-3xl tracking-[-0.60px]">
                        مشاهده
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
  
          {/* Contact Section */}
          <section id="contact" className="mt-24 bg-[#001254] py-24 px-6">
            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row-reverse gap-12">
              <div className="flex flex-col items-end">
                <img
                  className="w-[237px] h-[276px] object-cover mb-12"
                  alt="Vidar Avatar"
                  src=""
                />
                <h2 className="[font-family:'Peyda-Black',Helvetica] font-black text-6xl text-white tracking-[0.60px]">
                  ارتباط با من
                </h2>
              </div>
  
              <div className="flex flex-col">
                <p className="[font-family:'Peyda-SemiBold',Helvetica] font-semibold text-[32px] text-white tracking-[0.32px] max-w-[649px]">
                  اگه دنبال کسی هستی که بتونه ایدهتو به محصول واقعی تبدیل کنه،
                  برندهتو از دل ذهن مخاطبت بیرون بکشه، یا فقط یه گفتوگوی جدی
                  درباره برند، محصول یا آیندهش داشته باشی...
                  <br /> در دسترسم.
                </p>
  
                <div className="mt-12">
                  {contactData.map((contact, index) => (
                    <div key={index} className="flex items-center gap-6 mb-6">
                      {contact.icon}
                      <span className="[font-family:'Peyda-SemiBold',Helvetica] font-semibold text-white text-2xl tracking-[0.24px]">
                        {contact.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          <Separator className="w-[1337px] h-px mx-auto my-8" />
  
          {/* Footer */}
          <footer className="w-full h-[125px] px-6 relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-12">
                <div className="flex gap-6">
                  <Facebook className="w-2.5 h-5" />
                  <Twitter className="w-[22px] h-[18px]" />
                  <div className="w-[22px] h-[22px] relative">
                    <Instagram className="w-[22px] h-[22px]" />
                  </div>
                </div>
  
                <NavigationMenu dir="rtl" className="hidden md:flex">
                  <NavigationMenuList className="flex gap-8">
                    {navItems.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          href={item.href}
                          className="[font-family:'Peyda-Medium',Helvetica] font-medium text-[28px] text-white tracking-[-0.56px]"
                        >
                          {item.text}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
  
              <div className="flex flex-col items-end">
                <div className="[font-family:'Peyda-Black',Helvetica] font-black text-2xl text-white tracking-[0]">
                  ویــــــــــــــــدار
                </div>
                <div className="[font-family:'Peyda-Medium',Helvetica] font-medium text-[17px] text-white tracking-[0] mt-2">
                  خالق&nbsp;&nbsp;دنیاهای دیجیتال
                </div>
              </div>
            </div>
            <Separator className="w-full h-px mt-4" />
          </footer>
        </div>
      </div>
    );
  };
  
  export default Screen;
  