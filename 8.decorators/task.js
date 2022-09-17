function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) { 
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args); 
      cache.push({ hash: hash, value: result }); 
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}

function debounceDecoratorNew(f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}

function debounceDecorator2(func, ms) {
  let isCooldown = false,
   count;
  return function () {
    if (isCooldown) return;
    func.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
    count++;
  };
}