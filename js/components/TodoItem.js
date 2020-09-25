/**
 * 할 일 목록 컴포넌트
 */
export default {

  name: 'TodoItem',

  props: ['item'],

  template: `
      <div class="list__item">
          <div @click="$emit('select', item)">
              <div class="fs-2">{{ item.content }}</div>
              <div class="fs-n2 mt-2 text-muted">~{{ item.time_limit }}</div>
          </div>
          <button class="btn-underline" @click="$emit('remove', item)" type="button">
            삭제
          </button>
      </div>
    `,

};