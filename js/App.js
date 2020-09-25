window.addEventListener("load", function(){
    /**
     * 할 일 목록 컴포넌트
     */
    Vue.component('todo', {
        props: ['item'],
        template: '<div class="list__item">'
                        +'<div>'
                            +'<div class="fs-2">{{item.content}}</div>'
                            +'<div class="fs-n2 mt-2 text-muted">~{{item.time_limit}}</div>'
                        +'</div>'
                        +'<button class="btn-underline">삭제</button>'
                    +'</div>'
    });

    /**
     * 이벤트 부여
     */

    document.querySelectorAll(".modal__content")
        .addEventListener("click", function(e){
            e.stopPropagation();
        });

    document.querySelectorAll(".modal")
        .addEventListener("click", function(e){
            e.currentTarget.classList.remove("show");
        });
    
        

    /**
     * App
     */
    var app = new Vue({
        el: "#app",
        data: {
            todos: [
                {id: 1, content: "Vue.js 공부하기", time_limit: "2020-09-30"}
            ]
        },
        methods: {
            openModal: function(e){
                var selector = e.currentTarget.dataset.target;
                var target = document.querySelector(selector);
                var inputs = Array.from(target.querySelectorAll("input"));
                
                for(i in inputs){
                    var input = inputs[i];
                    input.value = "";

                    if(input.dataset.type == "date"){
                        input.value = new Date().getYmd();
                        console.log(input, input.value);
                    }
                }

                target.classList.add("show");
            }
        }
    });
});