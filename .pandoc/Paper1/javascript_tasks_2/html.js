var validateEmptyElems = [];
var validateLenElems = [];
var customHooks = [];

function registerValidateEmpty(nameElem, formElem, elemName) {
    validateEmptyElems.push({ 'nameElem': nameElem, 'formElem': formElem, 'elemName': elemName });
}

function registerValidateLen(nameElem, formElem, elemName, len) {
    validateLenElems.push({ 'nameElem': nameElem, 'formElem': formElem, 'elemName': elemName, 'len': len });
}

function registerCustomHook(hook) {
    customHooks.push(hook);
}

function validate() {
    // alert();
    var result = true;
    var msg = '';
    // console.log(validateEmptyElems);
    // alert(validateEmptyElems);
    var timeoutFuncs = [];
    validateEmptyElems.forEach(obj => {
        if (!obj.formElem.value) {
            msg += `You must enter ${obj.elemName}\n`;
            obj.nameElem.style.color = "red";
            timeoutFuncs.push(() => {
                obj.nameElem.style.color = "black";
            });
            obj.formElem.focus();
            result = false;
        }
    });
    validateLenElems.forEach(obj => {
        if (obj.formElem.value.length != obj.len) {
            msg += `You must enter a value of length ${obj.len} for ${obj.elemName}; you entered a value of length ${obj.formElem.value.length}\n`;
            obj.nameElem.style.color = "red";
            timeoutFuncs.push(() => {
                obj.nameElem.style.color = "black";
            });
            obj.formElem.focus();
            result = false;
        }
    });
    customHooks.forEach(fn => {
        var tmp = [msg];
        result = fn(tmp, timeoutFuncs) && result;
        msg = tmp[0];
    });
    if (!!msg) {
        alert(msg);
    }
    timeoutFuncs.forEach((func) => {
        setTimeout(func, 5000);
    })
    return result;
}