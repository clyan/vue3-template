<script lang="jsx">
import {ref} from 'vue';
export default {
    setup() {
        const count = ref(0);
        const onclick = () => {
            count.value++;
        }
        return () => (
            <>
                <div>Comp</div>
                <p onClick= {onclick}> {count.value} </p>
            </>
        )
    }
}
//原始用法
    // export default {
    //     name:'Comp',
    //     data(){
    //         return {
    //             count: 0
    //         }
    //     },
    //     render() {
    //         return (
    //             <div>
    //                 <div>Comp</div>
    //                 <p onClick = { this.onclick }>{ this.count } </p>
    //             </div>
    //         )
    //     },
    //     methods:{
    //         onclick() {
    //             this.count++;
    //         }
    //     }
    // }
</script>

<style>

</style>