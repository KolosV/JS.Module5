var arr = [1, 2, 3, 4],
ar = [1, 2, 3, '5'];

function foo(a) {
for (var b = 0; b < a.length; b++)
  if (a[b] !== a[0]) return !1;
return !0
};

console.log([foo(ar)]);
