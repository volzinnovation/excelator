import createPlugin from '../../utils/plugin-builder';
import excelConstantsFragment from './fragments/excel-constants';
import xoderFragment from './fragments/xoder';
import zweifakultaetFragment from './fragments/zweifakultaet';
import wurzelFragment from './fragments/wurzel';
import wennFragment from './fragments/wenn';
import zufallsbereichFragment from './fragments/zufallsbereich';
import ungeradeFragment from './fragments/ungerade';
import gganzzahl from "./fragments/gganzzahl";
import gradFragment from "./fragments/grad";
import falschFragment from "./fragments/falsch";
import oktindezFragment from "./fragments/oktindez";
import pdurationFragment from "./fragments/pduration";
import quadratesummeFragment from "./fragments/quadratesumme";
import quotientFragment from "./fragments/quotient";
import rundenFragment from "./fragments/runden";
import fakultaetFragment from "./fragments/fakultaet";
import aufrundenFragment from "./fragments/aufrunden";
import deltaFragment from "./fragments/delta";
import restFragment from "./fragments/rest";
import stabwsFragment from "./fragments/stabws";
import sinhypFragment from "./fragments/sinhyp";
import tanhypFragment from "./fragments/tanhyp";
import ggtFragment from "./fragments/ggt";
import istgeradeFragment from "./fragments/istgerade";
import istungeradeFragment from "./fragments/istungerade";
/*
import isttextFragment from "./fragments/isttext";
import istzahlFragment from "./fragments/istzahl";
 */
import kuerzenFragment from "./fragments/kuerzen";
import log10Fragment from "./fragments/log10";



const excelPlugin = createPlugin(
    {
        en: 'Excel',
        de: 'Excel',
    },
    'core',
    {
        en: 'Function names from Microsoft Excel, specifically of the german language.',
        de: 'Funktionsnamen aus Microsoft Excel, speziell die der deutschen Sprache.',
    },
)
    .addFragment(excelConstantsFragment)
    .addFragment(xoderFragment)
    .addFragment(zweifakultaetFragment)
    .addFragment(wennFragment)
    .addFragment(wurzelFragment)
    .addFragment(zufallsbereichFragment)
    .addFragment(ungeradeFragment)
    .addFragment(deltaFragment)
    .addFragment(gganzzahl)
    .addFragment(gradFragment)
    .addFragment(aufrundenFragment)
    .addFragment(fakultaetFragment)
    .addFragment(falschFragment)
    .addFragment(oktindezFragment)
    .addFragment(pdurationFragment)
    .addFragment(quadratesummeFragment)
    .addFragment(quotientFragment)
    .addFragment(rundenFragment)
    .addFragment(restFragment)
    .addFragment(stabwsFragment)
    .addFragment(sinhypFragment)
    .addFragment(tanhypFragment)
    .addFragment(ggtFragment)
    .addFragment(istgeradeFragment)
    .addFragment(istungeradeFragment)
    /*
    .addFragment(isttextFragment)
    .addFragment(istzahlFragment)
     */
    .addFragment(kuerzenFragment)
    .addFragment(log10Fragment)
    .build();

export default excelPlugin;
