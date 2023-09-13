document.querySelector(".login-form").addEventListener("submit",(function(r){r.preventDefault();var l=r.currentTarget.elements,t=l.email,a=l.password;if(!t.value.trim()||!a.value.trim())return alert("Please fill in all the fields!");var n={email:t.value,password:a.value};console.log(n),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.186d1507.js.map
