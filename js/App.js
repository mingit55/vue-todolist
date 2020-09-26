window.addEventListener("load", function(){
    /**
     * 할 일 목록 컴포넌트
     */
    Vue.component('todo', {
        props: ['item'],
        template: '<div class="list__item" v-on:click="select">'
                        +'<div>'
                            +'<div class="fs-2">{{item.content}}</div>'
                            +'<div class="fs-n2 mt-2 text-muted">마감 일자&nbsp;&nbsp;&nbsp;{{item.limit}}</div>'
                        +'</div>'
                        +'<button class="btn-underline" v-on:click.stop="remove">삭제</button>'
                    +'</div>',
        methods: {
            select: function(e){
                this.$emit('select', this.item);
            },
            remove: function(e){
                this.$emit('remove', this.item.id);
            }
        }
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
            currentView: null,
            todos: [
                {id: 1, content: "Vue.js 공부하기", limit: "2020-09-30"}
            ]
        },
        methods: {
            // 모달 열기
            openModal: function(e){
                var selector = e.currentTarget.dataset.target;
                var target = document.querySelector(selector);

                var content = document.querySelector("#todo__content");
                var limit = document.querySelector("#todo__limit");
                
                content.value = "";
                limit.value = new Date().getYmd();

                target.classList.add("show");
            },

            // 모달 닫기
            closeModal: function(e){
                var modals = document.querySelectorAll(".modal");
                for(var i = 0; i < modals.length; i++){
                    modals.classList.remove("show");
                }
            },

            // 할 일 상세보기
            selectTodo: function(data){
                this.currentView = data;
            },

            // 할 일 추가하기
            insertTodo: function(e){
                var content = document.querySelector("#todo__content");
                var limit = document.querySelector("#todo__limit");

                this.todos.push({content: content.value, limit: limit.value});

                content.value = "";
                limit.value = "";
                e.currentTarget.classList.remove("show");
            },

            // 할 일 삭제하기
            removeTodo: function(id){
                for(var i = 0; i < this.todos.length; i++){
                    var todo = this.todos[i];
                    
                    if(todo.id == id){
                        this.todos.splice(i, 1);
                        break;
                    }
                }
            }
        }
    });
});