
    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////

                         ///// WRITTEN BY www.webdevtaesly.com ////////////

    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////

    function checkRadio() {

        var georgeLopez = document.getElementById("georgeLopez");
        var friends = document.getElementById("friends");
        var theOffice = document.getElementById("theOffice");

        var btnOutput = document.getElementById("btnOutput");
        


        var checkedShow;

        if(georgeLopez.checked) {
            checkedShow = 1;
            

        } else if(friends.checked) {
            checkedShow = 2;
           
        } else  if(theOffice.checked) {
            checkedShow = 3;

        } else {

            btnOutput = btnOutput.innerHTML = "Please select a show above";
        }


    

       
        

    switch (checkedShow){

        case 1:
            btnOutput = btnOutput.innerHTML = " George Lopez";
            var qOutput = document.getElementById("qOutput");
            qOutput.innerHTML = "";
            
            
            var generateButton = document.getElementById("clickGen").onclick =  function generateQ() {

                let quote = ['“I never realized I could love people as much as I do now.”',
                             '“Two wrongs do not make a right; but three rights make a left.”',
                             '“Memories, priceless. Well not really priceless, but there you go!”',
                             '“When things are bad, it\'s the best time to reinvent yourself.”',
                             '"If you make waffles, throw out the first one."',
                             '"As long as you\'re a tax deduction, you\'ll always be safe in my house."',



                ];
                var randomQ = quote[Math.floor(Math.random() * quote.length)]
                qOutput.innerHTML = randomQ;

            };
            
            break;

        case 2:
            btnOutput = btnOutput.innerHTML= " Friends";
            var qOutput = document.getElementById("qOutput");
            qOutput.innerHTML = "";
           

            var generateButton = document.getElementById("clickGen").onclick =  function generateQ() {

                let quote = ['“Well, maybe I don’t need your money. Wait, wait, I said maybe!” - Rachel',
                             '"If he doesn’t like you this is all a moo point. Yeah, it’s like a cow’s opinion. It just doesn’t matter. It’s moo." - Joey',
                             '“They don’t know that we know they know we know.” - Pheobe',
                             '“You can’t just give up. Is that what a dinosaur would do?"-Joey',
                             '“Come on, Ross, you’re a paleontologist. Dig a little deeper.” - Pheobe',
                             '"I’m not so good with the advice… Can I interest you in a sarcastic comment?" - Chandler'



                ];
                var randomQ = quote[Math.floor(Math.random() * quote.length)]
                qOutput.innerHTML = randomQ;

            };
            break;

        case 3:
            btnOutput = btnOutput.innerHTML = " The Office";
            var qOutput = document.getElementById("qOutput");
            qOutput.innerHTML = "";
            

            var generateButton = document.getElementById("clickGen").onclick =  function generateQ() {

                let quote = ['“I talk a lot, so I’ve learned to tune myself out.” – Kelly',
                             '“I’m not superstitious, but I am a little stitious.” – Michael',
                             '“The worst thing about prison was the dementors.” – Michael',
                             '“Today, smoking is going to save lives.” – Dwight',
                             '"Fact. Bears eat beets. Bears. Beets. Battlestar Galactica." - Jim',
                             '“I am running away from my responsibilities. And it feels good.” – Michael',



                ];
                var randomQ = quote[Math.floor(Math.random() * quote.length)]
                qOutput.innerHTML = randomQ;

            };
            break;

        default:
            btnOutput = btnOutput.innerHTML = "Please select a show above";
    }

  

    
        
   
    
};