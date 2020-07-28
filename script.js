let stack = []
pushElementOnStack = () => {
    let addElements=document.querySelector('#btn1')
    addElements.addEventListener('click',function () {
        let N = prompt('Сколько элементов вы хотите добавить в стек:','')
        for (let i = 0 ; i < N; i++){
            let elem = parseFloat(prompt('Элемент '+i+':',''))
            stack.push(elem)
        }
    })

}
deleteLastElementFromStack = () => {
    let deleteLastElement = document.querySelector('#btn2')
    deleteLastElement.addEventListener('click',function () {
    for (let i = 0 ; i < stack.length ; i++){
        if (i === stack.length-1){
            stack.pop(stack[i])
        }
    }
    })
}
pushElementOnStack()
deleteLastElementFromStack()
