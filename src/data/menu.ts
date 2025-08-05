export interface Ingredient {
    name: string;
    amount: number | string;
    unit: string;
}

export interface Dish {
    id: string;
    name: string;
    ingredients: Ingredient[];
    category: string;
}

export const menu: Dish[] = [
    {
        id: 'salad_barbi',
        name: 'Салат Барби',
        category: 'Салаттар',
        ingredients: [
            {name: 'Соленые огурцы', amount: 80, unit: 'г'},
            {name: 'Свекла', amount: 200, unit: 'г'},
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Укроп', amount: 3, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'morskaya_zvezda',
        name: 'Морская звезда',
        category: 'Салаттар',
        ingredients: [
            {name: 'Крабовые палочки', amount: 50, unit: 'г'},
            {name: 'Сыр КОМО', amount: 50, unit: 'г'},
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Семга малосоленая', amount: 150, unit: 'г'},
            {name: 'Кукуруза', amount: 50, unit: 'г'},
            {name: 'Авакадо', amount: 0.5, unit: 'шт'},
            {name: 'Майонез', amount: 50, unit: 'г'},
            {name: 'Черный кунжут', amount: 5, unit: 'г'},
            {name: 'Красная икра', amount: 20, unit: 'г'}
        ]
    },
    {
        id: 'salad_rubin',
        name: 'Салат Рубин',
        category: 'Салаттар',
        ingredients: [
            {name: 'Яблоко сладкое', amount: 200, unit: 'г'},
            {name: 'Свекло', amount: 200, unit: 'г'},
            {name: 'Миндаль', amount: 30, unit: 'г'},
            {name: 'Сметана', amount: 50, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Бэби шпинат', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'salad_rafaello',
        name: 'Салат Рафаелло',
        category: 'Салаттар',
        ingredients: [
            {name: 'Кукуруза', amount: 50, unit: 'г'},
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Картошка', amount: 100, unit: 'г'},
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Сыр Сулугуни', amount: 50, unit: 'г'},
            {name: 'Миндальный слайси', amount: 40, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'},
            {name: 'Творожный сыр Креметте', amount: 50, unit: 'г'},
            {name: 'Огурцы', amount: 1, unit: 'шт'},
            {name: 'Редиска', amount: 1, unit: 'шт'},
            {name: 'Клубника', amount: 2, unit: 'шт'}
        ]
    },
    {
        id: 'salad_with_tuna',
        name: 'Салат с тунцом',
        category: 'Салаттар',
        ingredients: [
            {name: 'Красная капуста', amount: 100, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'},
            {name: 'Карнишоны', amount: 80, unit: 'г'},
            {name: 'Консервированный тунец', amount: 150, unit: 'г'},
            {name: 'Картошка', amount: 100, unit: 'г'},
            {name: 'Сок лимона', amount: 5, unit: 'г'},
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Черри помидоры', amount: 100, unit: 'г'},
            {name: 'Творожный сыр', amount: 30, unit: 'г'}
        ]
    },
    {
        id: 'chicken_purple_coat',
        name: 'Салат куриный в фиолетовой шубе',
        category: 'Салаттар',
        ingredients: [
            {name: 'Карнишоны', amount: 80, unit: 'г'},
            {name: 'Красная капуста', amount: 200, unit: 'г'},
            {name: 'Яблоко', amount: 120, unit: 'г'},
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'},
            {name: 'Творожный сыр', amount: 30, unit: 'г'}
        ]
    },
    {
        id: 'salad_aray',
        name: 'Салат "Арай"',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Брокколи', amount: 200, unit: 'г'},
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Кукуруза', amount: 70, unit: 'г'},
            {name: 'Сладкий перец красный', amount: 100, unit: 'г'},
            {name: 'Красный лук', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'almond_slices',
        name: 'Миндальные слайсы',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Шампиньоны свежие', amount: 200, unit: 'г'},
            {name: 'Огурцы', amount: 150, unit: 'г'},
            {name: 'Помидор', amount: 150, unit: 'г'},
            {name: 'Лола роса', amount: 30, unit: 'г'},
            {name: 'Листья салата', amount: 30, unit: 'г'},
            {name: 'Руккола', amount: 30, unit: 'г'},
            {name: 'Миндальные слайси', amount: 100, unit: 'г'},
            {name: 'Майонез', amount: 60, unit: 'г'},
            {name: 'Паприка', amount: 5, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Вегета универсальная приправа', amount: 3, unit: 'г'},
            {name: 'Растительное масло', amount: 50, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'salad_bavarka',
        name: 'Салат Баварка',
        category: 'Салаттар',
        ingredients: [
            {name: 'Капченая индейка', amount: 150, unit: 'г'},
            {name: 'Грибы консервированные Опята', amount: 80, unit: 'г'},
            {name: 'Кукуруза початки', amount: 80, unit: 'г'},
            {name: 'Красный лук', amount: 30, unit: 'г'},
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Горох', amount: 80, unit: 'г'},
            {name: 'Майонез', amount: 80, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'},
            {name: 'Черный перец', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'salad_with_omelet',
        name: 'Салат с омлетом',
        category: 'Салаттар',
        ingredients: [
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Карнишоны', amount: 80, unit: 'г'},
            {name: 'Говяжье мякоть', amount: 200, unit: 'г'},
            {name: 'Картошка пай', amount: 0.5, unit: 'пачка'},
            {name: 'Кукуруза', amount: 80, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'},
            {name: 'Листья салата', amount: 80, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'},
            {name: 'Перец', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'salad_with_pear',
        name: 'Салат с грушей',
        category: 'Салаттар',
        ingredients: [
            {name: 'Груша маленький размер', amount: 1, unit: 'шт'},
            {name: 'Утиное филе', amount: 1.5, unit: 'шт'},
            {name: 'Мини моцарелла', amount: 50, unit: 'г'},
            {name: 'Консервированный персик', amount: 50, unit: 'г'},
            {name: 'Малина свежая', amount: 30, unit: 'г'},
            {name: 'Руккола', amount: 30, unit: 'г'},
            {name: 'Мангольд', amount: 30, unit: 'г'},
            {name: 'Листья салата', amount: 20, unit: 'г'},
            {name: 'Лола роса', amount: 20, unit: 'г'},
            {name: 'Паприка приправич', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Горчица', amount: 5, unit: 'г'},
            {name: 'Майонез', amount: 5, unit: 'г'},
            {name: 'Черный перец', amount: 3, unit: 'г'},
            {name: 'Грецкий орех', amount: 30, unit: 'г'},
            {name: 'Мед', amount: 20, unit: 'г'},
            {name: 'Слоеное тесто', amount: 80, unit: 'г'},
            {name: 'Кунжут белый', amount: 5, unit: 'г'},
            {name: 'Оливковое масло', amount: 10, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'},
            {name: 'Бальзамический крем', amount: 20, unit: 'г'},
            {name: 'Соус Арой д', amount: 20, unit: 'г'}
        ]
    },
    {
        id: 'caramelized_pear_salad',
        name: 'Салат с карамелизованной грушей',
        category: 'Салаттар',
        ingredients: [
            {name: 'Груша', amount: 1, unit: 'шт'},
            {name: 'Миндальные слайси', amount: 30, unit: 'г'},
            {name: 'Гранат', amount: 50, unit: 'г'},
            {name: 'Лола роса', amount: 30, unit: 'г'},
            {name: 'Листья', amount: 30, unit: 'г'},
            {name: 'Руккола', amount: 30, unit: 'г'},
            {name: 'Мед', amount: 10, unit: 'г'},
            {name: 'Сливочное масло', amount: 30, unit: 'г'},
            {name: 'Сливки', amount: 30, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Сахар', amount: 10, unit: 'г'}
        ]
    },
    {
        id: 'grill_salad',
        name: 'Салат гриль',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Черри помидоры', amount: 150, unit: 'г'},
            {name: 'Баклажан', amount: 200, unit: 'г'},
            {name: 'Кабачки', amount: 200, unit: 'г'},
            {name: 'Сладкий перец красный', amount: 100, unit: 'г'},
            {name: 'Сладкий перец желтый', amount: 100, unit: 'г'},
            {name: 'Бэби шпинат', amount: 50, unit: 'г'},
            {name: 'Вегета универсальная', amount: 10, unit: 'г'},
            {name: 'Паприка', amount: 5, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'},
            {name: 'Кристаллик', amount: 3, unit: 'г'},
            {name: 'Растительное масло', amount: 30, unit: 'г'},
            {name: 'Соевый соус', amount: 10, unit: 'г'},
            {name: 'Белый кунжут', amount: 5, unit: 'г'},
            {name: 'Черный перец', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'three_tomatoes_salad',
        name: 'Салат из 3 видов томатов',
        category: 'Салаттар',
        ingredients: [
            {name: 'Зеленые черри помидоры', amount: 120, unit: 'г'},
            {name: 'Красные черри помидоры', amount: 120, unit: 'г'},
            {name: 'Желтые черри помидоры', amount: 120, unit: 'г'},
            {name: 'Творожный сыр', amount: 100, unit: 'г'},
            {name: 'Бальзамический крем', amount: 5, unit: 'г'},
            {name: 'Микрозелень', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Черный перец', amount: 3, unit: 'г'},
            {name: 'Лимонный сок', amount: 3, unit: 'г'},
            {name: 'Кедровые орешки', amount: 10, unit: 'г'}
        ]
    },
    {
        id: 'japanese_hanguk',
        name: 'Японский хангук',
        category: 'Салаттар',
        ingredients: [
            {name: 'Мясо говядины', amount: 200, unit: 'г'},
            {name: 'Перец светафор красный', amount: 150, unit: 'г'},
            {name: 'Перец светафор желтый', amount: 150, unit: 'г'},
            {name: 'Свежие огурцы', amount: 200, unit: 'г'},
            {name: 'Карнишоны', amount: 100, unit: 'г'},
            {name: 'Микрозелень горох', amount: 20, unit: 'г'},
            {name: 'Лола роса', amount: 20, unit: 'г'},
            {name: 'Салатные листья', amount: 30, unit: 'г'},
            {name: 'Руккола', amount: 30, unit: 'г'},
            {name: 'Аджика Цинказ', amount: 10, unit: 'г'},
            {name: 'Базилик сушеный', amount: 0.3, unit: 'г'},
            {name: 'Кристаллик', amount: 2, unit: 'г'},
            {name: 'Соевый соус', amount: 5, unit: 'г'},
            {name: 'Растительное масло', amount: 20, unit: 'г'},
            {name: 'Оливковое масло', amount: 10, unit: 'г'},
            {name: 'Паприка приправич', amount: 3, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Перец черный', amount: 1, unit: 'г'},
            {name: 'Лимонный сок', amount: 0.5, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Кунжут белый', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'crispy_eggplant',
        name: 'Хрустящие баклажаны',
        category: 'Салаттар',
        ingredients: [
            {name: 'Баклажан', amount: 300, unit: 'г'},
            {name: 'Черри помидор', amount: 100, unit: 'г'},
            {name: 'Мини моцарелла', amount: 50, unit: 'г'},
            {name: 'Листья роса', amount: 30, unit: 'г'},
            {name: 'Лола роса', amount: 30, unit: 'г'},
            {name: 'Руккола', amount: 20, unit: 'г'},
            {name: 'Кислосладкий соус Арой Д', amount: 20, unit: 'г'},
            {name: 'Соус терияки', amount: 10, unit: 'г'},
            {name: 'Кинза', amount: 5, unit: 'г'},
            {name: 'Темпурная мука', amount: 40, unit: 'г'},
            {name: 'Алекс с газом', amount: 30, unit: 'мл'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Растительное масло', amount: 50, unit: 'г'},
            {name: 'Кукурузный крахмал', amount: 20, unit: 'г'}
        ]
    },
    {
        id: 'eggplant_stracciatella',
        name: 'Баклажан с страчетеллой',
        category: 'Салаттар',
        ingredients: [
            {name: 'Баклажан', amount: 300, unit: 'г'},
            {name: 'Черри помидоры', amount: 150, unit: 'г'},
            {name: 'Лола роса', amount: 30, unit: 'г'},
            {name: 'Листья салата', amount: 30, unit: 'г'},
            {name: 'Руккола', amount: 20, unit: 'г'},
            {name: 'Микрозелень горох', amount: 5, unit: 'г'},
            {name: 'Сыр страчателла', amount: 150, unit: 'г'},
            {name: 'Съедобные цветы', amount: '1', unit: 'шт'},
            {name: 'Растительное масло', amount: 50, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Черный перец', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'salad_carpaccio',
        name: 'Салат карпаччо',
        category: 'Салаттар',
        ingredients: [
            {name: 'Свекло', amount: 1.5, unit: 'шт'},
            {name: 'Апельсин', amount: 1.5, unit: 'шт'},
            {name: 'Руккола', amount: 100, unit: 'г'},
            {name: 'Кедровые орешки', amount: 10, unit: 'г'},
            {name: 'Бальзамический крем', amount: 20, unit: 'г'},
            {name: 'Творожный сыр Креметте', amount: 60, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'},
            {name: 'Черный перец', amount: 1, unit: 'г'},
            {name: 'Соль', amount: 2, unit: 'г'},
            {name: 'Лимонный сок', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'crispy_cauliflower',
        name: 'Хрустящая цветная капуста',
        category: 'Салаттар',
        ingredients: [
            {name: 'Цветная капуста', amount: 200, unit: 'г'},
            {name: 'Брокколи', amount: 200, unit: 'г'},
            {name: 'Черри', amount: 150, unit: 'г'},
            {name: 'Мини моцарелла', amount: 70, unit: 'г'},
            {name: 'Лимон', amount: 0.5, unit: 'шт'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Соус Дрессинг Италиано', amount: 30, unit: 'г'},
            {name: 'Оливковое масло', amount: 10, unit: 'г'}
        ]
    },
    {
        id: 'salad_with_dates',
        name: 'Салат с финиками',
        category: 'Салаттар',
        ingredients: [
            {name: 'Финики королевские', amount: 100, unit: 'г'},
            {name: 'Черри помидоры', amount: 100, unit: 'г'},
            {name: 'Апельсин', amount: 1, unit: 'шт'},
            {name: 'Манго', amount: 0.25, unit: 'шт'},
            {name: 'Мини моцарелла', amount: 50, unit: 'г'},
            {name: 'Листья салата', amount: 30, unit: 'г'},
            {name: 'Лола роса', amount: 30, unit: 'г'},
            {name: 'Руккола', amount: 30, unit: 'г'},
            {name: 'Кедровые орешки', amount: 10, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'},
            {name: 'Мед', amount: 5, unit: 'г'},
            {name: 'Оливковое масло', amount: 30, unit: 'г'},
            {name: 'Сахар', amount: 5, unit: 'г'},
            {name: 'Соус Арой Д', amount: 10, unit: 'г'},
            {name: 'Бальзамический крем', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'salad_with_mushrooms',
        name: 'Салат с грибами',
        category: 'Салаттар',
        ingredients: [
            {name: 'Мякоть говядины', amount: 200, unit: 'г'},
            {name: 'Сладкий перец красный', amount: 80, unit: 'г'},
            {name: 'Сладкий перец желтый', amount: 80, unit: 'г'},
            {name: 'Красный лук', amount: 40, unit: 'г'},
            {name: 'Кинза', amount: 5, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Зеленый лук', amount: 20, unit: 'г'},
            {name: 'Черри помидоры', amount: 100, unit: 'г'},
            {name: 'Маринованные шампиньоны', amount: 70, unit: 'г'},
            {name: 'Маринованные опята', amount: 70, unit: 'г'},
            {name: 'Свежие огурцы', amount: 100, unit: 'г'},
            {name: 'Аджика Цинказ', amount: 10, unit: 'г'},
            {name: 'Базилик сушеный', amount: 0.5, unit: 'г'},
            {name: 'Кристаллик', amount: 1, unit: 'г'},
            {name: 'Перец красный', amount: 1, unit: 'г'},
            {name: 'Перец черный', amount: 1, unit: 'г'},
            {name: 'Паприка приправич', amount: 1, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Растительное масло', amount: 10, unit: 'г'},
            {name: 'Мед', amount: 3, unit: 'г'},
            {name: 'Сахар', amount: 1, unit: 'г'},
            {name: 'Соль', amount: 2, unit: 'г'},
            {name: 'Соевый соус', amount: 5, unit: 'г'},
            {name: 'Лимонный сок', amount: 1, unit: 'г'},
            {name: 'Вегета универсальный', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'salad_afina',
        name: 'Салат афина',
        category: 'Салаттар',
        ingredients: [
            {name: 'Говядина мякоть', amount: 200, unit: 'г'},
            {name: 'Зеленый горох', amount: 80, unit: 'г'},
            {name: 'Карнишоны', amount: 80, unit: 'г'},
            {name: 'Красный лук', amount: 30, unit: 'г'},
            {name: 'Укроп', amount: 5, unit: 'г'},
            {name: 'Растительное масло', amount: 20, unit: 'г'},
            {name: 'Кристаллик', amount: 2, unit: 'г'},
            {name: 'Паприка приправич', amount: 3, unit: 'г'},
            {name: 'Красный перец', amount: 1, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'shrimp_mango_pillow',
        name: 'Креветки манговой подушке',
        category: 'Салаттар',
        ingredients: [
            {name: 'Слоеное тесто', amount: 50, unit: 'г'},
            {name: 'Манго', amount: 0.25, unit: 'шт'},
            {name: 'Красный лук', amount: 30, unit: 'г'},
            {name: 'Креветки королевские чищенные', amount: 100, unit: 'г'},
            {name: 'Красный перец', amount: 80, unit: 'г'},
            {name: 'Петрушка', amount: 5, unit: 'г'},
            {name: 'Лимонный сок', amount: 3, unit: 'г'},
            {name: 'Паприка приправич', amount: 5, unit: 'г'},
            {name: 'Вегета универсальный', amount: 3, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Оливковое масло', amount: 10, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'asian_surprise',
        name: 'Азиатский сюрприз',
        category: 'Салаттар',
        ingredients: [
            {name: 'Говядина мякоть', amount: 200, unit: 'г'},
            {name: 'Кукуруза початка', amount: 100, unit: 'г'},
            {name: 'Черри помидоры', amount: 150, unit: 'г'},
            {name: 'Перец красный светафор', amount: 100, unit: 'г'},
            {name: 'Перец полугоркий', amount: 60, unit: 'г'},
            {name: 'Кинза', amount: 10, unit: 'г'},
            {name: 'Карнишоны', amount: 70, unit: 'г'},
            {name: 'Горох бандуэль', amount: 80, unit: 'г'},
            {name: 'Листья салата', amount: 50, unit: 'г'},
            {name: 'Соевый соус', amount: 5, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Кристаллик', amount: 1, unit: 'г'},
            {name: 'Красный перец', amount: 1, unit: 'г'},
            {name: 'Соль', amount: 2, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Растительное масло', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'salad_with_avocado',
        name: 'Салат с авакадой',
        category: 'Салаттар',
        ingredients: [
            {name: 'Креветки королевские чищенные', amount: 200, unit: 'г'},
            {name: 'Помидоры', amount: 150, unit: 'г'},
            {name: 'Огурцы', amount: 150, unit: 'г'},
            {name: 'Кинза', amount: 5, unit: 'г'},
            {name: 'Авакадо', amount: 0.5, unit: 'шт'},
            {name: 'Зеленый лук', amount: 10, unit: 'г'},
            {name: 'Микрозелень горох', amount: 5, unit: 'г'},
            {name: 'Лимонный сок', amount: 5, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Кунжут белый', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'crispy_eggplant_2',
        name: 'Хрустящие баклажаны',
        category: 'Салаттар',
        ingredients: [
            {name: 'Баклажан', amount: 300, unit: 'г'},
            {name: 'Черри', amount: 150, unit: 'г'},
            {name: 'Мини моцарелла', amount: 70, unit: 'г'},
            {name: 'Кедровые орешки', amount: 10, unit: 'г'},
            {name: 'Лола роса', amount: 20, unit: 'г'},
            {name: 'Листья салата', amount: 20, unit: 'г'},
            {name: 'Рукола', amount: 30, unit: 'г'},
            {name: 'Соус Свитчили Арой Д', amount: 20, unit: 'г'},
            {name: 'Терияки соус', amount: 10, unit: 'г'},
            {name: 'Растительное масло', amount: 50, unit: 'г'},
            {name: 'Темпурная мука', amount: 50, unit: 'г'},
            {name: 'Алекс с газом', amount: 50, unit: 'г'},
            {name: 'Кинза', amount: 10, unit: 'г'}
        ]
    },
    {
        id: 'korean_meat_salad',
        name: 'Мясной салат по-корейски',
        category: 'Салаттар',
        ingredients: [
            {name: 'Аджика цинказа', amount: 20, unit: 'г'},
            {name: 'Растительное масло', amount: 30, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Сахар', amount: 2, unit: 'г'},
            {name: 'Мед', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Сушёный базилик', amount: 1, unit: 'г'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'},
            {name: 'Красный перец', amount: 1, unit: 'г'},
            {name: 'Соевый соус', amount: 10, unit: 'г'},
            {name: 'Вегета универсальная', amount: 8, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Говяжье мясо', amount: 200, unit: 'г'},
            {name: 'Сладкий перец жёлтый', amount: 100, unit: 'г'},
            {name: 'Сладкий перец красный', amount: 100, unit: 'г'},
            {name: 'Огурцы', amount: 120, unit: 'г'},
            {name: 'Морковь', amount: 80, unit: 'г'},
            {name: 'Зелёный лук', amount: 20, unit: 'г'},
            {name: 'Кинза', amount: 10, unit: 'г'},
            {name: 'Кунжут белый', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'tbilisi',
        name: 'Тбилиси',
        category: 'Салаттар',
        ingredients: [
            {name: 'Говядина мякоть', amount: 200, unit: 'г'},
            {name: 'Красный лук', amount: 30, unit: 'г'},
            {name: 'Перец сладкий светофор красный', amount: 100, unit: 'г'},
            {name: 'Перец сладкий светофор жёлтый', amount: 100, unit: 'г'},
            {name: 'Фасоль консервированная', amount: 80, unit: 'г'},
            {name: 'Грецкий орех', amount: 40, unit: 'г'},
            {name: 'Кинза', amount: 10, unit: 'г'},
            {name: 'Гранат', amount: 40, unit: 'г'},
            {name: 'Специи хмели-сунели', amount: 5, unit: 'г'},
            {name: 'Оливковое масло', amount: 30, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'}
        ]
    },
    {
        id: 'salad_with_buratto',
        name: 'Салат с буратто',
        category: 'Салаттар',
        ingredients: [
            {name: 'Сыр буратто', amount: 1, unit: 'шт'},
            {name: 'Авокадо', amount: 0.5, unit: 'шт'},
            {name: 'Черри жёлтый', amount: 80, unit: 'г'},
            {name: 'Черри красный', amount: 80, unit: 'г'},
            {name: 'Багет чёрный', amount: 0.25, unit: 'шт'},
            {name: 'Листья салата', amount: 40, unit: 'г'},
            {name: 'Лола роса', amount: 40, unit: 'г'},
            {name: 'Рукола', amount: 40, unit: 'г'},
            {name: 'Бальзамический крем', amount: 20, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'},
            {name: 'Апельсин', amount: 0.25, unit: 'шт'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'},
            {name: 'Кедровые орешки', amount: 10, unit: 'г'}
        ]
    },
    {
        id: 'beetroot_prunes',
        name: 'Свёкла с черносливом',
        category: 'Салаттар',
        ingredients: [
            {name: 'Свёкла', amount: 1.5, unit: 'шт'},
            {name: 'Творожный сыр', amount: 70, unit: 'г'},
            {name: 'Чернослив', amount: 50, unit: 'г'},
            {name: 'Грецкий орех', amount: 50, unit: 'г'},
            {name: 'Фисташковые крошки', amount: 20, unit: 'г'},
            {name: 'Лимон', amount: 0.25, unit: 'шт'}
        ]
    },
    {
        id: 'festive_salad',
        name: 'Праздничный салат',
        category: 'Салаттар',
        ingredients: [
            {name: 'Сёмга малосолёная', amount: 100, unit: 'г'},
            {name: 'Огурцы', amount: 1, unit: 'шт'},
            {name: 'Перепелиные Яйцо', amount: 5, unit: 'шт'},
            {name: 'Черри', amount: 120, unit: 'г'},
            {name: 'Рукола', amount: 100, unit: 'г'},
            {name: 'Чёрный кунжут', amount: 5, unit: 'г'},
            {name: 'Оливковое масло', amount: 30, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'},
            {name: 'Бальзамический крем', amount: 10, unit: 'г'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Творожный сыр', amount: 30, unit: 'г'}
        ]
    },
    {
        id: 'caramelized_pear',
        name: 'Карамелизированная груша',
        category: 'Салаттар',
        ingredients: [
            {name: 'Груша Конференс', amount: 2, unit: 'шт'},
            {name: 'Рукола', amount: 100, unit: 'г'},
            {name: 'Сыр Дорблю', amount: 50, unit: 'г'},
            {name: 'Миндаль солёный', amount: 30, unit: 'г'},
            {name: 'Сахар', amount: 50, unit: 'г'},
            {name: 'Сливочное масло 82%', amount: 600, unit: 'г'},
            {name: 'Оливковое масло', amount: 30, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'},
            {name: 'Апельсин', amount: 0.25, unit: 'шт'},
            {name: 'Бальзамический крем', amount: 20, unit: 'г'},
            {name: 'Мёд', amount: 10, unit: 'г'}
        ]
    },
    {
        id: 'alazania',
        name: 'Алазания',
        category: 'Салаттар',
        ingredients: [
            {name: 'Брынза', amount: 120, unit: 'г'},
            {name: 'Шампиньоны свежие', amount: 250, unit: 'г'},
            {name: 'Кинза', amount: 5, unit: 'г'},
            {name: 'Помидор розовый', amount: 250, unit: 'г'},
            {name: 'Вегета', amount: 5, unit: 'г'},
            {name: 'Оливковое масло', amount: 30, unit: 'г'},
            {name: 'Кристаллик', amount: 2, unit: 'г'},
            {name: 'Паприка приправа', amount: 3, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Корейские сухари Каниширо', amount: 30, unit: 'г'},
            {name: 'Сладкий перец красный', amount: 100, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'stir_fry',
        name: 'Стир-фрай',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Черри', amount: 120, unit: 'г'},
            {name: 'Зелёный лук', amount: 30, unit: 'г'},
            {name: 'Баклажан', amount: 150, unit: 'г'},
            {name: 'Полугорький перец', amount: 100, unit: 'г'},
            {name: 'Кинза', amount: 10, unit: 'г'},
            {name: 'Соус Арой Д', amount: 30, unit: 'г'},
            {name: 'Соевый соус', amount: 5, unit: 'г'},
            {name: 'Чеснок', amount: 5, unit: 'г'},
            {name: 'Паприка приправа', amount: 5, unit: 'г'},
            {name: 'Растительное масло', amount: 20, unit: 'г'},
            {name: 'Сахар', amount: 5, unit: 'г'},
            {name: 'Картофельный крахмал', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'},
            {name: 'Кунжут белый', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'caprese',
        name: 'Капрезе',
        category: 'Салаттар',
        ingredients: [
            {name: 'Сыр Моцарелла Tris', amount: 125, unit: 'г'},
            {name: 'Помидор', amount: 125, unit: 'г'},
            {name: 'Соус песто', amount: 10, unit: 'г'},
            {name: 'Оливковое масло', amount: 10, unit: 'г'},
            {name: 'Рукола', amount: 50, unit: 'г'},
            {name: 'Бальзамический крем', amount: 10, unit: 'г'},
            {name: 'Кедровые орешки', amount: 10, unit: 'г'}
        ]
    },
    {
        id: 'spicy_salad',
        name: 'Салат острый',
        category: 'Салаттар',
        ingredients: [
            {name: 'Мякоть говядины', amount: 200, unit: 'г'},
            {name: 'Полугорький перец', amount: 80, unit: 'г'},
            {name: 'Перец светофор жёлтый', amount: 100, unit: 'г'},
            {name: 'Черри', amount: 10, unit: 'г'},
            {name: 'Огурцы', amount: 120, unit: 'г'},
            {name: 'Красный лук', amount: 30, unit: 'г'},
            {name: 'Кинза', amount: 8, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Растительное масло', amount: 20, unit: 'г'},
            {name: 'Соевый соус', amount: 5, unit: 'г'},
            {name: 'Кристаллик', amount: 3, unit: 'г'},
            {name: 'Сушёный базилик', amount: 1, unit: 'г'},
            {name: 'Аджика цинказа', amount: 20, unit: 'г'},
            {name: 'Паприка приправа', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Сахар', amount: 3, unit: 'г'},
            {name: 'Мёд', amount: 5, unit: 'г'},
            {name: 'Микрозелень горох', amount: 10, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'beetroot_carpaccio',
        name: 'Карпаччо из свёклы',
        category: 'Салаттар',
        ingredients: [
            {name: 'Свёкла', amount: 300, unit: 'г'},
            {name: 'Апельсин', amount: 1.5, unit: 'шт'},
            {name: 'Творожный сыр Креметте', amount: 60, unit: 'г'},
            {name: 'Рукола', amount: 80, unit: 'г'},
            {name: 'Кедровые орешки', amount: 10, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Бальзамический крем', amount: 10, unit: 'г'},
            {name: 'Мёд', amount: 5, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'}
        ]
    },
    {
        id: 'warm_with_horse',
        name: 'Тёплый с кониной',
        category: 'Салаттар',
        ingredients: [
            {name: 'Вырезка конина', amount: 200, unit: 'г'},
            {name: 'Огурцы', amount: 200, unit: 'г'},
            {name: 'Жандо', amount: 60, unit: 'г'},
            {name: 'Мини моцарелла', amount: 70, unit: 'г'},
            {name: 'Черри', amount: 100, unit: 'г'},
            {name: 'Рукола', amount: 80, unit: 'г'},
            {name: 'Вяленые томаты', amount: 20, unit: 'г'},
            {name: 'Бальзамический соус', amount: 10, unit: 'г'},
            {name: 'Соевый соус', amount: 5, unit: 'г'},
            {name: 'Растительное масло', amount: 20, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'},
            {name: 'Паприка', amount: 1, unit: 'г'},
            {name: 'Универсальная приправа вегета', amount: 5, unit: 'г'},
            {name: 'Кристаллик', amount: 1, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'grill_salad_2',
        name: 'Гриль салат',
        category: 'Салаттар',
        ingredients: [
            {name: 'Вырезка конина', amount: 200, unit: 'г'},
            {name: 'Сладкий перец светофор красный', amount: 100, unit: 'г'},
            {name: 'Сладкий перец светофор жёлтый', amount: 100, unit: 'г'},
            {name: 'Черри', amount: 120, unit: 'г'},
            {name: 'Кабачки', amount: 120, unit: 'г'},
            {name: 'Баклажан', amount: 120, unit: 'г'},
            {name: 'Шампиньоны', amount: 120, unit: 'г'},
            {name: 'Кинза', amount: 10, unit: 'г'},
            {name: 'Аджика цинказа', amount: 20, unit: 'г'},
            {name: 'Растительное масло', amount: 30, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Сахар', amount: 2, unit: 'г'},
            {name: 'Мёд', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Сушёный базилик', amount: 1, unit: 'г'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'},
            {name: 'Красный перец', amount: 1, unit: 'г'},
            {name: 'Соевый соус', amount: 1, unit: 'г'},
            {name: 'Вегета универсальная', amount: 8, unit: 'г'},
            {name: 'Горох микрозелень', amount: 3, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'dolcetto',
        name: 'Dolcetto',
        category: 'Салаттар',
        ingredients: [
            {name: 'Сёмга малосолёная', amount: 80, unit: 'г'},
            {name: 'Авокадо', amount: 0.5, unit: 'шт'},
            {name: 'Курага сладкий', amount: 60, unit: 'г'},
            {name: 'Творожный сыр', amount: 60, unit: 'г'},
            {name: 'Фисташковые крошки', amount: 10, unit: 'г'},
            {name: 'Ежемалина', amount: 0.5, unit: 'пачка'},
            {name: 'Мангольд', amount: 0.5, unit: 'пачка'},
            {name: 'Кунжут белый', amount: 10, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Апельсин', amount: 0.25, unit: 'шт'},
            {name: 'Наршараб', amount: 10, unit: 'г'},
            {name: 'Кардамон', amount: 1, unit: 'г'},
            {name: 'Картофельный крахмал', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'fresh_salad',
        name: 'Фреш салат',
        category: 'Салаттар',
        ingredients: [
            {name: 'Вырезка конина', amount: 300, unit: 'г'},
            {name: 'Рукола', amount: 80, unit: 'г'},
            {name: 'Листья салата', amount: 40, unit: 'г'},
            {name: 'Лола роса', amount: 40, unit: 'г'},
            {name: 'Гранат', amount: 150, unit: 'г'},
            {name: 'Кедровые орешки', amount: 15, unit: 'г'},
            {name: 'Растительное масло', amount: 30, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'},
            {name: 'Кристаллик', amount: 3, unit: 'г'},
            {name: 'Соевый соус', amount: 5, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Специи орегано', amount: 1, unit: 'г'},
            {name: 'Бальзамический крем', amount: 10, unit: 'г'},
            {name: 'Мёд', amount: 5, unit: 'г'},
            {name: 'Апельсин', amount: 0.25, unit: 'шт'},
            {name: 'Оливковое масло', amount: 30, unit: 'г'}
        ]
    },
    {
        id: 'rublevsky',
        name: 'Рублевский',
        category: 'Салаттар',
        ingredients: [
            {name: 'Аджика цинказа', amount: 20, unit: 'г'},
            {name: 'Растительное масло', amount: 30, unit: 'г'},
            {name: 'Оливковое масло', amount: 20, unit: 'г'},
            {name: 'Сахар', amount: 2, unit: 'г'},
            {name: 'Мёд', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Сушёный базилик', amount: 1, unit: 'г'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'},
            {name: 'Красный перец', amount: 1, unit: 'г'},
            {name: 'Соевый соус', amount: 10, unit: 'г'},
            {name: 'Вегета универсальная', amount: 8, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Баклажан', amount: 150, unit: 'г'},
            {name: 'Сладкий перец жёлтый светофор', amount: 200, unit: 'г'},
            {name: 'Помидор', amount: 150, unit: 'г'},
            {name: 'Огурцы', amount: 100, unit: 'г'},
            {name: 'Красный лук', amount: 30, unit: 'г'},
            {name: 'Крахмал кукурузный', amount: 30, unit: 'г'},
            {name: 'Кунжут белый', amount: 5, unit: 'г'},
            {name: 'Кинза', amount: 8, unit: 'г'},
            {name: 'Мякоть говяжий', amount: 200, unit: 'г'}
        ]
    },
    {
        id: 'sicilia',
        name: 'Сицилия',
        category: 'Салаттар',
        ingredients: [
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Помидор', amount: 200, unit: 'г'},
            {name: 'Карнишоны', amount: 100, unit: 'г'},
            {name: 'Картошка пай', amount: 1, unit: 'пачка'},
            {name: 'Сыр Пармезан', amount: 20, unit: 'г'},
            {name: 'Растительное масло', amount: 20, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Паприка приправа', amount: 3, unit: 'г'},
            {name: 'Вегета универсальная', amount: 3, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'grape',
        name: 'Grape',
        category: 'Салаттар',
        ingredients: [
            {name: 'Айсберг капуста', amount: 250, unit: 'г'},
            {name: 'Виноград', amount: 150, unit: 'г'},
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Творожный сыр', amount: 50, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'},
            {name: 'Чёрный кунжут', amount: 5, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'gentle',
        name: 'Нежный',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Морковь', amount: 80, unit: 'г'},
            {name: 'Картофель', amount: 100, unit: 'г'},
            {name: 'Солёные огурцы', amount: 80, unit: 'г'},
            {name: 'Кукуруза', amount: 70, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Сыр Комо Кантри', amount: 50, unit: 'г'},
            {name: 'Чипсы Принглс', amount: 10, unit: 'г'},
            {name: 'Майонез', amount: 100, unit: 'г'},
            {name: 'Кудрявая петрушка', amount: 20, unit: 'г'}
        ]
    },
    {
        id: 'red_velvet',
        name: 'Красный бархат',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 150, unit: 'г'},
            {name: 'Свёкла', amount: 100, unit: 'г'},
            {name: 'Морковь', amount: 80, unit: 'г'},
            {name: 'Кукуруза', amount: 80, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Чипсы Принглс', amount: 10, unit: 'г'},
            {name: 'Ореховый соус', amount: 30, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'pineapple_salad',
        name: 'Салат с ананасом',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Ананас консервированный', amount: 120, unit: 'г'},
            {name: 'Грецкий орех', amount: 50, unit: 'г'},
            {name: 'Сыр Комо Кантри', amount: 100, unit: 'г'},
            {name: 'Майонез', amount: 80, unit: 'г'},
            {name: 'Гранат', amount: 10, unit: 'г'}
        ]
    },
    {
        id: 'tenderness',
        name: 'Нежность',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Яйцо', amount: 2, unit: 'шт'},
            {name: 'Огурцы', amount: 150, unit: 'г'},
            {name: 'Карнишоны', amount: 100, unit: 'г'},
            {name: 'Кукуруза', amount: 80, unit: 'г'},
            {name: 'Майонез', amount: 70, unit: 'г'},
            {name: 'Вегета универсальный', amount: 3, unit: 'г'},
            {name: 'Зернистая горчица', amount: 3, unit: 'г'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Клубника', amount: 2, unit: 'шт'}
        ]
    },
    {
        id: 'grouse_nest',
        name: 'Гнездо глухаря',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Свежие огурцы', amount: 100, unit: 'г'},
            {name: 'Карнишоны', amount: 80, unit: 'г'},
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Картошка пай', amount: 0.5, unit: 'пачки'},
            {name: 'Перепелиные Яйцо', amount: 3, unit: 'шт'},
            {name: 'Майонез', amount: 80, unit: 'г'},
            {name: 'Салатные листья', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'iceberg',
        name: 'Айсберг',
        category: 'Салаттар',
        ingredients: [
            {name: 'Вырезка конины', amount: 200, unit: 'г'},
            {name: 'Айсберг капуста', amount: 200, unit: 'г'},
            {name: 'Брокколи', amount: 200, unit: 'г'},
            {name: 'Цветная капуста', amount: 200, unit: 'г'},
            {name: 'Черри', amount: 100, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'},
            {name: 'Творожный сыр', amount: 50, unit: 'г'},
            {name: 'Зернистая горчица', amount: 5, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Соль', amount: 2, unit: 'г'},
            {name: 'Растительное масло', amount: 20, unit: 'г'},
            {name: 'Соевый соус', amount: 5, unit: 'г'},
            {name: 'Лимон', amount: 0.25, unit: 'шт'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'}
        ]
    },
    {
        id: 'broccoli_cauliflower',
        name: 'Салат брокколи и цветная капуста',
        category: 'Салаттар',
        ingredients: [
            {name: 'Брокколи', amount: 200, unit: 'г'},
            {name: 'Цветная капуста', amount: 200, unit: 'г'},
            {name: 'Черри помидоры', amount: 200, unit: 'г'},
            {name: 'Кукуруза', amount: 100, unit: 'г'},
            {name: 'Салатные листья', amount: 100, unit: 'г'},
            {name: 'Карнишоны', amount: 100, unit: 'г'},
            {name: 'Майонез', amount: 80, unit: 'г'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'},
            {name: 'Соль', amount: 2, unit: 'г'}
        ]
    },
    {
        id: 'under_fur_coat',
        name: 'Под шуба',
        category: 'Салаттар',
        ingredients: [
            {name: 'Свёкла', amount: 150, unit: 'г'},
            {name: 'Морковь', amount: 100, unit: 'г'},
            {name: 'Картофель', amount: 150, unit: 'г'},
            {name: 'Селедка Матиас', amount: 150, unit: 'г'},
            {name: 'Яйцо', amount: 1.5, unit: 'шт'},
            {name: 'Майонез', amount: 120, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'malibu',
        name: 'Малибу',
        category: 'Салаттар',
        ingredients: [
            {name: 'Куриное филе', amount: 200, unit: 'г'},
            {name: 'Сыр Комо Кантри', amount: 100, unit: 'г'},
            {name: 'Помидоры', amount: 150, unit: 'г'},
            {name: 'Огурцы', amount: 150, unit: 'г'},
            {name: 'БагетАсай нан', amount: 50, unit: 'г'},
            {name: 'Майонез', amount: 80, unit: 'г'},
            {name: 'Черный перец', amount: 1, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Вегета универсальный', amount: 3, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Растительное масло', amount: 20, unit: 'г'},
            {name: 'Салатные листья', amount: 70, unit: 'г'}
        ]
    },
    {
        id: 'Samsa',
        name: 'Самса',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Фарш', amount: 100, unit: 'г'},
            {name: 'Пияз', amount: 100, unit: 'г'},
            {name: 'Сметана 25%', amount: 50, unit: 'г'},
            {name: 'Жайлау сливочный 72%', amount: 50, unit: 'г'},
            {name: 'Мука', amount: 100, unit: 'г'},
            {name: 'Соль', amount: 0, unit: null},
            {name: 'Черный перец', amount: 3, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Белый кунжут', amount: 5, unit: 'г'},
            {name: 'Пергамент', amount: 1, unit: 'шт'}
        ]
    },
    {
        id: 'Chebyrek',
        name: 'Чебурек',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Фарш', amount: 120, unit: 'г'},
            {name: 'Пияз', amount: 80, unit: 'г'},
            {name: 'Соль', amount: null, unit: null},
            {name: 'Черный перец', amount: 3, unit: 'г'},
            {name: 'Молоко 3.2%', amount: 50, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Растительное масло', amount: 100, unit: 'г'},
            {name: 'Мука', amount: 100, unit: 'г'}
        ]
    },
    {
        id: 'FrenchRoll',
        name: 'Французкий рулет',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Слоеное тесто', amount: 250, unit: 'г'},
            {name: 'Брынза', amount: 150, unit: 'г'},
            {name: 'Шпинат', amount: 80, unit: 'г'},
            {name: 'Соль', amount: null, unit: null},
            {name: 'Черный перец', amount: 1, unit: 'г'},
            {name: 'Мак', amount: 5, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Пергамент', amount: 1, unit: null}
        ]
    },
    {
        id: 'Baursak',
        name: 'Бауырсақ',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Молоко 3,2%', amount: 200, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Мука Дани Нан', amount: 900, unit: 'г'},
            {name: 'Сливочное масло Жайлау 72%', amount: 80, unit: 'г'},
            {name: 'Расьтительное масло', amount: 500, unit: 'г'},
            {name: 'Соль', amount: 10, unit: 'г'},
            {name: 'Дрож', amount: 7, unit: 'г'},
            {name: 'Сахар', amount: 10, unit: 'г'}
        ]
    },
    {
        id: 'Julien',
        name: 'Жульен с грибами',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Сметана 25%', amount: 50, unit: 'г'},
            {name: 'Жайлау сливочный 72%', amount: 50, unit: 'г'},
            {name: 'Мука', amount: 100, unit: 'г'},
            {name: 'Соль', amount: null, unit: null},
            {name: 'Черный перец', amount: 3, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Белый кунжут', amount: 5, unit: 'г'},
            {name: 'Грибы', amount: 100, unit: 'г'},
            {name: 'Куриное филе', amount: 150, unit: 'г'},
            {name: 'Сливки 33%', amount: 80, unit: 'г'},
            {name: 'Пергамент', amount: null, unit: null}
        ]
    },
    {
        id: 'Lepeshka',
        name: 'Лепешка',
        category: 'Тамақтар',
        ingredients: [
            { name: 'Молоко 3,2%', amount: 250, unit: 'г' },
            { name: 'Жайлау сливочное масло 72', amount: 100, unit: 'г' },
            { name: 'Дрож', amount: 7, unit: 'г' },
            { name: 'Яйцо', amount: 2, unit: 'шт' },
            { name: 'Сахар', amount: 20, unit: 'г' },
            { name: 'Соль', amount: 10, unit: 'г' },
            { name: 'Мука', amount: 800, unit: 'г' },
            { name: 'Белый кунжут', amount: 10, unit: 'г' },
            { name: 'Черный кунжут', amount: 10, unit: 'г' }
        ]
    },
    {
        id: 'Kosichki',
        name: 'Косички',
        category: 'Тамақтар',
        ingredients: [
            { name: 'Молоко 3,2%', amount: 250, unit: 'г' },
            { name: 'Жайлау сливочное масло 72', amount: 100, unit: 'г' },
            { name: 'Дрож', amount: 7, unit: 'г' },
            { name: 'Яйцо', amount: 2, unit: 'шт' },
            { name: 'Сахар', amount: 20, unit: 'г' },
            { name: 'Соль', amount: 10, unit: 'г' },
            { name: 'Мука', amount: 800, unit: 'г' },
            { name: 'Белый кунжут', amount: 10, unit: 'г' }
        ]
    },
    {
        id: 'Solomki',
        name: 'Соломки',
        category: 'Тамақтар',
        ingredients: [
            { name: 'Молоко 3,2%', amount: 125, unit: 'г' },
            { name: 'Жайлау сливочное масло 72', amount: 50, unit: 'г' },
            { name: 'Дрож', amount: 3.5, unit: 'г' },
            { name: 'Яйцо', amount: 1, unit: 'шт' },
            { name: 'Сахар', amount: 10, unit: 'г' },
            { name: 'Соль', amount: 5, unit: 'г' },
            { name: 'Мука', amount: 400, unit: 'г' },
            { name: 'Прованские травы', amount: 3, unit: 'г' }
        ]
    },
    {
        id: 'Saukele',
        name: 'Сәукеле',
        category: 'Тамақтар',
        ingredients: [
            { name: 'Молоко 3,2%', amount: 250, unit: 'г' },
            { name: 'Жайлау сливочное масло 72', amount: 100, unit: 'г' },
            { name: 'Дрож', amount: 7, unit: 'г' },
            { name: 'Яйцо', amount: 2, unit: 'шт' },
            { name: 'Сахар', amount: 20, unit: 'г' },
            { name: 'Соль', amount: 10, unit: 'г' },
            { name: 'Мука', amount: 800, unit: 'г' },
            { name: 'Белый кунжут', amount: 20, unit: 'г' },
            { name: 'Черный кунжут', amount: 20, unit: 'г' }
        ]
    },
    {
        id: 'beshbarmak',
        name: 'Бесбармақ',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Ет', amount: null, unit: null},
            {name: 'Жайма', amount: 1, unit: 'шт'},
            {name: 'Яйцо', amount: 2, unit: 'шт'},
            {name: 'Мука дани нан', amount: 250, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'},
            {name: 'Пияз', amount: 300, unit: 'г'},
            {name: 'Черный перец', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'sirne_manty',
        name: 'Сірне с манты розочкой',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Мясо баранина', amount: 2500, unit: 'г'},
            {name: 'Пияз', amount: 350, unit: 'г'},
            {name: 'Морковь', amount: 300, unit: 'г'},
            {name: 'Сладкий перец красный', amount: 200, unit: 'г'},
            {name: 'Растительное масло', amount: 200, unit: 'г'},
            {name: 'Картоп', amount: 1500, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Мука', amount: 200, unit: 'г'},
            {name: 'Соль', amount: 20, unit: 'г'},
            {name: 'Черный перец', amount: 5, unit: 'г'},
            {name: 'Паприка', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'taikuyrdak',
        name: 'Тайқуырдақ',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Мякоть конина', amount: 2000, unit: 'г'},
            {name: 'Пияз', amount: 500, unit: 'г'},
            {name: 'Картоп', amount: 1000, unit: 'г'},
            {name: 'Тыква', amount: 1000, unit: 'г'},
            {name: 'Растительное масло', amount: 200, unit: 'г'},
            {name: 'Соль', amount: 25, unit: 'г'},
            {name: 'Перец черный', amount: 5, unit: 'г'},
            {name: 'Паприка', amount: 5, unit: 'г'},
            {name: 'Зеленый лук', amount: 50, unit: 'г'},
            {name: 'Красный лук', amount: 150, unit: 'г'}
        ]
    },
    {
        id: 'manty',
        name: 'Манты (2 поз. на 10 персон)',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Фарш', amount: 1000, unit: 'г'},
            {name: 'Лук', amount: 1000, unit: 'г'},
            {name: 'Соль', amount: 25, unit: 'г'},
            {name: 'Черный перец', amount: 5, unit: 'г'},
            {name: 'Растительное масло', amount: 100, unit: 'г'},
            {name: 'Мука', amount: 500, unit: 'г'},
            {name: 'Яйцо', amount: 2, unit: 'шт'}
        ]
    },
    {
        id: 'farsh_perets',
        name: 'Фаршированный перец',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Перец местный красный', amount: 10, unit: 'шт'},
            {name: 'Рис', amount: 200, unit: 'г'},
            {name: 'Пияз', amount: 500, unit: 'г'},
            {name: 'Фарш', amount: 500, unit: 'г'},
            {name: 'Соль', amount: 25, unit: 'г'},
            {name: 'Черный перец', amount: 5, unit: 'г'},
            {name: 'Растительное масло', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'dapandzhe',
        name: 'Дапандже',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Курица Алель', amount: 2000, unit: 'г'},
            {name: 'Полугоркий перец', amount: 300, unit: 'г'},
            {name: 'Лук', amount: 300, unit: 'г'},
            {name: 'Картоп', amount: 1000, unit: 'г'},
            {name: 'Рис', amount: 200, unit: 'г'},
            {name: 'Спецы для дапандже', amount: 20, unit: 'г'},
            {name: 'Соль', amount: 25, unit: 'г'},
            {name: 'Сахар', amount: 25, unit: 'г'},
            {name: 'Зеленый лук', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'cheese_plate',
        name: 'Сырная тарелка',
        category: 'Закуски',
        ingredients: [
            {name: 'Мёд', amount: 50, unit: 'г'},
            {name: 'Грецкие орехи', amount: 30, unit: 'г'},
            {name: 'Клубника', amount: 3, unit: 'шт'},
            {name: 'Смородина', amount: 2, unit: 'ветки'},
            {name: 'Виноград', amount: 150, unit: 'г'},
            {name: 'Микрозелень горох', amount: null, unit: ''},
            {name: 'Печенье тук', amount: null, unit: ''},
            {name: 'Сыр Мраморный', amount: 80, unit: 'г'},
            {name: 'Сыр с базиликом', amount: 80, unit: 'г'},
            {name: 'Комомбер сыр', amount: 80, unit: 'г'},
            {name: 'Сыр Гауда с большими дырками', amount: 80, unit: 'г'},
            {name: 'Сыр чечел', amount: 80, unit: 'г'}
        ]
    },
    {
        id: 'caucasus_plate',
        name: 'Кавказская нарезка',
        category: 'Закуски',
        ingredients: [
            {name: 'Редиска', amount: 100, unit: 'г'},
            {name: 'Помидоры', amount: 150, unit: 'г'},
            {name: 'Огурцы', amount: 150, unit: 'г'},
            {name: 'Сыр Брынза', amount: 120, unit: 'г'},
            {name: 'Сладкий перец красный', amount: 60, unit: 'г'},
            {name: 'Сладкий перец жёлтый', amount: 60, unit: 'г'},
            {name: 'Укроп', amount: 10, unit: 'г'},
            {name: 'Зелёный лук', amount: 30, unit: 'г'},
            {name: 'Лола роса', amount: 100, unit: 'г'},
            {name: 'Листья салата', amount: 100, unit: 'г'},
            {name: 'Маслины', amount: 50, unit: 'г'},
            {name: 'Оливки', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'eggplant_rolls',
        name: 'Роллы из баклажан и кабачков',
        category: 'Закуски',
        ingredients: [
            {name: 'Баклажан', amount: 1, unit: 'шт'},
            {name: 'Кабачки', amount: 1, unit: 'шт'},
            {name: 'Сыр Фетакса', amount: 50, unit: 'г'},
            {name: 'Соус Песто', amount: 20, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Корейские сухари Каниширо', amount: 50, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Мука', amount: 100, unit: 'г'},
            {name: 'Растительное масло', amount: 100, unit: 'г'},
            {name: 'Лола роса', amount: 50, unit: 'г'},
            {name: 'Листья салата', amount: 50, unit: 'г'},
            {name: 'Бальзамический крем', amount: 20, unit: 'г'},
            {name: 'Пергамент', amount: null, unit: ''}
        ]
    },
    {
        id: 'baked_pumpkin',
        name: 'Запечённая тыква с сыром страчателла',
        category: 'Горячие блюда',
        ingredients: [
            {name: 'Тыква сладкий', amount: 500, unit: 'г'},
            {name: 'Гранат', amount: 40, unit: 'г'},
            {name: 'Сыр Страчателла', amount: 150, unit: 'г'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'},
            {name: 'Мёд', amount: 30, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Оливковое масло', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'shrimp_skewers',
        name: 'Креветки на шпажках в соусе манго',
        category: 'Горячие блюда',
        ingredients: [
            {name: 'Соус Арой Д', amount: 50, unit: 'г'},
            {name: 'Креветки королевские очищенные', amount: 500, unit: 'г'},
            {name: 'Лимон', amount: 1, unit: 'шт'},
            {name: 'Редиска', amount: 50, unit: 'г'},
            {name: 'Бамбуковые листья', amount: null, unit: ''},
            {name: 'Горох микрозелень', amount: null, unit: ''},
            {name: 'Паприка', amount: 10, unit: 'г'},
            {name: 'Манго', amount: 0.5, unit: 'шт'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'},
            {name: 'Вегета', amount: 5, unit: 'г'},
            {name: 'Оливковое масло', amount: 50, unit: 'г'},
            {name: 'Пергамент', amount: null, unit: ''},
            {name: 'Лапша фунчуз', amount: null, unit: ''}
        ]
    },
    {
        id: 'eggplant_mozzarella',
        name: 'Баклажан с мини моцареллой и соусом песто',
        category: 'Закуски',
        ingredients: [
            {name: 'Баклажан', amount: 1.5, unit: 'шт'},
            {name: 'Моцарелла Tris', amount: 100, unit: 'г'},
            {name: 'Помидоры', amount: 1.5, unit: 'шт'},
            {name: 'Рукола', amount: 50, unit: 'г'},
            {name: 'Соус песто', amount: 20, unit: 'г'},
            {name: 'Бальзамический крем', amount: 20, unit: 'г'},
            {name: 'Майонез', amount: 50, unit: 'г'},
            {name: 'Чеснок', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Корейские сухари Каниширо', amount: 80, unit: 'г'},
            {name: 'Растительное масло', amount: 100, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Мука', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'asip',
        name: 'Әсіп',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Картажішке жая', amount: 1, unit: 'метр'},
            {name: 'Рис', amount: 100, unit: 'г'},
            {name: 'Фарш', amount: 500, unit: 'г'},
            {name: 'Говяжье сердце', amount: 200, unit: 'г'},
            {name: 'Лук', amount: 300, unit: 'г'},
            {name: 'Соль', amount: 10, unit: 'г'},
            {name: 'Перец чёрный', amount: 5, unit: 'г'},
            {name: 'Томатный сок', amount: 200, unit: 'г'},
            {name: 'Полугорький перец', amount: 1, unit: 'шт'},
            {name: 'Кинза', amount: 5, unit: 'г'},
            {name: 'Зелёный лук', amount: 5, unit: 'г'},
            {name: 'Помидор', amount: 1, unit: 'шт'},
            {name: 'Кудрявая петрушка', amount: 80, unit: 'г'},
            {name: 'Черри на ветках', amount: 250, unit: 'г'},
            {name: 'Салатные листья', amount: 250, unit: 'г'}
        ]
    },
    {
        id: 'chicken_roll',
        name: 'Куриный рулет',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Куриное филе', amount: 500, unit: 'г'},
            {name: 'Чёрный перец', amount: 3, unit: 'г'},
            {name: 'Соль', amount: 10, unit: 'г'},
            {name: 'Паприка', amount: 10, unit: 'г'},
            {name: 'Приправа для курицы', amount: 8, unit: 'г'},
            {name: 'Колбасный сыр', amount: 120, unit: 'г'},
            {name: 'Шпинат', amount: 30, unit: 'г'},
            {name: 'Пергамент', amount: null, unit: ''},
            {name: 'Кудрявая петрушка', amount: 40, unit: 'г'},
            {name: 'Бальзамический крем', amount: 20, unit: 'г'}
        ]
    },
    {
        id: 'spinach_roll',
        name: 'Шпинатный рулет',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Шпинат', amount: 400, unit: 'г'},
            {name: 'Яйцо', amount: 3, unit: 'шт'},
            {name: 'Мука', amount: 50, unit: 'г'},
            {name: 'Картофельный крахмал', amount: 20, unit: 'г'},
            {name: 'Растительное масло', amount: 50, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Сёмга малосолёная', amount: 200, unit: 'г'},
            {name: 'Творожный сыр', amount: 200, unit: 'г'},
            {name: 'Пергамент', amount: null, unit: ''},
            {name: 'Кабачик', amount: 1, unit: 'шт'}
        ]
    },
    {
        id: 'cheese_roll',
        name: 'Сырный рулет',
        category: 'Закуски',
        ingredients: [
            {name: 'Сыр Комо Кантри', amount: 250, unit: 'г'},
            {name: 'Сметана 20%', amount: 250, unit: 'г'},
            {name: 'Мука', amount: 100, unit: 'г'},
            {name: 'Яйцо', amount: 3, unit: 'шт'},
            {name: 'Куриное филе', amount: 350, unit: 'г'},
            {name: 'Майонез', amount: 100, unit: 'г'},
            {name: 'Укроп', amount: 20, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'}
        ]
    },
    {
        id: 'zander_rose',
        name: 'Розочка из филе судака',
        category: 'Закуски',
        ingredients: [
            {name: 'Филе судака 25 см', amount: 5, unit: 'шт'},
            {name: 'Горох замороженный', amount: 20, unit: 'г'},
            {name: 'Бамбуковые листья', amount: null, unit: ''},
            {name: 'Сладкий перец красный', amount: 100, unit: 'г'},
            {name: 'Сладкий перец жёлтый', amount: 100, unit: 'г'},
            {name: 'Лук', amount: 100, unit: 'г'},
            {name: 'Кабачки', amount: 100, unit: 'г'},
            {name: 'Паприка', amount: 10, unit: 'г'},
            {name: 'Вегета', amount: 10, unit: 'г'},
            {name: 'Приправа для рыбы', amount: 3, unit: 'г'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'},
            {name: 'Растительное масло', amount: 50, unit: 'г'},
            {name: 'Микрозелень горох', amount: null, unit: ''}
        ]
    },
    {
        id: 'shrimp_mushrooms',
        name: 'Грибы с креветками',
        category: 'Закуски',
        ingredients: [
            {name: 'Креветки королевские очищенные', amount: 10, unit: 'шт'},
            {name: 'Шампиньоны самые крупные', amount: 10, unit: 'шт'},
            {name: 'Тимьян', amount: 2, unit: 'г'},
            {name: 'Сливки', amount: 50, unit: 'г'},
            {name: 'Соус терияки', amount: 20, unit: 'г'},
            {name: 'Сыр пармезан', amount: 20, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Перец чёрный', amount: 2, unit: 'г'},
            {name: 'Микрозелень горох', amount: null, unit: ''}
        ]
    },
    {
        id: 'mackerel_shashlik',
        name: 'Шашлык из скумбрии',
        category: 'Горячие блюда',
        ingredients: [
            {name: 'Свежая скумбрия', amount: 1, unit: 'шт'},
            {name: 'Шпажка — 20 см', amount: null, unit: ''},
            {name: 'Яблоко', amount: 0.5, unit: 'шт'},
            {name: 'Апельсин', amount: 0.5, unit: 'шт'},
            {name: 'Оливковое масло', amount: 30, unit: 'г'},
            {name: 'Перец чёрный', amount: 2, unit: 'г'},
            {name: 'Прованские травы', amount: 1, unit: 'г'},
            {name: 'Чеснок', amount: 3, unit: 'г'},
            {name: 'Растительное масло', amount: 30, unit: 'г'},
            {name: 'Соевый соус', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'},
            {name: 'Листья салата', amount: 80, unit: 'г'},
            {name: 'Микрозелень горох', amount: null, unit: ''},
            {name: 'Гранат', amount: 40, unit: 'г'}
        ]
    },
    {
        id: 'duck_mustard_honey',
        name: 'Утка в медово-горчичном соусе',
        category: 'Горячие блюда',
        ingredients: [
            {name: 'Утка', amount: 1, unit: 'шт'},
            {name: 'Апельсин', amount: 3, unit: 'шт'},
            {name: 'Крахмал картофельный', amount: 20, unit: 'г'},
            {name: 'Соевый соус', amount: 20, unit: 'г'},
            {name: 'Соль', amount: 50, unit: 'г'},
            {name: 'Сахар', amount: 50, unit: 'г'},
            {name: 'Паприка', amount: 15, unit: 'г'},
            {name: 'Чёрный перец', amount: 5, unit: 'г'},
            {name: 'Кардамон', amount: 3, unit: 'г'},
            {name: 'Сливочное масло', amount: 100, unit: 'г'},
            {name: 'Чеснок', amount: 5, unit: 'г'},
            {name: 'Мёд', amount: 50, unit: 'г'},
            {name: 'Зелёное яблоко', amount: 3, unit: 'шт'},
            {name: 'Салатные листья', amount: 80, unit: 'г'},
            {name: 'Кудрявая петрушка', amount: 50, unit: 'г'},
            {name: 'Черри на ветке', amount: 200, unit: 'г'},
            {name: 'Пергамент', amount: null, unit: ''},
            {name: 'Паклон', amount: null, unit: ''},
            {name: 'Фольга', amount: null, unit: ''}
        ]
    },
    {
        id: 'dolma',
        name: 'Долма',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Говяжий фарш', amount: 1000, unit: 'г'},
            {name: 'Лук репчатый', amount: 600, unit: 'г'},
            {name: 'Чеснок', amount: 20, unit: 'г'},
            {name: 'Готовый рис', amount: 200, unit: 'г'},
            {name: 'Соль', amount: 15, unit: 'г'},
            {name: 'Чёрный перец', amount: 3, unit: 'г'},
            {name: 'Паприка', amount: 10, unit: 'г'},
            {name: 'Кинза', amount: 20, unit: 'г'},
            {name: 'Растительное масло', amount: 80, unit: 'г'},
            {name: 'Листья винограда', amount: 1, unit: 'л'},
            {name: 'Кудрявая петрушка', amount: 60, unit: 'г'},
            {name: 'Помидоры черри', amount: 150, unit: 'г'},
            {name: 'Сметана 20%', amount: 100, unit: 'г'},
            {name: 'Кефир 2,5%', amount: 200, unit: 'г'},
            {name: 'Укроп', amount: 20, unit: 'г'},
            {name: 'Чеснок (соус)', amount: 3, unit: 'г'},
            {name: 'Гранат', amount: 150, unit: 'г'}
        ]
    },
    {
        id: 'chicken_assorti',
        name: 'Куриное ассорти',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Картофельные шарики', amount: 150, unit: 'г'},
            {name: 'Мандарин', amount: 1, unit: 'шт'},
            {name: 'Листья салата', amount: 80, unit: 'г'},
            {name: 'Лола роса', amount: 40, unit: 'г'},
            {name: 'Кудрявая петрушка', amount: 40, unit: 'г'},
            {name: 'Голень', amount: 1, unit: 'шт'},
            {name: 'Крылышки', amount: 6, unit: 'шт'},
            {name: 'Апельсин', amount: 0.5, unit: 'шт'},
            {name: 'Приправа для шашлыка', amount: 3, unit: 'г'},
            {name: 'Вегета', amount: 3, unit: 'г'},
            {name: 'Паприка', amount: 3, unit: 'г'},
            {name: 'Мёд', amount: 5, unit: 'г'},
            {name: 'Майонез', amount: 15, unit: 'г'},
            {name: 'Кетчуп', amount: 15, unit: 'г'},
            {name: 'Чеснок', amount: 5, unit: 'г'},
            {name: 'Растительное масло', amount: 100, unit: 'г'}
        ]
    },
    {
        id: 'quail_kfc',
        name: 'Перепёлка и KFC',
        category: 'Тамақтар',
        ingredients: [
            // KFC часть
            {name: 'Крылышки', amount: 5, unit: 'шт'},
            {name: 'Темпурная мука', amount: 100, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Мука', amount: 100, unit: 'г'},
            {name: 'Растительное масло', amount: 150, unit: 'г'},
            // Перепёлка часть
            {name: 'Перепёлка (350 г)', amount: 2.5, unit: 'шт'},
            {name: 'Сок апельсина', amount: 250, unit: 'г'},
            {name: 'Тимьян свежий', amount: 3, unit: 'г'},
            {name: 'Паприка', amount: 5, unit: 'г'},
            {name: 'Специи для курицы', amount: 5, unit: 'г'},
            {name: 'Мёд', amount: 5, unit: 'г'},
            {name: 'Пергамент', amount: null, unit: ''},
            {name: 'Фольга', amount: null, unit: ''},
            {name: 'Картофельные шарики', amount: 150, unit: 'г'},
            {name: 'Смородина свежая', amount: 2, unit: 'ветки'},
            {name: 'Салатные листья', amount: 100, unit: 'г'},
            {name: 'Кудряшка', amount: 40, unit: 'г'}
        ]
    },
    {
        id: 'kfc_shariki',
        name: 'KFC и куриные шарики',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Крылышки', amount: 5, unit: 'шт'},
            {name: 'Темпурная мука', amount: 100, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Чёрный перец', amount: 1, unit: 'г'},
            {name: 'Соль', amount: 3, unit: 'г'},
            {name: 'Мука', amount: 100, unit: 'г'},
            {name: 'Растительное масло', amount: 150, unit: 'г'},
            {name: 'Голень', amount: 3, unit: 'шт'},
            {name: 'Картошка', amount: 100, unit: 'г'},
            {name: 'Сыр Комо Кантри', amount: 30, unit: 'г'},
            {name: 'Каниширо корейские сухари', amount: 50, unit: 'г'},
            {name: 'Шпажки бамбуковые', amount: 6, unit: 'шт'},
            {name: 'Листья салата', amount: 80, unit: 'г'},
            {name: 'Микрозелень горох', amount: null, unit: null}
        ]
    },
    {
        id: 'kornishon_shashlyk',
        name: 'Корнишоны и куриный шашлык',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Цыплёнок корнишон', amount: 1, unit: 'шт'},
            {name: 'Куриное филе', amount: 600, unit: 'г'},
            {name: 'Сладкий перец жёлтый', amount: 60, unit: 'г'},
            {name: 'Сладкий перец красный', amount: 60, unit: 'г'},
            {name: 'Сладкий перец зелёный', amount: 60, unit: 'г'},
            {name: 'Смородина', amount: 2, unit: 'ветки'},
            {name: 'Черри на ветке', amount: 200, unit: 'г'},
            {name: 'Апельсин', amount: 0.5, unit: 'шт'},
            {name: 'Приправа для шашлыка', amount: 5, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'},
            {name: 'Чёрный перец', amount: 3, unit: 'г'},
            {name: 'Паприка', amount: 5, unit: 'г'},
            {name: 'Тимьян свежий', amount: 3, unit: 'г'},
            {name: 'Сок апельсина', amount: 200, unit: 'г'},
            {name: 'Специи для курицы', amount: 5, unit: 'г'},
            {name: 'Мёд', amount: 5, unit: 'г'},
            {name: 'Пергамент', amount: null, unit: null},
            {name: 'Фольга', amount: null, unit: null}
        ]
    },
    {
        id: 'quail_butter',
        name: 'Перепёлка в сливочном масле',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Перепёлка (350 г)', amount: 3, unit: 'шт'},
            {name: 'Тимьян', amount: 5, unit: 'г'},
            {name: 'Сливочное масло 82%', amount: 100, unit: 'г'},
            {name: 'Чеснок', amount: 2, unit: 'зубчика'},
            {name: 'Соль', amount: 5, unit: 'г'},
            {name: 'Сушёный красный перец', amount: 5, unit: 'г'},
            {name: 'Паприка', amount: 5, unit: 'г'},
            {name: 'Клубника', amount: 3, unit: 'шт'},
            {name: 'Апельсин', amount: 0.5, unit: 'шт'},
            {name: 'Горох микрозелень', amount: null, unit: null}
        ]
    },
    {
        id: 'meat_cut',
        name: 'Мясная нарезка',
        category: 'Салаттар',
        ingredients: [
            {name: 'Казы', amount: 450, unit: 'г'},
            {name: 'Жая', amount: 350, unit: 'г'},
            {name: 'Тіл', amount: 250, unit: 'г'},
            {name: 'Красный перец чили острый', amount: 4, unit: 'шт'},
            {name: 'Сыр Комо Кантри', amount: 70, unit: 'г'},
            {name: 'Горох микрозелень', amount: 20, unit: 'г'},
            {name: 'Листья салата', amount: 80, unit: 'г'},
            {name: 'Лола роса', amount: 50, unit: 'г'}
        ]
    },
    {
        id: 'crispy_fish_shashlyk',
        name: 'Хрустящий судак, сёмга на шпажках с креветками',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Филе судака 25 см', amount: 2.5, unit: 'шт'},
            {name: 'Стейк сёмги 350 г', amount: 1, unit: 'шт'},
            {name: 'Креветки королевские очищенные', amount: 200, unit: 'г'},
            {name: 'Соус свитчили Арой Д', amount: 80, unit: 'г'},
            {name: 'Лимон', amount: 1, unit: 'шт'},
            {name: 'Лайм', amount: 0.5, unit: 'шт'},
            {name: 'Сладкий перец светофор красный', amount: 60, unit: 'г'},
            {name: 'Сладкий перец жёлтый', amount: 60, unit: 'г'},
            {name: 'Сладкий перец зелёный', amount: 60, unit: 'г'},
            {name: 'Яйцо', amount: 1, unit: 'шт'},
            {name: 'Корейские сухари Каниширо', amount: 80, unit: 'г'},
            {name: 'Растительное масло', amount: 100, unit: 'г'},
            {name: 'Приправа для рыбы', amount: 3, unit: 'г'},
            {name: 'Вегета', amount: 3, unit: 'г'},
            {name: 'Паприка', amount: 3, unit: 'г'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'},
            {name: 'Маслины', amount: 30, unit: 'г'},
            {name: 'Смородина свежая', amount: 2, unit: 'ветки'},
            {name: 'Бамбуковые листья', amount: null, unit: null}
        ]
    },
    {
        id: 'fish_cut',
        name: 'Рыбная нарезка',
        category: 'Салаттар',
        ingredients: [
            {name: 'Белая рыба', amount: 150, unit: 'г'},
            {name: 'Красная рыба', amount: 180, unit: 'г'},
            {name: 'Лимон', amount: 0.5, unit: 'шт'},
            {name: 'Лайм', amount: 0.5, unit: 'шт'},
            {name: 'Икра', amount: 40, unit: 'г'},
            {name: 'Творожный сыр', amount: 40, unit: 'г'},
            {name: 'Чёрный хлеб', amount: 0.25, unit: 'шт'},
            {name: 'Маслины', amount: 40, unit: 'г'},
            {name: 'Горох микрозелень', amount: null, unit: null},
            {name: 'Бамбуковые листья', amount: null, unit: null}
        ]
    },
    {
        id: 'fish_platter',
        name: 'Рыбная плато',
        category: 'Салаттар',
        ingredients: [
            {name: 'Скумбрия', amount: 1, unit: 'шт'},
            {name: 'Форель', amount: 1, unit: 'шт'},
            {name: 'Сёмга малосолёная', amount: 180, unit: 'г'},
            {name: 'Белая рыба', amount: 150, unit: 'г'},
            {name: 'Икра', amount: 50, unit: 'г'},
            {name: 'Тарталетки овальные', amount: 6, unit: 'шт'},
            {name: 'Лимон', amount: 1, unit: 'шт'},
            {name: 'Лайм', amount: 0.5, unit: 'шт'},
            {name: 'Черри на ветке', amount: 200, unit: 'г'},
            {name: 'Кудрявая петрушка', amount: 50, unit: 'г'},
            {name: 'Бамбуковые листья', amount: null, unit: null},
            {name: 'Маслины', amount: 30, unit: 'г'},
            {name: 'Приправа для рыбы', amount: 3, unit: 'г'},
            {name: 'Паприка', amount: 3, unit: 'г'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'},
            {name: 'Соль', amount: 5, unit: 'г'}
        ]
    },
    {
        id: 'sweet_sour_pike',
        name: 'Виноградный судак в кисло-сладком соусе',
        category: 'Тамақтар',
        ingredients: [
            {name: 'Соус свитчили Арой Д', amount: 80, unit: 'г'},
            {name: 'Судак свежий 1,2 кг', amount: 1, unit: 'шт'},
            {name: 'Лимон', amount: 0.5, unit: 'шт'},
            {name: 'Лайм', amount: 0.5, unit: 'шт'},
            {name: 'Вегета', amount: 5, unit: 'г'},
            {name: 'Приправа для рыбы', amount: 3, unit: 'г'},
            {name: 'Соль', amount: 10, unit: 'г'},
            {name: 'Растительное масло', amount: 200, unit: 'г'},
            {name: 'Чёрный перец', amount: 2, unit: 'г'},
            {name: 'Темпурная мука', amount: 100, unit: 'г'},
            {name: 'Микрозелень горох', amount: null, unit: null}
        ]
    },
    {
        id: 'caesar_salad',
        name: 'Цезарь',
        category: 'Салаттар',
        ingredients: [
            { name: 'Айсберг капуста', amount: 200, unit: 'гр' },
            { name: 'Куриное филе', amount: 200, unit: 'гр' },
            { name: 'Перепелиные Яйцо', amount: 3, unit: 'шт' },
            { name: 'БагетАсай нан', amount: 30, unit: 'гр' },
            { name: 'Сыр Пармезан', amount: 20, unit: 'гр' },
            { name: 'Черри', amount: 100, unit: 'гр' },
            { name: 'Майонез', amount: 70, unit: 'гр' },
            { name: 'Зернистая горчица', amount: 5, unit: 'гр' },
            { name: 'Вегета универсальная', amount: 10, unit: 'гр' },
            { name: 'Чеснок', amount: 3, unit: 'гр' },
            { name: 'Растительное масло', amount: 20, unit: 'гр' },
            { name: 'Паприка приправич', amount: 3, unit: 'гр' },
            { name: 'Соль', amount: 3, unit: 'гр' }
        ]
    }
];