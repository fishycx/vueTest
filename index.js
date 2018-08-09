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

app3.todos.push({text:'new item'})
app4.seen = false