export default {
    // code块中的代码, id 判是当前请求的连接
    transform(code, id) {
        if(!/vue&type=i19n/.test(id)) {
            return;
        }
        return `export default Comp => {
            Comp.i19n = ${code}
        }`
    }
}