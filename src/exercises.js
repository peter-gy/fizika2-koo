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
     * @param {String}     display     display as latex string
     * @param {Variable[]} variables   an array of Variables constituting this formula
     * @param {Stirng}     script      SageMath script to solve this formula
     */
    constructor(description, display, variables) {
        this.description = description
        this.display = display
        this.variables = variables
    }
}

class Variable {

    /**
     * 
     * @param {String} description description as simple string
     * @param {String} display     display as latex string
     * @param {String} unit        unit of measure as latex string
     */
    constructor(description, display, unit) {
        this.description = description
        this.display = display
    }
}

const ex_1_3_script = 
`
@interact
def _(a=(1, 10)):
    print(factorial(a))
`

const ex_1_4_script = 
`
@interact
def _(a=(1, 10)):
    print(a**a)
`

export const exercises = 
[
    ex_1_3_script,
    ex_1_4_script
]