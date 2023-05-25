export function clear(indexR) {
  document.querySelectorAll('.containerTodo > div').forEach((element, index) => {
    if (index > 1 + indexR) {
      element.remove();
    }
  });
}

export function clearSelected() {
  document.querySelectorAll('.containerTodo > div').forEach((element, index) => {
    if (index > 1) {
      element.remove();
    }
  });
}
