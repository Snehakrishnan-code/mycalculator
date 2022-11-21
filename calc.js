function display(num) {
    result.value += num
    //input command is in the type- text.. so here its string concatination
}

function allclear(){
result.value=""
}

//to evaluate string type mathematical function - use eval()
function equalto(){
    result.value=eval(result.value)
}

function backspace(){
    result.value=(result.value).slice(0,-1)
    //slice will take the value of string(starting index, ending index)- to be sliced
}