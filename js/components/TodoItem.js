/**
 * 할 일 목록 컴포넌트
 */
export default {
  props: ['item', 'removeItem'],
  template: `
      <div class="list__item">
          <div>
              <div class="fs-2">{{ item.content }}</div>
              <div class="fs-n2 mt-2 text-muted">~{{ item.time_limit }}</div>
          </div>
          <button class="btn-underline" @click="removeItem(item.id)" type="button">
            삭제
          </button>
      </div>
    `,
};