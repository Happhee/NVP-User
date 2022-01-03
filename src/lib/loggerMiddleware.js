const loggerMiddleware = store => next => action => {
    console.log('현재상태', store.getState());
    console.log('엑샨', action);

    const result = next(action);

    console.log('다음 상태', store.getState());
    console.log('\n');

    return result;

}

export default loggerMiddleware;
