export default function() {
    return {
        handleHotUpdate({ server }) {
            server.ws.send({
              type: 'custom',
              event: 'special-update',
              data: {}
            })
            return []
          }
    }
}