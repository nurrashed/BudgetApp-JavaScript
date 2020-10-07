//Budget Controller 
let budgetController = (function(){
    //Some code
}) ();


//UI Controller
let UIController = (function(){
    return {
        getInput: function(){
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            }
        }
    };
})();



//Global App contoller
let controller = (function(budgetCtrl, UICtrl){

    let ctrlAddItem = () =>{
        
        // 1. Get the input field data
        let input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the budget controller
        // 3. Add the Item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
        //console.log('It works');
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
})(budgetController, UIController);