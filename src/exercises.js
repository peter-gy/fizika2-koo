class Exercise {

    /**
     * 
     * @param {String}    description description as simple string 
     * @param {Formula[]} formulas    an array of Formulas associated with this exercise
     */
    constructor(description, formulas) {
        this.description = description
        this.formulas = formulas
        this.script = formulas.map(formula => `${formula.script}`.join('\n\n'))
    }
}

class Formula {

    /**
     * 
     * @param {String}     description description as simple string
     * @param {String}     display     display as simple string
     * @param {Variable}   lhs         a single Variable, the left-hand side of the formula
     * @param {Variable[]} rhs         an array of Variables, the right-hand side of the formula
     */
    constructor(description, display, lhs, rhs) {
        this.description = description
        this.display = display
        this.lhs = lhs
        this.rhs = rhs
        
        // generating script
        const param_list = rhs.map((vrbl, idx) => `arg${idx}=('${vrbl.description} $${vrbl.display} [${vrbl.unit}]$', 1.0)`).join(',');
        const args = rhs.map((vrbl, idx) => `arg${idx}`).join(',')
        const vars = rhs.map(vrbl => `${vrbl.display}`).join(',')
        this.script = 
`
@interact
def _(${param_list}):
    var('${vars}')
    show('${description}')
    func(${vars}) = ${display}
    show('${lhs.display} = ' + latex(func(${vars})))
    show('${lhs.display}, ${lhs.unit}: ' + latex(func(${args}).n()))
`
    }

}

class Variable {

    /**
     * 
     * @param {String} description description as simple string
     * @param {String} display     display as simple string
     * @param {String} unit        unit of measure as simple string
     */
    constructor(description, display, unit) {
        this.description = description
        this.display = display
        this.unit = unit
    }
}

let var_A = new Variable('csővezeték átlagos keresztmetszete', 'A', 'm2')
let var_d = new Variable('átmérő', 'd', 'm')
let f = new Formula('csővezeték átlagos keresztmetszete', '1/4*(pi)*d^2', var_A, [var_d])