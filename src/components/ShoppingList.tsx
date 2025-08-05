import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Save, Check, X, Download, Share2, Eye} from "lucide-react";
import {Dish} from "@/data/menu";
import {useState} from "react";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


interface SelectedDish {
    dish: Dish;
    quantity: number;
    servings: number;
    id: string;
}

interface ShoppingListProps {
    selectedDishes: SelectedDish[];
    onSaveList: (name: string, dishes: SelectedDish[]) => void;
}

export function ShoppingList({selectedDishes, onSaveList}: ShoppingListProps) {
    const [listName, setListName] = useState('');
    const [showSaveForm, setShowSaveForm] = useState(false);
    const masterIngredientOrder = [
        "Бесбармаққа ет өз қалауыңызбен",
        "Вырезка конины",
        "Мякоть говядины",
        "Фарш домашний",
        "Мясо баранины",
        "Қазы",
        "Жая",
        "Тіл (язык)",
        "Печень",
        "Голен",
        "Крылышки",
        "Филе куриный",
        "Окорачка капченная",
        "Перепелка",
        "Семга свежая",
        "Семга малосаленная",
        "Белая рыба Эскалар",
        "Скумбрия капченная",
        "Икра",
        "Креветки очищенные королевские",
        "Тарталетка",
        "Сазан свежий",
        "Амур свежий",
        "Карп свежий",
        "Тунец свежий",
        "Судак целый",
        "Филе судака 25 см",
        "Филе судака 15 см",
        "Селедка",
        "Семга целая",
        "Сыр комо Кантри",
        "Сыр сметанковый",
        "Сыр пармезан",
        "Сыр мини мацарелло",
        "Сыр весовой мацарелло",
        "Сыр фетакса",
        "Сыр комомбер",
        "Сыр дор - блю",
        "Брынза",
        "Козье сыр (Rondale)",
        "Творожный сыр сливочный",
        "Творг",
        "Маринованные патисоны",
        "Соленный огурцы",
        "Карнишоны",
        "Перец чили зеленый соленый",
        "Сахар",
        "Грецский орех",
        "Праванские травы",
        "Сметана 20%",
        "Жайлау сливочный 72%",
        "Сүт (молоко) 3,2 %",
        "Сливки 33 %",
        "Мука (дани нан)",
        "Растительное Масло (маслозавод)",
        "Дрожжи",
        "Соль",
        "Перец черный",
        "Перец красный",
        "Кунжут белый",
        "Кунжут черный",
        "Мак",
        "Паприка (приправыч)",
        "Универсальная приправа вегета",
        "Приправа для рыбы",
        "Приправа для шашлыка",
        "Специи для курицы",
        "Соевый соус",
        "Соус свит-чили (Aroy)",
        "Бальзамический крем",
        "Кристалик(китайский соль)",
        "Соус дресинг италиано",
        "Соус песто",
        "Соус для цезаря",
        "Майонез",
        "Кетчуп",
        "Соус терияки",
        "Чим-чим для огурцов",
        "Зернистая горчица",
        "Темпурная мука",
        "Молотый шафран",
        "Смесь для неггетсов",
        "Кедровые орешки",
        "Картофельный крахмал",
        "Кукурузный крахмал",
        "Консервированный ананас",
        "Рис",
        "Оливковое масло",
        "Консервированный сайра",
        "Каперсы",
        "Вяленые томаты",
        "Корейские сухари Каниширо Панко",
        "Мед",
        "Лаваш круглый (тонький)",
        "Слоенное тесто бездрожевое",
        "Чипсы принглас",
        "Кукуруза (бандуэль)",
        "Горошек ( бандуэль)",
        "Свежо-замороженый горошек",
        "Маринованные шампиньоны целые",
        "Фасоль красный",
        "Долма (листья винограда)",
        "Перепелиные яйца",
        "Яйцо",
        "Фри",
        "Картошка пай",
        "Картофельные шарики",
        "Оливки",
        "Маслины",
        "Багет",
        "Сироп махито",
        "Сироп тархун",
        "Сироп гранатовый",
        "Сироп манго-маракуя",
        "Спрайт",
        "Алекс с газом",
        "Томатный сок",
        "Апельсиновый сок",
        "Пергамент паклан",
        "Фальга",
        "Пищевая пленка",
        "Бумажная рулоновые салфетки",
        "Пакет майчка",
        "Шпажка 20 см",
        "Шпажка 6 см",
        "Шпажка для фруктов бисером",
        "Мята",
        "Листья салата",
        "Лола роса",
        "Кинза",
        "Петрушка",
        "Кудрявая петрушка",
        "Укроп",
        "Шпинат",
        "Розмарин свежий",
        "Тимьян свежий",
        "Бамбуковые листья",
        "Руккола",
        "Мангольд",
        "Микс салата",
        "Микрозелень горох",
        "Зеленый лук",
        "Базелик",
        "Айсбег",
        "Брокколи",
        "Цветная капуста",
        "Огурцы",
        "Перец цветафор желтый",
        "Перец цветафор красный",
        "Перец цветафор зеленый",
        "Перец полугорький",
        "Перец местный",
        "Перец стручковый (чили)",
        "Кабачки",
        "Баклажан",
        "Черри красный",
        "Черри красный на ветке",
        "Черри желтый на ветке",
        "Жандо",
        "Помидоры",
        "Розовые помидоры",
        "Чеснок",
        "Редиска",
        "Тыква",
        "Марковь",
        "Лук",
        "Картошка",
        "Свекла",
        "Красный лук",
        "Шампиньоны",
        "Капуста",
        "Имбирь",
        "Авокадо",
        "Ананас аргентина",
        "Грейфрут",
        "Груша",
        "Яблоко",
        "Банан мини",
        "Киви",
        "Апельсин",
        "Мандарин без косточек",
        "Черешня",
        "Клубника",
        "Гранат",
        "Курма",
        "Слива",
        "Красная смородина",
        "Винаград",
        "Абрикос",
        "Манго",
        "Фрукт Дракон (питайя)",
        "Лимон",
        "Лайм"
    ];
    (pdfMake as any).vfs = pdfFonts.vfs;

    const consolidatedIngredients = selectedDishes.reduce((acc, selectedDish) => {
        const {dish, quantity} = selectedDish;

        dish.ingredients.forEach((ingredient) => {
            const key = ingredient.name;
            const ingredientAmount = typeof ingredient.amount === 'number' ? ingredient.amount : Number(ingredient.amount) || 0;
            const totalAmount = ingredientAmount * quantity;

            if (acc[key]) {
                if (typeof acc[key].amount === 'number' && typeof totalAmount === 'number') {
                    acc[key].amount += totalAmount;
                }
            } else {
                acc[key] = {
                    name: ingredient.name,
                    amount: totalAmount,
                    unit: ingredient.unit,
                };
            }
        });

        return acc;
    }, {} as Record<string, { name: string; amount: number | string; unit: string }>);

    const ingredients = Object.values(consolidatedIngredients);

    function sortIngredients(ingredients) {
        return ingredients.slice().sort((a, b) => {
            const indexA = masterIngredientOrder.indexOf(a.name);
            const indexB = masterIngredientOrder.indexOf(b.name);
            return indexA - indexB;
        });
    }

    const handleSaveList = () => {
        if (listName.trim() && selectedDishes.length > 0) {
            onSaveList(listName.trim(), selectedDishes);
            setListName('');
            setShowSaveForm(false);
        }
    };

    const generateDefaultName = () => {
        const now = new Date();
        const date = now.toLocaleDateString('kk-KZ');
        const time = now.toLocaleTimeString('kk-KZ', {hour: '2-digit', minute: '2-digit'});
        return `Тізім ${date} ${time}`;
    };

    function formatAmount(amount: number, unit: string): { amount: string; unit: string } {
        if (unit === "г" && amount >= 1000) {
            const kg = Math.floor(amount / 1000);
            const g = amount % 1000;
            let result = "";
            if (kg > 0) result += `${kg} кг`;
            if (g > 0) result += ` ${g} г`;
            return { amount: result.trim(), unit: "" };
        }
        return { amount: amount.toFixed(0), unit };
    }

    const generateDocDefinition = () => {
        const sortedIngredients = sortIngredients(ingredients);

        const dishList = selectedDishes.map((dish, i) => `${i + 1}. ${dish.dish.name}`);

        // Split ingredients in half
        const half = Math.ceil(sortedIngredients.length / 2);
        const left = sortedIngredients.slice(0, half);
        const right = sortedIngredients.slice(half);

        // Pad right column if needed
        while (right.length < left.length) {
            right.push({ name: '', amount: '', unit: '' });
        }

        const tableBody = [
            [
                { text: '№', bold: true },
                { text: 'Атауы', bold: true },
                { text: 'Мөлшері', bold: true },
                '', // spacer
                { text: '№', bold: true },
                { text: 'Атауы', bold: true },
                { text: 'Мөлшері', bold: true },
            ],
        ];

        for (let i = 0; i < left.length; i++) {
            const leftItem = left[i];
            const rightItem = right[i];

            const format = (item, index) => {
                if (!item.name) return [{ text: '', colSpan: 3 }, {}, {}]; // empty row
                const { amount, unit } = formatAmount(Number(item.amount), item.unit);
                return [
                    { text: `${index + 1}`, alignment: 'center' },
                    item.name,
                    `${amount} ${unit}`
                ];
            };

            tableBody.push([
                ...format(leftItem, i),
                '', // spacer
                ...format(rightItem, i + half),
            ]);
        }

        const content: any[] = [
            { text: 'SatuFood - @povar.almaty.zhanat', style: 'header' },
            { text: 'Сатып алу тізімі', style: 'subheader' },
            { text: 'Таңдалған тағамдар:', style: 'section' },
            ...dishList.map(text => ({ text, margin: [10, 0, 0, 2] })),
            { text: 'Ингредиенттер:', style: 'section', margin: [0, 10, 0, 4] },
            {
                table: {
                    widths: ['auto', '*', 'auto', 10, 'auto', '*', 'auto'],
                    body: tableBody,
                },
                layout: 'lightHorizontalLines',
            },
        ];

        return {
            content,
            styles: {
                header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
                subheader: { fontSize: 14, bold: true, margin: [0, 0, 0, 8] },
                section: { fontSize: 12, bold: true, margin: [0, 8, 0, 4] },
            },
            defaultStyle: {
                font: 'Roboto',
                fontSize: 10,
            },
            pageSize: 'A4',
            pageOrientation: 'portrait',
        };
    };

    const handleDownloadPDF = () => {
        const docDefinition = generateDocDefinition();
        // @ts-ignore
        pdfMake.createPdf(docDefinition).download(`shopping-list-${Date.now()}.pdf`);
    };

    const handleViewPDF = () => {
        const docDefinition = generateDocDefinition();
        // @ts-ignore
        pdfMake.createPdf(docDefinition).open();
    };

    const handleSharePDF = async () => {
        const docDefinition = generateDocDefinition();
        // @ts-ignore
        pdfMake.createPdf(docDefinition).getBlob(async (blob: Blob) => {
            const file = new File([blob], 'shopping-list.pdf', {type: 'application/pdf'});

            if (navigator.share && navigator.canShare({files: [file]})) {
                try {
                    await navigator.share({
                        files: [file],
                        title: 'SatuFood сатып алу тізімі',
                    });
                } catch (error) {
                    console.error('Sharing failed:', error);
                }
            } else {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'shopping-list.pdf';
                link.click();
            }
        });
    };


    if (selectedDishes.length === 0) {
        return (
            <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                    Әзірше ешқандай тағам таңдалмаған
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Сатып алу тізімі</CardTitle>
                {showSaveForm && (
                    <div className="flex gap-2 mt-3">
                        <Input
                            placeholder="Тізім атауы..."
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                            className="flex-1"
                        />
                        <Button onClick={handleSaveList} size="sm">
                            <Check className="h-4 w-4"/>
                        </Button>
                        <Button variant="ghost" onClick={() => setShowSaveForm(false)} size="sm">
                            <X className="h-4 w-4"/>
                        </Button>
                    </div>
                )}
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2">Таңдалған тағамдар:</h3>
                        <div className="space-y-1 text-sm">
                            {selectedDishes.map((item, index) => (
                                <div key={item.id} className="flex justify-between py-1">
                                    <span className="text-sm">{item.dish.name}</span>
                                    <span className="text-sm text-muted-foreground">
                    {item.quantity} позиция
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Жалпы ингредиенттер:</h3>
                        <div className="space-y-1 text-sm max-h-60 overflow-y-auto">
                            {ingredients.map((ingredient, index) => (
                                <div key={index} className="flex justify-between py-1 border-b border-border/50">
                                    <span>{ingredient.name}</span>
                                    <span className="font-medium">
                                          {typeof ingredient.amount === 'number'
                                              ? (() => {
                                                  const {amount, unit} = formatAmount(ingredient.amount, ingredient.unit);
                                                  return `${amount} ${unit}`;
                                              })()
                                              : `${ingredient.amount} ${ingredient.unit}`}
                                        </span>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-4">
                        <Button
                            onClick={() => {
                                if (!showSaveForm) {
                                    setListName(generateDefaultName());
                                }
                                setShowSaveForm(!showSaveForm);
                            }}
                            variant="default"
                            className="flex-1"
                        >
                            <Save className="h-4 w-4 mr-2"/>
                            Сақтау
                        </Button>
                        <Button onClick={handleViewPDF} variant="outline" className="flex-1">
                            <Eye className="h-4 w-4 mr-2"/>
                            Қарау
                        </Button>
                        <Button onClick={handleSharePDF} variant="secondary" className="flex-1">
                            <Share2 className="h-4 w-4 mr-2"/>
                            Бөлісу
                        </Button>
                        <Button onClick={handleDownloadPDF} variant="secondary" className="flex-1">
                            <Download className="h-4 w-4 mr-2"/>
                            Жүктеу
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}