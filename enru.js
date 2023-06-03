const englishBtn = document.getElementById("englishBtn");
const russianBtn = document.getElementById("russianBtn");

// Define the language reload anchors
const eng = {
    showCa:"Show Calendar",
    nContent:"Vadim Dudkin",
    spec: "Tester/QA",
    sContent:"Summary",
    summary:   
    "● Hands-on experience and formal training in testing web and mobile software applications \n" +
    "● Knowledge of software testing methodologies, tools and processes \n" +
    "● Automation engineer for 14 years, system testing \n" +
    "● Develop solid test documentation including test cases, test suites, test matrices, etc. \n" +
    "● Experience in writing clear, concise, easy-to-reproduce bug reports \n" +
    "● Enjoy working as a member of a result-driven team \n" +
    "● Strong analytical, problem-solving \n" +
    "● Multilingual: Russian (native), English (intermediate) \n",
    technic:
    "Programming: HTML, CSS, Python, SQL \n" +
    "Automation: fundamentals of Selenium Webdriver with Python \n" +
    "Bug Tracking: Qase, Jira, TestRail \n" +
    "Design Tools: Figma, Invision, Photoshop \n" +
    "OS/Platforms: Windows, MAC, iOS, Android, Linux \n" +
    "Browsers: Chrome, Safari, FireFox, Opera, Tor Browser, Edge \n" +
    "Database: PostgreSQL, MS SQL Server, MS Access \n" +
    "Tools: Slack, Github, ADB, Postman, JMeter",
    techslills:"Technical Skills",
    expernote:
    "Company: 'SyncToSkill', startup, IT platform \n"+
    "Period: 01.22/present \n"+
    "Moscow \n Information technology, system integration, Internet  \n"+
    "Position: Tester \n"+
    "● Project: Web/Mobile/Windows cross-platform application for business communication/project management tool \n"+
    "● Studied business and technical requirements to understand the product features \n"+
    "● Developed and maintained test documentation such as test cases, test suites, contributed to the test plan \n"+
    "● Executed test procedures against new builds \n"+
    "● Took part in regression, build acceptance, integration and system level testing \n"+
    "● Tested user interface along the guidelines published by the US Department of Health and Human Services \n"+
    "● Reported software anomalies and defects using Jira, verified bugs fixed \n"+ 
    "● Communicated with other cross-functional team members to identify resolve issues \n"+ 
    "● Participated in Agile Scrum meeting and other Agile rituals \n"+ 
    "● Utilized Postman for testing web services (environment variables, Mock, JavaScript + библиотека chai...)",
    showcalendar: "Show calendar",
    exper: "Software Testing Experience",
    other: "Other Experience",
    othexp: "Company: PHOENIX GROUPP LLC\n"+
    "Period: 11.19/01.22\n"+
    "Company: Thermopilot LLC\n"+
    "Period: 11.08/11.19\n"+
    "Position: Automation and Instrumental Engineer\n"+
    "Responsibilities: Help with installation and maintenance multiple products for customers\n"+
    "Understanding who our client is\n"+
    "System testing: installation, testing, adjustment of the boundaries of behavior of safety automation and correct operation of equipment, etc.\n"+
    "Working with all stakeholders to develop recommendations for project roadmaps\n"+
    "Developing technical documentation for numerous projects - requirements, specifications, etc.\n"+
    "Performing extensive research and analysis to identify new business opportunities\n"
     }
  const ru = {
    showCa:"Календарь",
    nContent:"Вадим Дудкин",
    sContent:"Резюме",
    summary:
    "● Практический опыт и профессиональное обучение в области тестирования веб- и мобильных приложений\n"+
    "● Знание методологий, инструментов и процессов тестирования ПО\n"+
    "● Опыт инженера по автоматизации в течение 14 лет, в том числе тестирования системы\n"+
    "● Разработка прочной документации по тестированию, включая тестовые примеры, тестовые наборы, тестовые матрицы и т.д.\n"+
    "● Опыт написания понятных, лаконичных и легко воспроизводимых сообщений об ошибках\n"+
    "● Умение работать в команде, ориентированной на результат\n"+
    "● Сильные аналитические навыки и умение решать проблемы\n"+
    "● Многоязычность: русский (родной), английский (Intermediate)\n",
    
    technic:
    "Программирование: HTML, CSS, Python, SQL \n" + 
    "Автоматизация: основы Selenium Webdriver с Python \n" +
    "Отслеживание ошибок: Qase, Jira, TestRail \n" +
    "Инструменты проектирования: Figma, Invision, Photoshop \n" +
    "ОС/платформы: Windows, MAC, iOS, Android, linux \n" +
    "Браузеры: Chrome, Safari, FireFox, Opera, Tor Browser, Edge \n" +
    "База данных: PostgreSQL, MS SQL Server, MS Access \n" +
    "Инструменты: Slack, Github, ADB, Postman, JMeter\n",
    techslills:"Технические Навыки",
    exper: "Опыт тестирования программного обеспечения",
    expernote:
    "'SyncToSkill', стартап, IT платформа  \n"+ 
    "01.22/по настоящее время  \n"+ 
    "Москва  \n"+ 
    "Информационные технологии, системная интеграция, интернет  \n"+
    "Тестировщик ПО\n"+ 
    "● Работал с системной интеграцией, автоматизацией технологических и бизнес-процессов предприятия, а также с ИТ-консалтингом\n"+
    "● Применял гибкую методологию разработки Agile (Scrum) и работал с артефактами тестирования в Qase, Jira, TestRail\n"+
    "● Осуществлял проверку Web приложений на соответствие макету в Figma, а также тестировал API через Postman\n"+
    "● Использовал различные расширения и DevTools в браузере, работал с PostgreSQL, писал скрипты на Python (Selenium WebDriver) для автоматизации UI и API, парсинга сайтов в приложениях VS code и PyСharm\n"+
    "● Выполнял нагрузочное тестирование через JMeter и проводил тестирование безопасности (OWASP ZAP)\n"+
    "● Использовал Postman для тестирования веб-сервисов (environment variables, Mock, JavaScript + библиотека chai...)\n"+
    "● Участвовал в запуске четырех проектов, изучал бизнес- и технические требования, разрабатывал и поддерживал тестовую документацию, выполнял тестовые процедуры для новых сборок, принимал участие в регрессионном тестировании, приемке сборок, интеграции и тестировании на уровне системы\n"+
    "● Сообщал об аномалиях и дефектах программного обеспечения с помощью Jira, а также общался с другими членами кросс-функциональной команды для выявления и решения проблем\n"+
    "● Участвовал в собраниях Agile Scrum и других Agile-ритуалах\n"+
    "● Работал с Docker и перехватывал трафик с помощью Charles Proxy\n",
    other: "Другой опыт",
    othexp: "11.19/01.22 - Инженер по автоматизации и КИПиА, ООО «ФЕНИКС ГРУПП», Москва\n"+
    "08.11/11.19 - Инженер по автоматизации и КИПиА, ООО «Термопилот», Москва \n"+
    "● Помогал с установкой и обслуживанием нескольких продуктов для клиентов \n"+
    "● Понимание, кто наш клиент\n"+
    "● Тестирование системы: установка , тестирование, настройка границ поведения автоматики безопасности и корректной работы оборудования и т.д. \n"+
    "● Работал со всеми заинтересованными сторонами над выработкой рекомендаций для дорожных карт проекта \n"+
    "● Разрабатывал техническую документацию по многочисленным проектам - требования, спецификации и т.д. \n"+
    "● Выполнял обширные исследования и анализ для выявления новых возможностей для бизнеса \n",
    spec: "Тестировщик/QA"
        };

englishBtn.addEventListener("click", function() {
    changeLanguage('eng');

});

russianBtn.addEventListener("click", function() {
    changeLanguage('ru');

});

function changeLanguage(lang) {
  const langObj = lang === 'eng' ? eng : ru;
  for (let key in langObj) {
    let elem = document.getElementById(key);
    let elemCl = document.getElementsByClassName(key);
    if (elem) {
      elem.textContent = langObj[key];
    }
  }
}
