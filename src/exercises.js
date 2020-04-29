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