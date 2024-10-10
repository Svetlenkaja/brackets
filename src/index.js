module.exports = function check(str, bracketsConfig) {
  // your solution
  const stack = []; 
  const open = [];
  const close = [];
  bracketsConfig.map(([left, right]) => {
    open.push(left);
    close.push(right);
  });
    
  brackets = str.split('');
  for (let i = 0; i < brackets.length; i++) {
    if (open.indexOf(brackets[i]) !== -1) {
      if (close.indexOf(brackets[i]) === -1 || stack.length === 0 || brackets[i] !== stack.at(-1)) {
        stack.push(brackets[i]);
        continue;
      }
    }
    const closeIndex = close.indexOf(brackets[i]);
    if (closeIndex !== -1) {
      const last = stack.pop();
      if (closeIndex !== open.indexOf(last)) return false;
    }
  }
  return stack.length === 0;
}
