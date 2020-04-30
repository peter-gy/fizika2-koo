import {Exercise, Formula, Variable} from '../../exercise'

const A = new Variable('csővezeték keresztmetszete', 'A', 'm2')
const d = new Variable('cső átmérő', 'd', 'm')
const formula_0 = new Formula('d^2*(pi)/4', A, [d])

const V = new Variable('csővezeték térfogata', 'V', 'm3')
const l = new Variable('cső hosszúság', 'l', 'm')
const formula_1 = new Formula('A*l', V, [A, l])

const R_vesszo = new Variable('anyagi gázállandó', 'R_vesszo', 'J/kgK')
const R = new Variable('gázállandó', 'R', 'J/molK')
const M = new Variable('Moláris tömeg', 'M', 'g/mol')
const formula_2 = new Formula('R/M', R_vesszo, [R, M])

const T = new Variable('anyagi hőmérséklet', 'T', 'K')
const t = new Variable('levegő hőmérséklet', 't', '°C')
const formula_3 = new Formula('t+273.15', T, [t])

const m = new Variable('levegő tömege', 'm', 'kg')
const p = new Variable('lég?nyomás', 'p', 'Pa')
const formula_4 = new Formula('p*V/(R_vesszo*T)', m, [p, V, R_vesszo, T])

const ro = new Variable('levegő sűrűsége', 'ro', 'kg/m3')
const formula_5 = new Formula('m/V', ro, [m, V])

const dp = new Variable('hidrosztatikai nyomáscsökkenés 1', 'dp', 'Pa')
const dh = new Variable('vízoszlop süllyedése', 'dh', 'm')
const formula_6 = new Formula('1000*9,81*dh', dp, [dh])

const p2 = new Variable('hidrosztatikai nyomáscsökkenés 2', 'p2', 'Pa')
const formula_7 = new Formula('p-dp', p2, [p, dp])

const m2 = new Variable('maradék tömeg', 'm2', 'kg')
const formula_8 = new Formula('p2*V/(R_vesszo*T)', m2, [p2, V, R_vesszo, T])

const dm = new Variable('eltávozott tömeg', 'dm', 'kg')
const formula_9 = new Formula('m-m2', dm, [m, m2])

const Vt = new Variable('távozó levegő térfogata p0 Pa nyomáson', 'Vt', 'dm3')
const p0 = new Variable('nyomás', 'p0', 'Pa')
const formula_10 = new Formula('dm*R_vesszo*T/p0', Vt, [dm, R_vesszo, T, p0])

const T2  = new Variable('lehűléses nyomáscsökkenés 1', 'T2', 'K')
const formula_11 = new Formula('p2*V/(m*R_vesszo)', T2, [p2, V, m, R_vesszo])

const t2 = new Variable('lehűléses nyomáscsökkenés 2', 't2', '°C')
const formula_12 = new Formula('T2-273.15', t2, [T2])

export const exercise_1 = new Exercise(
    '1.3', 
    [formula_0, formula_1, formula_2, formula_3, formula_4, formula_5, formula_6,
    formula_7, formula_8, formula_9, formula_10, formula_11, formula_12],
    ['gázvezeték', 'tömítettség', 'cső', 'felpumpálva', 'vízoszlop', 'abszolút hőmérséklet',
    'nyomáscsökkenés', 'elillant', 'szigetelt rendszer'])