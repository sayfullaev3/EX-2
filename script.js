

let name = prompt('Как вас зовут?')
if(name.trim().slice(0 , 1).toLowerCase() == 'a'){
    let age = +prompt("Введите ваш возраст:");
    if(age >= 20 && age <= 40){
        let money = +prompt("Сколько у вас денег в кармане?");
        if(money >= 100){
            let people = prompt("Сколько людей хотят зайти вместе с вами?");

        }else{
            alert('Бомжам нельзя')
        }


    }else{
        alert('Братишка ты ещё щегол')
    }
    

}else{
    alert('Пошел вон')
}