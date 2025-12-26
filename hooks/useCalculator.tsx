import { useEffect, useRef, useState } from "react"


enum Operator{
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '/'
}



export const useCalculator = () => {

    const [formula, setFormula] = useState('');
    const [number, setNumber] = useState('0')
    const [previusnumber, setPreviusNumber] = useState('0')
  
    const lastOperation = useRef<Operator | null>(null);


    useEffect(()=> {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0) 
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        } else {
            setFormula(number)
        }

    },[number])

    useEffect(()=>{
        const subResult = calculateResult()
        setPreviusNumber(`${subResult}`)
        // setPreviusNumber(number)
    },[formula])

    const clean = () => {
        setNumber('0'),
        setPreviusNumber('0')
        setFormula('0')

        lastOperation.current = null
    }

    const toggleSign = () => {
        if (number.startsWith('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    const delLastNumber = () => {
        if (number.length === 1 || (number.length === 2 && number.startsWith('-'))) {
            setNumber('0')
        } else {
            setNumber(number.slice(0, -1))
        }
    }

    const setLastNumber = () => {
        result()
        if (number.endsWith('.')) {
            setPreviusNumber(number.slice(0,-1))
        }
        setPreviusNumber(number)
        setNumber('0')
    }

    const addOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.add
    }

    const multiplyOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.multiply
    }

    const divideOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.divide
    }

    const substractOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.substract
    }

    const calculateResult = () => {
        const [ firstValue, operation, secondValue ] = formula.split(' ')
        
        const num1 = Number(firstValue)
        const num2 = Number(secondValue)

        if(isNaN(num2)) return num1
    
        switch ( operation ) {
            case Operator.add:
                return num1 + num2
            case Operator.substract:
                return num1 - num2
            case Operator.multiply:
                return num1 * num2
            case Operator.divide:
                return num1 / num2    
            default:
                throw new Error(`Operation ${operation} not implement`)
        }
    }

    const result = () => {
        const mathResult = calculateResult()
        setFormula(`${mathResult}`)

        lastOperation.current = null
        setPreviusNumber('0')
    }

    const buildNumber = (numberString: string) => {
        
        // Verificarsi el punto decimal existe
        if (number.includes('.') && numberString === '.' ) return 

        if (number.startsWith('0') || number.startsWith('-0')) {
           if (numberString === '.') {
            return setNumber(number + numberString)
           } 

           // Evaluar si es otro 0 y no hay punto
           if (numberString === '0' && number.includes('.')) {
            return setNumber(number + numberString)
           }

           // Evaluar si es diferente de 0 y no es el primer numero
           if (numberString !== '0' && !number.includes('.')) {
            return setNumber(numberString)
           }

           // Evitar el 0000.00
           if (numberString === '0' && !number.includes('.')) {
            return
           }
        }

        setNumber(number + numberString)
    }

    return {
        // Props
        formula,
        number,
        previusnumber,

        // Methods
        buildNumber,
        clean,
        toggleSign,
        delLastNumber,
        divideOperation,
        addOperation,
        multiplyOperation,
        substractOperation,
        calculateResult,
        result
    
    }

}
