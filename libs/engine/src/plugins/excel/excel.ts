import createPlugin from '../../utils/plugin-builder';
import excelConstantsFragment from './fragments/excel-constants';
import xoderFragment from './fragments/xoder';
import zweifakultaetFragment from './fragments/zweifakultaet';
import wurzelFragment from './fragments/wurzel';
import wennFragment from './fragments/wenn';
import zufallsbereichFragment from './fragments/zufallsbereich';
import ungeradeFragment from './fragments/ungerade';
import log10Fragment from "./fragments/log10";
import deltaFragment from "./fragments/ggt";
import gganzzahl from "./fragments/gganzzahl";
import gradFragment from "./fragments/grad";
import aufrundenFragment from "./fragments/faculty";
import ggtFragment from "./fragments/ggt";
import facultyFragment from "./fragments/faculty";
import falschFragment from "./fragments/falsch";
import oktindezFragment from "./fragments/oktindez";
import pdurationFragment from "./fragments/pduration";
import quadratesummeFragment from "./fragments/quadratesumme";
import quotientFragment from "./fragments/quotient";
import rundenFragment from "./fragments/runden";



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
    .addFragment(deltaFragment)
    .addFragment(gganzzahl)
    .addFragment(gradFragment)
    .addFragment(aufrundenFragment)
    .addFragment(ggtFragment)
    .addFragment(facultyFragment)
    .addFragment(falschFragment)
    .addFragment(oktindezFragment)
    .addFragment(pdurationFragment)
    .addFragment(quadratesummeFragment)
    .addFragment(quotientFragment)
    .addFragment(rundenFragment)
    .build();

export default excelPlugin;
