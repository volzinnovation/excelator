import { integrationTest, integrationTestThrow } from '../../utils/integration-test-utils';

// constants
integrationTest('excel:five', '5');

// wurzel
integrationTest('wurzel(9)', '3');
integrationTestThrow('wurzel(-1)');

// xoder
integrationTest('xoder(true)', 'true');
integrationTest('xoder(false)', 'false');
integrationTest('xoder(true, false, false, false, true, false, true)', 'true');
integrationTest('xoder(true, true)', 'false');
integrationTest('xoder(true, false)', 'true');
integrationTestThrow('xoder(42)');

// wenn
integrationTest('wenn(true, 1, 2)', '1');
integrationTest('wenn(true, 1+2, 2)', '3');
integrationTest('wenn(false, 1, 2)', '2');

// zweifakultaet
integrationTest('zweifakultaet(9.011)', '945');
integrationTest('zweifakultaet(0)', '1'); // ist so definiert
integrationTest('zweifakultaet(1)', '1');
integrationTest('zweifakultaet(2)', '2');
integrationTest('zweifakultaet(4)', '8');
integrationTest('zweifakultaet(5)', '15');
integrationTest('zweifakultaet(6)', '48');
integrationTest('zweifakultaet(7)', '105');
integrationTest('zweifakultaet(8)', '384');
integrationTestThrow('zweifakultaet(-1)');

// ungerade
integrationTest('ungerade(1)', '1');
integrationTest('ungerade(1.5)', '3');
integrationTest('ungerade(-1)', '-1');
integrationTest('ungerade(0)', '1');
integrationTest('ungerade(2)', '3');
integrationTest('ungerade(3)', '3');
integrationTest('ungerade(-2)', '-3');
integrationTest('ungerade(-4)', '-5');
integrationTest('ungerade(-2.5)', '-3');
integrationTest('ungerade(-2.1)', '-3');
integrationTest('ungerade(-2.9)', '-3');
integrationTest('ungerade(6)', '7');
integrationTest('ungerade(6.2)', '7');
integrationTest('ungerade(7.2)', '9');
integrationTest('ungerade(7.89)', '9');
integrationTestThrow('ungerade(a)');


//fakultät
integrationTest('fakultaet(0)', '1'); // ist so definiert
integrationTest('fakultaet(1)', '1');
integrationTest('fakultaet(2)', '2');
integrationTest('fakultaet(4)', '24');
integrationTest('fakultaet(5)', '120');
integrationTestThrow('fakultaet(-1)');
integrationTestThrow('fakultaet(0.5)');

//delta
integrationTest('delta(1,2)', '0');
integrationTest('delta(-1,-1)', '1');
integrationTest('delta(3+4,8-1)', '1');
integrationTest('delta(0,3+5-8)', '1');
integrationTest('delta(1,1+1)', '0');


//falsch
integrationTest('falsch(1)', '"FALSCH"');
integrationTest('falsch(0.3+0.8)', '"FALSCH"');
integrationTest('falsch(0)', '"FALSCH"');
integrationTestThrow('falsch(Lewandowski)');

//gganzzahl
integrationTest('gganzzahl(1,2)', '0');
integrationTest('gganzzahl(3,2)', '1');
integrationTest('gganzzahl(3+5,8-4)', '1');
integrationTest('gganzzahl(0,2.4)', '0');
integrationTest('gganzzahl(1,2)', '0');

//grad
integrationTest('grad(pi)', '180');
integrationTest('grad(2*pi)', '360');
integrationTest('grad(0.5*pi)', '90');
integrationTestThrow('grad(Lewandowski)');


