const container = document.querySelector(".container");

function computeBMI() {
    let height_metres = Number(document.getElementById("metres").value);
    let height_inches = Number(document.getElementById("inches").value);
    let heightunits = document.querySelector('input[name="heightunits"]:checked').value;
    let height = heightunits == "inches" ? height_inches : height_metres;

    let weight_kilograms = Number(document.getElementById("kilograms").value);
    let weight_pounds = Number(document.getElementById("pounds").value);
    let weightunits = document.querySelector('input[name="weightunits"]:checked').value;
    let weight = weightunits == "kilograms" ? weight_kilograms : weight_pounds;

    if (heightunits == "inches") height /= 39.3700787;
    if (weightunits == "pounds") weight /= 2.20462;

    let BMI = Math.round(weight / Math.pow(height, 2) * 10000);

    if (heightunits == "inches" && weightunits == "pounds") {
        BMI = BMI/10000;
    }

    document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

    let output = Math.round(BMI * 100) / 100
    if (output < 18.5)
        document.getElementById("category").innerText = "Underweight";
    else if (output >= 18.5 && output <= 25)
        document.getElementById("category").innerText = "Normal";
    else if (output >= 25 && output <= 30)
        document.getElementById("category").innerText = "Obese";
    else if (output > 30)
        document.getElementById("category").innerText = "Overweight";
}

function changeOutputForMetres () {
    let slider = document.getElementById("metres");
    let output = document.getElementById("heightOutput");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
}

function changeOutputForInches () {
    let slider = document.getElementById("inches");
    let output = document.getElementById("heightOutput");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
}

function changeOutputForKilograms () {
    let slider = document.getElementById("kilograms");
    let output = document.getElementById("weightOutput");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
}

function changeOutputForPounds () {
    let slider = document.getElementById("pounds");
    let output = document.getElementById("weightOutput");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
}

function changeHeightToMetres () {
    let element = document.getElementById("labelHeightToMetres");
    element.classList.add("active");
    element.classList.add("focus");

    document.getElementById("optionHeightToMetres").checked = true;
    document.getElementById("optionHeightToInches").checked = false;

    let element2 = document.getElementById("labelHeightToInches");
    element2.classList.remove("active");
    element2.classList.remove("focus");

    let sliderMetres = document.getElementById("metres");
    sliderMetres.style.visibility = "visible";
    sliderMetres.style.display = "block";

    let sliderInches = document.getElementById("inches");
    sliderInches.style.visibility = "hidden";
    sliderInches.style.display = "none";

    let output = document.getElementById("heightOutput");
    output.innerHTML = sliderMetres.value;
}

function changeHeightToInches () {
    let element = document.getElementById("labelHeightToInches");
    element.classList.add("active");
    element.classList.add("focus");

    document.getElementById("optionHeightToInches").checked = true;
    document.getElementById("optionHeightToMetres").checked = false;

    let element2 = document.getElementById("labelHeightToMetres");
    element2.classList.remove("active");
    element2.classList.remove("focus");

    let sliderMetres = document.getElementById("metres");
    sliderMetres.style.visibility = "hidden";
    sliderMetres.style.display = "none";

    let sliderInches = document.getElementById("inches");
    sliderInches.style.visibility = "visible";
    sliderInches.style.display = "block";

    let output = document.getElementById("heightOutput");
    output.innerHTML = sliderInches.value;
}

function changeWeightToKilograms () {
    let element = document.getElementById("labelWeightToKilograms");
    element.classList.add("active");
    element.classList.add("focus");

    document.getElementById("optionWeightToKilograms").checked = true;
    document.getElementById("optionWeightToPounds").checked = false;

    let element2 = document.getElementById("labelWeightToPounds");
    element2.classList.remove("active");
    element2.classList.remove("focus");

    let sliderPounds = document.getElementById("pounds");
    sliderPounds.style.visibility = "hidden";
    sliderPounds.style.display = "none";

    let sliderKilograms = document.getElementById("kilograms");
    sliderKilograms.style.visibility = "visible";
    sliderKilograms.style.display = "block";

    let output = document.getElementById("weightOutput");
    output.innerHTML = sliderKilograms.value;
}

