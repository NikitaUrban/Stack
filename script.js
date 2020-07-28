let stack = []

pushElementsOnStack = () => { // добавляем элементы в стек

    try {
        let N = prompt('Сколько элементов вы хотите добавить в стек:','')
        if ( ! ( Number(N) ) ) { throw new Error('Ошибка ввода') }
        for (let i = 0 ; i < N; i++){
            let elem = parseFloat(prompt('Элемент ' + (i+1) + ':',''))
            if ( ! ( Number(elem) ) ) { throw new Error('Ошибка ввода') }
            else {
                stack.push(elem)
            }
        }
    }catch (e) {
        alert(e)
    }

}


deleteLastElementFromStack = () => { //удаляем последний ( или "верхний") элемент из стека
    stack.pop()
}


saveStackInLocalStorage = () => { // можем сохранить наш стек в local storage браузера
        let json = JSON.stringify(stack)
        localStorage.setItem('stack',json)
}



let addElements = document.querySelector('#btn1')
addElements.addEventListener('click',pushElementsOnStack)//при нажатии на кнопку Добавиить элемент добавим элементы в стек

let deleteLastElement = document.querySelector('#btn2')
deleteLastElement.addEventListener('click',deleteLastElementFromStack)//при нажатии на кнопку Удалить элемент
// удалим последний элемент из стека

let saveStack = document.querySelector('#btn3')
saveStack.addEventListener('click',saveStackInLocalStorage)//при нажатии на кнопку Сохранить сохраним стек в local
//storage браузера
