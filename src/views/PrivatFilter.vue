<template>
  <b-container>
    <b-card v-if="isSend">
      <h1>Анкета оценки педагогической деятельности
        стационарных учреждений социального обслуживания для детей-инвалидов
      </h1>
      <b-card-text>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-list-group>

            <b-list-group-item variant="light">
              <b-row class="mt-3">
                <b-col>
                  <label for="1">Наименование учреждения (полное и сокращенное)</label>
                  <b-form-input id="1" v-model="form.name" placeholder=""></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3" v-model="form.addres">Адрес учреждения</h4>
              <b-row>
                <b-col>
                  <label for="2">Cайт</label>
                  <b-form-input id="2" v-model="form.site"></b-form-input>
                </b-col>
                <b-col>
                  <label for="3">Телефон</label>
                  <b-form-input type="number" v-model="form.phone" id="3"></b-form-input>
                </b-col>
                <b-col>
                  <label for="4">E-mail</label>
                  <b-form-input type="email" v-model="form.email"  id="4"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3" >Тип</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" v-model="form.type" :options="level"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>


            <b-list-group-item variant="light">
              <b-row align-v="baseline" class="mt-3">
                <b-col>
                  <label for="7">Год фактического начала предоставления учреждением образовательных услуг</label>
                  <b-form-input id="7" v-model="form.year"  type="number" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="8">Общая численность детей с инвалидностью в текущем году</label>
                  <b-form-input id="8" v-model="form.kidcount"  type="number" placeholder=""></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">8.Укажите категории детей с инвалидностью в учреждении, что обусловлено:</h4>
              <b-row>
                <b-col>
                  <label for="12">Нарушением зрения</label>
                  <b-form-input type="number" v-model="form.zreniya"  id="12" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="13">Нарушением слуха</label>
                  <b-form-input type="number" v-model="form.slukha" id="13" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="14">Нарушением интеллекта</label>
                  <b-form-input type="number" v-model="form.intellekta" id="14" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="15">Нарушением речи</label>
                  <b-form-input type="number" v-model="form.rechi" id="15" placeholder=""></b-form-input>
                </b-col>
              </b-row>
              <b-row class="mt-3" align-v="baseline">
                <b-col>
                  <label for="16">Двигательными нарушениями (в том числе ДЦП)</label>
                  <b-form-input id="16" type="number" v-model="form.cerebral" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="17">Расстройством эмоционально-волевой сферы, в т.ч. аутистического спектра (РАС)</label>
                  <b-form-input id="17" type="number" v-model="form.ras" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="18">Соматическими заболеваниями</label>
                  <b-form-input id="18" type="number" v-model="form.somaticheski" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="19">Иное</label>
                  <b-form-input id="19" v-model="form.inoje" placeholder=""></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">9.Укажите количество детей с инвалидностью для обучения в классах:</h4>
              <b-row>
                <b-col>
                  <label for="20">В классах начальной ступени (1-4 кл.)</label>
                  <b-form-input type="number" v-model="form.stupeni14" id="20" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="21">В классах средней ступени (5-9 кл.)</label>
                  <b-form-input type="number" id="21" v-model="form.stupeni59" placeholder=""></b-form-input>
                </b-col>
                <b-col>
                  <label for="22">В классах старшей ступени (10-11 кл.)</label>
                  <b-form-input type="number" id="22" v-model="form.stupeni1011" placeholder=""></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">10.Какие формы получения образования имеются в учреждении?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" v-model="form.level1" :options="level1"></b-form-select>
                </b-col>
              </b-row>
              <b-row class="mt-3" v-if="form1 === 'a'">
                <b-col>
                  <b-form-textarea></b-form-textarea>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">11.Все ли дети могут получить образовательные услуги, адекватные их потребностям и возможностям?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" v-model="form.level2" :options="level2"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">12.1 Укажите, какие из следующих специалистов есть в Вашем учреждении (с указанием их числа)?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" v-model="form.level3" :options="level3"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">12.2 Оцените степень укомплектованности Вашего учреждения следующими специалистами:</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type23" v-model="form.level4" :options="level4"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">12.3 Как Вы сами оцениваете уровень профессиональной подготовки перечисленных специалистов в Вашем учреждении?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type" v-model="form.level5" :options="level5"></b-form-select>
                </b-col>
              </b-row>

            </b-list-group-item>


            <b-list-group-item variant="light">
              <h4 class="mt-3">13.1 Укажите наличие договоров (соглашений) Вашего учреждения о сотрудничестве с другими организациями/учреждениями в текущем календарном году:</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type2" v-model="form.level7" :options="level7"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">13.2 В договорах с какими из перечисленных выше учреждениями есть наибольшая потребность?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type1" v-model="form.level6" :options="level6"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">14 Укажите количество педагогических работников в учреждении</h4>
              <b-row>
                <b-col>
                  <label for="11">В штате организации</label>
                  <b-form-input id="11" type="number" v-model="form.vorganizatsii"></b-form-input>
                </b-col>
                <b-col>
                  <label for="12">По договору с образовательными организациями</label>
                  <b-form-input id="12" type="number" v-model="form.dogovor"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">15 Укажите количество медицинских работников в учреждении</h4>
              <b-row>
                <b-col>
                  <label for="13">В штате организации</label>
                  <b-form-input type="number" v-model="form.medrab" id="13"></b-form-input>
                </b-col>
                <b-col>
                  <label for="14">По договору с учреждениями здравоохранения</label>
                  <b-form-input type="number" v-model="form.zdravohran" id="14"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item class="mt-3" variant="light">
              <b-row>
                <b-col>
                  <label for="15">Укажите количество сотрудников, прошедших повышение квалификации/ профессиональную переподготовку по проблемам обучения и воспитания детей с инвалидностью за последние 5 лет</label>
                  <b-form-input type="number" v-model="form.skillup" id="15"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">17.Укажите наличие условий для осуществления образовательного процесса из следующего списка:</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type3" v-model="form.level8" :options="level8"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">17.2.Как Вы в целом оцениваете наличие условий для осуществления образовательного процесса в учреждении?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type4" v-model="form.level9" :options="level9"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>


            <b-list-group-item variant="light">
              <h4 class="mt-3">17.3.Укажите, что с Вашей точки зрения, может поспособствовать улучшению условий для осуществления образовательного процесса в учреждении?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type5" v-model="form.level6" :options="level6"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">18.1.Выберите из перечисленных архитектурных условий те, которые имеются в здании Вашего учреждения (укажите все, пожалуйста):</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type6" v-model="form.level77" :options="level77"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>

            <b-list-group-item variant="light">
              <h4 class="mt-3">18.2.Как Вы в целом оцениваете качество архитектурных условий в здании учреждения?</h4>
              <b-row>
                <b-col>
                  <b-form-select id="type7" v-model="form.level5" :options="level5"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                18.3.Укажите, что с Вашей точки зрения, может поспособствовать улучшению архитектурных условий в Вашем учреждении (возможно несколько вариантов ответа):
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type8" v-model="form.level87" :options="level87"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                19.1.Выберите из перечисленного специального оборудования то, которые имеются в здании Вашего учреждения:
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type9" v-model="form.level97" :options="level97"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                19.2.Как Вы в целом оцениваете укомплектованность специальным оборудованием Вашего учреждения?
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type10" v-model="form.level5" :options="level5"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                19.3.Укажите, что с Вашей точки зрения, может поспособствовать улучшению ситуации со специальным оборудованием в учреждении:
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type11" v-model="form.level193" :options="level107"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                20.1.Выберите из перечисленных типов специальных дидактических материалов те, которые имеются в здании Вашего учреждения:
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type12" v-model="form.level201" :options="level117"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                20.2.Как Вы сами в целом оцениваете наличие специальных дидактических материалов  в  учреждении?
              </h4>
              <b-row>
                <b-col>
                  <b-form-select id="type13" v-model="form.level202" :options="level5"></b-form-select>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <h4 class="mt-3">
                Данные лица, заполнившего анкету:
              </h4>
              <b-row>
                <b-col>
                  <b-form-input class="sm" v-model="form.fio" placeholder="ФИО"></b-form-input>
                </b-col>
                <b-col>
                  <b-form-input class="sm" v-model="form.doljnost" placeholder="Должность"></b-form-input>
                </b-col>
                <b-col>
                  <b-form-input class="sm" v-model="form.mailcontact" placeholder="Контактные телефоны (е-mail, телефон)"></b-form-input>
                </b-col>
              </b-row>
            </b-list-group-item>

          </b-list-group>
          <div>
            <br/>
            <b-button type="submit" variant="success">Сделать выборку</b-button>
            <br/>
            <b-container class="bv-example-row">
              <b-row>
                <b-col cols="4"> <template>
                  <div>
                    <b-list-group style="max-width: 300px;">
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">Нарушением зрения</span>
                        <b-badge>{{summ.zreniya}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">Нарушением слуха</span>
                        <b-badge>{{summ.slukha}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">Нарушением интеллекта</span>
                        <b-badge>{{summ.intellekta}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">Нарушением речи</span>
                        <b-badge>{{summ.rechi}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">Двигательными нарушениями (в том числе ДЦП)</span>
                        <b-badge>{{summ.cerebral}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">Расстройством эмоционально-волевой сферы, в т.ч. аутистического спектра (РАС)</span>
                        <b-badge>{{summ.ras}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">Соматическими заболеваниями</span>
                        <b-badge>{{summ.somaticheski}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">Иное</span>
                        <b-badge>{{summ.inoje}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">В классах начальной ступени (1-4 кл.)</span>
                        <b-badge>{{summ.stupeni14}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">В классах средней ступени (5-9 кл.)</span>
                        <b-badge>{{summ.stupeni59}}</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex align-items-center">
                        <span class="mr-auto">В классах старшей ступени (10-11 кл.)</span>
                        <b-badge>{{summ.stupeni1011}}</b-badge>
                      </b-list-group-item>

                    </b-list-group>
                  </div>
                </template></b-col>
                <b-col cols="8">
                  <div v-for="item in items" :key="item.id" >
                  <!-- Using value -->
                  <b-button v-b-toggle="item.id+'-id'" class="m-1">{{item.fio}}, {{item.doljnost}}, {{item.name}}, Адрес({{item.site}}, {{item.phone}}, {{item.email}})</b-button>
                  <!-- Element to collapse -->
                  <b-collapse :id="item.id+'-id'">
                    <b-card>
                      <b-list-group>

                        <b-list-group-item variant="light">
                          <b-row class="mt-3">
                            <b-col>
                              <label for="1">Наименование учреждения (полное и сокращенное)</label>
                              <b-form-input id="1" disabled v-model="item.name" placeholder=""></b-form-input>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3" v-model="item.addres">Адрес учреждения</h4>
                          <b-row>
                            <b-col>
                              <label for="2">Cайт</label>
                              <b-form-input disabled id="2" v-model="item.site"></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="3">Телефон</label>
                              <b-form-input disabled type="number" v-model="item.phone" id="3"></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="4">E-mail</label>
                              <b-form-input disabled type="email" v-model="item.email"  id="4"></b-form-input>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3" >Тип</h4>
                          <b-row>
                            <b-col>
                              <b-form-select id="type" disabled v-model="item.type" :options="level"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">Лицензия:</h4>
                          <b-row>
                            <b-col>

                              <label v-if="item.PDF1" for="5"><b-link target="_blank" :href="'http://localhost:1337'+item.PDF1.url" >на осуществление медицинской деятельности</b-link></label>

                            </b-col>
                            <b-col>
                              <label v-if="item.PDF2" for="6"><b-link target="_blank" :href="'http://localhost:1337'+item.PDF2.url">на осуществление образовательной деятельности</b-link></label>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <b-row align-v="baseline" class="mt-3">
                            <b-col>
                              <label for="7">Год фактического начала предоставления учреждением образовательных услуг</label>
                              <b-form-input disabled id="7" v-model="item.year"  type="text" placeholder=""></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="8">Общая численность детей с инвалидностью в текущем году</label>
                              <b-form-input disabled id="8" v-model="item.kidcount"  type="number" placeholder=""></b-form-input>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">7.Укажите наличие в учреждении нормативно-правового обеспечения организации получения образования детьми- инвалидами:</h4>
                          <b-row>
                            <b-col>
                              <label v-if="item.PDF3" for="9"><b-link target="_blank" :href="'http://92.53.104.150:1337'+item.PDF3.url">Разделы в Уставе учреждения об обучении и воспитании детей с инвалидностью</b-link></label>

                            </b-col>
                            <b-col>
                              <label v-if="item.PDF4" for="10"><b-link target="_blank" :href="'http://92.53.104.150:1337'+item.PDF4.url">Локальные акты по работе с детьми- инвалидами (Положение об итоговой аттестации и др.)</b-link></label>

                            </b-col>
                          </b-row>
                          <b-row align-v="baseline" class="mt-3">
                            <b-col>
                              <label v-if="item.PDF5" for="11"><b-link target="_blank" :href="'http://92.53.104.150:1337'+item.PDF5.url">Разделы о создании специальных образовательных условий для детей с инвалидностью в Программе развития организации</b-link></label>

                            </b-col>
                            <b-col>
                              <label v-if="item.PDF6" for="12"><b-link target="_blank" :href="'http://92.53.104.150:1337'+item.PDF6.url">Другое</b-link></label>

                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">8.Укажите категории детей с инвалидностью в учреждении, что обусловлено:</h4>
                          <b-row>
                            <b-col>
                              <label for="12">Нарушением зрения</label>
                              <b-form-input disabled type="number" v-model="item.zreniya"  id="12" placeholder=""></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="13">Нарушением слуха</label>
                              <b-form-input disabled type="number" v-model="item.slukha" id="13" placeholder=""></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="14">Нарушением интеллекта</label>
                              <b-form-input disabled type="number" v-model="item.intellekta" id="14" placeholder=""></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="15">Нарушением речи</label>
                              <b-form-input disabled type="number" v-model="item.rechi" id="15" placeholder=""></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row class="mt-3" align-v="baseline">
                            <b-col>
                              <label for="16">Двигательными нарушениями (в том числе ДЦП)</label>
                              <b-form-input disabled id="16" type="number" v-model="item.cerebral" placeholder=""></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="17">Расстройством эмоционально-волевой сферы, в т.ч. аутистического спектра (РАС)</label>
                              <b-form-input disabled id="17" type="number" v-model="item.ras" placeholder=""></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="18">Соматическими заболеваниями</label>
                              <b-form-input disabled id="18" type="number" v-model="item.somaticheski" placeholder=""></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="19">Иное</label>
                              <b-form-input disabled id="19" v-model="item.inoje" placeholder=""></b-form-input>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">9.Укажите количество детей с инвалидностью для обучения в классах:</h4>
                          <b-row>
                            <b-col>
                              <label for="20">В классах начальной ступени (1-4 кл.)</label>
                              <b-form-input disabled type="number" v-model="item.stupeni14" id="20" placeholder=""></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="21">В классах средней ступени (5-9 кл.)</label>
                              <b-form-input disabled type="number" id="21" v-model="item.stupeni59" placeholder=""></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="22">В классах старшей ступени (10-11 кл.)</label>
                              <b-form-input disabled type="number" id="22" v-model="item.stupeni1011" placeholder=""></b-form-input>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">10.Какие формы получения образования имеются в учреждении?</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type" v-model="item.level1" :options="level1"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">11.Все ли дети могут получить образовательные услуги, адекватные их потребностям и возможностям?</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type" v-model="item.level2" :options="level2"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">12.1 Укажите, какие из следующих специалистов есть в Вашем учреждении (с указанием их числа)?</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type" v-model="item.level3" :options="level3"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">12.2 Оцените степень укомплектованности Вашего учреждения следующими специалистами:</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type23" v-model="item.level4" :options="level4"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">12.3 Как Вы сами оцениваете уровень профессиональной подготовки перечисленных специалистов в Вашем учреждении?</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type" v-model="item.level5" :options="level5"></b-form-select>
                            </b-col>
                          </b-row>

                        </b-list-group-item>


                        <b-list-group-item variant="light">
                          <h4 class="mt-3">13.1 Укажите наличие договоров (соглашений) Вашего учреждения о сотрудничестве с другими организациями/учреждениями в текущем календарном году:</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type2" v-model="item.level7" :options="level7"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">13.2 В договорах с какими из перечисленных выше учреждениями есть наибольшая потребность?</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type1" v-model="item.level6" :options="level6"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">14 Укажите количество педагогических работников в учреждении</h4>
                          <b-row>
                            <b-col>
                              <label for="11">В штате организации</label>
                              <b-form-input disabled id="11" type="number" v-model="item.vorganizatsii"></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="12">По договору с образовательными организациями</label>
                              <b-form-input disabled id="12" type="number" v-model="item.dogovor"></b-form-input>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">15 Укажите количество медицинских работников в учреждении</h4>
                          <b-row>
                            <b-col>
                              <label for="13">В штате организации</label>
                              <b-form-input disabled type="number" v-model="item.medrab" id="13"></b-form-input>
                            </b-col>
                            <b-col>
                              <label for="14">По договору с учреждениями здравоохранения</label>
                              <b-form-input disabled type="number" v-model="item.zdravohran" id="14"></b-form-input>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item class="mt-3" variant="light">
                          <b-row>
                            <b-col>
                              <label for="15">Укажите количество сотрудников, прошедших повышение квалификации/ профессиональную переподготовку по проблемам обучения и воспитания детей с инвалидностью за последние 5 лет</label>
                              <b-form-input disabled type="number" v-model="item.skillup" id="15"></b-form-input>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">17.Укажите наличие условий для осуществления образовательного процесса из следующего списка:</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type3" v-model="item.level8" :options="level8"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">17.2.Как Вы в целом оцениваете наличие условий для осуществления образовательного процесса в учреждении?</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type4" v-model="item.level9" :options="level9"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>


                        <b-list-group-item variant="light">
                          <h4 class="mt-3">17.3.Укажите, что с Вашей точки зрения, может поспособствовать улучшению условий для осуществления образовательного процесса в учреждении?</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type5" v-model="item.level6" :options="level6"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">18.1.Выберите из перечисленных архитектурных условий те, которые имеются в здании Вашего учреждения (укажите все, пожалуйста):</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type6" v-model="item.level77" :options="level77"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>

                        <b-list-group-item variant="light">
                          <h4 class="mt-3">18.2.Как Вы в целом оцениваете качество архитектурных условий в здании учреждения?</h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type7" v-model="item.level5" :options="level5"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item variant="light">
                          <h4 class="mt-3">
                            18.3.Укажите, что с Вашей точки зрения, может поспособствовать улучшению архитектурных условий в Вашем учреждении (возможно несколько вариантов ответа):
                          </h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type8" v-model="item.level87" :options="level87"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item variant="light">
                          <h4 class="mt-3">
                            19.1.Выберите из перечисленного специального оборудования то, которые имеются в здании Вашего учреждения:
                          </h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type9" v-model="item.level97" :options="level97"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item variant="light">
                          <h4 class="mt-3">
                            19.2.Как Вы в целом оцениваете укомплектованность специальным оборудованием Вашего учреждения?
                          </h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type10" v-model="item.level5" :options="level5"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item variant="light">
                          <h4 class="mt-3">
                            19.3.Укажите, что с Вашей точки зрения, может поспособствовать улучшению ситуации со специальным оборудованием в учреждении:
                          </h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type11" v-model="item.level193" :options="level107"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item variant="light">
                          <h4 class="mt-3">
                            20.1.Выберите из перечисленных типов специальных дидактических материалов те, которые имеются в здании Вашего учреждения:
                          </h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type12" v-model="item.level201" :options="level117"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item variant="light">
                          <h4 class="mt-3">
                            20.2.Как Вы сами в целом оцениваете наличие специальных дидактических материалов  в  учреждении?
                          </h4>
                          <b-row>
                            <b-col>
                              <b-form-select disabled id="type13" v-model="item.level202" :options="level5"></b-form-select>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item variant="light">
                          <h4 class="mt-3">
                            Данные лица, заполнившего анкету:
                          </h4>
                          <b-row>
                            <b-col>
                              <b-form-input disabled class="sm" v-model="item.fio" placeholder="ФИО"></b-form-input>
                            </b-col>
                            <b-col>
                              <b-form-input disabled class="sm" v-model="item.doljnost" placeholder="Должность"></b-form-input>
                            </b-col>
                            <b-col>
                              <b-form-input disabled class="sm" v-model="item.mailcontact" placeholder="Контактные телефоны (е-mail, телефон)"></b-form-input>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item variant="light">
                          <h4 class="mt-3">
                            Актуальные проблемы деятельности учреждения
                          </h4>
                          <b-row>
                            <b-col>
                              <b-form-textarea disabled
                                  id="textarea"
                                  v-model="item.description"
                                  placeholder="Можете здесь написать..."
                                  rows="3"
                                  max-rows="6"
                              ></b-form-textarea>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                      </b-list-group>
                    </b-card>
                  </b-collapse>
                </div></b-col>
              </b-row>
            </b-container>

          </div>

        </b-form>
      </b-card-text>



    </b-card>
  </b-container>

</template>

<script>
// @ is an alias to /src

import axios from 'axios';
const url = require('url');
export default {
  name: 'PrivatFilter',
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items:null,
      summ:{},
      isSend: true,
      form:{
        name: null,
        site: null,
        phone: null,
        email:null,
        type:null,
        PDF1:null,
        PDF2:null,
        PDF3:null,
        PDF4:null,
        PDF5:null,
        PDF6:null,
        year: null,
        kidcount: null,
        zreniya:null,
        slukha:null,
        intellekta:null,
        rechi:null,

        vorganizatsii: null,
        dogovor:null,
        medrab:null,
        zdravohran:null,
        skillup:null,
        cerebral:null,
        ras:null,
        somaticheski:null,
        inoje:null,
        stupeni14:null,
        stupeni59:null,
        stupeni1011:null,

        fio:null,
        doljnost:null,
        mailcontact:null,
        description:null,
        level1: null,
        level2: null,
        level3: null,
        level4: null,
        level5: null,
        level6: null,
        level7: null,
        level8: null,
        level9: null,
        level77: null,
        level107: null,
        level97: null,
        level87: null,
        level193: null,
        level201: null,
        level202: null

      },

      level: [
        {
          value: 'Казенное',
          text: 'Казенное'
        },
        {
          value: 'Бюджетное',
          text: 'Бюджетное'
        }
      ],

      level1: [
        {
          value: 'Экстернат',
          text: 'Экстернат'
        },
        {
          value: 'Дистанционное обучение',
          text: 'Дистанционное обучение'
        },
        {
          value: 'Обучение на базе образовательной организации',
          text: 'Обучение на базе образовательной организации'
        },
        {
          value: 'Другое (укажите)',
          text: 'Другое (укажите)'
        }
      ],
      form1: '',
      level2: [
        {
          value: 'Да',
          text: 'Да'
        },
        {
          value: 'Нет',
          text: 'Нет'
        }
      ],
      level3: [
        {
          value: 'Педагог-психолог',
          text: 'Педагог-психолог'
        },
        {
          value: 'Учитель-логопед',
          text: 'Учитель-логопед'
        },
        {
          value: 'Учитель-дефектолог',
          text: 'Учитель-дефектолог'
        },
        {
          value: 'Сурдопедагог',
          text: 'Сурдопедагог'
        },
        {
          value: 'Тифлопедагог',
          text: 'Тифлопедагог'
        },
        {
          value: 'Социальный педагог',
          text: 'Социальный педагог'
        },
        {
          value: 'Инструктор ЛФК (адаптивной физкультуры)',
          text: 'Инструктор ЛФК (адаптивной физкультуры)'
        },
        {
          value: 'Медицинский работник',
          text: 'Медицинский работник'
        },
        {
          value: 'Тьютор',
          text: 'Тьютор'
        },
        {
          value: 'Нет перечисленных специалистов в учрежденииs',
          text: 'Нет перечисленных специалистов в учреждении'
        },

      ],
      level4: [
        {
          value:"У нас нет острой потребности в перечисленных специалистах",
          text: 'У нас нет острой потребности в перечисленных специалистах'
        },
        {
          value:"Ощущается нехватка специалистов",
          text: 'Ощущается нехватка специалистов'
        },
        {
          value:"Наблюдается острая нехватка следующих специалистов",
          text: 'Наблюдается острая нехватка следующих специалистов'
        },
        {
          value:"Педагог-психолог",
          text: 'Педагог-психолог'
        },
        {
          value:"Учитель–логопед",
          text: 'Учитель–логопед'
        },
        {
          value:"Сурдопедагог",
          text: 'Сурдопедагог'
        },
        {
          value:"Тифлопедагог",
          text: 'Тифлопедагог'
        },
        {
          value:"Социальный педагог",
          text: 'Социальный педагог'
        },
        {
          value:"Инструктор ЛФК (адаптивной физкультуры)",
          text: 'Инструктор ЛФК (адаптивной физкультуры)'
        },
        {
          value:"Медицинский работник",
          text: 'Медицинский работник'
        },
        {
          value: 'Тьютор',
          text: 'Тьютор'
        },
        {
          value: 'Другое (укажите)',
          text: 'Другое (укажите)'
        }
      ],
      form2: '',
      level5: [
        {
          value:"Неудовлетворительно",
          text: 'Неудовлетворительно'
        },
        {
          value:"Удовлетворительно",
          text: 'Удовлетворительно'
        },
        {
          value:"Хорошо",
          text: 'Хорошо'
        },
        {
          value:"Отлично",
          text: 'Отлично'
        },
      ],
      level6: [
        {
          value:"Смена ответственных за некоторые сферы образовательного процесса в учреждении",
          text: 'Смена ответственных за некоторые сферы образовательного процесса в учреждении'
        },
        {
          value:"Увеличение бюджет",
          text: 'Увеличение бюджет'
        },
        {
          value:"Ремонт/обновление материально-технического фонда",
          text: 'Ремонт/обновление материально-технического фонда'
        },
        {
          value:"Увеличение количества педагогического состава",
          text: 'Увеличение количества педагогического состава'
        },
        {
          value:"Увеличение количества медицинского персонала",
          text: 'Увеличение количества медицинского персонала'
        },
        {
          value:"Повышение квалификации сотрудников учреждения",
          text: 'Повышение квалификации сотрудников учреждения'
        },
        {
          value:"Другое (укажите)",
          text: 'Другое (укажите)'
        }
      ],
      level7: [
        {
          value:"С дошкольными образовательными организациями",
          text: 'С дошкольными образовательными организациями'
        },
        {
          value:"С учреждениями для детей, нуждающихся в психолого-педагогической и медико-социальной помощи (ППМС-центры)",
          text: 'С учреждениями для детей, нуждающихся в психолого-педагогической и медико-социальной помощи (ППМС-центры)'
        },
        {
          value:"С учреждениями дополнительного образования",
          text: 'С учреждениями дополнительного образования'
        },
        {
          value:"С общественными организациями",
          text: 'С общественными организациями'
        },
        {
          value:"С другими специальными (коррекционными) образовательными учреждениями",
          text: 'С другими специальными (коррекционными) образовательными учреждениями'
        },
        {
          value:"С учреждениями здравоохранения",
          text: 'С учреждениями здравоохранения'
        },
        {
          value:"С некоммерческими организациями",
          text: 'С некоммерческими организациями'
        }
      ],
      level8: [
        {
          value:"Помещения для внеурочной деятельности",
          text: 'Помещения для внеурочной деятельности'
        },
        {
          value:"Кабинет психолога",
          text: 'Кабинет психолога'
        },
        {
          value:"Кабинет логопеда",
          text: 'Кабинет логопеда'
        },
        {
          value:"Сенсорная комната",
          text: 'Сенсорная комната'
        },
        {
          value:"Физкультурный зал",
          text: 'Физкультурный зал'
        }
      ],
      level9: [
        {
          value:"Неудовлетворительно",
          text: 'Неудовлетворительно'
        },
        {
          value:"Удовлетворительно",
          text: 'Удовлетворительно'
        },
        {
          value:"Хорошо",
          text: 'Хорошо'
        },
        {
          value:"Отлично",
          text: 'Отлично'
        }
      ],
      level77: [
        {
          value:"Пандус для входа в учреждение",
          text: 'Пандус для входа в учреждение'
        },
        {
          value:"Съезды с тротуаров на территории учреждения",
          text: 'Съезды с тротуаров на территории учреждения'
        },
        {
          value:"Пандусы внутри здания",
          text: 'Пандусы внутри здания'
        },
        {
          value:"Лифт/ подъемная платформа/ступенькоход",
          text: 'Лифт/ подъемная платформа/ступенькоход'
        },
        {
          value:"Тактильная дорожка в коридоре",
          text: 'Тактильная дорожка в коридоре'
        },
        {
          value:"Широкие дверные проемы в помещениях",
          text: 'Широкие дверные проемы в помещениях'
        },
        {
          value:"Разноуровневые перила",
          text: 'Разноуровневые перила'
        },
        {
          value:"Специальное покрытие пола, нескользкое для опорной части костылей или тростей",
          text: 'Специальное покрытие пола, нескользкое для опорной части костылей или тростей'
        },
        {
          value:"Специально оборудованное санитарно-гигиеническое помещение",
          text: 'Специально оборудованное санитарно-гигиеническое помещение'
        },
        {
          value:"Возможность въезда личного автотранспорта для родителей ребенка с ДЦП на территорию образовательного учреждения",
          text: 'Возможность въезда личного автотранспорта для родителей ребенка с ДЦП на территорию образовательного учреждения'
        },
        {
          value:"Специально выделенные места на ближайшей парковке для транспорта людей с инвалидностью",
          text: 'Специально выделенные места на ближайшей парковке для транспорта людей с инвалидностью'
        },
        {
          value:"Нет перечисленных условий",
          text: 'Нет перечисленных условий'
        },
        {
          value:"Другое (укажите)",
          text: 'Другое (укажите)'
        }

      ],
      level87: [
        {
          value:"Восполнение недостающих типов архитектурных условий",
          text: 'Восполнение недостающих типов архитектурных условий'
        },
        {
          value:"Обновление/ремонт имеющегося архитектурного фонда",
          text: 'Обновление/ремонт имеющегося архитектурного фонда'
        },
        {
          value:"Другое (укажите)",
          text: 'Другое (укажите)'
        }
      ],
      level97: [
        {
          value:"Таблички с названиями кабинетов по Брайлю",
          text: 'Таблички с названиями кабинетов по Брайлю'
        },
        {
          value:"Наличие средств звуковой и визуальной сигнализации:",
          text: 'Наличие средств звуковой и визуальной сигнализации:'
        },
        {
          value:"Табло «Бегущая строка», «Ревун», громкая связь",
          text: 'Табло «Бегущая строка», «Ревун», громкая связь'
        },
        {
          value:"Световая индикация начала и конца урока",
          text: 'Световая индикация начала и конца урока'
        },
        {
          value:"Мультимедийная система (интерактивная доска, проектор)",
          text: 'Мультимедийная система (интерактивная доска, проектор)'
        },
        {
          value:"Компьютер, доступ к сети-интернет",
          text: 'Компьютер, доступ к сети-интернет'
        },
        {
          value:"FM-системы для индивидуальной и групповой работы",
          text: 'FM-системы для индивидуальной и групповой работы'
        },
        {
          value:"Кресло-коляска",
          text: 'Кресло-коляска'
        },
        {
          value:"Трость",
          text: 'Трость'
        },
        {
          value:"Опоры",
          text: 'Опоры'
        },
        {
          value:"Подъемники",
          text: 'Подъемники'
        },
        {
          value:"Специальные столовые принадлежности для детей с ДЦП (вилка, ложка, тарелка с присоской, чашка с присоской)",
          text: 'Специальные столовые принадлежности для детей с ДЦП (вилка, ложка, тарелка с присоской, чашка с присоской)'
        },
        {
          value:"Специальная парта (стол) с выемкой и регулируемой высотой",
          text: 'Специальная парта (стол) с выемкой и регулируемой высотой'
        },
        {
          value:"Специальный стул на колесах и высокой спинкой",
          text: 'Специальный стул на колесах и высокой спинкой'
        },
        {
          value:"Выделенные столы в аудиториях, к которым можно свободно подъехать на коляске",
          text: 'Выделенные столы в аудиториях, к которым можно свободно подъехать на коляске'
        },
        {
          value:"Вертикализаторы",
          text: 'Вертикализаторы'
        },
        {
          value:"Средства для альтернативной коммуникации (планшеты)",
          text: 'Средства для альтернативной коммуникации (планшеты)'
        },
        {
          value:"Специальное кресло с головодержателем для детей с ДЦП",
          text: 'Специальное кресло с головодержателем для детей с ДЦП'
        },
        {
          value:"Подлокотник для детей с ДЦП",
          text: 'Подлокотник для детей с ДЦП'
        },
        {
          value:"Специальная компьютерная клавиатура с крупными кнопками",
          text: 'Специальная компьютерная клавиатура с крупными кнопками'
        },
        {
          value:"Специальный джойстик для компьютера для детей с ДЦП",
          text: 'Специальный джойстик для компьютера для детей с ДЦП'
        },
        {
          value:"Специально оборудованные для детей с инвалидностью мастерские, лаборатории",
          text: 'Специально оборудованные для детей с инвалидностью мастерские, лаборатории'
        },
        {
          value:"Специально оборудованный зал ЛФК (тренажерный зал)",
          text: 'Специально оборудованный зал ЛФК (тренажерный зал)'
        },
        {
          value:"Компьютерная техника с возможностью работы на шрифте Брайля",
          text: 'Компьютерная техника с возможностью работы на шрифте Брайля'
        },
        {
          value:"Специальное оборудование для глухих детей",
          text: 'Специальное оборудование для глухих детей'
        },
        {
          value:"Специальное оборудование для слабослышащих детей",
          text: 'Специальное оборудование для слабослышащих детей'
        },
        {
          value:"Специальное оборудование физкультурно-спортивных площадок и площадок для подвижных игр и отдыха",
          text: 'Специальное оборудование физкультурно-спортивных площадок и площадок для подвижных игр и отдыха'
        },
        {
          value:"Нет перечисленного оборудования в наличии",
          text: 'Нет перечисленного оборудования в наличии'
        }


      ],
      level107: [
        {
          value:"Восполнение недостающего оборудования.",
          text: 'Восполнение недостающего оборудования.'
        },
        {
          value:"Обновление/ремонт имеющегося оборудования",
          text: 'Обновление/ремонт имеющегося оборудования'
        },
        {
          value:"Другое (укажите)",
          text: 'Другое (укажите)'
        }
      ],
      level117: [
        {
          value:"Учебно-методические комплекты по реализуемым программам",
          text: 'Учебно-методические комплекты по реализуемым программам'
        },
        {
          value:"Учебная литература на рельефно-точечном шрифте Брайля",
          text: 'Учебная литература на рельефно-точечном шрифте Брайля'
        },
        {
          value:"Учебники и учебные пособия с увеличенным размером шрифта для слабовидящи",
          text: 'Учебники и учебные пособия с увеличенным размером шрифта для слабовидящи'
        },
        {
          value:"Аудиоучебники, художественная литература",
          text: 'Аудиоучебники, художественная литература'
        },
        {
          value:"Электронные варианты учебников и пособий",
          text: 'Электронные варианты учебников и пособий'
        },
        {
          value:"Библиотека, специализированная художественная и развиваюшая литература, в т.ч. в оцифрованном формате",
          text: 'Библиотека, специализированная художественная и развиваюшая литература, в т.ч. в оцифрованном формате'
        },
        {
          value:"Нет в наличии специальных дидактических материалов",
          text: 'Нет в наличии специальных дидактических материалов'
        }
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    handleFileUpload(){

    },
    onReset(){

    },

    onSubmit(event){
      event.preventDefault();
      //
      let formData = new FormData();

      formData.append('data', JSON.stringify(this.form));

      // this.form.forEach((element) => {
      //   //if(element)
      //   console.log(element);
      // })
      //const params = new url.URLSearchParams(this.form);
      //console.log(this.form);
      var filter = {}
      var sEl = [];
      for (var key in this.form) {
        // этот код будет вызван для каждого свойства объекта
        // ..и выведет имя свойства и его значение
        if(this.form[key]!= null){
          filter[key] = this.form[key];

          //console.log( "Ключ: " + key + " значение: " + this.form[key] );

        }

      }



      //formData.append('name', this.form.name);
      //this.$refs.file.files[0];
      axios.get('http://92.53.104.150:1337/summ',  {params:filter})
          .then((res) => {

            this.summ = res.data.suma;
            console.log(params);

          })
          .catch((error) => {
            // error.response.status Check status code
          }).finally(() => {
        //Perform action in always
      });

      axios.get('http://92.53.104.150:1337/summ', {params:filter})
          .then((res) => {

            this.items = res.data.item;
            //console.log(this.items);
            //alert("send")
            //Perform Success Action
          })
          .catch((error) => {
            // error.response.status Check status code
          }).finally(() => {
        //Perform action in always
      });
      // alert(JSON.stringify(this.form))
      // alert("ssds")
    }
  }
}
</script>
