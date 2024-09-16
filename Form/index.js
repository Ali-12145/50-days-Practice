const container = document.createElement("div");
container.className = "container";

const bodyEl = document.body;
const heading = document.createElement("h1");
heading.innerText = "Please Login";
container.appendChild(heading);
bodyEl.appendChild(container);

const formEl = document.createElement("form");

const form_control1 = document.createElement("div");

form_control1.className = "form-control";

const email = document.createElement("input");

email.type = "text";

email.required = true;

const emailLabel = document.createElement("label");

emailLabel.innerHTML = `<span style="transition-delay: 0ms">E</span>
                        <span style="transition-delay: 50ms">m</span>
                        <span style="transition-delay: 100ms">a</span>
                        <span style="transition-delay: 150ms">i</span>
                        <span style="transition-delay: 200ms">l</span>`;

                        form_control1.appendChild(email);
                        form_control1.appendChild(emailLabel);

const form_control2 = document.createElement("div");
form_control2.className = "form-control";
const password = document.createElement("input");
password.type = "password"; // Changed to password
password.required = true;
const passLabel = document.createElement("label");
passLabel.innerHTML = `<span style="transition-delay: 0ms">P</span>
<span style="transition-delay: 50ms">A</span>
<span style="transition-delay: 100ms">S</span>
<span style="transition-delay: 150ms">S</span>
<span style="transition-delay: 200ms">W</span>
<span style="transition-delay: 250ms">O</span>
<span style="transition-delay: 300ms">R</span>
<span style="transition-delay: 350ms">D</span>`;
form_control2.appendChild(password); // Changed to password
form_control2.appendChild(passLabel); // Changed to passLabel


formEl.appendChild(form_control1);
formEl.appendChild(form_control2);
container.appendChild(formEl);