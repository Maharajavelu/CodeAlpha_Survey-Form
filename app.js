const formEl = document.forms.validate;

console.log(formEl);


const handleSubmit = (event) =>{
    event.preventDefault();

    const formdata = new FormData(formEl);
    console.log([...formdata.values()]);
}


formEl.addEventListener("submit", handleSubmit)
// formEl.addEventListener("formdata", handleFormData)

