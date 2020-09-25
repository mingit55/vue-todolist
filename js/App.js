import TodoItem from "./components/TodoItem.js";
import ModalPopup from "./components/ModalPopup.js";

export default {

    name: 'App',

    components: { TodoItem, ModalPopup },

    data () {
        return {
            todos: [
                {id: 1, content: "Vue.js 공부하기", time_limit: "2020-09-30"}
            ],
            isOpened: false,
            selectedContent: '',
        }
    },

    template: `
        <div id="app">
        
            <div class="list">
    
                <div class="title">목록</div>
    
                <div class="list__content">
    
                    <todo-item v-for="todo in todos"
                              :item="todo"
                              :key="todo.id"
                              @select="selectItem"
                              @remove="removeItem" />
    
                    <div class="list__item list__item--insert">
                        <p>새로운 할 일을 추가할까요?</p>
                        <button class="btn-underline" @click="openModal" data-target="#insert-form">추가</button>
                    </div>
    
                </div>
    
            </div>
            
            <div class="view">
    
                <div class="title">내용</div>
    
                <div class="view__content" v-html="selectedContent"></div>
                
            </div>
            
            <modal-popup v-if="isOpened" :close="closeModal" :add-item="addItem" />
            
        </div>
    `,

    methods: {
        openModal () {
            this.isOpened = true;
        },

        closeModal () {
            this.isOpened = false;
        },

        addItem ({ target }) {
            const formData = [ ...new FormData(target) ].reduce((data, [key, value]) => {
                data[key] = value;
                return data;
            }, {});
            if (!formData.content.length) {
                alert('내용을 입력해주세요');
                return target.content.focus();
            }
            if (!formData.limit_time.length) {
                alert('날짜를 입력해주세요');
                return target.limit_time.focus();
            }
            this.todos.push({
                id: this.todos.length + 1,
                ...formData
            });
            alert('추가되었습니다.');
            this.closeModal();
        },

        selectItem (todo) {
            this.selectedContent = todo.content;
        },

        removeItem (todo) {
            const itemIndex = this.todos.indexOf(todo);
            this.todos.splice(itemIndex, 1);
        }

    },

}