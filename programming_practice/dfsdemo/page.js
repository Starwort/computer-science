var stack_end = 99;
function rename(elem_id, new_text) {
    document.getElementById(elem_id).children[0].children[0].innerText = new_text;
}
function change_text(frame_no, new_text) {
    document.getElementById(`stack_elem_${frame_no}`).children[0].children[0].innerText = new_text;
}
function push_stack(item_name) {
    let element_name = `stack_elem_${stack_end--}`;
    rename(element_name, item_name);
    show(element_name);
}
function pop_stack() {
    if (stack_end >= 99) {
        return;
    }
    hide(`stack_elem_${++stack_end}`);
}
function hide(card) {
    let card_elem = document.getElementById(card);
    card_elem.classList.add('hiding');
    window.setTimeout(() => {
        card_elem.classList.add('hidden');
        card_elem.classList.remove('hiding');
    }, 1000);
}
function show(card) {
    let card_elem = document.getElementById(card);
    card_elem.classList.add('hiding');
    card_elem.classList.remove('hidden');
    window.setTimeout(() => {
        card_elem.classList.remove('hiding');
    }, 1000);
}
function toggle_state(card) {
    let card_elem = document.getElementById(card);
    let hidden = card_elem.classList.contains('hidden');
    if (hidden) {
        show(card);
    } else {
        hide(card);
    }
}
function modify_stack(new_text) {
    change_text(stack_end + 1, new_text);
}
function add_element() {
    let text = document.getElementById('layer__input').value;
    push_stack(text);
}
function rename_element() {
    let text = document.getElementById('layer__input').value;
    modify_stack(text);
}