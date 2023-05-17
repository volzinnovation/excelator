import createPlugin from '../../utils/plugin-builder';
import excelConstantsFragment from './fragments/excel-constants';
import xoderFragment from './fragments/xoder';
import zweifakultaetFragment from './fragments/zweifakultaet';
import wurzelFragment from './fragments/wurzel';
import wennFragment from './fragments/wenn';
import zufallsbereichFragment from './fragments/zufallsbereich';
import ungeradeFragment from './fragments/ungerade';
import log10Fragment from "./fragments/log10";
import oktindezFragment from "./fragments/oktindez";
import pdurationFragment from "./fragments/pduration";
import quotientFragment from "./fragments/quotient";
import quadratesummeFragment from "./fragments/quadratesumme";
import rundenFragment from "./fragments/runden";
import istgeradeFragment from "./fragments/istgerade";
import istungeradeFragment from "./fragments/istungerade";
import isttextFragment from "./fragments/isttext";
import istzahlFragment from "./fragments/istzahl";
import kuerzenFragment from "./fragments/kuerzen";


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
    .addFragment(log10Fragment)
    .addFragment(oktindezFragment)
    .addFragment(pdurationFragment)
    .addFragment(quotientFragment)
    .addFragment(quadratesummeFragment)
    .addFragment(rundenFragment)
    .addFragment(istgeradeFragment)
    .addFragment(istungeradeFragment)
    .addFragment(isttextFragment)
    .addFragment(istzahlFragment)
    .addFragment(kuerzenFragment)
    .build();

export default excelPlugin;
