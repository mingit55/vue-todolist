export default {
  name: 'ModalPopup',

  template: `
    <form id="insert-form" class="modal">
        <div class="modal__content">
            <div class="modal-header">
                <div class="title">추가하기</div>
            </div>
            <div class="modal-group">
                <label for="todo__content" class="modal-label">내용</label>
                <textarea name="content" id="todo__content" cols="30" rows="3" class="modal-input"></textarea>
            </div>
            <div class="modal-group">
                <label for="limit_time" class="modal-label">완료 기간</label>
                <input type="date" id="limit_time" name="limit_time" class="modal-input" data-type="date">
            </div>
            <div class="modal-footer">
                <button class="btn-bordered">추가 완료</button>
            </div>
        </div>
    </form>
  `
}