<template>
  <b-container>
    <b-card v-if="isSend">
      <h1>Анкета оценки педагогической деятельности
        стационарных учреждений социального обслуживания для детей-инвалидов
      </h1>
      <b-card-text>
        <b-form>
          <b-list-group>

            <b-list-group-item variant="light">
              <b-row class="mt-3">
                <b-col>
                  <label for="1">Наименование учреждения (полное и сокращенное)</label>
                  <b-form-input id="1" v-model="name" placeholder=""></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Адрес учреждения</h4>
              <b-row>
                <b-col>
                  <label for="2">Cайт</label>
                  <b-form-input id="2"></b-form-input>
                </b-col>
                <b-col>
                  <label for="3">Телефон</label>
                  <b-form-input type="number" id="3"></b-form-input>
                </b-col>
                <b-col>
                  <label for="4">E-mail</label>
                  <b-form-input type="email" id="4"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Тип</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Лицензия:</h4>
              <b-row>
                <b-col>
                  <label for="5">на осуществление медицинской деятельности</label>
                  <b-form-file id="5" placeholder="Ссылка/ текст документа (pdf*)" browse-text="Загрузить"></b-form-file>
                </b-col>
                <b-col>
                  <label for="6">на осуществление образовательной деятельности</label>
                  <b-form-file id="6" placeholder="Ссылка/ текст документа (pdf*)" browse-text="Загрузить"></b-form-file>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <b-row align-v="baseline" class="mt-3">
                <b-col>
                  <label for="7">Год фактического начала предоставления учреждением образовательных услуг</label>
                  <b-form-input id="7" type="number" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="8">Общая численность детей с инвалидностью в текущем году</label>
                  <b-form-input id="8" type="number" placeholder=""></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Укажите наличие в учреждении нормативно-правового обеспечения организации получения образования детьми- инвалидами:</h4>
              <b-row>
                <b-col>
                  <label for="9">Разделы в Уставе учреждения об обучении и воспитании детей с инвалидностью</label>
                  <b-form-file id="9" placeholder="Ссылка/ текст документа (pdf*)" browse-text="Загрузить"></b-form-file>
                </b-col>
                <b-col>
                  <label for="10">Локальные акты по работе с детьми- инвалидами (Положение об итоговой аттестации и др.)</label>
                  <b-form-file id="10" placeholder="Ссылка/ текст документа (pdf*)" browse-text="Загрузить"></b-form-file>
                </b-col>
              </b-row>
              <b-row align-v="baseline" class="mt-3">
                <b-col>
                  <label for="11">Разделы о создании специальных образовательных условий для детей с инвалидностью в Программе развития организации</label>
                  <b-form-file id="11" placeholder="Ссылка/ текст документа (pdf*)" browse-text="Загрузить"></b-form-file>
                </b-col>
                <b-col>
                  <label for="12">Другое</label>
                  <b-form-file id="12" placeholder="Ссылка/ текст документа (pdf*)" browse-text="Загрузить"></b-form-file>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Укажите категории детей с инвалидностью в учреждении, что обусловлено:</h4>
              <b-row>
                <b-col>
                  <label for="12">Нарушением зрения</label>
                  <b-form-input type="number" id="12" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="13">Нарушением слуха</label>
                  <b-form-input type="number" id="13" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="14">Нарушением зрения</label>
                  <b-form-input type="number" id="14" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="15">Нарушением речи</label>
                  <b-form-input type="number" id="15" placeholder=""></b-form-input>
                </b-col>
              </b-row>
              <b-row class="mt-3" align-v="baseline">
                <b-col>
                  <label for="16">Двигательными нарушениями (в том числе ДЦП)</label>
                  <b-form-input id="16" type="number" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="17">Расстройством эмоционально-волевой сферы, в т.ч. аутистического спектра (РАС)</label>
                  <b-form-input id="17" type="number" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="18">Соматическими заболеваниями</label>
                  <b-form-input id="18" type="number" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="19">Иное</label>
                  <b-form-input id="19" placeholder=""></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Укажите количество детей с инвалидностью для обучения в классах:</h4>
              <b-row>
                <b-col><b-form-input size="sm" placeholder="В классах начальной ступени (1-4 кл.)"></b-form-input></b-col>
                <b-col><b-form-input size="sm" placeholder="В классах средней ступени (5-9 кл.)"></b-form-input></b-col>
                <b-col><b-form-input size="sm" placeholder="В классах старшей ступени (10-11 кл.)"></b-form-input></b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Какие формы получения образования имеются в учреждении?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level1"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Все ли дети могут получить образовательные услуги, адекватные их потребностям и возможностям?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level2"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Укажите, какие из следующих специалистов есть в Вашем учреждении (с указанием их числа)?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level3"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Оцените степень укомплектованности Вашего учреждения следующими специалистами:</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level4"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Как Вы сами оцениваете уровень профессиональной подготовки перечисленных специалистов в Вашем учреждении?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level5"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Как Вы сами оцениваете уровень профессиональной подготовки перечисленных специалистов в Вашем учреждении?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level6"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Укажите наличие договоров (соглашений) Вашего учреждения о сотрудничестве с другими организациями/учреждениями в текущем календарном году:</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level7"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Укажите количество педагогических работников в учреждении</h4>
              <b-row>
                <b-col>
                  <label for="11">В штате организации</label>
                  <b-form-input id="11"></b-form-input>
                </b-col>
                <b-col>
                  <label for="12">По договору с образовательными организациями</label>
                  <b-form-input id="12"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Укажите количество медицинских работников в учреждении</h4>
              <b-row>
                <b-col>
                  <label for="13">В штате организации</label>
                  <b-form-input id="13"></b-form-input>
                </b-col>
                <b-col>
                  <label for="14">По договору с учреждениями здравоохранения</label>
                  <b-form-input id="14"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item class="mt-3" variant="light">
              <b-row>
                <b-col>
                  <label for="15">Укажите количество сотрудников, прошедших повышение квалификации/ профессиональную переподготовку по проблемам обучения и воспитания детей с инвалидностью за последние 5 лет</label>
                  <b-form-input id="15"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Укажите наличие условий для осуществления образовательного процесса из следующего списка:</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level8"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Как Вы в целом оцениваете наличие условий для осуществления образовательного процесса в учреждении?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level9"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>









            <b-list-group-item variant="light">
              <h4 class="mt-3">Укажите, что с Вашей точки зрения, может поспособствовать улучшению условий для осуществления образовательного процесса в учреждении?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level1"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Выберите из перечисленных архитектурных условий те, которые имеются в здании Вашего учреждения (укажите все, пожалуйста):</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level2"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">Как Вы в целом оцениваете качество архитектурных условий в здании учреждения?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                Укажите, что с Вашей точки зрения, может поспособствовать улучшению архитектурных условий в Вашем учреждении (возможно несколько вариантов ответа):
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level3"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                Выберите из перечисленного специального оборудования то, которые имеются в здании Вашего учреждения:
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level4"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                Как Вы в целом оцениваете укомплектованность специальным оборудованием Вашего учреждения?
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                Укажите, что с Вашей точки зрения, может поспособствовать улучшению ситуации со специальным оборудованием в учреждении:
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level5"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                Выберите из перечисленных типов специальных дидактических материалов те, которые имеются в здании Вашего учреждения:
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level6"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                Как Вы сами в целом оцениваете наличие специальных дидактических материалов  в  учреждении?
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" :options="level"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                Данные лица, заполнившего анкету:
              </h4>
              <b-row>
                <b-col>
                  <b-form-input class="sm" placeholder="ФИО"></b-form-input>
                </b-col>
                <b-col>
                  <b-form-input class="sm" placeholder="Должность"></b-form-input>
                </b-col>
                <b-col>
                  <b-form-input class="sm" placeholder="Контактные телефоны (е-mail, телефон)"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                Актуальные проблемы деятельности учреждения
              </h4>
              <b-row>
                <b-col>
                  <b-form-textarea
                    id="textarea"
                    placeholder="Можете здесь написать..."
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </b-form>
      </b-card-text>
      <b-button type="submit" @click="send" variant="primary">Отправить</b-button>
    </b-card>
    <b-card v-else body-class="text-center">
      <b-card-text>
        <h1>Спасибо за участие!</h1>
      </b-card-text>
    </b-card>
  </b-container>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data() {
    return {
      isSend: true,
      name: '',
      level: [
        {
          value: 'a',
          text: 'Казенное'
        },
        {
          value: 'b',
          text: 'Бюджетное'
        }
      ],
      level1: [
        {
          text: 'Экстернат'
        },
        {
          text: 'Дистанционное обучение'
        },
        {
          text: 'Обучение на базе образовательной организации'
        },
        {
          text: 'Другое (укажите)'
        }
      ],
      level2: [
        {
          text: 'Да'
        },
        {
          text: 'Нет'
        }
      ],
      level3: [
        {
          text: 'Педагог-психолог'
        },
        {
          text: 'Учитель-логопед'
        },
        {
          text: 'Учитель-дефектолог'
        },
        {
          text: 'Сурдопедагог'
        },
        {
          text: 'Тифлопедагог'
        },
        {
          text: 'Социальный педагог'
        },
        {
          text: 'Инструктор ЛФК (адаптивной физкультуры)'
        },
        {
          text: 'Медицинский работник'
        },
        {
          text: 'Тьютор'
        },
        {
          text: 'Нет перечисленных специалистов в учреждении'
        },

      ],
      level4: [
        {
          text: 'У нас нет острой потребности в перечисленных специалистах'
        },
        {
          text: 'Ощущается нехватка специалистов'
        },
        {
          text: 'Наблюдается острая нехватка следующих специалистов'
        },
        {
          text: 'Педагог-психолог'
        },
        {
          text: 'Учитель–логопед'
        },
        {
          text: 'Сурдопедагог'
        },
        {
          text: 'Тифлопедагог'
        },
        {
          text: 'Социальный педагог'
        },
        {
          text: 'Инструктор ЛФК (адаптивной физкультуры)'
        },
        {
          text: 'Медицинский работник'
        },
        {
          text: 'Тьютор'
        },
        {
          text: 'Другое (укажите)'
        }
      ],
      level5: [
        {
          text: 'Неудовлетворительно'
        },
        {
          text: 'Удовлетворительно'
        },
        {
          text: 'Хорошо'
        },
        {
          text: 'Отлично'
        },
      ],
      level6: [
        {
          text: 'Смена ответственных за некоторые сферы образовательного процесса в учреждении'
        },
        {
          text: 'Увеличение бюджет'
        },
        {
          text: 'Ремонт/обновление материально-технического фонда'
        },
        {
          text: 'Увеличение количества педагогического состава'
        },
        {
          text: 'Увеличение количества медицинского персонала'
        },
        {
          text: 'Повышение квалификации сотрудников учреждения'
        },
        {
          text: 'Другое (укажите)'
        }
      ],
      level7: [
        {
          text: 'С дошкольными образовательными организациями'
        },
        {
          text: 'С учреждениями для детей, нуждающихся в психолого-педагогической и медико-социальной помощи (ППМС-центры)'
        },
        {
          text: 'С учреждениями дополнительного образования'
        },
        {
          text: 'С общественными организациями'
        },
        {
          text: 'С другими специальными (коррекционными) образовательными учреждениями'
        },
        {
          text: 'С учреждениями здравоохранения'
        },
        {
          text: 'С некоммерческими организациями'
        }
      ],
      level8: [
        {
          text: 'Помещения для внеурочной деятельности'
        },
        {
          text: 'Кабинет психолога'
        },
        {
          text: 'Кабинет логопеда'
        },
        {
          text: 'Сенсорная комната'
        },
        {
          text: 'Физкультурный зал'
        }
      ],
      level9: [
        {
          text: 'Неудовлетворительно'
        },
        {
          text: 'Удовлетворительно'
        },
        {
          text: 'Хорошо'
        },
        {
          text: 'Отлично'
        }
      ],








      level77: [
        {
          text: 'Пандус для входа в учреждение'
        },
        {
          text: 'Съезды с тротуаров на территории учреждения'
        },
        {
          text: 'Пандусы внутри здания'
        },
        {
          text: 'Лифт/ подъемная платформа/ступенькоход'
        },
        {
          text: 'Тактильная дорожка в коридоре'
        },
        {
          text: 'Широкие дверные проемы в помещениях'
        },
        {
          text: 'Разноуровневые перила'
        },
        {
          text: 'Специальное покрытие пола, нескользкое для опорной части костылей или тростей'
        },
        {
          text: 'Специально оборудованное санитарно-гигиеническое помещение'
        },
        {
          text: 'Возможность въезда личного автотранспорта для родителей ребенка с ДЦП на территорию образовательного учреждения'
        },
        {
          text: 'Специально выделенные места на ближайшей парковке для транспорта людей с инвалидностью'
        },
        {
          text: 'Нет перечисленных условий'
        },
        {
          text: 'Другое (укажите)'
        }

      ],
      level87: [
        {
          text: 'Восполнение недостающих типов архитектурных условий'
        },
        {
          text: 'Обновление/ремонт имеющегося архитектурного фонда'
        },
        {
          text: 'Другое (укажите)'
        }
      ],
      level97: [
        {
          text: 'Таблички с названиями кабинетов по Брайлю'
        },
        {
          text: 'Наличие средств звуковой и визуальной сигнализации:'
        },
        {
          text: 'Табло «Бегущая строка», «Ревун», громкая связь'
        },
        {
          text: 'Световая индикация начала и конца урока'
        },
        {
          text: 'Мультимедийная система (интерактивная доска, проектор)'
        },
        {
          text: 'Компьютер, доступ к сети-интернет'
        },
        {
          text: 'FM-системы для индивидуальной и групповой работы'
        },
        {
          text: 'Кресло-коляска'
        },
        {
          text: 'Трость'
        },
        {
          text: 'Опоры'
        },
        {
          text: 'Подъемники'
        },
        {
          text: 'Специальные столовые принадлежности для детей с ДЦП (вилка, ложка, тарелка с присоской, чашка с присоской)'
        },
        {
          text: 'Специальная парта (стол) с выемкой и регулируемой высотой'
        },
        {
          text: 'Специальный стул на колесах и высокой спинкой'
        },
        {
          text: 'Выделенные столы в аудиториях, к которым можно свободно подъехать на коляске'
        },
        {
          text: 'Вертикализаторы'
        },
        {
          text: 'Средства для альтернативной коммуникации (планшеты)'
        },
        {
          text: 'Специальное кресло с головодержателем для детей с ДЦП'
        },
        {
          text: 'Подлокотник для детей с ДЦП'
        },
        {
          text: 'Специальная компьютерная клавиатура с крупными кнопками'
        },
        {
          text: 'Специальный джойстик для компьютера для детей с ДЦП'
        },
        {
          text: 'Специально оборудованные для детей с инвалидностью мастерские, лаборатории'
        },
        {
          text: 'Специально оборудованный зал ЛФК (тренажерный зал)'
        },
        {
          text: 'Компьютерная техника с возможностью работы на шрифте Брайля'
        },
        {
          text: 'Специальное оборудование для глухих детей'
        },
        {
          text: 'Специальное оборудование для слабослышащих детей'
        },
        {
          text: 'Специальное оборудование физкультурно-спортивных площадок и площадок для подвижных игр и отдыха'
        },
        {
          text: 'Нет перечисленного оборудования в наличии'
        }


      ],
      level107: [
        {
          text: 'Восполнение недостающего оборудования.'
        },
        {
          text: 'Обновление/ремонт имеющегося оборудования'
        },
        {
          text: 'Другое (укажите)'
        }
      ],
      level117: [
        {
          text: 'Учебно-методические комплекты по реализуемым программам'
        },
        {
          text: 'Учебная литература на рельефно-точечном шрифте Брайля'
        },
        {
          text: 'Учебники и учебные пособия с увеличенным размером шрифта для слабовидящи'
        },
        {
          text: 'Аудиоучебники, художественная литература'
        },
        {
          text: 'Электронные варианты учебников и пособий'
        },
        {
          text: 'Библиотека, специализированная художественная и развиваюшая литература, в т.ч. в оцифрованном формате'
        },
        {
          text: 'Нет в наличии специальных дидактических материалов'
        }
      ]
    }
  },
  methods: {
    send() {
      if(!this.name) {
        alert('пожалуйста заполните данные')
        return
      }
      this.isSend = false
    }
  }
}
</script>
