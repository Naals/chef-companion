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
        "Фарш",
        "Мясо баранины",
        "Қазы",
        "Жая",
        "Тіл (язык)",
        "Печень",
        "Голен",
        "Крылышки",
        "Куриное филе",
        "Курица Алель",
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
        "Мини мацарелло",
        "Сыр весовой мацарелло",
        "Сыр фетакса",
        "Сыр комомбер",
        "Сыр дор - блю",
        "Брынза",
        "Козье сыр (Rondale)",
        "Творожный сыр Креметте",
        "Творг",
        "Маринованные патисоны",
        "Соленный огурцы",
        "Карнишоны",
        "Перец чили зеленый соленый",
        "Сахар",
        "Грецский орех",
        "Праванские травы",
        "Сметана 20%",
        "Жайлау сливочное 72%",
        "Молоко 3,2%",
        "Сливки 33%",
        "Мука(дани нан)",
        "Растительное Масло",
        "Дрож",
        "Соль",
        "Перец чёрный",
        "Перец красный",
        "Кунжут белый",
        "Кунжут черный",
        "Куркума",
        "Мак",
        "Паприка (приправыч)",
        "Универсальная приправа вегета",
        "Спецы для дапандже",
        "Приправа для рыбы",
        "Приправа для шашлыка",
        "Специи для курицы",
        "Специи хмели сунели",
        "Соевый соус",
        "Соус свит-чили(Aroy)",
        "Бальзамический крем",
        "Кристалик",
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
        "Аджика цинказа",
        "Консервированный ананас",
        "Рис",
        "Оливковое масло",
        "Консервированный сайра",
        "Каперсы",
        "Вяленые томаты",
        "Корейские сухари Каниширо Панко",
        "Мед",
        "Лаваш круглый (тонький)",
        "Слоенное тесто",
        "Чипсы принглас",
        "Кукуруза (бандуэль)",
        "Горошек ( бандуэль)",
        "Свежо-замороженый горошек",
        "Маринованные шампиньоны целые",
        "Фасоль консервированная",
        "Долма (листья винограда)",
        "Перепелиные яйцо",
        "Яйцо",
        "Фри",
        "Картошка пай",
        "Картофельные шарики",
        "Оливки",
        "Маслины",
        "Багет аксай нан",
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
        "Тимьян",
        "Бамбуковые листья",
        "Руккола",
        "Мангольд",
        "Микс салата",
        "Микрозелень горох",
        "Зеленый лук",
        "Базилик сушеный",
        "Айсберг капуста",
        "Брокколи",
        "Цветная капуста",
        "Огурцы",
        "Перец цветафор желтый",
        "Перец цветафор красный",
        "Перец цветафор зеленый",
        "Полугоркий перец",
        "Перец местный",
        "Перец стручковый (чили)",
        "Кабачки",
        "Баклажан",
        "Черри",
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
        "Свекло",
        "Красный лук",
        "Шампиньоны самые крупные ",
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
        "Персик",
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
        // Prepare a normalized master order list for case-insensitive matching
        const normalizedOrder = masterIngredientOrder.map(name => name.trim().toLowerCase());

        return ingredients.slice().sort((a, b) => {
            const nameA = a.name.trim().toLowerCase();
            const nameB = b.name.trim().toLowerCase();

            let indexA = normalizedOrder.indexOf(nameA);
            let indexB = normalizedOrder.indexOf(nameB);

            // Push unknown ingredients to the bottom
            if (indexA === -1) indexA = normalizedOrder.length + 1;
            if (indexB === -1) indexB = normalizedOrder.length + 1;

            // If both have the same order index (either same position or both unknown), sort alphabetically
            if (indexA === indexB) {
                return nameA.localeCompare(nameB, 'kk');
            }

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

        const converted = sortedIngredients.map(ing => {
            let { amount, unit } = ing;
            unit = unit.toLowerCase();

            if (unit === 'г' && amount >= 1000) {
                amount = +(amount / 1000).toFixed(2);
                unit = 'кг';
            } else if (unit === 'мл' && amount >= 1000) {
                amount = +(amount / 1000).toFixed(2);
                unit = 'л';
            }

            // Remove trailing .00
            if (Number.isInteger(amount)) amount = amount.toString();

            return { ...ing, amount, unit };
        });

        const half = Math.ceil(converted.length / 2);
        const leftCol = converted.slice(0, half);
        const rightCol = converted.slice(half);

        const tableBody = [];
        tableBody.push([
            { text: '№', style: 'tableHeader', alignment: 'center' },
            { text: 'Атауы', style: 'tableHeader', alignment: 'center' },
            { text: 'Мөлшері', style: 'tableHeader', alignment: 'center' },
            '',
            { text: '№', style: 'tableHeader', alignment: 'center' },
            { text: 'Атауы', style: 'tableHeader', alignment: 'center' },
            { text: 'Мөлшері', style: 'tableHeader', alignment: 'center' }
        ]);

        for (let i = 0; i < half; i++) {
            const left = leftCol[i];
            const right = rightCol[i];

            tableBody.push([
                left ? i + 1 : '',
                left ? left.name : '',
                left ? `${left.amount} ${left.unit}` : '',
                '',
                right ? half + i + 1 : '',
                right ? right.name : '',
                right ? `${right.amount} ${right.unit}` : ''
            ]);
        }

        return {
            content: [
                { text: 'SatuFood - @povar.almaty.zhanat', style: 'header' },
                { text: 'Сатып алу тізімі', style: 'subheader' },
                { text: 'Ингредиенттер:', style: 'section', margin: [0, 10, 0, 4] },
                {
                    table: {
                        widths: [25, '*', 60, 15, 25, '*', 60], // wider cols
                        body: tableBody
                    },
                    layout: {
                        fillColor: (rowIndex) => (rowIndex === 0 ? '#eeeeee' : null),
                        paddingLeft: () => 6,   // more padding
                        paddingRight: () => 6,
                        paddingTop: () => 5,    // taller rows
                        paddingBottom: () => 5
                    }
                }
            ],
            styles: {
                header: { fontSize: 22, bold: true, margin: [0, 0, 0, 14] },
                subheader: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
                section: { fontSize: 15, bold: true, margin: [0, 8, 0, 6] },
                tableHeader: { fontSize: 13, bold: true }
            },
            defaultStyle: {
                font: 'Roboto',
                fontSize: 12 // bigger text in table
            },
            pageSize: 'A4',
            pageOrientation: 'portrait'
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