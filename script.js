let stack = []
pushElementOnStack = () => { // добавляем элементы в стек
    let addElements=document.querySelector('#btn1')
    addElements.addEventListener('click',function () {
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
    })

}
deleteLastElementFromStack = () => { //удаляем последний ( или "верхний") элемент из стека
    let deleteLastElement = document.querySelector('#btn2')
    deleteLastElement.addEventListener('click',function () {
    for (let i = 0 ; i < stack.length ; i++){
        if (i === stack.length-1){
            stack.pop(stack[i])
        }
    }
    })
}

saveStackInLocalStorage = () => { // можем сохранить наш стек в local storage браузера
    let saveStack = document.querySelector('#btn3')
    saveStack.addEventListener('click',function () {
        let json = JSON.stringify(stack)
        localStorage.setItem('stack',json)
    })
}
pushElementOnStack()
deleteLastElementFromStack()
saveStackInLocalStorage()
