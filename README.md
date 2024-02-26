# reactLearn

当使用严格模式时，JavaScript会改变其行为的几个方面，包括但不限于：

1. 变量必须声明后才能使用。
2. 禁止使用with语句。
3. 对只读属性赋值，删除不可删除的属性，或者添加同名的属性到对象时，会抛出错误。
4. 禁止使用前导和尾随的逗号定义对象字面量。
5. 函数的参数名必须唯一。
6. 禁止八进制字面量。
7. 不允许全局变量的隐式定义（在全局作用域下）。
8. 'this'关键字在全局作用域中的值不会是全局对象，而是undefined。
9. 禁止删除变量（在非严格模式下，删除变量不会有任何效果，但也不会报错）。
10. eval和arguments被视为关键字，因此不能作为变量或函数名。

严格模式对于新的代码是非常有用的，因为它可以帮助开发者避免潜在的问题并写出更好的JavaScript代码。然而，对于旧代码，启用严格模式可能会导致现有的一些问题变得显而易见，因此在将严格模式应用于旧代码时需要小心。