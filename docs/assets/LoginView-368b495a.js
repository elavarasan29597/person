import{_ as p,o as c,c as g,a as e,w as l,v as m,n as d,t as h,b as _,p as w,d as f}from"./index-72f95c69.js";const b=[{id:1,name:"Mark",email:"mark@mail.com",username:"mark",phone:"123456789",user_role:"admin",gender:"male",dob:"29/10/1986",password:"123456789"},{id:2,name:"Kiran",email:"kiran@mail.com",username:"kiran",phone:"123456789",user_role:"user",gender:"male",dob:"29/11/1989",password:"123456789"},{id:3,name:"Mani",email:"mani@mail.com",username:"mani",phone:"123456789",user_role:"super_admin",gender:"male",dob:"29/04/1976",password:"123456789"},{id:4,name:"Racky Bhai",email:"racky@mail.com",username:"racky",phone:"123421689",user_role:"admin",gender:"male",dob:"19/07/1996",password:"123456789"},{id:5,name:"Priya",email:"priya@mail.com",username:"priya",phone:"923421689",user_role:1,gender:"female",dob:"19/07/1996",password:"123456789"},{id:6,name:"Alena",email:"alena@mail.com",username:"alena",phone:"9433423689",user_role:"super_admin",gender:"female",dob:"11/05/1976",password:"123456789"},{id:7,name:"Bhuvana",email:"buvana@mail.com",username:"bhuvana",phone:"921021689",user_role:"user",gender:"female",dob:"19/07/1996",password:"123456789"},{id:8,name:"karanam",email:"karanam@mail.com",username:"karanam",phone:"923421213",user_role:"user",gender:"female",dob:"29/11/2000",password:"123456789"},{id:9,name:"Dhinesh",email:"dhinesh@mail.com",username:"dhines@mail.com",phone:"9000021689",user_role:"user",gender:"male",dob:"19/07/1996",password:"123456789"},{id:10,name:"Mounica",email:"mounica@mail.com",username:"mounica",phone:"921022121",user_role:"admin",gender:"female",dob:"19/07/1996",password:"123456789"},{id:11,name:"john",email:"john@mail.com",username:"john",phone:"921022121",user_role:"user",gender:"male",dob:"21/01/1990",password:"123456789"}];const v={data(){return{loginUser:{username:"",password:""},errorMessage:""}},computed:{requiredUsername:function(){return this.loginUser.username===""},requiredPassword:function(){return this.loginUser.password===""}},created(){},methods:{login(){if(this.requiredPassword&&this.requiredUsername)return this.errorMessage="Please enter username and password",!1;if(this.requiredUsername)return this.errorMessage="Please enter username",!1;if(this.requiredPassword)return this.errorMessage="Please enter password",!1;const{username:r,password:s}=this.loginUser,o=b.find(i=>i.username===r&&i.password===s);if(!o)return this.errorMessage="User is not exists in this Application",!1;localStorage.setItem("loginUser",JSON.stringify(o)),this.$router.push({name:"Dashboard"})}},updated(){},mounted(){console.log(this.$route.path)}},u=r=>(w("data-v-5fe8bc0f"),r=r(),f(),r),U={class:"container login-container"},k=u(()=>e("div",{class:"top-content"},[e("img",{src:"https://www.intellectdesign.com/wp-content/uploads/2022/07/Intellect-logo-new-02.svg",alt:""}),e("h2",{class:"mb-4"},"Login your Intellect Design")],-1)),y={class:"inputs"},x={class:"inputs"},M={class:"text-left text-danger"},P=u(()=>e("div",{class:"btn-group mt-4 text-right"},[e("button",{class:"next-btn float-right"},"Login")],-1));function I(r,s,o,i,a,t){return c(),g("div",U,[k,e("form",{onSubmit:s[2]||(s[2]=_((...n)=>t.login&&t.login(...n),["prevent"]))},[e("div",y,[l(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>a.loginUser.username=n),name:"username",id:"username",class:"input",tabindex:"-1"},null,512),[[m,a.loginUser.username]]),e("label",{for:"username",class:d([a.loginUser.username!=""?"active-input":"","input-label"])},"Username",2)]),e("div",x,[l(e("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=n=>a.loginUser.password=n),name:"",id:"password",class:"input"},null,512),[[m,a.loginUser.password]]),e("label",{for:"password",class:d([a.loginUser.password!=""?"active-input":"","input-label"])},"Password",2)]),e("div",M,h(a.errorMessage),1),P],32)])}const q=p(v,[["render",I],["__scopeId","data-v-5fe8bc0f"]]);export{q as default};
