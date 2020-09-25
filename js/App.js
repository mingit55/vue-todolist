import TodoItem from "./components/TodoItem.js";

export const App = {

    components: { TodoItem },

    data () {
        return {
            todos: [
                {id: 1, content: "Vue.js 공부하기", time_limit: "2020-09-30"}
            ]
        }
    },

    template: `
        <div id="app">
        
            <div class="list">
    
                <div class="title">목록</div>
    
                <div class="list__content">
    
                    <todo-item v-for="todo in todos"
                              :item="todo"
                              :key="todo.id" />
    
                    <div class="list__item list__item--insert">
                        <p>새로운 할 일을 추가할까요?</p>
                        <button class="btn-underline" :click="openModal" data-target="#insert-form">추가</button>
                    </div>
    
                </div>
    
            </div>
            
            <div class="view">
    
                <div class="title">내용</div>
    
                <div class="view__content"></div>
                
            </div>
            
        </div>
    `,

    methods: {
        openModal (e) {

        }
    },

}