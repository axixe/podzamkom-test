// HIDDEN/NOT HIDDEN BLOCKS

const sections = {
        index: document.querySelector('.index'),
        quests: document.querySelector('.quests'),
	};

document.querySelector('#to-quests-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const { index, quests } = sections;

    index.classList.add('index--hidden');
    quests.classList.remove('quests--hidden');
});

// SLIDER

const dots = document.querySelectorAll('.slider__dot');
const questsContainer = document.querySelector('.quests__content'); // Контейнер для отображения квестов

const quests = {
    virus: {
        name: '«ВИРУС»',
        genre: 'ХОРРОР',
        legend: 'Этот объект давным-давно перестали отмечать на картах, а в военных отчетах его указывали, как крайне опасный. Основной задачей этой лаборатории было исследование нового оружия массового поражения путем выведения вируса, который морально и физически влияет на человека. Вас вызвали, как военных биологов, чтобы вы вместе смогли завершить разработку этих вирусов, но услышав разговоры персонала, вы понимаете, что прибыли сюда с совершенно иной целью...',
        price: '4 500',
        img: 'virus'
    },
    escape: {
        name: '«ПОБЕГ»',
        genre: 'ТРИЛЛЕР',
        legend: 'Вас ошибочно обвинили в самом ужасном преступлении и поместили в камеры смертников. Ровно через 1,5 часа вас посадят на электрический стул! По чистой случайности Вы попадаете в камеру, из которой одному заключенному удалось сбежать без следов. Вдруг коридоры тюрьмы опустели, у вас появилвся шанс выбраться из заточения и спасти свою жизнь! Удастся ли вам использовать свой последний шанс - зависит только от вас.',
        price: '4 000',
        img: 'escape'
    },
    deal: {
        name: '«СДЕЛКА С ДЬЯВОЛОМ»',
        genre: 'МИСТИКА',
        legend: 'Слухи о пропащих постояльцах этого старого отеля очень быстро расползлись по нашему маленькому городку. И все же ваша команда отчаянных искателей приключений осмеливается заселиться в странный НОМЕР. Вы столкнетесь с настоящим злом! Каждый ваш шаг оставит отпечаток в истории этого старого отеля.',
        price: '4 500',
        img: 'deal'
    },
    coma: {
        name: '«КОМА»',
        genre: 'ПРИКЛЮЧЕНИЕ',
        legend: 'Ужасная авария.... Темнота.... Обрывки голосов и образов.... Жутковато со стороны наблюдать за собой, не понимая как это все могло произойти?! Вы в коме! В жестокой ловушке... Но ваши души не готовы сдаваться! Вы тихие, но не беспомощные наблюдатели, подхваченные потоком времени, потоком разных судеб... Со скоростью перемещаясь, то там, то здесь, останавливаясь в отголосках чужих воспоминаний...В бешеной суматохе, найдёте ли решение там, где казалось бы его не может быть?',
        price: '4 500',
        img: 'coma'
    }
};

let currentIndex = 0; // Индекс текущего квеста

// Функция для обновления контента
function updateQuest(index) {
    const questKeys = Object.keys(quests);
    const currentQuest = quests[questKeys[index]];

    questsContainer.innerHTML = `
        <div class="quests__preview-block">
            <img src="assets/img/${currentQuest.img}.png" alt="preview" class="quests__preview">
        </div>
        <div class="quests__info-block">
            <h3 class="quests__name">КВЕСТ-ИГРА <span>${currentQuest.name}</span></h3>
            <div class="quests__genre">Жанр: ${currentQuest.genre}</div>
            <div class="quests__legend">${currentQuest.legend}</div>
            <div class="quests__price">Цена: <span>${currentQuest.price}₽</span></div>
        </div>
    `;

    // Обновляем активное состояние точек
    dots.forEach((dot, i) => {
        dot.classList.toggle('slider__dot--active', i === index);
    });
}

// Устанавливаем обработчики событий для точек
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i; // Устанавливаем текущий индекс
        updateQuest(currentIndex); // Обновляем контент
    });
});

// Инициализация слайдера с первым элементом
updateQuest(currentIndex);
