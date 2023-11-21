const fibonacci = require('../funcoes/fibonacci');

test('os 10 primeiros números da contagem da fibonacci devem ser corretos' , () => {
    expect(fibonacci(10)).toMatchobject([0,1,2,3,5,8,13,21,34]);
});
test('os 2 primeiros números da contagem de fibonacci devem ser 0 ou 1', () => {
    expect(fibonacci(2)).toMatchobject([0,1]);
});