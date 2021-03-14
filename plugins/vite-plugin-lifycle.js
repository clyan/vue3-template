export default function Lifycle () {
    // 返回的是插件对象
    return {
      name: 'hooks-order', 
      // 初始化hooks，只走一次
      options(opts) {
        console.log('options', opts);
      },
      buildStart() {
        console.log('buildStart');
      },
      // vite特有钩子
      config(config) {
        console.log('config', config);
        return {}
      },
      configResolved(resolvedCofnig) {
        console.log('configResolved');
      },
      configureServer(server) {
        console.log('configureServer');
        // server.app.use((req, res, next) => {
        //   // custom handle request...
        // })
      },
      transformIndexHtml(html) {
        console.log('transformIndexHtml');
        return html
        // return html.replace(
        //   /<title>(.*?)<\/title>/,
        //   `<title>Title replaced!</title>`
        // )
      },
      // 通用钩子
      resolveId ( source ) {
        if (source === 'virtual-module') {
          console.log('resolvedId', source);
          return source; 
        }
        return null; 
      },
      load ( id ) {
        if (id === 'virtual-module') {
          console.log('load');
          return 'export default "This is virtual!"';
        }
        return null;
      },
      transform(code, id) {
        if (id === 'virtual-module') {
          console.log('transform');
        }
        return code
      },
    };
  }