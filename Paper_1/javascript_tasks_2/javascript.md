<style>
    ol ul {
        list-style-type: lower-roman;
    }
</style>
# Tasks

1. `<h1>Exam Entry Form</h1>` and all elements after it are displayed in the browser as they are displayed elements. Tables are being used to align the elements (how 1993); additionally, the `<title>Exam entry</title>` tag in the header tells the browser the title of the webpage ('Exam entry')
2. The submit button calls `validateForm()` to determine whether or not the form may be submitted - if it returns `true` then the form gets submitted, else it is disallowed. `validateForm()` performs the following actions:
    - Check that `document.ExamEntry.name` (the 'name' input box) is not empty - and if it is, to recolour the label red and focus the input box for input
    - Check that `document.ExamEntry.subject` (the 'subject' input box) is not empty - and if it is, to recolour the label red and focus the input box for input
    - If either of the two checks failed, alert the user as to what went wrong - and prevent form submission; else, allow the form to be submitted
3. When the 'Submit' button is clicked, its `onclick` attribute is evaluated to determine whether the form may be submitted; a return value of `true` (or any equivalent value due to type coercion) allows the form to be submitted while a value of `false` (oe) prevents it.
4.
    - ```
        // HTML //
        SPAN
            LABEL[ID="elabel" FOR="examNo"]
                Examination number
            END LABEL
            INPUT[NAME="examNo" TYPE="number" ID="examNo"]
        END SPAN
        ```
    - ```
        // SCRIPT //
        CALL registerValidateEmpty WITH (CALL document.getElementById WITH "examNo"), document.ExamEntry.examNo, "your examination number"
        ```
    - ```
        // SCRIPT //
        CALL registerValidateLen WITH (CALL document.getElementById WITH "examNo"), document.ExamEntry.examNo, "your examination number", 4
        ```
5. ```
    // HTML //
    SPAN
        LABEL[ID="llabel"]
            Qualification level
        END LABEL
        BREAK
        LABEL[FOR="gcse"]
            GCSE
        END LABEL
        INPUT[ID="gcse" NAME="level" TYPE="radio" VALUE="GCSE"]
        LABEL[FOR="as"]
            AS
        END LABEL
        INPUT[ID="as" NAME="level" TYPE="radio" VALUE="AS"]
        LABEL[FOR="a2"]
            A2
        END LABEL
        INPUT[ID="a2" NAME="level" TYPE="radio" VALUE="A2"]
    END SPAN
    // SCRIPT //
    CALL registerCustomHook WITH ANONF <- ARRAY msg, ARRAY timeoutFuncs -> BOOL AS
        IF document.ExamEntry.level.value DO
            SET rv TO CALL confirm WITH "Did you select "+document.ExamEntry.level.value+" level?"
            IF rv == FALSE DO
                SET msg[0] TO msg[0] + "Select your qualification level\n";
                SET (CALL document.getElementById WITH "llabel").style.color TO "red"
                timeoutFuncs.append(ANONP AS SET (CALL document.getElementById WITH "llabel").style.color TO "black")
            END IF
        ELSE DO
            SET msg[0] TO msg[0] + "You must select a qualification level\n";
            SET (CALL document.getElementById WITH "llabel").style.color TO "red"
            timeoutFuncs.append(ANONP AS SET (CALL document.getElementById WITH "llabel").style.color TO "black")
            SET rv TO FALSE
        END IF
    RETURN rv
    ```
6. My solutions are fit for purpose and allow for good styling. They allow for easy expansion of the webpage to incorporate more forms and checks; easy 'empty' and 'length' checks or more powerful custom hooks using user javascript
7. JavaScript validation routines are very effective at reducing the number of errors that are made in data input, as they entirely prevent the submission of data without all data being valid

Webpage:
<script>
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
</script>
<style>
    form {
        /* margin: 0 auto; */
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    label {
        text-align: left;
    }
</style>
<h1 style="text-align: center;">Exam Entry Form</h1>
<form name="ExamEntry" method="post" action="success.html">
    <span>
        <label id="nlabel" for="name">Name</label>
        <input id="name" type="text" name="name" /><br>
    </span>
    <span>
        <label id="slabel" for="subject">Subject</label>
        <input id="subject" type="text" name="subject" /><br>
    </span>
    <span>
        <label id="elabel" for="examNo">Examination number</label>
        <input id="examNo" type="number" name="examNo" /><br>
    </span>
    <span>
        <label id="llabel">Qualification level</label><br>
        <label for="gcse">GCSE</label>
        <input id="gcse" name="level" type="radio" value="GCSE" />
        <label for="as">AS</label>
        <input id="as" name="level" type="radio" value="AS" />
        <label for="a2">A2</label>
        <input id="a2" name="level" type="radio" value="A2" /><br>
    </span>
    <span>
        <input type="submit" value="Submit" name="Submit" onclick="return validate();" />
        <input type="reset" value="Reset" name="Reset" />
    </span>
</form>
<script>
    registerValidateEmpty(document.getElementById("nlabel"), document.ExamEntry.name, "your name");
    registerValidateEmpty(document.getElementById("slabel"), document.ExamEntry.subject, "your chosen subject");
    registerValidateEmpty(document.getElementById("elabel"), document.ExamEntry.examNo, "your examination number");
    registerValidateLen(document.getElementById("elabel"), document.ExamEntry.examNo, "your examination number", 4);
    registerCustomHook((msg, timeoutFuncs) => {
        if (document.ExamEntry.level.value) {
            var rv = confirm(`Did you select ${document.ExamEntry.level.value} level?`);
            if (!rv) {
                msg[0] += "Select your qualification level\n";
                document.getElementById("llabel").style.color = "red";
                timeoutFuncs.push(() => {
                    document.getElementById("llabel").style.color = "black";
                });
            }
            return rv;
        }
        document.getElementById("llabel").style.color = "red";
        timeoutFuncs.push(() => {
            document.getElementById("llabel").style.color = "black";
        });
        msg[0] += "You must select a qualification level\n";
        return false;
    });
</script>
