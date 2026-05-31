document.getElementById('task-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('task-input');
  const li = document.createElement('li');
  li.textContent = input.value;
  document.getElementById('task-list').appendChild(li);
  input.value = '';
});