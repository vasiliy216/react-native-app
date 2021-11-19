import React from 'react'
import { StyleSheet, View, Text, Button, SafeAreaView, ImageBackground } from "react-native";

import CalculatorKey from './CalculatorKey'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorOperator from './CalculatorOperator'

const Calculator = () => {

    const [state, setState] = React.useState({
        value: null,
        displayValue: '0',
        operator: null,
        waitingForOperand: false
    })

    const CalculatorOperations = {
        '÷': (prevValue, nextValue) => prevValue / nextValue,
        '×': (prevValue, nextValue) => prevValue * nextValue,
        '+': (prevValue, nextValue) => prevValue + nextValue,
        '-': (prevValue, nextValue) => prevValue - nextValue,
        '=': (prevValue, nextValue) => nextValue
    }

    const inputDigit = (value) => {
        const { displayValue, waitingForOperand } = state

        if (waitingForOperand) {
            setState({
                ...state,
                displayValue: String(value),
                waitingForOperand: false
            })
        } else {
            setState({
                ...state,
                displayValue: displayValue === '0' ? String(value) : displayValue + value
            })
        }
    }

    const clearAll = () => {
        setState({
            value: null,
            displayValue: '0',
            operator: null,
            waitingForOperand: false
        })
    }

    const ClearDisplay = () => {
        setState({
            ...state,
            displayValue: '0',
        })
    }

    const inputDot = () => {
        const { displayValue } = state

        if (!(/\./).test(displayValue)) {
            setState({
                ...state,
                displayValue: displayValue + '.',
                waitingForOperand: false
            })
        }
    }

    const toggleSign = () => {
        const { displayValue } = state
        const newValue = parseFloat(displayValue) * -1

        setState({
            ...state,
            displayValue: String(newValue)
        })
    }

    const inputPercent = () => {
        const { displayValue } = state
        const currentValue = parseFloat(displayValue)

        if (currentValue === 0) return

        const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
        const newValue = parseFloat(displayValue) / 100

        setState({
            ...state,
            displayValue: String(newValue.toFixed(fixedDigits.length + 2))
        })
    }

    const Operator = (nextOperator) => {
        const { value, displayValue, operator } = state
        const inputValue = parseFloat(displayValue)

        if (value === null) {            
            setState( prevState => ({
                ...prevState,
                value: inputValue,
            }))
        } else if (operator) {
            const currentValue = value || 0
            const newValue = CalculatorOperations[operator](currentValue, inputValue)

            setState(prevState => ({
                ...prevState,
                value: newValue,
                displayValue: String(newValue)
            }))
        }

        setState(prevState => ({
            ...prevState,
            waitingForOperand: true,
            operator: nextOperator
        }))

        console.log(state);
    }

    const performOperation = (value) => {
        switch (value) {
            case '.': inputDot(); break;
            case 'C': ClearDisplay(); break;
            case 'AC': clearAll(); break;
            case '%': inputPercent(); break;
            case '±': toggleSign(); break;
            case '÷': Operator(value); break;
            case '×': Operator(value); break;
            case '+': Operator(value); break;
            case '-': Operator(value); break;
            case '=': Operator(value); break;
        }
    }

    const clearDisplay = state.displayValue !== '0'
    const clearText = clearDisplay ? 'C' : 'AC'

    return (
        <SafeAreaView style={styles.body}>
            <ImageBackground
                source={require('../assets/calc.jpg')}
                style={styles.bacground}
                blurRadius={5}
            >
                <View style={{marginBottom: 'auto'}}></View>
                <View style={styles.calc}>
                    <CalculatorDisplay value={state.displayValue} />
                    <View style={styles.calcItem}>
                        <CalculatorOperator performOperation={performOperation}>{clearText}</CalculatorOperator>
                        <CalculatorOperator performOperation={performOperation}>±</CalculatorOperator>
                        <CalculatorOperator performOperation={performOperation}>%</CalculatorOperator>
                        <CalculatorOperator performOperation={performOperation}>÷</CalculatorOperator>
                    </View>
                    <View style={styles.calcItem}>
                        <CalculatorKey inputDigit={inputDigit}>7</CalculatorKey>
                        <CalculatorKey inputDigit={inputDigit}>8</CalculatorKey>
                        <CalculatorKey inputDigit={inputDigit}>9</CalculatorKey>
                        <CalculatorOperator performOperation={performOperation}>×</CalculatorOperator>
                    </View>
                    <View style={styles.calcItem}>
                        <CalculatorKey inputDigit={inputDigit}>4</CalculatorKey>
                        <CalculatorKey inputDigit={inputDigit}>5</CalculatorKey>
                        <CalculatorKey inputDigit={inputDigit}>6</CalculatorKey>
                        <CalculatorOperator performOperation={performOperation}>-</CalculatorOperator>
                    </View>
                    <View style={styles.calcItem}>
                        <CalculatorKey inputDigit={inputDigit}>1</CalculatorKey>
                        <CalculatorKey inputDigit={inputDigit}>2</CalculatorKey>
                        <CalculatorKey inputDigit={inputDigit}>3</CalculatorKey>
                        <CalculatorOperator performOperation={performOperation}>+</CalculatorOperator>
                    </View>
                    <View style={styles.calcItem}>
                        <CalculatorKey zero inputDigit={inputDigit}>0</CalculatorKey>
                        <CalculatorOperator performOperation={performOperation}>.</CalculatorOperator>
                        <CalculatorOperator performOperation={performOperation}>=</CalculatorOperator>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bacground: {
        flex: 1,
        display: 'flex'
    },
    body: {
        flex: 1,
        width: '100%',
    },
    calc: {
        display: 'flex',
        flexDirection: 'column'
    },
    calcItem: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    }
})

export default Calculator
