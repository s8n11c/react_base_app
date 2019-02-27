function foo(a) {
    // 1. Define all variables used inside the function
    var b, sum, _a, c;
    // return Iterator
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:     // label: line number 0
                    _context.next = 2;  // go to line 2
                    return a + 1;

                case 2:     // label: line number 2
                    b = _context.sent;  // argument passed with it.next()
                    sum = b;
                    // try a scoped variable

                    _context.next = 6;  // go to line 6
                    return _a;

                case 6:     // label: line number 6
                    _context.t0 = _context.sent;    // argument passed with it.next()
                    _a = 1 + _context.t0;
                    // returns undefined
                    sum += _a;
                    _context.next = 11; // go to line 11
                    return;

                case 11:    // label: line number 11
                    c = _context.sent;  // argument passed with it.next()

                    sum += a + c;
                    return _context.abrupt('return', sum);  // actual return sum, instead of yield

                case 14:    // label: line number 14
                case 'end':
                    return _context.stop();
            }
        }
    });
}

var it = foo(1); // creates a new iterator

// runs until first yield and waits for input. Argument to next() is discarded
it.next(); // {value: 2 (a+1), done: false}
it.next(2); // {value: undefined, done: false}
it.next(3); // {value: undefined, done: false}
it.next(4); // {value: 11 (1+2+(3+1)+4, done: true}
