// document.addEventListener('DOMContentLoaded', function(){

//       const questionIcon = document.querySelectorAll('.question-icon'); 

//       questionIcon.forEach(function(icon){

//             icon.addEventListener('click',function(){

//                   const question = icon.closest('.question');

//                   const answer = question.querySelector('.answer');

//                   answer.classList.toggle('collapsed');

//                   question.classList.toggle('active');

                  
                  // console.log("question")
                  // const question = icon.closest('.question');

                  // const answer = question.querySelector('.answer');

                  // if(answer.classList.contains('collapsed')){
                  //       answer.classList.remove('collapsed');
                  // }
                  // else{
                  //       answer.classList.add('collapsed');
                  // }



//             })
//       })
// });


function openCard(event){

      const question = event.target.closest('.question');
      const downIcon = question.querySelector ('.down-icon')
      const upIcon = question.querySelector ('.up-icon')
      
      // console.log(event.target.querySelector('.up-icon'))
      if(question.classList.contains("active")){
            question.classList.remove("active")
            question.classList.add("inactive")
            downIcon.classList.remove("inactive")
            downIcon.classList.add("active")
            upIcon.classList.remove("active")
            upIcon.classList.add("inactive")

      }else {
            question.classList.remove("inactive")
            question.classList.add("active")
            downIcon.classList.remove("active")
            downIcon.classList.add("inactive")
            upIcon.classList.remove("inactive")
            upIcon.classList.add("active")

      }

 

      /**
       * Q. Show active or inactive icon with respect to state of question(active or inactive)
       * 
       * R: 
       * 1.verify if question is active
       * 2.Down icon should be inactive
       * 3.Up icon should be active
       * 4.if question is inactive
       * 5.Down icon should be active
       * 6.Up icon should be inactive
       */
}
