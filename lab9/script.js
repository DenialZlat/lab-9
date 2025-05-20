function greetUser() {
  const name = document.getElementById("name").value;
  document.getElementById("greetingResult").textContent = "Hello, " + name + "!";
}

function sumNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const sum = num1 + num2;
  document.getElementById("sumResult").textContent = "Sum: " + sum;
}

function validateEmailForm() {
  const emailInput = document.getElementById("email");
  const msg = document.getElementById("emailMsg");
  if (!emailInput.value.includes("@")) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "red";
    return false;
  }
  msg.textContent = "Thank you for subscribing!";
  msg.style.color = "#00aaff";
  return false;
}

document.getElementById("fileUpload").addEventListener("change", function () {
  const file = this.files[0];
  const video = document.getElementById("videoPreview");

  if (file && file.type.startsWith("video/")) {
    const videoURL = URL.createObjectURL(file);
    video.src = videoURL;
    video.style.display = "block";
  } else {
    video.style.display = "none";
    alert("Please select a valid video file.");
  }
});

function updateSummary() {
  const name = document.getElementById("name").value;
  const faction = document.querySelector("input[name='faction']:checked")?.value || "None";
  const features = Array.from(document.querySelectorAll("input[type='checkbox']"))
    .filter(cb => cb.checked)
    .map(cb => cb.nextSibling.textContent.trim());
  const difficulty = document.querySelector("select")?.value || "None";
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const sum = (!isNaN(num1) && !isNaN(num2)) ? num1 + num2 : "Not available";
  const file = document.getElementById("fileUpload").files[0];
  const filename = file ? file.name : "No file selected";
  const password = document.getElementById("password").value || "Not entered";
  const comment = document.getElementById("comment").value || "None";
  const color = document.getElementById("color").value || "None";
  const email = document.getElementById("email").value || "Not provided";

  const summary = `
    <p><strong>Name:</strong> ${name || "Not provided"}</p>
    <p><strong>Faction:</strong> ${faction}</p>
    <p><strong>Features:</strong> ${features.length > 0 ? features.join(", ") : "None"}</p>
    <p><strong>Difficulty:</strong> ${difficulty}</p>
    <p><strong>Sum:</strong> ${sum}</p>
    <p><strong>Uploaded Video:</strong> ${filename}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Comment:</strong> ${comment}</p>
    <p><strong>Team Color:</strong> 
        <span style="display: inline-block; width: 20px; height: 20px; background-color: ${color}; border: 1px solid #fff; vertical-align: middle; margin-left: 5px;"></span> 
        (${color})
    </p>
    <p><strong>Email:</strong> ${email}</p>
  `;

  document.getElementById("formSummary").innerHTML = summary;
}


document.getElementById("name").addEventListener("input", updateSummary);
document.querySelectorAll("input[name='faction']").forEach(el =>
  el.addEventListener("change", updateSummary)
);
document.querySelectorAll("input[type='checkbox']").forEach(el =>
  el.addEventListener("change", updateSummary)
);
document.querySelector("select").addEventListener("change", updateSummary);
document.getElementById("num1").addEventListener("input", updateSummary);
document.getElementById("num2").addEventListener("input", updateSummary);
document.getElementById("fileUpload").addEventListener("change", updateSummary);
document.getElementById("password").addEventListener("input", updateSummary);
document.getElementById("comment").addEventListener("input", updateSummary);
document.getElementById("color").addEventListener("input", updateSummary);
document.getElementById("email").addEventListener("input", updateSummary);



updateSummary();
