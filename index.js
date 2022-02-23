function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function named() {
        return 0;
    };
}

function returnsAnAnonymousFunction() {
    return (() => 0);
}