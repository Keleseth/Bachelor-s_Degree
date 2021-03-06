import React from 'react';
import s from './Info.module.css';

const Info = () => {
    return <div className={s.Info}>
        <table>
    <tr>
        <td><strong>Вугілля, tорф і Горючі сланці і бітумінозні піски</strong></td>
        <td></td>
    </tr>
    <tr>
        <td><strong>Антрацит:</strong></td>
        <td>вугілля вищої якості, який використовується для промислового і побутового застосування. Зазвичай має менше 10% летючих речовин і високий вміст вуглецю (приблизно 90% зв'язаного вуглецю). Вища теплотворна здатність не менше 24 000 кДж / кг на беззольной, але вологою основі.</td>
    </tr>
    <tr>
        <td><strong>Коксівне вугілля:</strong></td>
        <td>бітумінозний вугілля, якість якого дозволяє виробляти кокс, придатний для підтримки завантаження доменної печі. Вища теплотворна здатність не менше 24 000 кДж / кг на беззольной, але вологою основі.</td>
    </tr>
    <tr>
        <td><strong>Інше бітумінозне вугілля:</strong></td>
        <td>вугілля, що використовується в основному для виробництва пари. Включає всі види битуминозного вугілля, не включені в коксівне вугілля і антрацит. Характеризується більш високим вмістом летких речовин, ніж антрацит (більше 10%), і більш низьким вмістом вуглецю (менше 90% зв'язаного вуглецю). Його вища теплотворна здатність не менше 24 000 кДж / кг на беззольной, але вологою основі. Якщо бітумінозний вугілля використовується в коксових печах, то його слід вказати як коксівне вугілля.</td>
    </tr>
    <tr>
        <td><strong>Полубітумінознe вугілля:</strong></td>
        <td>Неагломероване вугілля з вищої теплотворною здатністю, яка дорівнює або перевищує 20 000 кДж / кг і менше 24 000 кДж / кг, що містить більше 31% летких речовин на сухий безмінеральну основі.</td>
    </tr>
    <tr>
        <td><strong>Лігніт</strong></td>
        <td>Неагломероване вугілля з вищої теплотворною здатністю менше 20 000 кДж / кг, з вмістом летких речовин понад 31% на сухий безмінеральну основі.</td>
    </tr>
    <tr>
        <td><strong>Кам'яновугільні брикети</strong></td>
        <td>Паливна суміш, яку виготовляють з дрібних часток кам'яного вугілля, з добавкою сполучного матеріалу. Тому загальна кількість готових кам'яновугільних брикетів може трохи перевищувати кількість вугілля, фактично спожитого в процесі перетворення.</td>
    </tr>
    <tr>
        <td><strong>Кокс з коксових печей</strong></td>
        <td>Твердий продукт, одержуваний при високотемпературної карбонізації вугілля, в основному коксівного вугілля, що має низький вміст вологи і летких речовин. Кокс з коксових печей використовується в основному в чорній металургії як джерело енергії і хімічний реагент. У цю категорію входять також коксовий дріб'язок і ливарний кокс. У цю категорію слід включити напівкокс (твердий продукт, одержуваний за допомогою низькотемпературної карбонізації вугілля). Напівкокс використовується як побутове паливо або безпосередньо станцією перетворення. Ця категорія включає також кокс, коксову дрібниця і напівкокс, одержувані з лігніту / бурого вугілля.</td>
    </tr>
    <tr>
        <td><strong>Газовий кокс</strong></td>
        <td>Побічний продукт кам'яного вугілля, що використовується для виробництва побутового газу на газових заводах. Газовий кокс використовується для опалення.</td>
    </tr>
    <tr>
        <td><strong>Кам'яновугільна смола</strong></td>
        <td>Результат сухої перегонки битуминозного вугілля або низькотемпературної карбонізації бурого вугілля. Кам'яновугільна смола з бітумінозного вугілля - це рідкий побічний продукт перегонки вугілля з метою отримання коксу в коксових печах. Кам'яновугільна смола може піддаватися подальшої перегонці для отримання різних органічних продуктів (наприклад, бензолу, толуолу, нафталіну), які зазвичай вказують у звітності як сировина для нафтохімічної промисловості.</td>
    </tr>
    <tr>
        <td><strong>Буровугільні брикети</strong></td>
        <td>Буровугільні брикети - це паливна суміш, що отримується з лігніту або полубітумінозного вугілля за допомогою брикетування під високим тиском, без додавання сполучного матеріалу.</td>
    </tr>
    <tr>
        <td><strong>Заводський газ</strong></td>
        <td>Ця категорія включає всі гази, що виробляються на комунальних або приватних підприємствах, основним видом діяльності яких є виробництво, транспортування і розподіл газу. У цю категорію входить газ, вироблений шляхом карбонізації (в тому числі газ, вироблений в коксових печах і передається в заводській газ), шляхом повної газифікації з збагаченням нафтопродуктами (скрапленим нафтовим газом, топковим мазутом і ін.) Або без нього, а також шляхом риформінгу і простого змішування газів і / або повітря, що вказується в рядках «З інших джерел».</td>
    </tr>
    <tr>
        <td><strong>Коксовий газ</strong></td>
        <td>Утворюється як побічний продукт виробництва коксу в коксових печах для використання у виробництві заліза і сталі. Обсяг палива повинен бути вказаний на основі вищої теплотворної здатності.</td>
    </tr>
    <tr>
        <td><strong>Доменний газ</strong></td>
        <td>Проводиться при спалюванні коксу в доменних печах на підприємствах чорної металургії. Цей газ видобувається і використовується в якості палива, частково на підприємстві, частково в інших процесах чорної металургії або на електростанціях, які можуть його спалювати. Обсяг рекуперіруемого палива слід вказати на основі вищої теплотворної здатності. До того ж, тут слід вказати гази всіх відновлювальних металургійних процесів, що використовують повітря як джерело кисню (наприклад, пряме відновлення заліза).</td>
    </tr>
    <tr>
        <td><strong>Інші відновлені гази</strong></td>
        <td>Побічний продукт виробництва сталі в киснево-конвертерної печі, який вловлюється на виході. Ці гази відомі також як конвертерний газ, ЛД-газ або киснево-конвертерний газ. Обсяг рекуперіруемого палива слід вказати на основі вищої теплотворної здатності. Ця підгрупа включає також неспецифічні синтез-гази, які не вказані вище, такі як горючі гази твердого вуглецевого походження, що вловлюються при виробничих або хімічних процесах і не включені до інших підгрупи.</td>
    </tr>
    <tr>
        <td><strong>Виробництво електроенергії / тепла з невказаних конкретно вироблених газів</strong></td>
        <td>Цей пункт використовується тільки в разі відсутності докладної розбивки. Включає в себе коксовий газ, доменний газ і інші види витягнутих газів, крім газу, виробленого на газових заводах.</td>
    </tr>
    <tr>
        <td><strong>Торф</strong></td>
        <td>М'яке пальне, пористе або стислий, викопне осадове відкладення рослинного походження з високим вмістом води (до 90% в сирому стані), легко ріжеться, від світло-коричневого до темно-коричневого кольору. Торф для неенергетичного використання вказувати не слід. Фрезерний торф входить в цю підгрупу.</td>
    </tr>
    <tr>
        <td><strong>Продукти переробки торфу</strong></td>
        <td>Ця категорія включає такі продукти, як торф'яні брикети, отримані прямо або побічно з торф'яного дерну або фрезерного торфу.</td>
    </tr>
    <tr>
        <td><strong>Горючі сланці і бітумінозні піски</strong></td>
        <td>Горючі сланці і бітумінозні піски - це осадова порода, яка складається з органічної речовини в формі керогена. Кероген - це парафінистої, багатий вуглеводнем матеріал, який розглядається в якості попередника нафти. Горючі сланці можуть спалюватися безпосередньо або проходити термічну обробку для отримання сланцевого масла. Сланцеве масло та інші продукти, витягнуті в процесі зрідження, слід вказати в «Річному опитувальнику по нафті» в підгрупі «Інші вуглеводні».</td>
    </tr>
    <tr>
        <td><strong>Нафта, ПГК і Сировина для нафтопереробки</strong></td>
        <td></td>
    </tr>
    <tr>
        <td><strong>Сира нафта</strong></td>
        <td>Сира нафта є мінеральним паливом природного походження складається з вуглеводнів і пов'язаних домішок, таких як сірка. Сира нафта при нормальній температурі і тиску існує в рідкому вигляді і її фізичні властивості (щільність, в'язкість і т.д.) сильно мінливі. У цю категорію включена рідина вилучена з газоконденсатного родовища або промисловий конденсат вилучений з попутного або непопутного газу, там, де він змішаний з комерційним потоком сирої нафти.</td>
    </tr>
    <tr>
        <td><strong>Природний газоконденсат (ПГК)</strong></td>
        <td>Природний газоконденсат це рідкі або зріджені вуглеводні, які добувають із природного газу в сепараторних установках або на газопереробних станціях. До складу природного газоконденсату входять етан, пропан, бутан (нормальний і ізобутан), (з) пентан і плюс Пентал (пентан і більш важкі вуглеводні, які іноді згадуються як природний бензин або виробничий конденсат).</td>
    </tr>
    <tr>
        <td><strong>Сировина для нафтопереробки</strong></td>
        <td>Сировина для нафтопереробки це перероблена нафта, яка призначається для подальшої обробки (наприклад мазут першої перегонки або вакуумний газойль), виключаючи змішування. У подальших етапах переробки, сировину для нафтопереробки перетворюється в один або кілька компонентів і / або кінцевих продуктів. Дане визначення охоплює також поворотні продукти з нафтохімічної промисловості в нафтопереробну промисловість (наприклад піролізний бензин, фракції С4 і фракції газойлю і мазуту).</td>
    </tr>
    <tr>
        <td><strong>Присадки / оксигенатів</strong></td>
        <td>"Присадки це невуглеводневі з'єднання, які додаються або змішуються з продуктами нафтопереробки для зміни властивостей палива (таких як октанове і цетанове число, стійкість при низьких температурах, і т.д.):i. Оксигенатів, такі як алкоголі (метанол, етанол), ефіри (наприклад МТБЕ (метил-трет-бутиловий ефір), ЕТБЕ (етил-трет-бутиловий ефір), ТАМЕ (третинний аміл метиловий ефір);ii. Складні ефіри (наприклад репсовий масло або диметиловий ефір і т.д.). Хімічні сполуки (такі як тетраметілсвінец, тетраетилсвинець і детергенти)."</td>
    </tr>
    <tr>
        <td><strong>Інші вуглеводні</strong></td>
        <td>Ця категорія включає синтетичну сиру нафту одержувану з бітумінозних пісків, горючих сланців і т.д., рідкі продукти одержувані при зріджуванні вугілля (див. Річний запитальник по вугіллю), рідкі продукти переробки природного газу в бензин (див. Річний запитальник по природному газу) , водень і емульсіровать масла (наприклад водно-бітумна емульсія - оріемульсія).</td>
    </tr>
    <tr>
        <td><strong>Нафтопродукти</strong></td>
        <td></td>
    </tr>
    <tr>
        <td><strong>Нефтезаводской газ</strong></td>
        <td>Нефтезаводской газ включає суміш неконденсованих газів, що складається головним чином з водню, метану, етану, а також олефінів, отриманих при перегонці сирої нафти або переробці нафтопродуктів (наприклад при крекінгу) на НПЗах. Ця категорія включає також гази повернуті з нафтохімічної промисловості.</td>
    </tr>
    <tr>
        <td><strong>Етан</strong></td>
        <td>Природно газоподібний нерозгалужене вуглеводень (C2H6), який зі потоків природного і нефтезаводского газу.</td>
    </tr>
    <tr>
        <td><strong>Зріджені нафтові гази (СНД)</strong></td>
        <td>СНД це легкі парафінові вуглеводні, отримані в процесах перегонки, стабілізації сирої нафти і заводах з переробки природного газу. Вони складаються в основному з пропану (C3H8) і бутану (C4H10) або їх суміші, але можуть також включати пропилен, бутилен, ізобутан і ізобутилен. Для транспортування і зберігання СНД зазвичай піддаються зрідження під тиском.</td>
    </tr>
    <tr>
        <td><strong>Моторний бензин</strong></td>
        <td>"Моторний бензин це суміш легких вуглеводнів з температурою перегонки в межах від 35 ° C до 215 ° C. Мотобензін використовується як паливо для наземних двигунів з іскровим запалюванням. Він може містити присадки, оксигенатів і октанові підсилювачі, включаючи сполуки свинцю, такі як ТЕС ( тетраетилсвинець) і ТМС (тетраметілсвінец).
Ця категорія включає компоненти для змішування з автомобільним бензином (за винятком Присадок / оксигенатів), наприклад алкілат, ізомеризат, реформат, крекінг-бензин для використання як кінцевий автомобільний бензин.
"</td>
    </tr>
    <tr>
        <td><strong>Авіаційний бензин</strong></td>
        <td>Це моторний бензин підготовлений спеціально для авіаційних поршневих двигунів, з октановим числом підібраним для використання в двигунах цього типу, і має точку замерзання -60 ° C.Температурний інтервал перегонки знаходиться зазвичай в межах від 30 ° C до 180 ° C.</td>
    </tr>
    <tr>
        <td><strong>Бензин для реактивних двигунів (нафта для реактивних двигунів або JP4)</strong></td>
        <td>Ця категорія включає всі види легкого вуглеводневого палива, що використовуються в авіаційних турбінних установках і мають температуру перегонки від 100 ° C до 250 ° C. Цей бензин виробляється за допомогою змішування гасу і бензину або Нафти в такій пропорції, щоб вміст ароматичних з'єднань не перевищувало 25% за обсягом, а тиск насичених парів бензину знаходилося в межах від 13.7кПа до 20.6кПa.</td>
    </tr>
</table>
        
    </div>
}

export default Info;