const app = new Vue ({
    el: '#app',
    data: {
        readonly: true,
        result: '',
        numbers: [1,2,3,4,5,6,7,8,9,0],
        operations: ['+', '-', '/', '*']
    },
    methods : {
        input : function (value) {
            this.result += value;
        },
        reset : function () {
            this.result = '';
        },
        calc : function () {
            this.result = eval(this.result);
        },
    }
})