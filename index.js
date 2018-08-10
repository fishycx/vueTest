var app = new Vue({
	el:"#app",
	data:{
		message:'Hello Vue!'
	}
});

var app2 = new Vue({
	el:"#app-2",
	data:{
    message: '页面加载于 ' + new Date().toLocaleString()
	}
});

var app3 = new Vue({
	el:"#app-3",
	data:{
		todos:[
		{text:'Learn JavaScript'},
		{text: 'Learn vue'},
		{text: 'Build something awesome'}
		]
	}
});

var app4 = new Vue({
	el:"#app-4",
	data:{
		seen:true
	}
});

var app5 = new Vue({
	el:"#app-5",
	data:{
		message:'Hello vue.js!'
	},
	methods:{
		reverseMessage:function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
});

Vue.component('todo-item', {
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})

var app6 = new Vue({
	el:"#app-6",
	data:{
		groceryList:[
		 {id:0, text:'蔬菜'},
		 {id:1, text:'奶咯'},
		 {id:2, text:'随便其他什么人吃的东西'}
		]
	}
});

// <script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>

var watchExampleVM = new Vue({
	el:'#watch-example',
	data:{
		question:'',
		answer:'I cannot give you an answer until you ask a question!'
	},
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
});

app3.todos.push({text:'new item'})
app4.seen = false