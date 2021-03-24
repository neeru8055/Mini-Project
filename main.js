const nm = document.getElementById("name");
const contact = document.getElementById("contact");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const container = document.getElementById("detail-container");

submit.addEventListener("click", () => {
    const flag1 = checkName(nm.value);
    const flag2 = checkContact(contact.value);
    const flag3 = checkEmail(email.value);
    if (flag1 && flag2 && flag3) {
        if (container.innerText == "") {
            const a = document.createElement("table");
            const c = document.createElement("tr");
            const d = document.createElement("th");
            d.innerText = "Name";
            const e = document.createElement("th");
            e.innerText = "Mob. No.";
            const f = document.createElement("th");
            f.innerText = "Email ID";
            const g = document.createElement("th");
            c.appendChild(d);
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            a.appendChild(c);
            container.appendChild(a);
        }

        const a = container.querySelector("table");
        const h = document.createElement("tr");
        const i = document.createElement("td");
        i.innerText = nm.value;
        const j = document.createElement("td");
        j.innerText = contact.value;
        const k = document.createElement("td");
        k.innerText = email.value;
        const l = document.createElement("td");
        const m = document.createElement("button");
        m.innerText = "delete";
        m.id = "delete"
        l.appendChild(m);
        h.appendChild(i);
        h.appendChild(j);
        h.appendChild(k);
        h.appendChild(l);
        a.appendChild(h);
        container.appendChild(a);
        m.addEventListener("click", () => {
            m.parentElement.parentElement.remove();
        });

    } else if (!flag1) 
       alert("wrong name");
    else if (!flag2) 
       alert("wrong contact");
    else 
        alert("wrong email");
    }
);

function checkName(val) {
    const regex = /^[a-zA-Z]{3,50}/
    if (val.match(regex)) 
        return true;
    else 
        return false;
    }

function checkContact(val) {
    const regex = /^[0-9]{10}/
    if (val.length==10) 
        return true;
    else 
        return false;
    }

function checkEmail(val) {
    const regex = /^[\w]+(@gmail.com$|@hotmail.com$)/
    if (val.match(regex)) 
        return true;
    else 
        return false;
    }