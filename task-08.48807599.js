document.querySelector(".login-form").addEventListener("submit",(function(t){t.preventDefault();const{email:l,password:r}=t.currentTarget.elements;if(!l.value.trim()||!r.value.trim())return alert("Please fill in all the fields!");{const t={email:l.value,password:r.value};console.log(t),e.currentTarget.reset()}}));
//# sourceMappingURL=task-08.48807599.js.map
