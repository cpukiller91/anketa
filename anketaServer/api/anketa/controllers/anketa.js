'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async filter (ctx) {
    return "ok";
  },
  async summ (ctx) {
console.log(ctx.query);
    var anketa = await strapi.query('anketa').find(ctx.query);

    var suma = {
      kidcount: 0,
      zreniya:0,
      slukha:0,
      intellekta:0,
      rechi:0,

      vorganizatsii: 0,
      dogovor:0,
      medrab:0,
      zdravohran:0,
      skillup:0,
      cerebral:0,
      ras:0,
      somaticheski:0,
      inoje:0,
      stupeni14:0,
      stupeni59:0,
      stupeni1011:0
    }
    var kidcount = 0
    for (const [key, productID] of Object.entries(anketa)) {

      suma.kidcount += productID.kidcount;
      suma.zreniya += productID.zreniya;
      suma.slukha += productID.slukha;
      suma.intellekta += productID.intellekta;
      suma.rechi += productID.rechi;
      suma.inoje += productID.inoje;
      suma.vorganizatsii += productID.vorganizatsii;
      suma.dogovor += productID.dogovor;
      suma.medrab += productID.medrab;
      suma.zdravohran += productID.zdravohran;
      suma.skillup += productID.skillup;
      suma.cerebral += productID.cerebral;
      suma.ras += productID.ras;
      suma.somaticheski += productID.somaticheski;
      suma.stupeni14 += productID.stupeni14;
      suma.stupeni14 += productID.stupeni14;
      suma.stupeni59 += productID.stupeni59;
      suma.stupeni1011 += productID.stupeni1011;

    }
    //console.log(suma);
    var Find = JSON.stringify({
      suma:suma,
      item: anketa
    })
    return Find;

  }
};