function changeWeightToPounds () {
    let element = document.getElementById("labelWeightToPounds");
    element.classList.add("active");
    element.classList.add("focus");

    document.getElementById("optionWeightToKilograms").checked = false;
    document.getElementById("optionWeightToPounds").checked = true;

    let element2 = document.getElementById("labelWeightToKilograms");
    element2.classList.remove("active");
    element2.classList.remove("focus");

    let sliderPounds = document.getElementById("pounds");
    sliderPounds.style.visibility = "visible";
    sliderPounds.style.display = "block";

    let sliderKilograms = document.getElementById("kilograms");
    sliderKilograms.style.visibility = "hidden";
    sliderKilograms.style.display = "none";

    let output = document.getElementById("weightOutput");
    output.innerHTML = sliderPounds.value;
}

const finalOutput = () => {
  let output = `
        <div class="card" style="padding:20px;background-color:#1C1C1C;color:#FCC91C">
            <h3>Body Mass Index Calculator 📲</h3>
            <div style="text-align:center;padding-bottom:30px;padding-top:30px;width:80%;">
                <div class="card pt-2 pb-2" style="background-color: #FCC91C;">
                    <div class="row pb-2" style="width:100%;color:black;">
                        <div class="col p-0">
                            <h4 class="text-center">Height</h4>
                            <span id="heightOutput" style="font-size: 18px;">179</span>
                        </div>
                        <div class="col p-0">
                            <div class="btn-group btn-group-toggle mt-1" data-toggle="buttons">
                                <label class="btn btn-secondary active p-2" id="labelHeightToMetres">
                                    <input type="radio" name="heightunits" id="optionHeightToMetres" onclick="changeHeightToMetres()" value="metres" checked="checked"> cm
                                </label>
                                <label class="btn btn-secondary p-2" id="labelHeightToInches">
                                    <input type="radio" name="heightunits" id="optionHeightToInches" onclick="changeHeightToInches()" value="inches"> inches
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row p-2" style="width:100%">
                        <div class="slidecontainer">
                            <input type="range" min="147" max="210" class="slider" id="metres" oninput="changeOutputForMetres()" style="visibility:visible;display:block">
                        </div>
                        <div class="slidecontainer">
                            <input type="range" min="60" max="84" class="slider" id="inches" oninput="changeOutputForInches()" style="visibility:hidden;display:none">
                        </div>
                    </div>
                </div>
                <div class="card mt-5 pt-2 pb-2" style="background-color: #FCC91C;">
                    <div class="row pb-2" style="width:100%;color:black;">
                        <div class="col p-0">
                            <h4 class="text-center">Weight</h4>
                            <span id="weightOutput" style="font-size: 18px;">70</span>
                        </div>
                        <div class="col p-0">
                            <div class="btn-group btn-group-toggle mt-1" data-toggle="buttons">
                                <label class="btn btn-secondary active p-2" id="labelWeightToKilograms">
                                    <input type="radio" name="weightunits" id="optionWeightToKilograms" onclick="changeWeightToKilograms()" value="kilograms" checked="checked"> kg
                                </label>
                                <label class="btn btn-secondary p-2" id="labelWeightToPounds">
                                    <input type="radio" name="weightunits" id="optionWeightToPounds" onclick="changeWeightToPounds()" value="pounds"> pounds
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row p-2" style="width:100%">
                        <div class="slidecontainer">
                            <input type="range" min="40" max="100" class="slider" id="kilograms" oninput="changeOutputForKilograms()" style="visibility:visible;display:block">
                        </div>
                        <div class="slidecontainer">
                            <input type="range" min="100" max="215" class="slider" id="pounds" oninput="changeOutputForPounds()" style="visibility:hidden;display:none">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                    <input type="submit" class="btn btn-primary btn-lg active" value="Calculate BMI 😬" onclick="computeBMI();" style="background-color:#4CAF50;">
            </div>
            <span style="padding-top: 30px;">
                <h2>BMI Score: <span id="output" style="color:#4CAF50;">🤷‍♂️</span></h2>
                <h2>BMI Category: <span id="category" style="color:#4CAF50;">🤷‍♂️</span> </h2> 
            </span>
        </div>
    `;
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", finalOutput);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
